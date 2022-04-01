import LivelinkList from '../components/projectPage/LiveLinks/LivelinkList'
import ProjectList from '../components/projectPage/ProjectList/ProjectList'
import Layout from '../components/shared/Layout/Layout'
import PageBanner from '../components/shared/PageBanner/PageBanner'

const projects = ({ projects }) => {
	return (
		<Layout>
			<PageBanner title='Projects' />
			<ProjectList projects={projects} />
			<LivelinkList />
		</Layout>
	)
}

export async function getServerSideProps() {
	const res = await fetch(
		'https://api.dribbble.com/v2/user/shots?access_token=1d41a60e6a59faef44cabd36abcf7003292ec9a0a49fc2db833e2c537bcb86b5'
	)
	const projects = await res.json()

	return { props: { projects } }
}

export default projects
