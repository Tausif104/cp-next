import Link from 'next/link'
import moment from 'moment'

const BlogCard = ({ post, column }) => {
	return (
		<div className={`col-lg-${column === 2 ? '6' : '4'}`}>
			<div className='blog-post-card'>
				{post.x_featured_media_original && (
					<Link href={`/${post.slug}`}>
						<a>
							<img
								className='img-fluid'
								src={post.x_featured_media_original}
								alt={post.title.rendered}
							/>
						</a>
					</Link>
				)}
				<div className='blog-post-text'>
					<Link href={`/${post.slug}`}>
						<h3
							dangerouslySetInnerHTML={{
								__html: post.title.rendered,
							}}
						></h3>
					</Link>
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
							{post._embedded.replies
								? post._embedded.replies[0].length
								: 0}{' '}
							Comments
						</span>
					</div>
					<div
						className='excerpt'
						dangerouslySetInnerHTML={{
							__html: post.excerpt.rendered,
						}}
					></div>
					<Link href={`/${post.slug}`}>
						<a className='inline-btn'>
							Read More <i className='fas fa-angle-right'></i>
						</a>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default BlogCard
