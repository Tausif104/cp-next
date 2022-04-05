import ServiceMobile from './serviceMobile'
import { useEffect } from 'react'
import ServiceBgOne from './images/service-bg-1.jpg'
import ServiceBgTwo from './images/service-bg-2.jpg'
import ServiceBgThree from './images/service-bg-3.jpg'

const Services = () => {
	useEffect(() => {
		// service tabs
		const serviceNavs = document.querySelectorAll('.service-tabs span')

		const designNav = document.getElementById('design-item')
		const devNav = document.getElementById('dev-item')
		const marketingnNav = document.getElementById('marketing-item')

		const serviceBody = document.getElementsByClassName('service-body')
		const designBody = document.getElementById('service-design')
		const devBody = document.getElementById('service-dev')
		const marketingBody = document.getElementById('service-marketing')

		const serviceSection = document.getElementById('service-section')

		const hideServices = () => {
			for (const service of serviceBody) {
				service.style.display = 'none'
			}
		}
		hideServices()

		const removeActiveNav = () => {
			for (const serviceNav of serviceNavs) {
				if (serviceNav.classList) {
					serviceNav.classList.remove('active')
				}
			}
		}

		designBody.style.display = 'block'
		serviceSection.style.backgroundImage = `url(${ServiceBgOne.src})`

		designNav.addEventListener('mouseover', (e) => {
			removeActiveNav()
			hideServices()
			e.target.classList.add('active')
			designBody.style.display = 'block'
			serviceSection.style.backgroundImage = `url(${ServiceBgOne.src})`
		})

		devNav.addEventListener('mouseover', (e) => {
			removeActiveNav()
			hideServices()
			e.target.classList.add('active')
			devBody.style.display = 'block'

			serviceSection.style.backgroundImage = `url(${ServiceBgTwo.src})`
		})

		marketingnNav.addEventListener('mouseover', (e) => {
			removeActiveNav()
			hideServices()
			e.target.classList.add('active')
			marketingBody.style.display = 'block'

			serviceSection.style.backgroundImage = `url(${ServiceBgThree.src})`
		})
	}, [])

	return (
		<>
			<section
				id='service-section'
				className='services_section sec_padding design-bg d-xl-block d-lg-block d-md-block d-sm-none d-none'
				style={{
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<div className='container custom_container'>
					<div className='row align-items-center'>
						<div className='col-lg-12'>
							<div className='cre_parallax_section wow fadeInUp'>
								<h2 className='parallax_text'>services</h2>
							</div>
							<div className='services_list_wrapper position-relative'>
								<div className='row justify-content-between align-items-center'>
									<div className='col-lg-6'>
										<div className='service-tabs'>
											<span id='design-item'>
												<span className='active'>
													Design
												</span>
											</span>
											<span id='dev-item'>
												<span>Development</span>
											</span>
											<span id='marketing-item'>
												<span>Marketing</span>
											</span>
										</div>
									</div>
									<div className='col-lg-6'>
										<div
											className='service-body'
											id='service-design'
										>
											<ul>
												<li>UI/UX Design</li>
												<li>Landing Page Design</li>
												<li>Web Design</li>
												<li>Mobile App Design</li>
												<li>Logo Design</li>
												<li>Brand Design</li>
											</ul>
										</div>
										<div
											className='service-body'
											id='service-dev'
										>
											<ul>
												<li>Wordpress Development</li>
												<li>API Integration</li>
												<li>Responsive Web Design</li>
												<li>eCommerce Development</li>
												<li>Web Application</li>
												<li>
													Content Management Systems
												</li>
											</ul>
										</div>
										<div
											className='service-body '
											id='service-marketing'
										>
											<ul>
												<li>
													Search Engine Optimization
													(SEO)
												</li>
												<li>
													Search Engine Marketing
													(SEM)
												</li>
												<li>
													Pay Per Click Advertising
												</li>
												<li>Social Media Management</li>
												<li>
													Onsite & Offsite Marketing
												</li>
												<li>
													Content Generation and
													Optimization
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<ServiceMobile />
		</>
	)
}

export default Services
