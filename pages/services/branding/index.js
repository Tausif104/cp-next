import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../../components/shared/Layout/Layout'
import PageBanner from '../../../components/shared/PageBanner/PageBanner'
import ServiceDetailsBanner from '../../../components/shared/ServiceDetailsBanner/ServiceDetailsBanner'
import CtaTwo from '../../../components/shared/CtaTwo/CtaTwo'
import ServiceFeatures from '../../../components/serviceDetails/ServiceFeatures/ServiceFeatures'
import ServiceStages from '../../../components/serviceDetails/ServiceStages/ServiceStages'
import features from './features.json'
import BrandingThumb from './branding-thumb.jpg'

const Branding = () => {
	return (
		<Layout>
			<Head>
				<title>Innovative And Attractive Logos For Branding</title>
				<meta
					name='description'
					content='Our team of experts delivers a well-defined logos and branding strategy that enables you to express your message effectively, efficiently, and aesthetically.'
				/>
			</Head>
			<PageBanner title='Branding &amp; Logo' />
			<ServiceDetailsBanner
				img={BrandingThumb.src}
				title='Logos and Branding'
				desc='Our team of experts delivers a well-defined brand strategy that enables you to express your message, quality, and advantages effectively, efficiently, and aesthetically, bringing more attention and creating remarkable interactions. As part of our branding services at CreativePeoples, we believe in designing and re-designing thought-provoking branding services that can add an appealing touch to your overall brand existence. Moreover, our creative and professional team will design innovative and attractive logos for your business that becomes your brand’s identity.'
			/>
			<ServiceFeatures
				extraClass='padding_top'
				heading='How To Make </br> <span>A Logo For Your Brand Identity?</span>'
				features={features}
			/>
			<section className='cre_section padding_bottom'>
				<div className='container custom_container'>
					<div className='row justify-content-between align-items-center'>
						<div className='col-lg-6 wow fadeInLeft'>
							<div className='cre_cta_content'>
								<h4>
									Request a quote or get in contact if
									you&apos;d like to know more information
									about our Print Logo Design and Branding
									offerings.
								</h4>
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
			<CtaTwo
				title='Proven Results <span class="d-block">At An Affordable Price</span>'
				desc="We're here to assist you! Submit your query below, and one of our experts will contact you shortly to make your dreams come true."
				bg={true}
			/>
		</Layout>
	)
}

export default Branding
