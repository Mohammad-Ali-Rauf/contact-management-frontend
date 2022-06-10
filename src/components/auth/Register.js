import React, { useContext, useEffect, useState } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = () => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        if(error === 'User Already exists') {
            setAlert(error, 'danger');
            clearErrors();
        }
    }, [error])

    const { setAlert } = alertContext;
    const { registerUser, error, clearErrors } = authContext;

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const { name, email, password, confirmPassword } = user;

    const onChange = e => setUser({...user, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        if(name === '' || email === ''  || password === '') {
            setAlert('All Fields are Required', 'danger')
        } else if (password !== confirmPassword) {
            setAlert('Password does not match', 'danger')
        } else {
            registerUser({
                name,
                email,
                password
            });
        }
    }

    return (
        <div className='form-container'>
            <h1>Register User</h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={name} placeholder='Name' onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} placeholder='Email' onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} placeholder='Password' onChange={onChange} minLength="5" />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword" value={confirmPassword} placeholder='Confirm Password' onChange={onChange} minLength="5" />
                </div>
                <input type="submit" value="Register" className='btn btn-primary btn-block' />
            </form>
        </div>
    )
};

export default Register;
