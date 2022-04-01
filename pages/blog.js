import Layout from '../components/shared/Layout/Layout'
import PageBanner from '../components/shared/PageBanner/PageBanner'
import BlogListing from '../components/blogPage/BlogListing/BlogListing'
import BlogSidebar from '../components/blogPage/BlogSidebar/BlogSidebar'

const blog = ({ posts }) => {
	return (
		<Layout>
			<PageBanner title='Blog' />
			<div className='container custom_container padding_top padding_bottom'>
				<div className='row'>
					<div className='col-lg-9'>
						<BlogListing posts={posts} />
					</div>
					<div className='col-lg-3'>
						<BlogSidebar />
					</div>
				</div>
			</div>
		</Layout>
	)
}

export const getServerSideProps = async () => {
	const res = await fetch(
		'https://creativepeoples.xyz/projects/cp-next-admin/wp-json/wp/v2/posts?_embed'
	)
	const posts = await res.json()

	return { props: { posts } }
}

export default blog
