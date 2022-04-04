import { useRouter } from 'next/router'
import { useRef, useState, useEffect } from 'react'
import BlogSidebar from '../../../components/blogPage/BlogSidebar/BlogSidebar'
import Layout from '../../../components/shared/Layout/Layout'
import axios from 'axios'
import moment from 'moment'

const blogdetails = ({ post, posts, categories }) => {
	const [comment, setComment] = useState({})
	const [comments, setComments] = useState([])
	const [loading, setLoading] = useState(false)

	const router = useRouter()
	const slug = router.query

	const { id, title, content } = post[0]

	// refs
	const nameRef = useRef()
	const emailRef = useRef()
	const commentRef = useRef()

	useEffect(() => {
		setLoading(true)
		const fetchAllComments = async () => {
			const { data } = await axios(
				`https://creativepeoples.xyz/projects/cp-next-admin/wp-json/wp/v2/comments?post=${id}`
			)
			setComments(data)
			setLoading(false)
		}

		fetchAllComments()
	}, [id, comment])

	const handleCommentForm = async (e) => {
		setLoading(true)
		e.preventDefault()

		const commentObj = {
			post: id,
			author_name: nameRef.current.value,
			author_email: emailRef.current.value,
			content: commentRef.current.value,
		}

		const { data } = await axios.post(
			'https://creativepeoples.xyz/projects/cp-next-admin/wp-json/wp/v2/comments',
			commentObj
		)

		setComment(data)
		setLoading(false)

		setComments([...comments, comment])

		e.target.reset()
	}

	return (
		<Layout>
			<section className='blog-details-page'>
				<div className='container custom_container'>
					<div className='row'>
						<div className='col-lg-9'>
							<div className='blog-details-post'>
								<img
									className='w-100'
									src={
										post[0]?._embedded[
											'wp:featuredmedia'
										]?.['0'].source_url
									}
									alt={title?.rendered}
								/>
								<h1>{title?.rendered}</h1>
								<div
									className='content'
									dangerouslySetInnerHTML={{
										__html: content?.rendered,
									}}
								></div>
								<div className='row'>
									<div className='col-lg-8'>
										<div className='blog-form'>
											<h3>Leave us a message</h3>
											<form onSubmit={handleCommentForm}>
												<div className='form-group'>
													<input
														ref={nameRef}
														required
														type='text'
														className='form-control'
														placeholder='Name'
													/>
												</div>
												<div className='form-group'>
													<input
														ref={emailRef}
														required
														type='email'
														className='form-control'
														placeholder='email'
													/>
												</div>
												<div className='form-group'>
													<textarea
														ref={commentRef}
														className='form-control'
														placeholder='Message'
													></textarea>
												</div>
												<input
													type='submit'
													value={
														loading
															? 'Posting'
															: 'Publish'
													}
												/>
											</form>
											<div className='comments-list'>
												<h4>Comments</h4>
												{comments.map((c) => (
													<div className='comment-item'>
														<div className='comment-avatar'>
															<img
																src={
																	c
																		?.author_avatar_urls?.[96]
																}
																alt=''
															/>
														</div>
														<div className='comment-right'>
															<h4>
																{c.author_name}
															</h4>
															<div
																className='comment-body'
																dangerouslySetInnerHTML={{
																	__html: c
																		?.content
																		?.rendered,
																}}
															></div>
															<p>
																{moment(
																	c.date
																).format(
																	'MMM Do YY'
																)}
															</p>
														</div>
													</div>
												))}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='col-lg-3'>
							<BlogSidebar
								post={post}
								posts={posts}
								categories={categories}
							/>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export const getServerSideProps = async (context) => {
	const postsRes = await await fetch(
		'https://creativepeoples.xyz/projects/cp-next-admin/wp-json/wp/v2/posts?_embed'
	)
	const res = await fetch(
		`https://creativepeoples.xyz/projects/cp-next-admin/wp-json/wp/v2/posts?slug=${context.params.slug}&_embed`
	)
	const catRes = await fetch(
		'https://creativepeoples.xyz/projects/cp-next-admin/wp-json/wp/v2/categories'
	)

	const posts = await postsRes.json()
	const post = await res.json()
	const categories = await catRes.json()

	return { props: { post, posts, categories } }
}

export default blogdetails
