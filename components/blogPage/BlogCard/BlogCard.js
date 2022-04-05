import Link from 'next/link'
import moment from 'moment'

const BlogCard = ({ post }) => {
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
							alt={post.title.rendered}
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
							<i className='far fa-clock me-2'></i>
							{moment(post.date).format('MMM Do YY')}
						</span>
						<span>
							<i className='far fa-user me-2'></i> by{' '}
							<Link
								href={`/author/${post._embedded.author[0].id}`}
							>
								<a className='text-capitalize'>
									{post._embedded.author[0].name}
								</a>
							</Link>
						</span>
						<span>
							<i className='far fa-comments me-2'></i>{' '}
							{post._embedded.replies[0].length} Comments
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
