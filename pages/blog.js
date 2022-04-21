import Head from 'next/head'
import { useState, useEffect } from 'react'
import Layout from '../components/shared/Layout/Layout'
import PageBanner from '../components/shared/PageBanner/PageBanner'
import BlogListing from '../components/blogPage/BlogListing/BlogListing'
import Link from 'next/link'
import trimWords from 'trim-words'

const Blog = ({ posts }) => {
	const [visible, setVisible] = useState(4)

	const handleLoadMore = () => {
		if (posts.length > visible) {
			setVisible((prev) => prev + 4)
		}
	}

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
						<BlogListing posts={posts.slice(0, visible)} />
						<div className='load-more-wrapper text-center mt-5'>
							{posts.length > visible && (
								<button
									className='inline-btn'
									onClick={handleLoadMore}
								>
									Load More
								</button>
							)}
						</div>
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
												{post.x_featured_media_original && (
													<img
														src={
															post.x_featured_media_original
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
															<a
																dangerouslySetInnerHTML={{
																	__html: post
																		.title
																		.rendered,
																}}
															></a>
														</Link>
													</h5>
													<div
														dangerouslySetInnerHTML={{
															__html: trimWords(
																post.excerpt
																	.rendered,
																5,
																'...'
															),
														}}
													></div>
												</div>
											</div>
										))}
								</div>
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
		'https://creativepeoples.xyz/projects/cp-next-admin/wp-json/wp/v2/posts?per_page=100&&_embed'
	)
	const catRes = await fetch(
		'https://creativepeoples.xyz/projects/cp-next-admin/wp-json/wp/v2/categories'
	)
	const posts = await res.json()
	const categories = await catRes.json()

	return { props: { posts, categories } }
}

export default Blog
