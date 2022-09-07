import Head from 'next/head'

import Layout from '../components/shared/Layout/Layout'
import About from '../components/homePage/about/about'
import Banner from '../components/homePage/banner/banner'
import Services from '../components/homePage/services/Services'
import Solutions from '../components/homePage/solutions/solutions'
import Cta from '../components/shared/cta/cta'
import Portfolios from '../components/homePage/portfolio/portfolio'
import LatestBlog from '../components/homePage/latestBlog/LatestBlog'
import Testimonial from '../components/homePage/Testmonial/Testimonial'
import CtaTwo from '../components/shared/CtaTwo/CtaTwo'
import Clients from '../components/homePage/Clients/Clients'

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>CreativePeoples - A Prominent Web Design &amp; Developing Company</title>
        <meta name='description' content="Are you searching for reliable, trustworthy, and superior web design and developing services? Then don't look any further, and CreativePeoples is here!" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Banner />
        <About />
        <Services />
        <Solutions title={'Solutions <span>We Provide</span>'} />
        <Cta />
        <Portfolios />
        <LatestBlog posts={posts} />
        <Clients />
        <Testimonial />
        <CtaTwo
          title='We’re ready to grow with you. <span>Talk to an expert today.</span>'
          desc='At CreativePeoples, we are committed to authenticity, consistency, integrity, and excellent consumer experience-we are not satisfied with our outcomes or creations until you are. Contact us today to learn more about how we can assist you in growing your business.'
        />
      </Layout>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://creativepeoplesdesign.com/admin/wp-json/wp/v2/posts?_embed')
  const posts = await res.json()

  return { props: { posts } }
}
