import Head from 'next/head'
import Layout from '../components/shared/Layout/Layout'
import PageBanner from '../components/shared/PageBanner/PageBanner'
import AboutCounter from '../components/aboutPage/AboutCounter/AboutCounter'
import Goal from '../components/aboutPage/Goal/Goal'
import Team from '../components/aboutPage/Team/Team'
import CtaTwo from '../components/shared/CtaTwo/CtaTwo'
import LogoSlider from '../components/aboutPage/LogoSlider/LogoSlider'

const about = () => {
	return (
		<>
			<Head>
				<title>
					A Diversified Design, Development, And Branding Agency.
				</title>
				<meta
					name='description'
					content='We help businesses grow and grow and turn ideas into engaging digital products to ensure your ROI. For more info About Us, just click here!'
				/>
			</Head>
			<Layout>
				<PageBanner title='About Us' />
				<AboutCounter />
				<Goal />
				<LogoSlider />
				<Team />
				<CtaTwo
					title='Proven Results </br> <span>at Affordable Prices</span>'
					desc="We're here to assist you! Submit your query below, and one of our experts will contact you shortly to make your dreams come true."
				/>
			</Layout>
		</>
	)
}

export default about
