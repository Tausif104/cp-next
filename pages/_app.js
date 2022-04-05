import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import NextNProgress from 'nextjs-progressbar'
import 'react-modal-video/css/modal-video.css'
import '../styles/animate.css'
import '../styles/globals.css'
import '../styles/responsive.css'

function MyApp({ Component, pageProps }) {
	return (
		<>
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
