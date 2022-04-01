import Layout from '../../../components/shared/Layout/Layout'
import PageBanner from '../../../components/shared/PageBanner/PageBanner'
import ServiceDetailsBanner from '../../../components/shared/ServiceDetailsBanner/ServiceDetailsBanner'
import CtaTwo from '../../../components/shared/CtaTwo/CtaTwo'
import ServiceFeatures from '../../../components/serviceDetails/ServiceFeatures/ServiceFeatures'
import ServiceStages from '../../../components/serviceDetails/ServiceStages/ServiceStages'
import features from './features.json'
import stages from './stages.json'
import LandingPageThumb from './landing-page-thumb.png'

const LandingPage = () => {
	return (
		<Layout>
			<PageBanner title='LANDING PAGE DESIGN' />
			<ServiceDetailsBanner
				img={LandingPageThumb.src}
				title='Landing Page Design'
				desc="Whether you want to create brand awareness, get leads, or get more traffic, you'll need an impactful landing page agency on your side. Our most reliable customized and data-driven landing pages enable you to attract more visitors, gain reliability, generate more leads, and boost your brand's reputation."
			/>
			<ServiceFeatures
				heading='Why Do You Choose <br /><span>Our Landing Page Design Services?</span>'
				features={features}
			/>
			<ServiceStages
				heading='Our Landing Page </br> Design & Development <span>Process</span>'
				stages={stages}
			/>
		</Layout>
	)
}

export default LandingPage
