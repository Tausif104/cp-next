import BrandOne from './images/1.png'
import BrandTwo from './images/2.png'
import BrandThree from './images/3.png'
import BrandFour from './images/4.png'
import BrandFive from './images/5.png'
import BrandSix from './images/6.png'
import BrandSeven from './images/7.png'
import BrandEight from './images/8.png'
import BrandNine from './images/9.png'
import BrandTen from './images/10.png'
import BrandEleven from './images/11.png'
import BrandTwelve from './images/12.png'
import BrandThirteen from './images/13.png'
import BrandFourteen from './images/14.png'
import BrandFifteen from './images/15.png'

const LogoSlider = () => {
	return (
		<>
			<section className='logo-sliders padding_top padding_bottom'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='section_title text-center position-relative wow fadeInUp'>
								<h2 className='title'>
									Ranking 800+{' '}
									<span>Satisfied Customers</span>
								</h2>
								<h2 className='parallax_text d-none d-lg-block'>
									customers
								</h2>
							</div>
							<div className='row mb-4 g-md-4 align-items-center justify-content-center logo-row'>
								<div className='col-lg col-12 col-md-4'>
									<img src={BrandOne.src} alt='' />
								</div>
								<div className='col-lg col-12 col-md-4'>
									<img src={BrandTwo.src} alt='' />
								</div>
								<div className='col-lg col-12 col-md-4'>
									<img src={BrandThree.src} alt='' />
								</div>
								<div className='col-lg col-12 col-md-4'>
									<img src={BrandFour.src} alt='' />
								</div>
								<div className='col-lg col-12 col-md-4'>
									<img src={BrandFive.src} alt='' />
								</div>
							</div>
							<div className='row mb-4 g-md-4 align-items-center justify-content-center logo-row'>
								<div className='col-lg col-12 col-md-4'>
									<img src={BrandSix.src} alt='' />
								</div>
								<div className='col-lg col-12 col-md-4'>
									<img src={BrandSeven.src} alt='' />
								</div>
								<div className='col-lg col-12 col-md-4'>
									<img src={BrandEight.src} alt='' />
								</div>
								<div className='col-lg col-12 col-md-4'>
									<img src={BrandNine.src} alt='' />
								</div>
								<div className='col-lg col-12 col-md-4'>
									<img src={BrandTen.src} alt='' />
								</div>
							</div>
							<div className='row g-md-4 mb-4 align-items-center justify-content-center logo-row'>
								<div className='col-lg-2 col-12 col-md-4'>
									<img src={BrandEleven.src} alt='' />
								</div>
								<div className='col-lg-2 col-12 col-md-4'>
									<img src={BrandTwelve.src} alt='' />
								</div>
								<div className='col-lg-2 col-12 col-md-4'>
									<img src={BrandThirteen.src} alt='' />
								</div>
								<div className='col-lg-2 col-12 col-md-4'>
									<img src={BrandFourteen.src} alt='' />
								</div>
							</div>
							<div className='row align-items-center justify-content-center logo-row'>
								<div className='col col-md-4'>
									<img src={BrandFifteen.src} alt='' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default LogoSlider
