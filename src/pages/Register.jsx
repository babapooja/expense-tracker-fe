import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import UseAnimations from 'react-useanimations';
import infinity from 'react-useanimations/lib/infinity';
import { httpPost } from '../services/httpservices';

const Register = () => {
    const navigate = useNavigate();
    const [formDetails, setFormDetails] = useState({ email: '', password: '', text: '' });
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setErrorMessage(null);
        const { type, value } = e.target;
        setFormDetails((prev) => ({
            ...prev,
            [type]: value
        }));
    }


    const login = (event) => {
        setLoading(true);
        setErrorMessage(null);
        event.preventDefault();
        // api call to register then redirect to login page
        httpPost('/sign-up', JSON.stringify(formDetails)).then((data) => {
            setLoading(false);
            console.log(data);
            navigate("/login");
        })
            .catch(err => {
                setLoading(false);
                setErrorMessage("Something went wrong");
                console.log(err);
            });
    }


    return (
        <div className={`px-10 py-7 border-gray-300 border-2 rounded-md`}>
            <div className='flex items-center justify-center'>
                <img height="auto" width="40" src={Logo} />
                <h3 className='ml-3 font-bold text-xl text-center'>Expense Tracker</h3>
            </div>
            {errorMessage && <p className='text-red-600 text-center mt-4 font-bold'>{errorMessage}</p>}
            <form onSubmit={login}>
                <InputField label="Full Name"
                    placeholder="Enter full name"
                    type="text"
                    name="fullName"
                    value={formDetails.text}
                    onChange={handleChange}
                />
                <InputField label="Email"
                    placeholder="Enter email address"
                    type="email"
                    name="email"
                    value={formDetails.email}
                    onChange={handleChange}
                />
                <InputField label="Password"
                    placeholder="Enter your password"
                    value={formDetails.password}
                    type="password"
                    name="password"
                    onChange={handleChange}
                />
                <Button text="SignIn" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-yellow-600'>SignIn here</Link></p>
            {loading && <div className='h-full absolute top-0 w-full left-0 flex flex-col justify-center items-center'>
                <UseAnimations strokeColor='rgb(202 138 4 / 600)' fillColor='rgb(202 138 4 / 600)' animation={infinity} size={75} />
                <p className='black text-xl'>Loading...</p>
            </div>}
        </div>
    )
}

export default Register