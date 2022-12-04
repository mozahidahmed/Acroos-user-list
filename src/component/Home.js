import axios from 'axios';
import { useEffect, useState } from 'react';
import User from './User';
import UserDetails from './UserDetails';

const Home = () => {

    const [selected, setSelected] = useState(false)
    const [details, setDetails] = useState({});
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
            .then(res => setUsers(res.data))
    }, [])

    const handleDetailUser = id => {
        setSelected(true)

        axios.get(`https://602e7c2c4410730017c50b9d.mockapi.io/users/${id}`)
            .then(res => setDetails(res.data))
    }



    return (
        <div className='row m-0'>
            <div className='col-lg-6'>
                <div className='border w-75 mx-auto bg-info rounded-top p-2'>
                    <h4 className='text-white fw-bold text-center'>Users List</h4>
                </div>
                <div>
                    {
                        users.length === 0 ?
                            <div className="d-flex justify-content-center mt-5">
                                <div className="spinner-border text-info" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                            : users ?
                                users.map(user => <User
                                    key={user.id}
                                    user={user}
                                    handleDetailUser={handleDetailUser}
                                />) : <h5>No data to show </h5>
                    }
                </div>
            </div>
            <div className='col-lg-6'>
                <div className='border w-75 mx-auto bg-info rounded-top p-2'>
                    <h4 className='text-white fw-bold text-center'>Users Details</h4>
                </div>
                <div>
                    {
                        selected ? <UserDetails details={details} /> : <p className='text-primary text-center fs-4 fw-semibold p-4'>Select any user</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;