import Link from 'next/link'
import BannerBg from './banner.jpg'

const Banner = () => {
	return (
		<section className='cre_banner'>
			<div
				className='banner-bg'
				style={{
					backgroundImage: `url(${BannerBg.src})`,
					backgroundColor: '#111',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundAttachment: 'fixed',
				}}
			></div>
			<div className='container custom_container'>
				<div className='row align-items-center'>
					<div className='col-lg-11'>
						<div className='cre_banner_wrapper wow fadeInUp'>
							<h2 className='title text-white'>
								A Full-Stack Creative{' '}
								<span>
									Design, Development &amp; Strategic Digital
									Marketing
								</span>{' '}
								Agency
							</h2>
							<div className='animate_border_wrapper'>
								<Link href='/projects'>
									<a className='cr_btn_style animate_border'>
										See Our Works
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='slider'>
				<div className='slide-track'>
					<div className='slide'></div>
					<div className='slide'></div>
					<div className='slide'></div>
				</div>
			</div>
		</section>
	)
}

export default Banner
