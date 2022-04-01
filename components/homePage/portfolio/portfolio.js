import Link from 'next/link'
import PortfolioImage from './images/portfolio.png'
import PortfolioMobileImage from './images/portfolio-mobile-img.png'

const Portfolios = () => {
	return (
		<section className='cre_portfolio_section portfolio_bg portfolio_overlay section_padding'>
			<div className='container custom_container'>
				<div className='row justify-content-center position-relative z_index_10'>
					<div className='col-xxl-7 col-lg-9'>
						<div className='section_title text-center position-relative'>
							<div className='cre_parallax_section wow fadeInUp'>
								<h2 className='parallax_text'>our works</h2>
							</div>
							<h2 className='title text-white wow fadeInUp'>
								<span>Portfolio</span>
							</h2>
							<p className='description text-white wow fadeInUp mb-3'>
								CreativePeoples is specialized in designing your
								Web, App UI/ UX, Graphics, or Logo and Branding.{' '}
								<b>
									Also, we offer full-stack services on Web
									Development, Digital Marketing (SEO, PPC,
									Creative Content), etc., that are efficient,
									attractive, and aim at your client&apos;s
									audience.
								</b>
							</p>
							<p className='description text-white wow fadeInUp'>
								We&apos;ve had the pleasure of working with
								several customers over the years and
								successfully represented a diverse range of
								business models through our products and
								services. To discover more about our work,
								please view our portfolio.
							</p>
							<div className='animate_border_wrapper mt-4 wow fadeInUp'>
								<Link href='/contact'>
									<a className='cr_btn_style animate_border'>
										Get Custom Quote
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className='row justify-content-center wow fadeIn'>
					<div className='col-lg-12'>
						<div className='cre_portfolio_wrapper'>
							<img
								className='projects-img-mobile d-xl-none d-lg-none d-md-none d-sm-block d-block'
								src={PortfolioMobileImage.src}
								alt='portfolio.png'
							/>
							<img
								className='d-xl-block d-lg-block d-md-block d-sm-none d-none'
								src={PortfolioImage.src}
								alt='portfolio.png'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Portfolios
