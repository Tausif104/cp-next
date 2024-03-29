import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout from '../../../components/shared/Layout/Layout'
import BlogListing from '../../../components/blogPage/BlogListing/BlogListing'
import PageBanner from '../../../components/shared/PageBanner/PageBanner'
import Link from 'next/link'

const CategoryPostList = ({ posts, categories, allPosts }) => {
  const router = useRouter()
  const id = router.query
  return (
    <Layout>
      <Head>
        <title>Archive</title>
      </Head>
      <PageBanner title='Category' />
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
                  {allPosts?.map((post) => (
                    <div className='recent-post-item' key={post.id}>
                      <img src={post._embedded['wp:featuredmedia']?.['0'].source_url} alt={post.title.rendered} />
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
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps = async (context) => {
  const allPostsRes = await fetch('http://creativepeoplesdesign.com/admin/wp-json/wp/v2/posts?_embed')
  const res = await fetch(`http://creativepeoplesdesign.com/admin/wp-json/wp/v2/posts?categories=${context.params.id}&_embed`)
  const catRes = await fetch('http://creativepeoplesdesign.com/admin/wp-json/wp/v2/categories')

  const posts = await res.json()
  const categories = await catRes.json()
  const allPosts = await allPostsRes.json()

  return { props: { posts, categories, allPosts } }
}

export default CategoryPostList
