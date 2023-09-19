import React from 'react';
import { useForm } from 'react-hook-form';

function SignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch, // To watch the value of the password and passwordConfirmation fields
    } = useForm();

    // Function to compare the password and passwordConfirmation fields
    const validatePasswordConfirmation = (value) => {
        const password = watch('password'); // Get the value of the password field
        return value === password || 'Passwords do not match';
    };

    const onSubmit = (data) => {
        fetch ("/users", {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then ((response) => response.json())
            .then ((user)=> { 
                console.log(user);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div>
            <h1>Sign up form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className='input-field'
                    {...register('name')}
                />
                <input
                    className='input-field'
                    {...register('password', {
                        required: 'Password is required',
                    })}
                    type='password' // Use type='password' to hide the input text
                />
                {errors.password && <p className='error-message'>{errors.password.message}</p>}

                {/* Password confirmation field */}
                <input
                    className='input-field'
                    {...register('passwordConfirmation', {
                        validate: validatePasswordConfirmation, // Validate against the password field
                    })}
                    type='password' // Use type='password' to hide the input text
                />
                {errors.passwordConfirmation && (
                    <p className='error-message'>{errors.passwordConfirmation.message}</p>
                )}

                <input
                    type='submit'
                    className='submit-button'
                    value='Submit'
                />
            </form>
        </div>
    );
}

export default SignUp;