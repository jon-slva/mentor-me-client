import React, { useState } from 'react'

const LoginForm = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState(null);

    const handleChange = async (e) => {
        setFormData()
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        //     try {
        //         // api post goes here
        //         let userInput = {
        //             email: e.target.email.value,
        //             password: e.target.password.value,
        //             first_name: e.target.first_name.value,
        //             last_name: e.target.last_name.value,
        //             phone: e.target.phone.value,
        //             phone: e.target.phone.value,
        //         }

        //         await axios.post();
        //         setSuccess(true);
        //         setError("");
        //         event.target.reset()

        //     } catch (error) {
        //         setSuccess(false);
        //         setError(error.response.data)
        //     }
    }

    return (
        <div className='login-container'>
            <form onSubmit={handleSubmit}>
                <label>
                    Username
                    <input type="text" name="alias" onChange={handleChange} />
                </label>
                <label>
                    Password
                    <input type="password" name="password" onChange={handleChange} />
                </label>
                <button type="submit">Sign Up</button>
            </form>

        </div>
    )
}

export default LoginForm;
