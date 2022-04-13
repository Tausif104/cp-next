import Head from 'next/head'
import Layout from '../../../components/shared/Layout/Layout'
import PageBanner from '../../../components/shared/PageBanner/PageBanner'
import ServiceDetailsBanner from '../../../components/shared/ServiceDetailsBanner/ServiceDetailsBanner'
import CtaTwo from '../../../components/shared/CtaTwo/CtaTwo'
import ServiceFeatures from '../../../components/serviceDetails/ServiceFeatures/ServiceFeatures'
import ServiceStages from '../../../components/serviceDetails/ServiceStages/ServiceStages'
import features from './features.json'
import stages from './stages.json'
import PrintingThumb from './printing-thumb.jpg'
import CpFav from './cp-fav.png'

const PrintDesigns = () => {
	return (
		<Layout>
			<Head>
				<title>Pixel- Perfect Print Design Services</title>
				<meta
					name='description'
					content='CreativePeoples designs world-class marketing materials as a print design with pixel-perfect strategies for your digital products.'
				/>
			</Head>
			<PageBanner title='PRINT DESIGNS' />
			<ServiceDetailsBanner
				img={PrintingThumb.src}
				title='Print Designs'
				desc='CreativePeoples designs world-class marketing materials with pixel-perfect strategies for your digital products. We also believe great product results from an impeccable design and we do it perfectly to spread your products, services, promotions, offers, messages worldwide.'
			/>
			<ServiceFeatures
				heading='Why Do You Choose <br/> <span>Our Print Design Service?</span>'
				features={features}
			/>
			<ServiceStages
				stages={stages}
				heading='Steps Of Preparing Your Amazing <br/>  <span>Print Design Materials</span>'
			/>
			<CtaTwo
				title='Proven Results <span class="d-block">At An Affordable Price</span>'
				desc="We're here to assist you! Submit your query below, and one of our experts will contact you shortly to make your dreams come true."
				bg={true}
			/>
		</Layout>
	)
}

export default PrintDesigns
