import VideoBg from './images/video-bg.png'

const Video = () => {
	return (
		<section className='cre_video_popup_section pt_5 wow fadeInUp'>
			<div className='container custom_container'>
				<div className='row justify-content-center'>
					<div className='col-lg-12'>
						<div
							className='cre_video_popup_section_inner text-center section_overlay position-relative'
							style={{
								backgroundImage: `url(${VideoBg.src})`,
							}}
						>
							<a href='/' className='popup_video '>
								<i className='fas fa-play'></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Video
