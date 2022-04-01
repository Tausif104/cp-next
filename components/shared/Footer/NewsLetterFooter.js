import { useRef } from 'react'

const NewsLetterFooter = ({ status, message, onValidated }) => {
	const emailRef = useRef()

	const handleMC = (e) => {
		e.preventDefault()
		onValidated({
			MERGE0: emailRef.current.value, // email
		})

		e.target.reset()
	}
	return (
		<div className='newsletter'>
			{!message ? (
				<form onSubmit={handleMC}>
					<label htmlFor='get_touch'>Get in touch</label>
					<input
						ref={emailRef}
						type='email'
						placeholder='Email'
						required
					/>
					<button type='submit'>
						{status ? status : 'Subscribe'}
					</button>
				</form>
			) : (
				<div className='newsletter-alert'>
					<h3>{message}</h3>
					<span>
						<p>
							<i className='far fa-check-circle'></i>{' '}
						</p>
					</span>
				</div>
			)}
		</div>
	)
}

export default NewsLetterFooter
