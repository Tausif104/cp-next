import CountUp from 'react-countup'
import ArrowShape from './images/arrow-shape.png'
import IconOne from './images/s_defferent_icon1.png'
import IconTwo from './images/s_defferent_icon2.png'
import IconThree from './images/s_defferent_icon3.png'
import IconFour from './images/s_defferent_icon4.png'
import IconFive from './images/s_defferent_icon5.png'

const About = () => {
	return (
		<section
			className='cre_about_section section_padding position-relative'
			data-bg-color='#F4F4F4'
		>
			<div className='container custom_container'>
				<div className='row align-items-center'>
					<div className='col-lg-10 wow fadeIn'>
						<div className='cre_section_title'>
							<h2 className='title'>
								A Full-Stack <span>Creative Agency</span>
							</h2>
							<p className='description'>
								CreativePeoples is a prominent Graphic, Web
								Design and Digital Marketing Agency that builds
								unique brands and digital experiences for
								clients. As your business partner,
								CreativePeoples designs user-oriented products
								and services that increase conversions, drive
								sales and connect with customers.
							</p>
						</div>
					</div>
				</div>
				<div className='row why_different gy-4'>
					<div className='col-xl-4 col-lg-6'>
						<div className='cre_section_title'>
							<h2 className='title'>
								<span>Why Are We Different From Others?</span>
							</h2>
							<img
								src={ArrowShape.src}
								alt='arrow_shape'
								className='img-fluid arrow_shape'
							/>
						</div>
					</div>
					<div className='col-xl-4 col-lg-6'>
						<div className='single_different_item'>
							<div className='s_different_icon'>
								<img
									src={IconOne.src}
									alt='single_why_diffrent_icon'
									className='img-fluid'
								/>
							</div>
							<h4>Digital Services That Clients Love</h4>
							<p>
								We apply behavioral research and science to the
								consumer experience and design appealing digital
								services to help secure your business&apos;s
								growth.
							</p>
						</div>
					</div>
					<div className='col-xl-4 col-lg-6'>
						<div className='single_different_item'>
							<div className='s_different_icon'>
								<img
									src={IconTwo.src}
									alt='single_why_diffrent_icon'
									className='img-fluid'
								/>
							</div>
							<h4>Websites That Empower Your Brand</h4>
							<p>
								Our delivered high-quality websites represent
								the power of your brand and boost your
								business&apos;s visibility, sales, and value.
							</p>
						</div>
					</div>
					<div className='col-xl-4 col-lg-6'>
						<div className='single_different_item'>
							<div className='s_different_icon'>
								<img
									src={IconThree.src}
									alt='single_why_diffrent_icon'
									className='img-fluid'
								/>
							</div>
							<h4>Latest Strategies That Ensure ROI</h4>
							<p>
								Your partnership with us is always our top
								priority, and we imply diversified and proven
								designing, developing, and marketing strategists
								to ensure ROI.
							</p>
						</div>
					</div>
					<div className='col-xl-4 col-lg-6'>
						<div className='single_different_item'>
							<div className='s_different_icon'>
								<img
									src={IconFour.src}
									alt='single_why_diffrent_icon'
									className='img-fluid'
								/>
							</div>
							<h4>Insightful and User-Centric Practices</h4>
							<p>
								Creativepeoples leverages the power of research
								and data to extract insights that result in
								positive business growth and enhance the shared
								human experience.
							</p>
						</div>
					</div>
					<div className='col-xl-4 col-lg-6'>
						<div className='single_different_item'>
							<div className='s_different_icon'>
								<img
									src={IconFive.src}
									alt='single_why_diffrent_icon'
									className='img-fluid'
								/>
							</div>
							<h4>Future-Oriented Mindset</h4>
							<p>
								Last not least, we rethink your digital
								products, help grow your brands, and investigate
								the golden future of mobility for millions of
								visitors.
							</p>
						</div>
					</div>
				</div>
				<div className='row justify-content-between'>
					<div className='col-lg-3 col-6'>
						<div className='cre_counter_text'>
							<h2 className='counter_number'>
								<span className='counter'>
									<CountUp
										start={0}
										end={1100}
										duration={5}
									/>
								</span>
								+
							</h2>
							<p className='description'>Completed projects</p>
						</div>
					</div>
					<div className='col-lg-3 col-6'>
						<div className='cre_counter_text'>
							<h2 className='counter_number'>
								<span className='counter'>
									<CountUp start={0} end={800} duration={5} />
								</span>
								+
							</h2>
							<p className='description'>Worldwide Customer</p>
						</div>
					</div>
					<div className='col-lg-3 col-6'>
						<div className='cre_counter_text'>
							<h2 className='counter_number'>
								<span className='counter'>
									<CountUp start={0} end={600} duration={5} />
								</span>
								+
							</h2>
							<p className='description'>Five Star Review</p>
						</div>
					</div>
					<div className='col-lg-3 col-6'>
						<div className='cre_counter_text'>
							<h2 className='counter_number'>
								<span className='counter'>
									<CountUp start={0} end={15} duration={5} />
								</span>
								+
							</h2>
							<p className='description'>Team Member</p>
						</div>
					</div>
				</div>
			</div>
			<div className='cre_parallax_section rotated-section-title wow fadeIn'>
				<h2 className='parallax_text'>About</h2>
			</div>
		</section>
	)
}

export default About
