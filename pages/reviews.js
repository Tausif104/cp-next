import Head from 'next/head'
import Layout from '../components/shared/Layout/Layout'
import PageBanner from '../components/shared/PageBanner/PageBanner'
import CtaTwo from '../components/shared/CtaTwo/CtaTwo'
import ReviewList from '../components/reviewPage/ReviewList/ReviewList'

const reviews = () => {
	return (
		<Layout>
			<Head>
				<title>Find Reviews To Ensure Yourself</title>
				<meta
					name='description'
					content='Our thousand customers have been satisfied with our delivered services and left valuable client reviews. Read and ensure yourself before working with us.'
				/>
			</Head>
			<PageBanner title='Client Reviews'></PageBanner>
			<ReviewList />
			<CtaTwo
				title='Proven Results <span class="d-block">at Affordable Prices</span>'
				desc="We're here to assist you! Submit your query below, and one of our experts will contact you shortly to make your dreams come true."
				bg={true}
			/>
		</Layout>
	)
}

export default reviews
