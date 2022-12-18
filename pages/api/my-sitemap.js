import { SitemapStream, streamToPromise } from 'sitemap'
import axios from 'axios'

export default async (req, res) => {
  try {
    const smStream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
      cacheTime: 600000,
    })

    // List of posts
    const { data } = await axios.get('http://creativepeoplesdesign.com/admin/wp-json/wp/v2/posts?_embed')

    // Create each URL row
    data.forEach((post) => {
      smStream.write({
        url: `/${post.slug}`,
        changefreq: 'daily',
        priority: 0.9,
      })
    })

    // End sitemap stream
    smStream.end()

    // XML sitemap string
    const sitemapOutput = (await streamToPromise(smStream)).toString()

    // Change headers
    res.writeHead(200, {
      'Content-Type': 'application/xml',
    })

    // Display output to user
    res.end(sitemapOutput)
  } catch (e) {
    console.log(e)
    res.send(JSON.stringify(e))
  }
}
