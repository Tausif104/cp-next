import Head from 'next/head'
import Layout from '../../../components/shared/Layout/Layout'
import PageBanner from '../../../components/shared/PageBanner/PageBanner'
import ServiceDetailsBanner from '../../../components/shared/ServiceDetailsBanner/ServiceDetailsBanner'
import CtaTwo from '../../../components/shared/CtaTwo/CtaTwo'
import ServiceFeatures from '../../../components/serviceDetails/ServiceFeatures/ServiceFeatures'
import ServiceStages from '../../../components/serviceDetails/ServiceStages/ServiceStages'
import features from './features.json'
import stages from './stages.json'
import ResponsiveThumb from './images/responsive.png'

const ResponsiveWeb = () => {
	return (
		<Layout>
			<Head>
				<title>Well Responsive At Any Platform</title>
				<meta
					name='description'
					content='We are specialized in building responsive websites that are visually appealing and help you reach your business goals: increased leads, sales, and traffic.'
				/>
			</Head>
			<PageBanner title='Responsive Website Design' />
			<ServiceDetailsBanner
				img={ResponsiveThumb.src}
				title='Responsive Website Design'
				desc="CreativePeoples specializes in building responsive websites that are visually appealing and rank highly in search results and help you reach your business goals: increased leads, sales, and traffic. We also ensure that the user will always get the best experience by customizing menus and controls to match the device's screen size and height."
			/>
			<ServiceFeatures
				heading='Why Do You Choose <br /><span>Our Responsive Web Design Services?</span>'
				features={features}
			/>
			<ServiceStages
				heading='Our Responsive Web Design <span>Process</span>'
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

export default ResponsiveWeb
