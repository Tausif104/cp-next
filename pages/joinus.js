import Layout from '../components/shared/Layout/Layout'
import PageBanner from '../components/shared/PageBanner/PageBanner'
import Benefits from '../components/joinUs/Benefits/Benefits'
import Video from '../components/joinUs/Video/Video'
import JobListing from '../components/joinUs/JobListing/JobListing'

const joinus = () => {
	return (
		<Layout>
			<PageBanner title='JOIN US' />
			<Benefits />
			<Video />
			<JobListing />
		</Layout>
	)
}

export default joinus
