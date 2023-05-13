import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';

const Register = () => {
    const [formDetails, setFormDetails] = useState({ email: '', password: '', text: '' });


    const handleChange = (e) => {
        const { type, value } = e.target;
        setFormDetails((prev) => ({
            ...prev,
            [type]: value
        }));
        // console.log(formDetails);
    }


    const login = (event) => {
        event.preventDefault();
        // create API call to execute login
        console.log(formDetails)
    }


    return (
        <div className='px-10 py-7 border-gray-300 border-2 rounded-md'>
            <div className='flex items-center justify-center'>
                <img height="auto" width="40" src={Logo} />
                <h3 className='ml-3 font-bold text-xl text-center'>Expense Tracker</h3>
            </div>
            <form onSubmit={login}>
                <InputField label="Full Name"
                    placeholder="Enter full name"
                    type="text"
                    value={formDetails.text}
                    onChange={handleChange}
                />
                <InputField label="Email"
                    placeholder="Enter email address"
                    type="email"
                    value={formDetails.email}
                    onChange={handleChange}
                />
                <InputField label="Password"
                    placeholder="Enter your password"
                    value={formDetails.password}
                    type="password"
                    onChange={handleChange}
                />
                <Button text="SignUp" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-yellow-600'>SignIn here</Link></p>
        </div>
    )
}

export default Register