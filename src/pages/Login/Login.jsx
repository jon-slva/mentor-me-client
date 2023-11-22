import React, { useState } from 'react'

const Login = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // api post goes here
            let userInput = {
                email: e.target.email.value,
                password: e.target.password.value,
                first_name: e.target.first_name.value,
                last_name: e.target.last_name.value,
                phone: e.target.phone.value,
                phone: e.target.phone.value,
            }

            await axios.post();
            setSuccess(true);
            setError("");
            event.target.reset()

        } catch (error) {
            setSuccess(false);
            setError(error.response.data)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* Add form fields for each property in formData */}
                <label>
                    First Name:
                    <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} />
                </label>

                {/* Add similar label/input pairs for other fields */}

                {/* Checkbox for is_mentor */}
                <label>
                    Is Mentor:
                    <input type="checkbox" name="is_mentor" checked={formData.is_mentor} onChange={handleChange} />
                </label>

                {/* Additional form fields for user_interests and user_subjects */}
                {/* These can be handled based on your specific requirements */}

                <button type="submit">Sign Up</button>
            </form>

        </div>
    )
}

export default Login
