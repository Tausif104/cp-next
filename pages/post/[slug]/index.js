import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef, useState, useEffect } from 'react'
import BlogSidebar from '../../../components/blogPage/BlogSidebar/BlogSidebar'
import Layout from '../../../components/shared/Layout/Layout'
import axios from 'axios'
import moment from 'moment'
import BlogCard from '../../../components/blogPage/BlogCard/BlogCard'

const BlogDetails = ({ post }) => {
	const [comment, setComment] = useState({})
	const [comments, setComments] = useState([])
	const [loading, setLoading] = useState(false)

	const router = useRouter()
	const { slug } = router.query

	const { id, title, content, excerpt, link } = post[0]

	const newContent = content && content.rendered.replaceAll(link + '#', '#')

	// refs
	const nameRef = useRef()
	const emailRef = useRef()
	const commentRef = useRef()

	// useEffect(() => {
	// 	setLoading(true)
	// 	const fetchAllComments = async () => {
	// 		const { data } = await axios(
	// 			`https://creativepeoples.xyz/projects/cp-next-admin/wp-json/wp/v2/comments?post=${id}`
	// 		)
	// 		setComments(data)
	// 		setLoading(false)
	// 	}

	// 	fetchAllComments()
	// }, [id, comment])

	// const handleCommentForm = async (e) => {
	// 	setLoading(true)
	// 	e.preventDefault()

	// 	const commentObj = {
	// 		post: id,
	// 		author_name: nameRef.current.value,
	// 		author_email: emailRef.current.value,
	// 		content: commentRef.current.value,
	// 	}

	// 	const { data } = await axios.post(
	// 		'https://creativepeoples.xyz/projects/cp-next-admin/wp-json/wp/v2/comments',
	// 		commentObj
	// 	)

	// 	setComment(data)
	// 	setLoading(false)

	// 	setComments([...comments, comment])

	// 	e.target.reset()
	// }

	if (post[0]) {
		return <h1>{title.rendered}</h1>
	}
}

export const getServerSideProps = async (context) => {
	const { data } = await axios.get(
		`https://creativepeoples.xyz/projects/cp-next-admin/wp-json/wp/v2/posts?slug=${context.params.slug}&_embed`
	)

	const post = await data

	return { props: { post } }
}

export default BlogDetails
