import Layout from '../../../components/shared/Layout/Layout'
import PageBanner from '../../../components/shared/PageBanner/PageBanner'
import ServiceDetailsBanner from '../../../components/shared/ServiceDetailsBanner/ServiceDetailsBanner'
import CtaTwo from '../../../components/shared/CtaTwo/CtaTwo'
import UiDesignThumb from './ui-design.png'
import ServiceFeatures from '../../../components/serviceDetails/ServiceFeatures/ServiceFeatures'
import ServiceStages from '../../../components/serviceDetails/ServiceStages/ServiceStages'
import features from './features.json'
import stages from './ui-ux-stages.json'

const UiDesign = () => {
	return (
		<Layout>
			<PageBanner title='UI/UX DESIGN' />
			<ServiceDetailsBanner
				img={UiDesignThumb.src}
				title='UI/UX Design'
				desc="We provide a valuable and robust user experience that progresses your business with a significant competitive advantage in gaining and sustaining customers. Also, we offer out-of-the-box UI/UX design services by following the latest design trends and carefully considering the client's requirements."
			/>
			<ServiceFeatures
				heading='Why Do You Choose <br /><span>Our UI/UX Design Services?</span>'
				features={features}
			/>
			<ServiceStages
				heading='This Is How We Do <span>UI/UX Design</span>'
				stages={stages}
			/>
		</Layout>
	)
}

export default UiDesign
