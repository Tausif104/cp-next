import Link from 'next/link'

const CtaTwo = ({ bg, title, desc }) => {
	return (
		<section
			className={`cre_cta_section portfolio_bg section_padding ${
				bg === true && 'gray-bg'
			}`}
		>
			<div className='container custom_container'>
				<div className='row justify-content-center'>
					<div className='col-lg-9'>
						<div className='cre_cta_wrapper text-center'>
							<h2 className='title mb-4 wow fadeInUp'>
								<div
									dangerouslySetInnerHTML={{
										__html: title,
									}}
								/>
							</h2>
							<p className='description mb-1 wow fadeInUp'>
								{desc}
							</p>
							<div className='animate_border_wrapper mt-4 wow fadeInUp'>
								<Link href='/contact'>
									<a className='cr_btn_style animate_border'>
										Get In Touch
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CtaTwo
