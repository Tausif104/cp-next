import Layout from '../components/shared/Layout/Layout'
import PageBanner from '../components/shared/PageBanner/PageBanner'
import CtaTwo from '../components/shared/CtaTwo/CtaTwo'
import ReviewList from '../components/reviewPage/ReviewList/ReviewList'

const reviews = () => {
	return (
		<Layout>
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
