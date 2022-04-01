import GoalImageOne from './images/1.png'
import GoalImageTwo from './images/2.png'
import GoalImageThree from './images/3.png'

const Goal = () => {
	return (
		<section className='cre_goal_section section_padding position-relative'>
			<div className='container custom_container'>
				<div className='row justify-content-between'>
					<div className='col-lg-7'>
						<div className='team_list_wrapper'>
							<img
								src={GoalImageOne.src}
								alt='Goal One'
								className='img-fluid mb-5 wow fadeInUp'
							/>
							<h2 className='title wow fadeInUp'>
								We Help Businesses Grow and{' '}
								<span>
									Turn Ideas Into Engaging Digital Products To
									Ensure Your ROI
								</span>
							</h2>
							<p className='description wow fadeInUp'>
								We are a multi-dimensional agency with
								innovative, digital, and support solutions that
								can be tailored to your unique requirements,
								whether you’re looking for prominent Graphic,
								Web Design and Digital Marketing, comprehensive
								rebrand, brand-new mobile app design, or any
								creative print design.
							</p>
						</div>
					</div>
					<div className='col-lg-5'>
						<div className='team_img_wrapper wow fadeInUp'>
							<img
								src={GoalImageTwo.src}
								alt='Goal Two'
								className='img-fluid'
							/>
							<img
								src={GoalImageThree.src}
								alt='Goal Three'
								className='img-fluid'
							/>
						</div>
					</div>
					<h2 className='parallax_text d-none d-xl-block text-end wow fadeIn'>
						our goal
					</h2>
				</div>
			</div>
		</section>
	)
}

export default Goal
