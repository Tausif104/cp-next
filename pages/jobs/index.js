import { Col, Container, Row } from 'react-bootstrap'
import Layout from '../../components/shared/Layout/Layout'
import PageBanner from '../../components/shared/PageBanner/PageBanner'

const Jobs = () => {
  return (
    <Layout>
      <PageBanner title='Job Vacancy' />
      <section className='jobs-description-section'>
        <Container>
          <Row>
            <Col>
              <div className='jobs-desc'>
                <h1>Senior Front End Developer</h1>
                <ul className='jobs-meta'>
                  <li>
                    <i className='fas fa-map-marker-alt'></i> Melbourne Victoria, AU
                  </li>
                  <li>
                    <i className='fas fa-dollar-sign'></i> $50k - $75k
                  </li>
                  <li>
                    <i className='fas fa-calendar-check'></i> Full Time
                  </li>
                </ul>
                <div className='job-details'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore placeat dignissimos, vero praesentium esse, aut iusto quibusdam, nobis recusandae fugit officia? Quo porro fugit
                    ipsa inventore nobis numquam ratione ipsum mollitia voluptatum ab. Minus, debitis ex officiis labore ea fuga nemo nihil provident laboriosam autem tempore perspiciatis in commodi
                    velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure veniam nihil! Placeat et ullam, laboriosam commodi culpa repellendus, dolores dolorem veniam perferendis
                    eaque id vitae doloribus itaque adipisci modi sint est deleniti esse sit suscipit. Eligendi voluptas officiis labore ex a rerum, quis itaque eaque delectus in? Corporis voluptatem
                    fugiat ea recusandae aperiam, incidunt adipisci sit, hic ipsa, aliquid laudantium eum voluptate totam quasi odio qui suscipit ullam reiciendis molestias doloremque nemo quae! Nihil
                    perspiciatis sapiente beatae aut libero?
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, tempore molestias atque maiores officia deserunt repellat ratione dolorem quam sint rem, repellendus iste quod
                    optio eum, omnis enim perspiciatis! Amet?
                  </p>
                </div>
                <div className='responsibilities'>
                  <h3>Responsibilities:</h3>
                  <ul>
                    <li>Aenean rhoncus ac nibh ac hendrerit. Duis lobortis at nulla quis lobortis.</li>
                    <li>Pellentesque tempor feugiat tortor, interdum cursus urna. Phasellus scelerisque</li>
                    <li>Aenean rhoncus ac nibh ac hendrerit. Duis lobortis at nulla quis lobortis.</li>
                    <li>Aenean rhoncus ac nibh ac hendrerit. Duis lobortis at nulla quis lobortis.</li>
                    <li>Aenean rhoncus ac nibh ac hendrerit. Duis lobortis at nulla quis lobortis.</li>
                    <li>Aenean rhoncus ac nibh ac hendrerit. Duis lobortis at nulla quis lobortis.</li>
                    <li>Aenean rhoncus ac nibh ac hendrerit. Duis lobortis at nulla quis lobortis.</li>
                    <li>Aenean rhoncus ac nibh ac hendrerit. Duis lobortis at nulla quis lobortis.</li>
                  </ul>
                </div>
                <div className='requirments'>
                  <h3>Requirments:</h3>
                  <ul>
                    <li>Aenean rhoncus ac nibh ac hendrerit. Duis lobortis at nulla quis lobortis.</li>
                    <li>Pellentesque tempor feugiat tortor, interdum cursus urna. Phasellus scelerisque</li>
                    <li>Aenean rhoncus ac nibh ac hendrerit. Duis lobortis at nulla quis lobortis.</li>
                    <li>Aenean rhoncus ac nibh ac hendrerit. Duis lobortis at nulla quis lobortis.</li>
                    <li>Aenean rhoncus ac nibh ac hendrerit. Duis lobortis at nulla quis lobortis.</li>
                    <li>Aenean rhoncus ac nibh ac hendrerit. Duis lobortis at nulla quis lobortis.</li>
                    <li>Aenean rhoncus ac nibh ac hendrerit. Duis lobortis at nulla quis lobortis.</li>
                    <li>Aenean rhoncus ac nibh ac hendrerit. Duis lobortis at nulla quis lobortis.</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='apply-form'>
        <Container>
          <Row>
            <Col md={12}>
              <div className='section-title'>
                <h2>
                  <span>Apply for</span> this Job
                </h2>
              </div>
            </Col>
            <Col md={12}>
              <form action=''>
                <Row className='g-4'>
                  <Col md={4}>
                    <div className='form-group'>
                      <label htmlFor=''>First Name</label>
                      <input type='text' placeholder='First Name' className='form-control' />
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className='form-group'>
                      <label htmlFor=''>Last Name</label>
                      <input type='text' placeholder='Last Name' className='form-control' />
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className='form-group'>
                      <label htmlFor=''>Email</label>
                      <input type='email' placeholder='Email Address' className='form-control' />
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className='form-group'>
                      <label htmlFor=''>Portfolio</label>
                      <input type='url' placeholder='Portfolio Link' className='form-control' />
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className='form-group'>
                      <label htmlFor=''>Phone</label>
                      <input type='tel' placeholder='Phone Number' className='form-control' />
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className='form-group'>
                      <label htmlFor=''>Resume</label>
                      <input type='file' placeholder='Resume' className='form-control' />
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className='form-group'>
                      <label htmlFor=''>Write about yourself</label>
                      <textarea className='form-control' placeholder='Tell us about yourself in few lines'></textarea>
                    </div>
                  </Col>
                  <Col md={12} className='text-center'>
                    <div className='animate_border_wrapper mt-4'>
                      <button type='submit' className='cr_btn_style animate_border'>
                        Apply Now
                      </button>
                    </div>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  )
}

export default Jobs
