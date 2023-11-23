import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './LoginForm.scss'

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
        <div className='form-box'>
            <form id="loginForm" onSubmit={handleSubmit}>
                <div className="form">
                    <h3 className="form__header">Please Log In</h3>
                    <label className='form__input-header'>
                        Username
                    </label>
                        <input type="text" 
                        name="alias" 
                        id="username" 
                        className="form__name-input"
                        placeholder="Enter your username" 
                        onChange={handleChange} />
                    <label className='form__input-header'>
                        Password
                    </label>
                        <input type="password" 
                        name="password" 
                        id="password" 
                        className="form__name-input"
                        placeholder="Enter your password" 
                        onChange={handleChange} />
                    <button 
                        type="submit"
                        className="form__submit-btn">
                            Log in
                    </button>
                    <Link to={"/signup"}>
                    <p className="form__subtext">----- Sign Up -----</p> 
                    </Link>  
                </div>
            </form>

        </div>
    )
}

export default LoginForm;