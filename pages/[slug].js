import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef, useState, useEffect } from 'react'
import BlogSidebar from '../components/blogPage/BlogSidebar/BlogSidebar'
import Layout from '../components/shared/Layout/Layout'
import axios from 'axios'
import moment from 'moment'
import BlogCard from '../components/blogPage/BlogCard/BlogCard'

const BlogDetails = ({ data, res }) => {
  const [blogs, setBlogs] = useState([])
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    setLoader(true)
    const fetchBlogs = async () => {
      const { data } = await axios.get('http://creativepeoplesdesign.com/admin/wp-json/wp/v2/posts?_embed')
      setBlogs(data)
      setLoader(false)
    }

    fetchBlogs()
  }, [])

  const [comment, setComment] = useState({})
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(false)
  // const [posts, setPosts] = useState(res.data)

  const router = useRouter()
  const { slug } = router.query

  const { id, title, content, excerpt, link } = data[0]

  // const newContent = content?.rendered.replaceAll(link + '#', '#')

  // refs
  const nameRef = useRef()
  const emailRef = useRef()
  const commentRef = useRef()

  useEffect(() => {
    setLoading(true)
    const fetchAllComments = async () => {
      const { data } = await axios(`http://creativepeoplesdesign.com/admin/wp-json/wp/v2/comments?post=${id}`)
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

    const { data } = await axios.post('http://creativepeoplesdesign.com/admin/wp-json/wp/v2/comments', commentObj)

    setComment(data)
    setLoading(false)

    setComments([...comments, comment])

    e.target.reset()
  }

  if (data[0]) {
    return (
      <Layout>
        <Head>
          <title>{title.rendered}</title>
          <meta name='description' content={excerpt.rendered} />
        </Head>
        <section className='blog-details-page'>
          <div className='container custom_container'>
            <div className='row'>
              <div className='col-lg-9'>
                <div className='blog-details-post'>
                  {data[0]?.x_featured_media_original && <img className='w-100' src={data[0]?.x_featured_media_original} alt={title?.rendered} />}
                  <div className='blog-meta'>
                    <span>
                      <i className='far fa-clock me-2'></i>
                      {moment(data[0].date).format('MMM Do YY')}
                    </span>
                    <span>
                      <i className='far fa-user me-2'></i> by{' '}
                      <Link href={`/author/${data[0]._embedded.author[0].id}`}>
                        <a className='text-capitalize'>{data[0]._embedded.author[0].name}</a>
                      </Link>
                    </span>
                    <span>
                      <i className='far fa-comments me-2'></i> {data[0]._embedded?.replies ? data[0]._embedded.replies[0].length : 0} Comments
                    </span>
                  </div>
                  <h1
                    dangerouslySetInnerHTML={{
                      __html: title?.rendered,
                    }}
                  ></h1>
                  {content && (
                    <div
                      className='content'
                      dangerouslySetInnerHTML={{
                        __html: content.rendered,
                      }}
                    ></div>
                  )}
                  <div className='row'>
                    <div className='col-lg-8'>
                      <div className='blog-form'>
                        <h3>Leave us a message</h3>
                        <form onSubmit={handleCommentForm}>
                          <div className='form-group'>
                            <input ref={nameRef} required type='text' className='form-control' placeholder='Name' />
                          </div>
                          <div className='form-group'>
                            <input ref={emailRef} required type='email' className='form-control' placeholder='email' />
                          </div>
                          <div className='form-group'>
                            <textarea ref={commentRef} className='form-control' placeholder='Message'></textarea>
                          </div>
                          <input type='submit' value={loading ? 'Posting' : 'Publish'} />
                        </form>
                        {comments.length > 0 && (
                          <div className='comments-list'>
                            <h4>Comments</h4>
                            {comments.map((c) => (
                              <div key={c.id} className='comment-item'>
                                <div className='comment-avatar'>
                                  <img src={c?.author_avatar_urls?.[96]} alt='' />
                                </div>
                                <div className='comment-right'>
                                  <h4>{c.author_name}</h4>
                                  <div
                                    className='comment-body'
                                    dangerouslySetInnerHTML={{
                                      __html: c?.content?.rendered,
                                    }}
                                  ></div>
                                  <p>{moment(c.date).format('MMM Do YY')}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <BlogSidebar blog={data[0]} blogs={blogs} loader={loader} />
              </div>
            </div>
            <div className='row related_posts'>
              <div className='col-lg-12 text-center'>
                <div className='cre_cta_content'>
                  <h3 className='title'>
                    <span>Related Posts</span>
                  </h3>
                </div>
              </div>
              {data.slice(0, 3).map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export const getStaticPaths = async () => {
  const { data } = await axios.get('http://creativepeoplesdesign.com/admin/wp-json/wp/v2/posts?_embed')

  const paths = data.map((post) => {
    return {
      params: {
        slug: post.slug.toString(),
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const { data } = await axios.get(`http://creativepeoplesdesign.com/admin/wp-json/wp/v2/posts?slug=${params.slug}&_embed`)

  return {
    props: {
      data,
    },
  }
}

export default BlogDetails
