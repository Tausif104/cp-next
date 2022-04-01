const BlogSidebar = () => {
	return (
		<aside>
			<div className='profile'>
				<img
					className='img-fluid'
					src='https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80'
					alt=''
				/>
				<h4>About Me</h4>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Magnam, eius voluptates praesentium labore quasi tempore.
				</p>
			</div>

			<div className='recent-post'>
				<h4>Recent Posts</h4>
				<div className='recent-posts-list'>
					<div className='recent-post-item'>
						<img
							src='https://images.unsplash.com/photo-1478146059778-26028b07395a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1784&q=80'
							alt=''
						/>
						<div className='rp-content'>
							<h5>Recent post title</h5>
							<p>
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit.
							</p>
						</div>
					</div>
					<div className='recent-post-item'>
						<img
							src='https://images.unsplash.com/photo-1478146059778-26028b07395a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1784&q=80'
							alt=''
						/>
						<div className='rp-content'>
							<h5>Recent post title</h5>
							<p>
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit.
							</p>
						</div>
					</div>
					<div className='recent-post-item'>
						<img
							src='https://images.unsplash.com/photo-1478146059778-26028b07395a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1784&q=80'
							alt=''
						/>
						<div className='rp-content'>
							<h5>Recent post title</h5>
							<p>
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className='categories'>
				<h4>Categories</h4>
				<ul>
					<li>
						<a href=''>Travel</a>
					</li>
					<li>
						<a href=''>Weather</a>
					</li>
					<li>
						<a href=''>Music</a>
					</li>
					<li>
						<a href=''>Lifestyle</a>
					</li>
					<li>
						<a href=''>Sports</a>
					</li>
					<li>
						<a href=''>Movies</a>
					</li>
					<li>
						<a href=''>Entertainment</a>
					</li>
				</ul>
			</div>
		</aside>
	)
}

export default BlogSidebar
