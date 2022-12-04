import React from 'react';

const User = ({user,handleDetailUser}) => {

    const {id, profile} = user

    return (
        <div onClick={() => handleDetailUser(id)} className='border w-75 mx-auto bg-light m-3 d-flex'>
            <img style={{width: 50}} className="rounded-pill p-1" src={'https://cdn.vectorstock.com/i/preview-1x/17/61/male-avatar-profile-picture-vector-10211761.jpg'} alt="" />
            <p className='fw-bold mb-0 p-2'>{profile.firstName} {profile.lastName}</p>
        </div>
    );
};

export default User;