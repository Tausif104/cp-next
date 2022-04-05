import LogoOne from './images/1.png'
import LogoTwo from './images/2.png'
import LogoThree from './images/3.png'
import LogoFour from './images/4.png'
import LogoFive from './images/5.png'
import LogoSix from './images/6.png'
import LogoSeven from './images/7.png'
import LogoEight from './images/8.png'
import LogoNine from './images/9.png'
import LogoTen from './images/10.png'
import LogoEleven from './images/11.png'
import LogoTwelve from './images/12.png'
import LogoThirteen from './images/13.png'
// import LogoFourteen from './images/14.png'
import LogoFifteen from './images/15.png'
import LogoSixteen from './images/16.png'

const LogoSlider = () => {
	return (
		<>
			<section className='logo-sliders padding_top padding_bottom'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='section-title'>
								<h2 className='text-center text-white'>
									Our Clients
								</h2>
								<div className='row align-items-center justify-content-center logo-row'>
									<div className='col-lg-3 col-6'>
										<img src={LogoOne.src} alt='' />
									</div>
									<div className='col-lg-3 col-6'>
										<img src={LogoTwo.src} alt='' />
									</div>
									<div className='col-lg-3 col-6'>
										<img src={LogoThree.src} alt='' />
									</div>
									<div className='col-lg-3 col-6'>
										<img src={LogoFour.src} alt='' />
									</div>
									<div className='col-lg-3 col-6'>
										<img src={LogoFive.src} alt='' />
									</div>
									<div className='col-lg-3 col-6'>
										<img src={LogoSix.src} alt='' />
									</div>
									<div className='col-lg-3 col-6'>
										<img src={LogoSeven.src} alt='' />
									</div>
									<div className='col-lg-3 col-6'>
										<img src={LogoEight.src} alt='' />
									</div>
									<div className='col-lg-3 col-6'>
										<img src={LogoNine.src} alt='' />
									</div>
									<div className='col-lg-3 col-6'>
										<img src={LogoTen.src} alt='' />
									</div>
									<div className='col-lg-3 col-6'>
										<img src={LogoEleven.src} alt='' />
									</div>
									<div className='col-lg-3 col-6'>
										<img src={LogoTwelve.src} alt='' />
									</div>
									<div className='col-lg-3 col-6'>
										<img src={LogoThirteen.src} alt='' />
									</div>
									{/* <div className='col-lg-3'>
										<img src={LogoFourteen.src} alt='' />
									</div> */}
									<div className='col-lg-3 col-6'>
										<img src={LogoFifteen.src} alt='' />
									</div>
									<div className='col-lg-3 col-6'>
										<img src={LogoSixteen.src} alt='' />
									</div>
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
