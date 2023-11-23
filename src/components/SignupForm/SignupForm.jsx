import React, { useState } from 'react'

const SignupForm = () => {
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
                    First Name
                    <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} />
                </label>
                <label>
                    Last Name
                    <input type="text" name="last_name" value={formData.first_name} onChange={handleChange} />
                </label>
                <label>
                    Username
                    <input type="text" name="alias" value={formData.first_name} onChange={handleChange} />
                </label>
                <label>
                    Address
                    <input type="text" name="street" value={formData.first_name} onChange={handleChange} />
                    <input type="text" name="city" value={formData.first_name} onChange={handleChange} />
                    <input type="text" name="state" value={formData.first_name} onChange={handleChange} />
                    <input type="text" name="zip" value={formData.first_name} onChange={handleChange} />
                    <input type="text" name="country" value={formData.first_name} onChange={handleChange} />
                </label>
                <label>
                    Email
                    <input type="text" name="email" value={formData.first_name} onChange={handleChange} />
                </label>
                <label>
                    Phone
                    <input type="text" name="phone" value={formData.first_name} onChange={handleChange} />
                </label>
                <label>
                    Instagram
                    <input type="text" name="social_ig" value={formData.first_name} onChange={handleChange} />
                </label>
                <label>
                    Facebook
                    <input type="text" name="social_facebook" value={formData.first_name} onChange={handleChange} />
                </label>
                <label>
                    Soundcloud
                    <input type="text" name="social_soundclooud" value={formData.first_name} onChange={handleChange} />
                </label>
                <label>
                    Youtube
                    <input type="text" name="social_youtube" value={formData.first_name} onChange={handleChange} />
                </label>
                <label>
                    Linkedin
                    <input type="text" name="social_linkedin" value={formData.first_name} onChange={handleChange} />
                </label>
                <label>
                    Your Links
                    <input type="text" name="portfolioLink1" value={formData.first_name} onChange={handleChange} />
                    <input type="text" name="portfolioLink2" value={formData.first_name} onChange={handleChange} />
                    <input type="text" name="portfolioLink3" value={formData.first_name} onChange={handleChange} />
                </label>
                <label>
                    Bio
                    <input type="text" name="bio" value={formData.first_name} onChange={handleChange} />
                </label>

                {/* Add similar label/input pairs for other fields */}

                {/* Checkbox for is_mentor */}
                <label>
                    User Role:
                    <select name="userRole" value={formData.userRole} onChange={handleChange}>
                        <option value="mentor">Mentor</option>
                        <option value="mentee">Mentee</option>
                    </select>
                </label>

                {/* Additional form fields for user_interests and user_subjects */}
                {/* These can be handled based on your specific requirements */}

                <button type="submit">Sign Up</button>
            </form>

        </div>
    )
}

export default SignupForm
