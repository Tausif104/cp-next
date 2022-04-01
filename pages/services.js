import Layout from '../components/shared/Layout/Layout'
import PageBanner from '../components/shared/PageBanner/PageBanner'
import ServiceBanner from '../components/servicePage/ServiceBanner/ServiceBanner'
import ServiceIntro from '../components/servicePage/ServiceIntro/ServiceIntro'
import Solutions from '../components/homePage/solutions/solutions'
import CtaTwo from '../components/shared/CtaTwo/CtaTwo'

const services = () => {
	return (
		<Layout>
			<PageBanner title='Our Services' />
			<ServiceBanner />
			<ServiceIntro />
			<Solutions extraClass='dark-solutions padding_bottom' />
			<CtaTwo
				title='Proven Results <span class="d-block">At An Affordable Price</span>'
				desc="We're here to assist you! Submit your query below, and one of our experts will contact you shortly to make your dreams come true."
				bg={true}
			/>
		</Layout>
	)
}

export default services
