import Link from 'next/link'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import NewsLetterFooter from './NewsLetterFooter'
import MobileFooter from './MobileFooter'
import Logo from './logo.png'

const Footer = () => {
  const url = `https://creativepeoplesdesign.us14.list-manage.com/subscribe/post?u=24f115277814af39bffc7a263&id=4dd9d70cc2`

  return (
    <footer className='cre_footer_section padding_top' style={{ backgroundColor: '#1E2F3E' }}>
      <div className='container custom_container'>
        <div className='footer_newslwtter_form'>
          <div className='row align-items-center justify-content-between'>
            <div className='col-lg-5 wow fadeInLeft'>
              <div className='footer_newsletter_content'>
                <h2 className='title font_700 text-white'>Newsletter Sign Up</h2>
              </div>
            </div>
            <div className='col-lg-5 col-xl-4 wow fadeInRight'>
              <div className='cre_newsletter_wrapper'>
                <div className='cre_form_group'>
                  <MailchimpSubscribe url={url} render={({ subscribe, status, message }) => <NewsLetterFooter status={status} message={message} onValidated={(formData) => subscribe(formData)} />} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='row justify-content-between'>
          <div className='col-lg-12 col-xl-3 col-sm-6 wow fadeInUp'>
            <div className='cre_footer_widget'>
              <img src={Logo.src} alt='/' className='footer_logo' />
              <div className='social_icon'>
                <a rel='noreferrer' target='_blank' href='https://www.facebook.com/oyolloo'>
                  <i className='fab fa-facebook-f'></i>
                </a>
                <a rel='noreferrer' target='_blank' href='https://twitter.com/oyolloo/'>
                  <i className='fab fa-twitter'></i>
                </a>
                <a rel='noreferrer' target='_blank' href='https://dribbble.com/Oyolloo'>
                  <i className='fab fa-dribbble'></i>
                </a>
                <a rel='noreferrer' target='_blank' href='https://www.linkedin.com/company/oyolloo/mycompany/'>
                  <i className='fab fa-linkedin-in'></i>
                </a>
              </div>
            </div>
          </div>
          <MobileFooter />
          <div className='col-lg-4 col-xl-2 col-sm-6 wow fadeInUp d-xl-block d-lg-block d-md-block d-sm-none d-none'>
            <div className='cre_footer_widget'>
              <h2 className='widget_title'>Essential Links</h2>
              <ul className='footer_menu'>
                <li>
                  <Link href='/'>Home</Link>
                </li>
                <li>
                  <Link href='/about'>About us</Link>
                </li>
                <li>
                  <Link href='/services'>Services</Link>
                </li>
                <li>
                  <Link href='/blog'>Blog</Link>
                </li>
                <li>
                  <Link href='/projects'>Projects</Link>
                </li>
                <li>
                  <Link href='/reviews'>Reviews</Link>
                </li>
                <li>
                  <Link href='/contact'>Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-lg-4 col-xl-3 col-sm-6 wow fadeInUp d-xl-block d-lg-block d-md-block d-sm-none d-none'>
            <div className='cre_footer_widget'>
              <h2 className='widget_title'>Services</h2>
              <ul className='footer_menu'>
                <li>
                  <Link href='/services/responsive-web'>Responsive Web Design</Link>
                </li>
                <li>
                  <Link href='/services/ui-ux-design'>UI/UX Design</Link>
                </li>
                <li>
                  <Link href='/services/wordpress'>WordPress Development</Link>
                </li>
                <li>
                  <Link href='/services/landing-page'>Landing Page Design</Link>
                </li>
                <li>
                  <Link href='/services/branding'>Logos and Branding</Link>
                </li>
                <li>
                  <Link href='/services/print-designs'>Print Designs</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-lg-4 col-xl-3 col-sm-6 wow fadeInUp d-xl-block d-lg-block d-md-block d-sm-none d-none'>
            <div className='cre_footer_widget'>
              <h2 className='widget_title'>Contact Info</h2>
              <ul className='footer_menu'>
                <li>
                  <a href='tel:+8801758500436'>+8801758500436</a>
                </li>
                <li>
                  <a href='mailto:hello@creativepeoplesdesign.com'>hello@creativepeoplesdesign.com</a>
                </li>
                <li>
                  <span>House 12/1, R 4/A, Dhanmondi, Dhaka</span>
                </li>
              </ul>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.1984632707367!2d90.3714182159617!3d23.74030119507684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf4a959a3969%3A0xb9dbf8443fe868b6!2sHouse%20No-12%2C%201%20Road%20No.%204A%2C%20Dhaka%201209!5e0!3m2!1sen!2sbd!4v1649801951076!5m2!1sen!2sbd'
                width='380'
                height='300'
                style={{ border: 0 }}
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>
          <div className='dl_col_lg_12 wow fadeInUp'>
            <div className='cre_copyright_content'>
              <div className='copyright_content_inner'>
                <p>Copyright &copy; 2022, All Rights Reserved</p>
              </div>
              <div className='copyright_content_inner'>
                <ul>
                  <li>
                    <Link href='/terms-and-conditions'>Terms &amp; Conditions</Link>
                  </li>
                  <li>
                    <Link href='/privacy-policy'>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href='/disclaimer'>Disclaimer</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href='#scrollToTop' className='scroll-top'>
        <i className='fas fa-arrow-up'></i>
      </a>
    </footer>
  )
}

export default Footer
