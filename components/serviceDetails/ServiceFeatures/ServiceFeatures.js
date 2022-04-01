const ServiceFeatures = (props) => {
	const { features, heading, extraClass } = props
	return (
		<section
			className={`why_choose_area padding_bottom ${
				extraClass && extraClass
			}`}
		>
			<div className='container custom_container'>
				<div className='row'>
					<div className='col-lg-12'>
						<div className='cre_section_title'>
							<h2 className='title'>
								<div
									dangerouslySetInnerHTML={{
										__html: heading,
									}}
								/>
							</h2>
						</div>
					</div>
				</div>
				<div className='row why_different gy-4'>
					{features.map((feature) => (
						<div key={feature.id} className='col-xl-4 col-lg-6'>
							<div className='single_different_item'>
								<div className='s_different_icon'>
									<img
										src={feature.img}
										alt={feature.title}
										className='img-fluid'
									/>
								</div>
								<h4>{feature.title}</h4>
								<p>{feature.desc}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default ServiceFeatures
