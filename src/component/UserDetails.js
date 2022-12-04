import React from 'react';

const UserDetails = ({ details }) => {

    const { Bio, jobTitle, profile } = details

    return (
        <div>
            <div className=' w-50 mx-auto'>

                <img style={{ marginLeft: 75 }} className='w-50 mt-4 mb-4' src="https://cdn.vectorstock.com/i/preview-1x/17/61/male-avatar-profile-picture-vector-10211761.jpg" alt="" />

                <p className='text-center fs-5 mb-4'>{profile?.username}</p>

                <div style={{ backgroundColor: '#DBDBDB', height: 80 }} className='border border-1 border-dark rounded fw-semibold mb-4'>
                    <p className='ps-1'>{Bio}</p>
                </div>

                <div className='mb-2'>
                    <span style={{ fontSize: 13 }} className=''>Full Name</span>
                    <div style={{ backgroundColor: '#DBDBDB' }} className='border border-1 border-dark rounded fw-semibold'>
                        <p className='mb-0 p-1'>{profile?.firstName} {profile?.lastName}</p>
                    </div>
                </div>

                <div className='mb-2'>
                    <span style={{ fontSize: 13 }} className=''>Job Title</span>
                    <div style={{ backgroundColor: '#DBDBDB' }} className='border border-1 border-dark rounded fw-semibold'>
                        <p className='mb-0 p-1'>{jobTitle}</p>
                    </div>
                </div>

                <div className='mb-2'>
                    <span style={{ fontSize: 13 }} className=''>Email</span>
                    <div style={{ backgroundColor: '#DBDBDB' }} className='border border-1 border-dark rounded fw-semibold'>
                        <p className='mb-0 p-1'>{profile?.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;