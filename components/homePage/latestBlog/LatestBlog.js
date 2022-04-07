import Link from 'next/link'
import moment from 'moment'

const LatestBlog = ({ posts }) => {
	return (
		<>
			<section className='cre_blog_section section_padding position-relative'>
				<div className='container custom_container'>
					<div className='row justify-content-between mb_80 blog_title_wraper'>
						<div className='col-lg-4'>
							<div className='section_title mb-0'>
								<h2 className='title wow fadeInLeft'>
									Our Latest <span>Blog Posts</span>{' '}
								</h2>
							</div>
						</div>
						<div className='col-lg-5 wow fadeInRight'>
							<p className='description'>
								We post blogs to help developing new creativity
								and educate businesses in designing niche.
								Checkout our recent blog posts...
							</p>
						</div>
					</div>
					<div className='row g-4'>
						{posts?.length > 0 &&
							posts.slice(0, 3).map((post, i) => (
								<div key={post.id} className='col-lg-4'>
									<div className='blog-post-card'>
										{post._embedded['wp:featuredmedia']?.[
											'0'
										].source_url && (
											<Link href={`/post/${post.slug}`}>
												<a>
													<img
														className='img-fluid'
														src={
															post._embedded[
																'wp:featuredmedia'
															]?.['0'].source_url
														}
														alt=''
													/>
												</a>
											</Link>
										)}
										<div className='blog-post-text'>
											<h3>
												<Link
													href={`/post/${post.slug}`}
												>
													{post.title.rendered}
												</Link>
											</h3>
											<div className='blog-meta'>
												<span>
													<i className='far fa-clock me-2'></i>
													{moment(post.date).format(
														'MMM Do YY'
													)}
												</span>
												<span>
													<i className='far fa-user me-2'></i>{' '}
													by{' '}
													<Link
														href={`/author/${post._embedded.author[0].id}`}
													>
														<a className='text-capitalize'>
															{
																post._embedded
																	.author[0]
																	.name
															}
														</a>
													</Link>
												</span>
												<span>
													<i className='far fa-comments me-2'></i>{' '}
													{post._embedded.replies
														? post._embedded
																.replies[0]
																.length
														: 0}{' '}
													Comments
												</span>
											</div>
											<div
												className='excerpt'
												dangerouslySetInnerHTML={{
													__html: post.excerpt
														.rendered,
												}}
											></div>
											<Link href={`/post/${post.slug}`}>
												Read More
											</Link>
										</div>
									</div>
								</div>
							))}
					</div>
				</div>
				<div className='cre_parallax_section wow fadeIn'>
					<h2 className='parallax_text'>blogs</h2>
				</div>
			</section>
		</>
	)
}

export default LatestBlog
