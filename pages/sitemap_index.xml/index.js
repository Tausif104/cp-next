import axios from 'axios'
import { getServerSideSitemapIndex, getServerSideSitemap } from 'next-sitemap'

export const getServerSideProps = async (ctx) => {
  const { data } = await axios('http://creativepeoplesdesign.com/admin/wp-json/wp/v2/posts?per_page=100&&_embed')
  const fields = data.map((item) => ({
    loc: `https://creativepeoplesdesign.com/${item.slug}`,
    lastmod: item.updatedAt,
    priority: 0.7,
    changefreq: 'daily',
  }))

  return getServerSideSitemap(ctx, fields)
}

export default function SitemapIndex() {}
