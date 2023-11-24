import React, { useState } from 'react'
import axios from 'axios';


const SignupForm = () => {
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(null);
	const [formData, setFormData] = useState({});

	const handleChange = async (e) => {
		// setFormData(e)
		console.log(e)
	}

	const handleSubmit = async (e) => {
		e.preventDefault();

		// 	try {
		// 		// api post goes here
		// 		let userInput = {
		// 			email: e.target.email.value,
		// 			password: e.target.password.value,
		// 			first_name: e.target.first_name.value,
		// 			last_name: e.target.last_name.value,
		// 			phone: e.target.phone.value,
		// 			phone: e.target.phone.value,
		// 		}

		// 		await axios.post();
		// 		setSuccess(true);
		// 		setError("");
		// 		event.target.reset()

		// 	} catch (error) {
		// 		setSuccess(false);
		// 		setError(error.response.data)
		// 	}
	};

	return (
		<div className='submit-form-box'>
			<form id='signupForm' onSubmit={handleSubmit}>

				<section>
					<div className="form-column">
						<h3 className='form__header'>
							Signup
						</h3>
						<label className='form__input-header'>
							First Name
							<input type="text"
								name="first_name"
								value={formData.first_name}
								onChange={handleChange}
								className="form__name-input"
								id="first_name"
								placeholder="Enter your first name"
							/>
						</label>
						<label className='form__input-header'>
							Last Name
							<input type="text"
								name="last_name"
								value={formData.last_name}
								onChange={handleChange}
								className="form__name-input"
								id="last_name"
								placeholder="Enter your last name"
							/>
						</label>
						<label className='form__input-header'>
							Username
							<input type="text"
								name="alias"
								value={formData.alias}
								onChange={handleChange}
								className="form__name-input"
								id="alias"
								placeholder="Choose a username"
							/>
						</label>
						<label className='form__input-header'>
							Phone
							<input type="text"
								name="phone"
								value={formData.phone}
								onChange={handleChange}
								className="form__name-input"
								id="phone"
								placeholder="Enter your phone number"
							/>
						</label>
						<label className='form__input-header'>
							Email
							<input type="text"
								name="email"
								value={formData.email}
								onChange={handleChange}
								className="form__name-input"
								id="email"
								placeholder="Enter your email address"
							/>
						</label>
					</div>

					<div className="form-column">
						<h3 className='form__header'>
							Address
						</h3>
						<label className='form__input-header'>
							Street
							<input type="text"
								name="street"
								value={formData.street}
								onChange={handleChange}
								className="form__name-input"
								id="street"
								placeholder="Enter your street address"
							/>
						</label>
						<label className='form__input-header'>
							City
							<input type="text"
								name="city"
								value={formData.city}
								onChange={handleChange}
								className="form__name-input"
								id="city"
								placeholder="Enter your city"
							/>
						</label>
						<label className='form__input-header'>
							State
							<input type="text"
								name="state"
								value={formData.state}
								onChange={handleChange}
								className="form__name-input"
								id="state"
								placeholder="Enter your state"
							/>
						</label>
						<label className='form__input-header'>
							Zip
							<input type="text"
								name="zip"
								value={formData.zip}
								onChange={handleChange}
								className="form__name-input"
								id="zip"
								placeholder="Enter your ZIP code"
							/>
						</label>
						<label className='form__input-header'>
							Country
							<input type="text"
								name="country"
								value={formData.country}
								onChange={handleChange}
								className="form__name-input"
								id="country"
								placeholder="Enter your country"
							/>
						</label>
					</div>
				</section>

				<section>
					<div className="form-column">
						<h3 className='form__header'>
							Social
						</h3>
						<label className='form__input-header'>
							Instagram
							<input type="text"
								name="social_ig"
								value={formData.social_ig}
								onChange={handleChange}
								className="form__name-input"
								id="social_ig"
								placeholder="Enter your Instagram username"
							/>
						</label>
						<label className='form__input-header'>
							Facebook
							<input type="text"
								name="social_facebook"
								value={formData.social_facebook}
								onChange={handleChange}
								className="form__name-input"
								id="social_facebook"
								placeholder="Enter your Facebook username"
							/>
						</label>
						<label className='form__input-header'>
							Soundcloud
							<input type="text"
								name="social_soundcloud"
								value={formData.social_soundcloud}
								onChange={handleChange}
								className="form__name-input"
								id="social_soundcloud"
								placeholder="Enter your Soundcloud username"
							/>
						</label>
						<label className='form__input-header'>
							Youtube
							<input type="text"
								name="social_youtube"
								value={formData.social_youtube}
								onChange={handleChange}
								className="form__name-input"
								id="social_youtube"
								placeholder="Enter your YouTube username"
							/>
						</label>
						<label className='form__input-header'>
							Linkedin
							<input type="text"
								name="social_linkedin"
								value={formData.social_linkedin}
								onChange={handleChange}
								className="form__name-input"
								id="social_linkedin"
								placeholder="Enter your LinkedIn username"
							/>
						</label>
					</div>

					<div className="form-column">
						<h3 className='form__header'>
							Your Sites / Portfolios
						</h3>
						<label className='form__input-header'>
							Your Links
							<input type="text"
								name="portfolioLink1"
								value={formData.portfolioLink1}
								onChange={handleChange}
								className="form__name-input"
								id="portfolioLink1"
								placeholder="Enter your first portfolio link"
							/>
							<input type="text"
								name="portfolioLink2"
								value={formData.portfolioLink2}
								onChange={handleChange}
								className="form__name-input"
								id="portfolioLink2"
								placeholder="Enter your second portfolio link"
							/>
							<input type="text"
								name="portfolioLink3"
								value={formData.portfolioLink3}
								onChange={handleChange}
								className="form__name-input"
								id="portfolioLink3"
								placeholder="Enter your third portfolio link"
							/>
						</label>
						<label className='form__input-header'>
							Bio
							<textarea
								name="bio"
								value={formData.bio}
								onChange={handleChange}
								className="form__name-input"
								id="bio"
								placeholder="Tell us about yourself..."
								rows={4} // Specify the number of rows without quotes
							/>
						</label>
					</div>

				</section>


				{/* Checkbox for is_mentor */}

				<div className="form-end">
					<label className='form__input-header'>
						User Role:
					</label>
					<select name="userRole" value={formData.userRole} onChange={handleChange}>
						<option value="mentor">Mentor</option>
						<option value="mentee">Mentee</option>
					</select>

					<button type="submit" className='form__submit-btn'>Sign Up</button>
				</div>

			</form >
		</div >
	);

}

export default SignupForm
