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
	const router = useRouter()
	const { slug } = router.query

	const { id, title, content, excerpt, link } = post[0]

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
