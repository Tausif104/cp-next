import Link from 'next/link'
import moment from 'moment'
import BlogCard from '../../blogPage/BlogCard/BlogCard'

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
							posts
								.slice(0, 3)
								.map((post) => (
									<BlogCard post={post} column={3} />
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
