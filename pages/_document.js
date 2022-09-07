import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          {/* opengraph */}
          <meta property='og:image' content='/meta/og-image.jpg' />

          {/* favicons */}
          <link rel='shortcut icon' href='/meta/favicon.ico' />
          <link rel='icon' type='image/png' sizes='32x32' href='/meta/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/meta/favicon-16x16.png' />
          <link rel='apple-touch-icon' sizes='180x180' href='/meta/apple-touch-icon.png' />
          <link rel='manifest' href='/meta/site.webmanifest' />
          <link rel='mask-icon' href='/meta/safari-pinned-tab.svg' color='#5bbad5' />
          <meta name='theme-color' content='#ffffff' />

          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
          <link href='https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap' rel='stylesheet' />
          <script async src='https://www.googletagmanager.com/gtag/js?id=G-KP8997JWN0'></script>

          <script
            dangerouslySetInnerHTML={{
              __html: `
						window.dataLayer = window.dataLayer || [];
						function gtag() {dataLayer.push(arguments);}
						gtag('js', new Date());

						gtag('config', 'G-KP8997JWN0');
            `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
