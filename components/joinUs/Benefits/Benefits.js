import IconOne from './images/1.png'
import IconTwo from './images/2.png'
import IconThree from './images/3.png'
import IconFour from './images/4.png'

const Benefits = () => {
	return (
		<section className='cre_team_member_section padding_top padding_bottom'>
			<div className='container custom_container'>
				<div className='row justify-content-center mb_80'>
					<div className='col-lg-7 wow fadeInUp'>
						<div className='section_title text-center position-relative'>
							<h2 className='title mb-3 wow fadeInUp'>
								Why <span>Join Us?</span>
							</h2>
							<h2 className='parallax_text'>Benefits</h2>
							<p className='description'>
								We have a group of forward-looking thinkers
								dedicated to positively impacting the world. At
								CreativePeoples, we're continually looking for
								new methods to improve the quality of our work.
								Whether you're a digital professional, a
								self-starter, or an excellent communicator, we'd
								love to talk to you.
							</p>
						</div>
					</div>
				</div>
				<div className='row mb-5'>
					<div className='col'>
						<h5 className='text-orange text-center text-uppercase'>
							Benefits of Working With CreativePeoples
						</h5>
					</div>
				</div>
				<div className='row g-4 justify-content-between mb_80'>
					<div className='col-xl-3 col-lg-6'>
						<div className='single_different_item text-start'>
							<div className='s_different_icon'>
								<img
									src={IconOne.src}
									alt='single_why_diffrent_icon'
									className='img-fluid'
								/>
							</div>
							<h4>Remote-First</h4>
							<p>
								We have team members all around the nation and
								are completely spread.
							</p>
						</div>
					</div>
					<div className='col-xl-3 col-lg-6'>
						<div className='single_different_item text-start'>
							<div className='s_different_icon'>
								<img
									src={IconTwo.src}
									alt='single_why_diffrent_icon'
									className='img-fluid'
								/>
							</div>
							<h4>Flexible Work Schedules</h4>
							<p>
								Work-life balance is a must. Allow yourself the
								time you need to maintain your health.
							</p>
						</div>
					</div>
					<div className='col-xl-3 col-lg-6'>
						<div className='single_different_item text-start'>
							<div className='s_different_icon'>
								<img
									src={IconThree.src}
									alt='single_why_diffrent_icon'
									className='img-fluid'
								/>
							</div>
							<h4>Paternity Leave</h4>
							<p>
								To leave benefits and distinguish between
								primary and secondary carers is an outstanding
								achievement for our family.
							</p>
						</div>
					</div>
					<div className='col-xl-3 col-lg-6'>
						<div className='single_different_item text-start'>
							<div className='s_different_icon'>
								<img
									src={IconFour.src}
									alt='single_why_diffrent_icon'
									className='img-fluid'
								/>
							</div>
							<h4>Health Advantages</h4>
							<p>
								Our attractive benefits package for individuals
								or families is available to full-time team
								members
							</p>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col text-center'>
						<h3>
							Is It Time For You To Start Working The Way You've
							Always Wanted To?
						</h3>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Benefits
