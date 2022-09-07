import Link from 'next/link'
import TestimonialBg from './images/testimonial-bg.jpg'

const Testimonial = () => {
  return (
    <section className='cre_testimonial_section section_padding testimonial_bg' style={{ backgroundImage: `url(${TestimonialBg.src})` }}>
      <div className='container custom_container'>
        <div className='row position-relative'>
          <div className='col-lg-7'>
            <div className='cre_testimonial_wrapper'>
              <h4 className='title fw-bold text-white mb-4 pb-2 wow fadeInUp'>We are eager to help you on your project.</h4>
              <p className='description font_300 text-white  wow fadeInUp'>CreativePeoples provide services worldwide. We offer a full design suit for your business and help you reach your goals.</p>
              <div className='client_info  wow fadeInUp'>
                <h5 className='client_name text-white font_700'>Simon Sontag</h5>
                <h4 className='client_position font_400 text-white'>Project Manager at Kiwi Solutions</h4>
              </div>
              <Link href='/reviews'>
                <a className='cu_btn btn_1 text-uppercase wow fadeInUp'>See All Reviews</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
