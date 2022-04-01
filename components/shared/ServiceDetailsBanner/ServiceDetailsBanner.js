const ServiceDetailsBanner = (props) => {
	const { img, title, desc, secondDesc } = props
	return (
		<section className='single_service_media_area section_padding'>
			<div className='container custom_container'>
				<div className='row align-items-center'>
					{img && (
						<div className='col-lg-5'>
							<div className='s_service_media_thumb'>
								<img
									src={img}
									alt={title}
									className='img-fluid'
								/>
							</div>
						</div>
					)}
					<div className='col-lg-7'>
						<div className='s_service_media_content'>
							<h2>{title}</h2>

							<p className='mb-3'>{desc}</p>
							<p>{secondDesc}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ServiceDetailsBanner
