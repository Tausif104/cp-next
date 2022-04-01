import Link from 'next/link'
import IconOne from './icons/solution_icon1.png'
import IconTwo from './icons/solution_icon2.png'
import IconThree from './icons/solution_icon3.png'
import IconFour from './icons/solution_icon4.png'
import IconFive from './icons/solution_icon5.png'
import IconSix from './icons/solution_icon6.png'

const Solutions = (props) => {
	const { title, extraClass } = props
	return (
		<section className={`cre_solutions_section padding_top ${extraClass}`}>
			<div className='container custom_container'>
				{title && (
					<div className='row'>
						<div className='col-lg-12 wow fadeIn text-center'>
							<div className='cre_section_title'>
								<h2 className='title'>
									<div
										dangerouslySetInnerHTML={{
											__html: title,
										}}
									/>
								</h2>
							</div>
						</div>
					</div>
				)}
				<div className='row gy-4 wow fadeIn'>
					<div className='col-lg-6'>
						<div className='single_solution_item'>
							<div className='s_solution_icon'>
								<img
									src={IconOne.src}
									alt='solution_icon'
									className='img-fluid'
								/>
							</div>
							<div className='s_solution_content'>
								<h4>Responsive Website Design</h4>
								<p>
									CreativePeoples specializes in building
									responsive websites that are visually
									appealing and rank highly in search results
									and help you reach your business goals:
									increased leads, sales, and traffic. We also
									ensure that the user will always get the
									best experience by customizing menus and
									controls to match the device&apos;s screen
									size and height.
								</p>
								<Link href='/services/responsive-web'>
									<a className='read_more'>Read More</a>
								</Link>
							</div>
						</div>
					</div>
					<div className='col-lg-6'>
						<div className='single_solution_item'>
							<div className='s_solution_icon'>
								<img
									src={IconTwo.src}
									alt='solution_icon'
									className='img-fluid'
								/>
							</div>
							<div className='s_solution_content'>
								<h4>UI/UX Design</h4>
								<p>
									We provide a valuable and robust user
									experience that progresses your business
									with a significant competitive advantage in
									gaining and sustaining customers. Also, we
									offer out-of-the-box UI/UX design services
									by following the latest design trends and
									carefully considering the client&apos;s
									requirements.
								</p>
								<Link href='/services/ui-ux-design'>
									<a className='read_more'>Read More</a>
								</Link>
							</div>
						</div>
					</div>
					<div className='col-lg-6'>
						<div className='single_solution_item'>
							<div className='s_solution_icon'>
								<img
									src={IconThree.src}
									alt='solution_icon'
									className='img-fluid'
								/>
							</div>
							<div className='s_solution_content'>
								<h4>Landing Page Design</h4>
								<p>
									<b>
										Whether you want to create brand
										awareness, get leads, or get more
										traffic, you&apos;ll need an impactful
										landing page agency on your side.
									</b>{' '}
									Our most reliable customized and data-driven
									landing pages enable you to attract more
									visitors, gain reliability, generate more
									leads, and boost your brand&apos;s
									reputation.
								</p>
								<Link href='/services/landing-page'>
									<a className='read_more'>Read More</a>
								</Link>
							</div>
						</div>
					</div>
					<div className='col-lg-6'>
						<div className='single_solution_item'>
							<div className='s_solution_icon'>
								<img
									src={IconFour.src}
									alt='solution_icon'
									className='img-fluid'
								/>
							</div>
							<div className='s_solution_content'>
								<h4>WordPress Development</h4>
								<p>
									Moreover, we develop a comprehensive suite
									of WordPress development directly for you.
									Our professional WordPress services will
									make sure that you have an error-free
									interface, effective navigation, and
									user-friendliness of your WordPress site.
								</p>
								<Link href='/services/wordpress'>
									<a className='read_more'>Read More</a>
								</Link>
							</div>
						</div>
					</div>
					<div className='col-lg-6'>
						<div className='single_solution_item'>
							<div className='s_solution_icon'>
								<img
									src={IconFive.src}
									alt='solution_icon'
									className='img-fluid'
								/>
							</div>
							<div className='s_solution_content'>
								<h4>Logos and Branding</h4>
								<p>
									Our team of experts delivers a well-defined
									brand strategy that enables you to express
									your message, quality, and advantages
									effectively, efficiently, and aesthetically,
									bringing more attention and creating
									remarkable interactions. As part of our
									branding services at CreativePeoples, we
									believe in designing and re-designing
									thought-provoking branding services that can
									add an appealing touch to your overall brand
									existence. Moreover, our creative and
									professional team will design innovative and
									attractive logos for your business that
									becomes your brand’s identity.
								</p>
								<Link href='/services/branding'>
									<a className='read_more'>Read More</a>
								</Link>
							</div>
						</div>
					</div>
					<div className='col-lg-6'>
						<div className='single_solution_item'>
							<div className='s_solution_icon'>
								<img
									src={IconSix.src}
									alt='solution_icon'
									className='img-fluid'
								/>
							</div>
							<div className='s_solution_content'>
								<h4>Print Design</h4>
								<p>
									CreativePeoples designs world-class
									marketing materials with pixel-perfect
									strategies for your digital products. We
									also believe great product results from an
									impeccable design and we do it perfectly to
									spread your products, services, promotions,
									offers, messages worldwide.
								</p>
								<Link href='/services/print-designs'>
									<a className='read_more'>Read More</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Solutions
