import Head from 'next/head'
import Layout from '../components/shared/Layout/Layout'
import PageBanner from '../components/shared/PageBanner/PageBanner'
import Benefits from '../components/joinUs/Benefits/Benefits'
import Video from '../components/joinUs/Video/Video'
import JobListing from '../components/joinUs/JobListing/JobListing'

const joinus = () => {
	return (
		<Layout>
			<Head>
				<title>Join Here To Make Your Dreams Come True</title>
				<meta
					name='description'
					content="At CreativePeoples, we're continually looking for new methods to improve the quality of our work. Join here to develop yourself and enjoy the thrill!"
				/>
			</Head>
			<PageBanner title='JOIN US' />
			<Benefits />
			<Video />
			<JobListing />
		</Layout>
	)
}

export default joinus
