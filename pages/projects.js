import Head from 'next/head'
import LivelinkList from '../components/projectPage/LiveLinks/LivelinkList'
import ProjectList from '../components/projectPage/ProjectList/ProjectList'
import Layout from '../components/shared/Layout/Layout'
import PageBanner from '../components/shared/PageBanner/PageBanner'

const projects = ({ projects, links }) => {
  return (
    <Layout>
      <Head>
        <title>Fully Customer Satisfied Projects</title>
        <meta name='description' content='We have delivered 1100+ customer-satisfied projects with smiles, happiness, joys, and charm. Click here and spread your joy with everyone!' />
      </Head>
      <PageBanner title='Projects' />
      <ProjectList projects={projects} />
      <LivelinkList links={links} />
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://api.dribbble.com/v2/user/shots?access_token=1d41a60e6a59faef44cabd36abcf7003292ec9a0a49fc2db833e2c537bcb86b5')

  const linkRes = await fetch('https://creativepeoplesdesign.com/admin/wp-json/wp/v2/link?per_page=100&&_embed')

  const projects = await res.json()
  const links = await linkRes.json()

  return { props: { projects, links }, revalidate: 10 }
}

export default projects
