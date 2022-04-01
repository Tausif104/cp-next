import Link from 'next/link'
import { Accordion } from 'react-bootstrap'

const MobileFooter = () => {
	return (
		<>
			<Accordion
				defaultActiveKey='0'
				className=' mobile-footer-accordion d-xl-none d-lg-none d-md-none d-sm-block d-block'
				id='footerAccordion'
			>
				<Accordion.Item eventKey='0'>
					<Accordion.Header className='d-flex justify-content-between'>
						Essential Links
						<div className='accordion-icons'>
							<i className='fas fa-plus'></i>{' '}
							<i className='fas fa-minus'></i>
						</div>
					</Accordion.Header>
					<Accordion.Body>
						<ul className='footer_menu'>
							<li>
								<Link href='/'>Home</Link>
							</li>
							<li>
								<Link href='/about'>About us</Link>
							</li>
							<li>
								<Link href='/services'>Services</Link>
							</li>
							<li>
								<Link href='/blog'>Blog</Link>
							</li>
							<li>
								<Link href='/projects'>Projects</Link>
							</li>
							<li>
								<Link href='/reviews'>Reviews</Link>
							</li>
							<li>
								<Link href='/contact'>Contact Us</Link>
							</li>
						</ul>
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey='1'>
					<Accordion.Header>
						Services
						<div className='accordion-icons'>
							<i className='fas fa-plus'></i>{' '}
							<i className='fas fa-minus'></i>
						</div>
					</Accordion.Header>
					<Accordion.Body>
						<ul className='footer_menu'>
							<li>
								<Link href='/services/responsive-web'>
									Responsive Web Design
								</Link>
							</li>
							<li>
								<Link href='/services/ui-ux-design'>
									UI/UX Design
								</Link>
							</li>
							<li>
								<Link href='/services/wordpress'>
									WordPress Development
								</Link>
							</li>
							<li>
								<Link href='/services/landing-page'>
									Landing Page Design
								</Link>
							</li>
							<li>
								<Link href='/services/branding'>
									Logos and Branding
								</Link>
							</li>
							<li>
								<Link href='/services/print-designs'>
									Print Designs
								</Link>
							</li>
						</ul>
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey='2'>
					<Accordion.Header>
						Contact Info
						<div className='accordion-icons'>
							<i className='fas fa-plus'></i>{' '}
							<i className='fas fa-minus'></i>
						</div>
					</Accordion.Header>
					<Accordion.Body>
						<ul className='footer_menu'>
							<li>
								<Link href='/services/responsive-web'>
									Responsive Web Design
								</Link>
							</li>
							<li>
								<Link href='/services/ui-ux-design'>
									UI/UX Design
								</Link>
							</li>
							<li>
								<Link href='/services/wordpress'>
									WordPress Development
								</Link>
							</li>
							<li>
								<Link href='/services/landing-page'>
									Landing Page Design
								</Link>
							</li>
							<li>
								<Link href='/services/branding'>
									Logos and Branding
								</Link>
							</li>
							<li>
								<Link href='/services/print-designs'>
									Print Designs
								</Link>
							</li>
						</ul>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</>
	)
}

export default MobileFooter
