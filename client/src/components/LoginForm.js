import React from 'react';
import { useForm } from 'react-hook-form';
import '../css/LoginForm.css';

function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data), 
        })
            .then((response) => response.json())
            .then((user) => {
                
                console.log(user);
            })
            .catch((error) => {
                
                console.error(error);
            });
    };

    return (
        <div>
            <h1>Login form</h1>
            <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
                <input
                    className='input-field'
                    {...register('name')}
                />
                <input
                    className='input-field'
                    {...register('password', {
                        required: 'Password is required',
                    })}
                    type='password'
                />
                {errors.password && <p className='error-message'>{errors.password.message}</p>}

                <input
                    type='submit'
                    className='submit-button'
                    value='Submit'
                />
            </form>
            <a href='localhost:4000/signup' className='link-signup'>sigin up</a>
        </div>
    );
}

export default LoginForm;