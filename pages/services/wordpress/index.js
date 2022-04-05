import Head from 'next/head'
import Layout from '../../../components/shared/Layout/Layout'
import PageBanner from '../../../components/shared/PageBanner/PageBanner'
import ServiceDetailsBanner from '../../../components/shared/ServiceDetailsBanner/ServiceDetailsBanner'
import CtaTwo from '../../../components/shared/CtaTwo/CtaTwo'
import ServiceFeatures from '../../../components/serviceDetails/ServiceFeatures/ServiceFeatures'
import ServiceStages from '../../../components/serviceDetails/ServiceStages/ServiceStages'
import features from './features.json'
import stages from './stages.json'
import WpThumb from './wp-thumb.png'

const WordPress = () => {
	return (
		<Layout>
			<Head>
				<title>Dedicated WordPress Development With Assistance</title>
				<meta
					name='description'
					content='Our professional WordPress Development services will make sure that you have an error-free interface and effective navigation of your WordPress site.'
				/>
			</Head>
			<PageBanner title='WordPress Development' />
			<ServiceDetailsBanner
				img={WpThumb.src}
				title='WordPress Development'
				desc='Moreover, we develop a comprehensive suite of WordPress development directly for you. Our professional WordPress services will make sure that you have an error-free interface, effective navigation, and user-friendliness of your WordPress site.'
			/>
			<ServiceFeatures
				features={features}
				heading='Why Do You Choose <br /><span>Our WordPress Development?</span>'
			/>
			<ServiceStages
				heading='Our WordPress Development <span>Process</span>'
				stages={stages}
			/>
			<CtaTwo
				title='Proven Results <span class="d-block">At An Affordable Price</span>'
				desc="We're here to assist you! Submit your query below, and one of our experts will contact you shortly to make your dreams come true."
				bg={true}
			/>
		</Layout>
	)
}

export default WordPress
