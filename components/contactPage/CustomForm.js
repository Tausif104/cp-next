import { useRef } from 'react'

const CustomForm = ({ status, message, onValidated }) => {
	const nameRef = useRef()
	const emailRef = useRef()
	const phoneRef = useRef()
	const companyRef = useRef()
	const commentRef = useRef()

	const handleMC = (e) => {
		e.preventDefault()
		onValidated({
			MERGE0: emailRef.current.value, // email
			MERGE1: nameRef.current.value, // name
			MERGE2: companyRef.current.value, // company
			MERGE4: commentRef.current.value, // message
			MERGE3: phoneRef.current.value, // number
		})

		e.target.reset()
	}

	return (
		<>
			{!message ? (
				<form onSubmit={handleMC}>
					<div className='form-group'>
						<label htmlFor='Name'>Name*</label>
						<input
							ref={nameRef}
							required
							type='text'
							id='Name'
							placeholder='Name'
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='email'>Email address*</label>
						<input
							ref={emailRef}
							required
							type='email'
							id='email'
							placeholder='Email'
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='Company'>Company name</label>
						<input
							ref={companyRef}
							required
							type='text'
							id='Company'
							placeholder='Company'
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='number'>phone number*</label>
						<input
							ref={phoneRef}
							required
							type='text'
							id='number'
							placeholder='Number'
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='textarea'>
							Tell us a bit more what you are looking for*
						</label>
						<textarea
							ref={commentRef}
							required
							id='textarea'
							placeholder='Write here'
						></textarea>
					</div>
					<div className='text-center'>
						<div className='animate_border_wrapper mt-4'>
							<button
								type='submit'
								className='cr_btn_style animate_border'
							>
								{status ? status : 'Send Message'}
							</button>
						</div>
					</div>
				</form>
			) : (
				<div className='contact-form-alert text-center'>
					<h3>{message}</h3>
					<span>
						<p>
							<i className='far fa-check-circle'></i>{' '}
						</p>
					</span>
				</div>
			)}
		</>
	)
}

export default CustomForm
