import Head from 'next/head'
import { Col, Container, Row } from 'react-bootstrap'
import Layout from '../../../components/shared/Layout/Layout'
import PageBanner from '../../../components/shared/PageBanner/PageBanner'
import ApplyForm from '../../../components/jobs/ApplyForm'
import axios from 'axios'

const Jobs = ({ jobs }) => {
  const job = jobs[0]

  return (
    <>
      <Head>
        <title>{job.title.rendered}</title>
        <meta name='description' content='The URL you have entered is not found.' />
      </Head>
      <Layout>
        <PageBanner title='Job Vacancy' />
        <section className='jobs-description-section'>
          <Container>
            <Row>
              <Col>
                <div className='jobs-desc'>
                  <h1>{job.title.rendered}</h1>
                  <ul className='jobs-meta'>
                    <li>
                      <i className='fas fa-map-marker-alt'></i> {job.x_metadata.location}
                    </li>
                    <li>
                      <i className='fas fa-money-bill'></i> {job.x_metadata.salary}
                    </li>
                    <li>
                      <i className='fas fa-calendar-check'></i> {job.x_metadata.type}
                    </li>
                  </ul>
                  <div className='job-details'>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: job.content.rendered,
                      }}
                    ></div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <ApplyForm />
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  const { data: jobs } = await axios.get(`http://creativepeoplesdesign.com/admin/wp-json/wp/v2/job?slug=${context.params.slug}&_embed`)

  return { props: { jobs } }
}

export default Jobs
