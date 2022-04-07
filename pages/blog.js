import Head from 'next/head'
import Layout from '../components/shared/Layout/Layout'
import PageBanner from '../components/shared/PageBanner/PageBanner'
import BlogListing from '../components/blogPage/BlogListing/BlogListing'
import Link from 'next/link'

const blog = ({ posts, categories }) => {
	return (
		<Layout>
			<Head>
				<title>Learn Everything You Need To Know</title>
				<meta
					name='description'
					content='If you are still confused and want to learn more about our product and services then look no further and go to our Blog Page.'
				/>
			</Head>
			<PageBanner title='Blog' />
			<div className='container custom_container padding_top padding_bottom'>
				<div className='row'>
					<div className='col-lg-9'>
						<BlogListing posts={posts} />
					</div>
					<div className='col-lg-3'>
						<aside>
							<div className='recent-post'>
								<h4>Recent Posts</h4>
								<div className='recent-posts-list'>
									{posts &&
										posts.slice(0, 3).map((post) => (
											<div
												className='recent-post-item'
												key={post.id}
											>
												{post._embedded[
													'wp:featuredmedia'
												]?.['0'].source_url && (
													<img
														src={
															post._embedded[
																'wp:featuredmedia'
															]?.['0'].source_url
														}
														alt={
															post.title.rendered
														}
													/>
												)}
												<div className='rp-content'>
													<h5>
														<Link
															href={`/post/${post.slug}`}
														>
															{
																post.title
																	.rendered
															}
														</Link>
													</h5>
													<div
														dangerouslySetInnerHTML={{
															__html: post.excerpt.rendered.slice(
																0,
																50
															),
														}}
													></div>
												</div>
											</div>
										))}
								</div>
							</div>

							<div className='categories'>
								<h4>Categories - {categories.length}</h4>
								<ul>
									{categories.map((cat) => (
										<li key={cat.id}>
											<Link href={`/category/${cat.id}`}>
												{cat.name}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</aside>
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
	const catRes = await fetch(
		'https://creativepeoples.xyz/projects/cp-next-admin/wp-json/wp/v2/categories'
	)
	const posts = await res.json()
	const categories = await catRes.json()

	return { props: { posts, categories } }
}

export default blog
