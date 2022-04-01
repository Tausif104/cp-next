import Link from 'next/link'

const BlogCard = ({ post }) => {
	console.log(post.slug)
	return (
		<div className='col-lg-6'>
			<div className='blog-post-card'>
				<Link href={`/post/${post.slug}`}>
					<a>
						<img
							className='img-fluid'
							src={
								post._embedded['wp:featuredmedia']?.['0']
									.source_url
							}
							alt=''
						/>
					</a>
				</Link>
				<div className='blog-post-text'>
					<h3>
						<Link href={`/post/${post.slug}`}>
							{post.title.rendered}
						</Link>
					</h3>
					<div className='blog-meta'>
						<span>
							<i className='far fa-clock me-2'></i>1 hour ago
						</span>
						<span>
							<i className='far fa-user me-2'></i> by{' '}
							<a href=''>Admin</a>
						</span>
						<span>
							<i className='far fa-comments me-2'></i> 15 Comments
						</span>
					</div>
					<div
						className='excerpt'
						dangerouslySetInnerHTML={{
							__html: post.excerpt.rendered,
						}}
					></div>
					<Link href={`/post/${post.slug}`}>Read More</Link>
				</div>
			</div>
		</div>
	)
}

export default BlogCard
