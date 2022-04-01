import Link from 'next/link'
import CountUp from 'react-countup'
import Image from 'next/image'

import LogoBlurred from './images/cp-logo-blurred.png'
import Arrow from './images/arrow.png'

const AboutCounter = () => {
	return (
		<div className='cre_about_section padding_top position-relative'>
			<div className='cre_parallax_section rotated-section-title right_aligned wow fadeIn'>
				<h2 className='parallax_text'>About</h2>
			</div>
			<div className='container custom_container'>
				<div className='row align-items-center justify-content-between'>
					<div className='col-xl-6'>
						<div className='cre_section_title about_section'>
							<h2 className='title'>
								About
								<span className='d-block'>CreativePeoples</span>
							</h2>
							<img
								className='arrow_shape2'
								src={Arrow.src}
								alt='arrow'
							/>
						</div>
						<div className='cre_counter_wrapper'>
							<img
								src={LogoBlurred.src}
								alt='CreativePeoples'
								className='cp_logo_shape'
							/>
							<div className='cre_counter_text'>
								<p className='description'>More than</p>
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
								<p className='description'>
									Projects Completed
								</p>
							</div>
							<div className='cre_counter_text'>
								<p className='description'>We have</p>
								<h2 className='counter_number'>
									<span className='counter'>
										<CountUp
											start={0}
											end={800}
											duration={5}
										/>
									</span>
									+
								</h2>
								<p className='description'>
									Worldwide Customer
								</p>
							</div>
							<div className='cre_counter_text'>
								<p className='description'>We Achived</p>
								<h2 className='counter_number'>
									<span className='counter'>
										<CountUp
											start={0}
											end={600}
											duration={5}
										/>
									</span>
									+
								</h2>
								<p className='description'>5 - Start Review</p>
							</div>
							<div className='cre_counter_text'>
								<p className='description'>We launched</p>
								<h2 className='counter_number'>
									<span className='counter'>
										<CountUp
											start={0}
											end={749}
											duration={5}
										/>
									</span>
									+
								</h2>
								<p className='description'>Dynamic Websites</p>
							</div>
						</div>
					</div>
					<div className='col-xl-6 wow fadeInRight'>
						<div className='cre_section_title about_section_inner'>
							<p className='description'>
								CreativePeoples is a diversified design,
								development, and branding agency. We are one of
								the few significant branding agencies where the
								owners are both the mastermind of the work and
								the principal point of contact for each client.
								We are not a multi-award-winning agency, but our
								creative, digital, and support solutions can
								tailor your unique requirements, whether you’re
								looking for a corporate website , complete
								re-brand, brand-new phone apps, web development
								, or any creative print design.
							</p>
							<p className='description'>
								By comprehending, visualizing, and expressing
								innovation, we develop simpler, lighter, more
								appealing concepts for the future. We design for
								life. We regard ourselves as valuable additions
								to our clients’ teams &amp; are proud of our
								connections with them.
							</p>
							<p className='description'>
								CreativePeoples conduct human appealing research
								&amp; design digital experiences to make
								companies more customer-centric and help
								increase their customer loyalty. Our team of
								experts is a new breed of specialists, driven to
								create, be innovative and produce results in the
								best way possible within an agreed timeframe.
							</p>
							<div className='animate_border_wrapper mt-5'>
								<Link href='/contact'>
									<a className='cr_btn_style animate_border'>
										Get In Touch
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className='row vission_mission'>
					<div className='col-lg-6'>
						<div className='cre_section_title vission'>
							<h2 className='title'>
								Our <span>Vision</span>
							</h2>
							<p className='description'>
								At CreativePeoples design, we desire to become a
								frontrunner in advancing businesses through
								digital demands like fast web design,
								development, and Digital Marketing. Our vision
								is to improve your brand&apos;s reputation,
								efficiency, and profitability by providing
								supporting, robust, cost-effective, and{' '}
								diversified support services in a way that
								establishes local awareness and also global
								presence.
							</p>
						</div>
					</div>
					<div className='col-lg-6'>
						<div className='cre_section_title mission'>
							<h2 className='title'>
								Our <span>Mission</span>
							</h2>
							<p className='description'>
								Our mission is to satisfy the ever-increasing
								fast-paced technological needs in design,
								development, and marketing with a rising,
								tech-savvy audience. Therefore, we strive to
								deliver a comprehensive range of services with
								expertise, passion, and devotion. After all, our
								key aim is to ensure that our clients enjoy the
								design process itself.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutCounter
