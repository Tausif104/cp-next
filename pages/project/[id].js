import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from '../../components/shared/Layout/Layout'
import PageBanner from '../../components/shared/PageBanner/PageBanner'
import axios from 'axios'

const Project = ({ project }) => {
  const router = useRouter()
  const { id } = router.query
  const { title, description, images, tags } = project

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <PageBanner title='Project Details' />
      <section className='project-details-section'>
        <div className='container custom_container'>
          <div className='row'>
            <div className='col'>
              <img className='img-fluid' src={images?.hidpi} alt={title} />
              <h1>{title}</h1>
              <div
                className='project-details-content'
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              />
              <ul>{tags && tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const { data } = await axios.get('https://api.dribbble.com/v2/user/shots?access_token=1d41a60e6a59faef44cabd36abcf7003292ec9a0a49fc2db833e2c537bcb86b5')

  const paths = data.map((post) => {
    return {
      params: {
        id: post.id.toString(),
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`https://api.dribbble.com/v2/shots/${params.id}/?access_token=1d41a60e6a59faef44cabd36abcf7003292ec9a0a49fc2db833e2c537bcb86b5`)

  const project = await res.json()

  return { props: { project } }
}

export default Project
