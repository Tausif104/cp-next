import { useRouter } from 'next/router'
import BlogSidebar from '../../../components/blogPage/BlogSidebar/BlogSidebar'
import Layout from '../../../components/shared/Layout/Layout'

const blogdetails = ({ post }) => {
	const router = useRouter()
	const slug = router.query

	console.log(post[0])
	const { title, content } = post[0]

	return (
		<Layout>
			<section className='blog-details-page'>
				<div className='container custom_container'>
					<div className='row'>
						<div className='col-lg-9'>
							<div className='blog-details-post'>
								<img
									className='w-100'
									src={
										post[0]?._embedded[
											'wp:featuredmedia'
										]?.['0'].source_url
									}
									alt={title.rendered}
								/>
								<h1>{title.rendered}</h1>
								<div
									className='content'
									dangerouslySetInnerHTML={{
										__html: content.rendered,
									}}
								></div>
							</div>
						</div>
						<div className='col-lg-3'>
							<BlogSidebar />
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export const getServerSideProps = async (context) => {
	const res = await fetch(
		`https://creativepeoples.xyz/projects/cp-next-admin/wp-json/wp/v2/posts?slug=${context.params.slug}&_embed`
	)
	const post = await res.json()

	return { props: { post } }
}

export default blogdetails
