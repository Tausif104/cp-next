import Link from 'next/link'

const BlogSidebar = ({ post, posts, categories }) => {
	const { avatar_urls, name, description } = post[0]._embedded.author[0]

	return (
		<aside>
			<div className='share-post'>
				<h3>Share On:</h3>
				<ul>
					<li>
						<a
							href={`https://www.facebook.com/sharer.php?u=https://creativepeoplesdesign.com/post/${post[0].slug}`}
						>
							<i className='fab fa-facebook'></i>
						</a>
					</li>
					<li>
						<a
							href={`https://twitter.com/share?url=https://creativepeoplesdesign.com/post/${post[0].slug}&text=${post[0].title.rendered}`}
						>
							<i className='fab fa-twitter'></i>
						</a>
					</li>
					<li>
						<a
							href={`https://pinterest.com/pin/create/bookmarklet/?media=${post[0]._embedded['wp:featuredmedia']?.['0'].source_url}&url=https://creativepeoplesdesign.com/post/${post[0].slug}`}
						>
							<i className='fab fa-pinterest'></i>
						</a>
					</li>
					<li>
						<a
							href={`https://www.linkedin.com/shareArticle?url=https://creativepeoplesdesign.com/post/${post[0].slug}&title=${post[0].title.rendered}`}
						>
							<i className='fab fa-linkedin-in'></i>
						</a>
					</li>
				</ul>
			</div>
			<div className='profile'>
				<img className='img-fluid' src={avatar_urls['96']} alt={name} />
				<h4>About {name}</h4>
				<p>{description}</p>
			</div>

			<div className='recent-post'>
				<h4>Recent Posts</h4>
				<div className='recent-posts-list'>
					{posts?.map((post) => (
						<div className='recent-post-item' key={post.id}>
							<img
								src={
									post._embedded['wp:featuredmedia']?.['0']
										.source_url
								}
								alt={post.title.rendered}
							/>
							<div className='rp-content'>
								<h5>
									<Link href={`/post/${post.slug}`}>
										{post.title.rendered}
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
							<Link href={`/category/${cat.id}`}>{cat.name}</Link>
						</li>
					))}
				</ul>
			</div>
		</aside>
	)
}

export default BlogSidebar
