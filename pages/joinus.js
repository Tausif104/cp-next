import Head from 'next/head'
import Layout from '../components/shared/Layout/Layout'
import PageBanner from '../components/shared/PageBanner/PageBanner'
import Benefits from '../components/joinUs/Benefits/Benefits'
import Video from '../components/joinUs/Video/Video'
import JobListing from '../components/joinUs/JobListing/JobListing'
import ogImage from '../public/meta/join-us-og.jpg'
import axios from 'axios'

const joinus = ({ jobs }) => {
  return (
    <Layout>
      <Head>
        <title>Join with the rapidly growing team.</title>
        <meta name='description' content="At CreativePeoples, we're continually looking for new methods to improve the quality of our work. Join here to develop yourself and enjoy the thrill!" />
        <meta property='og:image' content={ogImage.src} />
      </Head>
      <PageBanner title='JOIN US' />
      <Benefits />
      <Video />
      <JobListing jobs={jobs} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const { data: jobs } = await axios.get('https://creativepeoplesdesign.com/admin/wp-json/wp/v2/job?_embed')

  return { props: { jobs } }
}

export default joinus
