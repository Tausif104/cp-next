import { useState } from 'react'
import { Col, Container, Row, Alert, Spinner } from 'react-bootstrap'
import axios from 'axios'

const ApplyForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [portfolio, setPortfolio] = useState('')
  const [phone, setPhone] = useState('')
  const [resume, setResume] = useState('')
  const [about, setAbout] = useState('')
  const [alert, setAlert] = useState('')
  const [loading, setLoading] = useState('')

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault()

    let formData = new FormData()

    formData.append('firstName', firstName)
    formData.append('lastName', lastName)
    formData.append('email', email)
    formData.append('portfolio', portfolio)
    formData.append('phone', phone)
    formData.append('resume', resume)
    formData.append('about', about)

    e.target.reset()
    const { data } = await axios.post('https://creativepeoplesdesign.com/admin/wp-json/contact-form-7/v1/contact-forms/199/feedback', formData)

    setLoading(false)

    if (data.status === 'mail_sent') {
      setAlert('We have got your information. Will contact you later')
    } else {
      setAlert('Mail not sent')
    }
  }

  return (
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
            {alert ? (
              <Alert className='text-center' variant='success'>
                {alert}
              </Alert>
            ) : (
              <form onSubmit={handleSubmit}>
                <Row className='g-4'>
                  <Col md={4}>
                    <div className='form-group'>
                      <label htmlFor=''>First Name</label>
                      <input onChange={(e) => setFirstName(e.target.value)} type='text' placeholder='First Name' className='form-control' />
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className='form-group'>
                      <label htmlFor=''>Last Name</label>
                      <input onChange={(e) => setLastName(e.target.value)} type='text' placeholder='Last Name' className='form-control' />
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className='form-group'>
                      <label htmlFor=''>Email</label>
                      <input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email Address' className='form-control' />
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className='form-group'>
                      <label htmlFor=''>Portfolio</label>
                      <input onChange={(e) => setPortfolio(e.target.value)} type='url' placeholder='Portfolio Link' className='form-control' />
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className='form-group'>
                      <label htmlFor=''>Phone</label>
                      <input onChange={(e) => setPhone(e.target.value)} type='tel' placeholder='Phone Number' className='form-control' />
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className='form-group'>
                      <label htmlFor=''>Resume</label>
                      <input onChange={(e) => setResume(e.target.files[0])} type='file' placeholder='Resume' className='form-control' />
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className='form-group'>
                      <label htmlFor=''>Write about yourself</label>
                      <textarea onChange={(e) => setAbout(e.target.value)} className='form-control' placeholder='Tell us about yourself in few lines'></textarea>
                    </div>
                  </Col>
                  <Col md={12} className='text-center'>
                    {loading ? (
                      <Spinner animation='border' role='status'>
                        <span className='visually-hidden'>Loading...</span>
                      </Spinner>
                    ) : (
                      <div className='animate_border_wrapper mt-4'>
                        <button type='submit' className='cr_btn_style animate_border'>
                          Apply Now
                        </button>
                      </div>
                    )}
                  </Col>
                </Row>
              </form>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ApplyForm
