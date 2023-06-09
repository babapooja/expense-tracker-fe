import React, { useEffect, useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import UseAnimations from 'react-useanimations';
import infinity from 'react-useanimations/lib/infinity';
import { httpPost } from '../services/httpservices';
import { LSGet, LSSet } from '../services/localStorage';

const Login = () => {
    const navigate = useNavigate();
    const [formDetails, setFormDetails] = useState({ email: 'sdf@g.c', password: '' });
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        if (LSGet('user')) {
            setFormDetails({ ...formDetails, email: LSGet('user') });
        }
    }, []);

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
        event.preventDefault();
        // create API call to execute login
        // post('/sign-in', JSON.stringify(formDetails)).then((response) => {
        //     console.log(response.json());
        //     setLoading(false);
        //     navigate('/home');
        // }).catch(err => {
        //     setLoading(false);
        //     setErrorMessage('Something went wrong')
        //     console.log(err);
        // });
        LSSet('user', formDetails.email);
        navigate('/');

    }


    return (
        <div className={`px-10 py-7 border-gray-300 border-2 rounded-md`}>
            <div className='flex items-center justify-center'>
                <img height="auto" width="40" src={Logo} />
                <h3 className='ml-3 font-bold text-xl text-center'>Expense Tracker</h3>
            </div>
            {errorMessage && <p className='text-red-600 text-center mt-4 font-bold'>{errorMessage}</p>}
            <form onSubmit={login}>
                <InputField label="Email"
                    placeholder="Enter email address"
                    type="email"
                    naeme="email"
                    value={formDetails.email}
                    onChange={handleChange}
                />
                <InputField label="Password"
                    placeholder="Enter your password"
                    value={formDetails.password}
                    name="password"
                    type="password"
                    onChange={handleChange}
                />
                <Button text="SignIn" />
            </form>
            <p>Don't have an account? <Link to="/register" className='text-yellow-600'>SignUp here</Link></p>
            {loading && <div className='h-full absolute top-0 w-full left-0 flex flex-col justify-center items-center'>
                <UseAnimations strokeColor='rgb(202 138 4 / 600)' fillColor='rgb(202 138 4 / 600)' animation={infinity} size={75} />
                <p className='black text-xl'>Loading...</p>
            </div>}
        </div>
    )
}

export default Login