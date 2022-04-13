import BlogCard from '../BlogCard/BlogCard'

const BlogListing = ({ posts }) => {
	return (
		<div className='row g-5'>
			{posts.map((post) => (
				<BlogCard key={post.id} post={post} column={2} />
			))}
		</div>
	)
}

export default BlogListing
