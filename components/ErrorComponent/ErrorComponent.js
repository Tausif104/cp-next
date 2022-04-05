import Link from 'next/link'
import DarkLogo from './images/dark-logo.png'
import notFoundText from './images/notfound-text.png'
import notFoundThumb from './images/notFound.png'

const ErrorComponent = () => {
	return (
		<section className='not-found-section'>
			<div className='container custom_container h-100'>
				<div className='row'>
					<div className='col-lg-5'>
						<div className='not-found-logo-wrap'>
							<Link href='/'>
								<img
									className='not-found-logo'
									src={DarkLogo.src}
									alt='Logo'
								/>
							</Link>
						</div>
					</div>
				</div>
				<div className='row h-100 align-items-center'>
					<div className='col-lg-6'>
						<div className='not-found-text'>
							<img src={notFoundText.src} alt='404' />
							<h1>
								Something went <span>WRONG</span>
							</h1>
							<div className='animate_border_wrapper mt-4 wow fadeInUp'>
								<Link href='/'>
									<a className='cr_btn_style animate_border'>
										Back to Home
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='not-found-thumb'>
				<img src={notFoundThumb.src} alt='Not Found' />
			</div>
		</section>
	)
}

export default ErrorComponent
