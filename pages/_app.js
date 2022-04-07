import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import NextNProgress from 'nextjs-progressbar'
import 'react-modal-video/css/modal-video.css'
import '../styles/animate.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel='shortcut icon' href='/images/favicon.ico' />
			</Head>
			<NextNProgress
				color='#F26522'
				startPosition={0.3}
				stopDelayMs={200}
				height={2}
				showOnShallow={true}
				options={{ showSpinner: false }}
			/>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
