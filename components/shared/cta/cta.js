import Link from 'next/link'

const Cta = ({ id }) => {
	return (
		<section className='cre_section section_padding' id={id}>
			<div className='container custom_container'>
				<div className='row justify-content-between align-items-center'>
					<div className='col-lg-6 wow fadeInLeft'>
						<div className='cre_cta_content'>
							<h2 className='title'>
								Let’s <span>Talk</span>
							</h2>
							<p className='description'>
								We don&apos;t have a magic wand to solve the
								above-mentioned problems. But we can work with
								you on designing a great SaaS product that
								provides the value your custom ers are looking
								for.
							</p>
						</div>
					</div>
					<div className='col-lg-5 wow fadeInRight'>
						<div className='animate_border_wrapper mt-4 mt-lg-0 float-end cta-btn-wrapper'>
							<Link href='/contact'>
								<a className='cr_btn_style animate_border'>
									Get Custom Quote
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Cta
