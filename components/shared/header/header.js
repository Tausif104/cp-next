import { useEffect } from 'react'
import Link from 'next/link'
import Logo from './logo.png'
import IconOne from './icons/solution_icon1.png'
import IconTwo from './icons/solution_icon2.png'
import IconThree from './icons/solution_icon3.png'
import IconFour from './icons/solution_icon4.png'
import IconFive from './icons/solution_icon5.png'
import IconSix from './icons/solution_icon6.png'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()

  useEffect(() => {
    // sticky header
    const headerNav = document.getElementById('headerTop')

    window.addEventListener('scroll', () => {
      if (window.scrollY >= 400) {
        headerNav.classList.add('header-fixed')
      } else {
        headerNav.classList.remove('header-fixed')
      }
    })

    // mobile menu
    const menuTrigger = document.getElementById('mobile-menu-trigger')
    const mobileMenu = document.getElementById('mobile-menu')
    const closeTrigger = document.getElementById('close-menu')
    const navItems = document.querySelectorAll('.mobile-menu-items li a')
    const mobileDropdowns = document.querySelector('.mobile-dropdown ul')
    const dropdownNav = document.getElementsByClassName('mobile-dropdown')

    menuTrigger.addEventListener('click', () => {
      mobileMenu.classList.add('active')
    })

    closeTrigger.addEventListener('click', () => {
      mobileMenu.classList.remove('active')
    })

    for (const navItem of navItems) {
      navItem.addEventListener('click', () => {
        mobileMenu.classList.remove('active')
      })
    }

    for (const list of dropdownNav) {
      list.addEventListener('click', (e) => {
        mobileDropdowns.classList.toggle('d-none')
      })
    }

    // mobile menu
    const mobileMenuTrigger = document.getElementById('handle-mobile-menu')
    const megaMenu = document.getElementById('mega-menu')
    mobileMenuTrigger.addEventListener('click', (e) => {
      if (megaMenu.classList.contains('d-block')) {
        megaMenu.classList.remove('d-block')
      } else {
        megaMenu.classList.add('d-block')
      }
    })
  }, [])

  return (
    <>
      <span id='scrollToTop'></span>
      <header className='site_header ' id='headerTop'>
        <div className='mobile-menu-wrapper' id='mobile-menu'>
          <span id='close-menu'>
            <i className='fas fa-times'></i>
          </span>
          <div className='mobile-menu-items'>
            <ul>
              <li>
                <Link href='/about'>About</Link>
              </li>
              <li>
                <Link href='/services'>Services</Link>
                <span id='handle-mobile-menu' className='mobile_dropdown_trigger'>
                  <i className='fas fa-angle-down'></i>
                </span>
                <ul id='mega-menu' className='mega_menu_wrap mega_menu_mobile'>
                  {/* single mega link  */}
                  <Link href='/services/responsive-web'>
                    <a className='mega_link_item'>
                      <div className='mega_link_icon'>
                        <img className='img-fluid' src={IconOne.src} alt='mega_menu_link_icon' />
                      </div>
                      <div className='mega_link_description'>
                        <h5>Responsive Website Design</h5>
                        <p>Do you know, about 75% of your clients browse your website from mobile?</p>
                      </div>
                    </a>
                  </Link>
                  {/* single mega link  */}
                  <Link href='/services/ui-ux-design'>
                    <a className='mega_link_item'>
                      <div className='mega_link_icon'>
                        <img className='img-fluid' src={IconTwo.src} alt='mega_menu_link_icon' />
                      </div>
                      <div className='mega_link_description'>
                        <h5>UI/UX Design</h5>
                        <p>UI/UX design is, of course, a defining component for each digital product.</p>
                      </div>
                    </a>
                  </Link>
                  {/* single mega link  */}
                  <Link href='/services/landing-page'>
                    <a className='mega_link_item'>
                      <div className='mega_link_icon'>
                        <img className='img-fluid' src={IconThree.src} alt='mega_menu_link_icon' />
                      </div>
                      <div className='mega_link_description'>
                        <h5>Landing Page Design</h5>
                        <p>A well-designed landing page is your best bet for attracting new clients.</p>
                      </div>
                    </a>
                  </Link>
                  {/* single mega link  */}
                  <Link href='/services/wordpress'>
                    <a className='mega_link_item'>
                      <div className='mega_link_icon'>
                        <img className='img-fluid' src={IconFour.src} alt='mega_menu_link_icon' />
                      </div>
                      <div className='mega_link_description'>
                        <h5>WordPress Development</h5>
                        <p>When it comes to getting the most out of WordPress CMS and seeing the results</p>
                      </div>
                    </a>
                  </Link>
                  {/* single mega link  */}
                  <Link href='/services/branding'>
                    <a className='mega_link_item'>
                      <div className='mega_link_icon'>
                        <img className='img-fluid' src={IconFive.src} alt='mega_menu_link_icon' />
                      </div>
                      <div className='mega_link_description'>
                        <h5>Logos and Branding</h5>
                        <p>As a branding agency, CreativePeoples is the ultimate choice for all-sized businesses.</p>
                      </div>
                    </a>
                  </Link>
                  {/* single mega link  */}
                  <Link href='/services/print-designs'>
                    <a className='mega_link_item'>
                      <div className='mega_link_icon'>
                        <img className='img-fluid' src={IconSix.src} alt='mega_menu_link_icon' />
                      </div>
                      <div className='mega_link_description'>
                        <h5>Print Design</h5>
                        <p>CreativePeoples provides an engaging visual presentation that evokes an emotive response </p>
                      </div>
                    </a>
                  </Link>
                </ul>
              </li>
              <li>
                <Link href='/projects'>Projects</Link>
              </li>
              <li>
                <Link href='/blog'>Blog</Link>
              </li>
              <li>
                <Link href='/reviews'>Reviews</Link>
              </li>
              <li>
                <Link href='/joinus/#open-job-positions'>Join Us</Link>
              </li>
              <li>
                <Link href='/contact'>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='mobile-menu-nav d-xl-none d-lg-flex d-md-flex d-sm-flex d-flex justify-content-between align-items-center'>
          <Link className='mobile-logo' href='/'>
            <img src={Logo.src} alt='mobile-logo.png' />
          </Link>
          <div id='mobile-menu-trigger' className='hamburger-icon'>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className='desktop-header container custom_container d-flex justify-content-between align-items-center d-xl-flex d-lg-none d-md-none d-sm-none d-none'>
          <div className='site-logo'>
            <h1>
              <Link href='/'>
                <img src={Logo.src} alt='logo.png' />
              </Link>
            </h1>
          </div>
          <nav className='site-menu'>
            <ul>
              <li>
                <Link href='/about'>
                  <a className={router.pathname === '/about' ? 'active' : ''}>About</a>
                </Link>
              </li>
              <li>
                <Link href='/services'>
                  <a className={router.pathname === '/services' ? 'active' : ''}>Services</a>
                </Link>
                <ul className='mega_menu_wrap'>
                  {/* single mega link  */}
                  <Link href='/services/responsive-web'>
                    <a className='mega_link_item'>
                      <div className='mega_link_icon'>
                        <img className='img-fluid' src={IconOne.src} alt='mega_menu_link_icon' />
                      </div>
                      <div className='mega_link_description'>
                        <h5>Responsive Website Design</h5>
                        <p>Do you know, about 75% of your clients browse your website from mobile?</p>
                      </div>
                    </a>
                  </Link>
                  {/* single mega link  */}
                  <Link href='/services/ui-ux-design'>
                    <a className='mega_link_item'>
                      <div className='mega_link_icon'>
                        <img className='img-fluid' src={IconTwo.src} alt='mega_menu_link_icon' />
                      </div>
                      <div className='mega_link_description'>
                        <h5>UI/UX Design</h5>
                        <p>UI/UX design is, of course, a defining component for each digital product.</p>
                      </div>
                    </a>
                  </Link>
                  {/* single mega link  */}
                  <Link href='/services/landing-page'>
                    <a className='mega_link_item'>
                      <div className='mega_link_icon'>
                        <img className='img-fluid' src={IconThree.src} alt='mega_menu_link_icon' />
                      </div>
                      <div className='mega_link_description'>
                        <h5>Landing Page Design</h5>
                        <p>A well-designed landing page is your best bet for attracting new clients.</p>
                      </div>
                    </a>
                  </Link>
                  {/* single mega link  */}
                  <Link href='/services/wordpress'>
                    <a className='mega_link_item'>
                      <div className='mega_link_icon'>
                        <img className='img-fluid' src={IconFour.src} alt='mega_menu_link_icon' />
                      </div>
                      <div className='mega_link_description'>
                        <h5>WordPress Development</h5>
                        <p>When it comes to getting the most out of WordPress CMS and seeing the results</p>
                      </div>
                    </a>
                  </Link>
                  {/* single mega link  */}
                  <Link href='/services/branding'>
                    <a className='mega_link_item'>
                      <div className='mega_link_icon'>
                        <img className='img-fluid' src={IconFive.src} alt='mega_menu_link_icon' />
                      </div>
                      <div className='mega_link_description'>
                        <h5>Logos and Branding</h5>
                        <p>As a branding agency, CreativePeoples is the ultimate choice for all-sized businesses.</p>
                      </div>
                    </a>
                  </Link>
                  {/* single mega link  */}
                  <Link href='/services/print-designs'>
                    <a className='mega_link_item'>
                      <div className='mega_link_icon'>
                        <img className='img-fluid' src={IconSix.src} alt='mega_menu_link_icon' />
                      </div>
                      <div className='mega_link_description'>
                        <h5>Print Design</h5>
                        <p>CreativePeoples provides an engaging visual presentation that evokes an emotive response </p>
                      </div>
                    </a>
                  </Link>
                </ul>
              </li>
              <li>
                <Link href='/projects'>
                  <a className={router.pathname === '/projects' ? 'active' : ''}>Projects</a>
                </Link>
              </li>
              <li>
                <Link href='/blog'>
                  <a className={router.pathname === '/blog' ? 'active' : ''}>Blog</a>
                </Link>
              </li>
              <li>
                <Link href='/reviews'>
                  <a className={router.pathname === '/reviews' ? 'active' : ''}>Reviews</a>
                </Link>
              </li>
              <li>
                <Link href='/joinus/#open-job-positions'>
                  <a className={router.pathname === '/joinus' ? 'active' : ''}>Join Us</a>
                </Link>
              </li>
              <li>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
