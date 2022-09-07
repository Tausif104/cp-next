import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout from '../../components/shared/Layout/Layout'
import BlogListing from '../../components/blogPage/BlogListing/BlogListing'
import PageBanner from '../../components/shared/PageBanner/PageBanner'
import Link from 'next/link'
import axios from 'axios'

const AuthorPosts = ({ posts, allPosts }) => {
  const router = useRouter()
  const id = router.query
  return (
    <Layout>
      <Head>
        <title>Archive</title>
      </Head>
      <PageBanner title='Author' />
      <div className='container custom_container padding_top padding_bottom'>
        <div className='row'>
          <div className='col-lg-9'>
            <BlogListing posts={posts} />
          </div>
          <div className='col-lg-3'>
            <aside>
              <div className='recent-post'>
                <h4>Recent Posts</h4>
                <div className='recent-posts-list'>
                  {allPosts?.slice(0, 3).map((post) => (
                    <div className='recent-post-item' key={post.id}>
                      {post.x_featured_media_original && <img src={post.x_featured_media_original} alt={post.title.rendered} />}
                      <div className='rp-content'>
                        <h5>
                          <Link href={`/${post.slug}`}>{post.title.rendered}</Link>
                        </h5>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: post.excerpt.rendered.slice(0, 50),
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const { data } = await axios.get('https://creativepeoplesdesign.com/admin/wp-json/wp/v2/posts?_embed')

  const paths = data.map((post) => {
    return {
      params: {
        id: post.author.toString(),
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const allPostsRes = await fetch('https://creativepeoplesdesign.com/admin/wp-json/wp/v2/posts?_embed')
  const res = await fetch(`https://creativepeoplesdesign.com/admin/wp-json/wp/v2/posts?author=${params.id}&_embed`)

  const posts = await res.json()
  const allPosts = await allPostsRes.json()

  return { props: { posts, allPosts } }
}

export default AuthorPosts
