import { useState } from 'react'
import dynamic from 'next/dynamic'

import VideoBg from './images/video-bg.png'
const ModalVideo = dynamic(() => import('react-modal-video'), { ssr: false })

const Video = () => {
	const [isOpen, setOpen] = useState(false)

	const handleVideo = (e) => {
		e.preventDefault()
		setOpen(true)
	}
	return (
		<section className='cre_video_popup_section pt_5 wow fadeInUp'>
			{/* <ModalVideo
				channel='youtube'
				autoplay
				isOpen={isOpen}
				videoId='UBil3MFK8wY'
				onClose={() => setOpen(false)}
			/>
			<div className='container custom_container'>
				<div className='row justify-content-center'>
					<div className='col-lg-12'>
						<div
							className='cre_video_popup_section_inner text-center section_overlay position-relative'
							style={{
								backgroundImage: `url(${VideoBg.src})`,
							}}
						>
							<button
								onClick={() => setOpen(true)}
								className='popup_video '
							>
								<i className='fas fa-play'></i>
							</button>
						</div>
					</div>
				</div>
			</div> */}
			<div className='container'>
				<div className='row'>
					<div className='col'>
						<iframe
							width='100%'
							height='800'
							src='https://www.youtube.com/embed/UBil3MFK8wY'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						></iframe>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Video
