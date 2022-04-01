const ServiceStages = (props) => {
	const { stages, heading } = props
	return (
		<section className='development_process_area section_padding'>
			<div className='container custom_container'>
				<div className='row'>
					<div className='col-lg-12'>
						<div className='section_title text-center position-relative'>
							<div className='cre_parallax_section wow fadeInUp'>
								<h2 className='parallax_text'>Process</h2>
							</div>
							<h2 className='title text-white wow fadeInUp'>
								<div
									dangerouslySetInnerHTML={{
										__html: heading,
									}}
								/>
							</h2>
						</div>
					</div>
				</div>
				{stages.map((stage, i) =>
					i % 2 === 0 ? (
						<div
							key={stage.id}
							className='row process_stage_item align-items-center'
						>
							<span className='arrow-down'>
								<i className='fas fa-angle-double-down'></i>
							</span>
							<div className='col-lg-5 order-lg-2'>
								<div className='process_stage_thumb'>
									<img
										src={stage.thumb}
										alt={stage.title}
										className='img-fluid'
									/>
								</div>
							</div>
							<div className='col-lg-7'>
								<div className='process_stage_content'>
									<div className='stage_count_wrap'>
										<span>0{i + 1}</span>
										<h3>Stage {stage.stage}: </h3>
									</div>
									<h2>{stage.title}</h2>
									<p>
										<div
											dangerouslySetInnerHTML={{
												__html: stage.desc,
											}}
										/>
									</p>
								</div>
							</div>
						</div>
					) : (
						<div
							key={stage.id}
							className='row process_stage_item align-items-center bordered-style'
						>
							<span className='arrow-down'>
								<i className='fas fa-angle-double-down'></i>
							</span>
							<div className='col-lg-5'>
								<div className='process_stage_thumb'>
									<img
										src={stage.thumb}
										alt={stage.title}
										className='img-fluid'
									/>
								</div>
							</div>
							<div className='col-lg-7'>
								<div className='process_stage_content'>
									<div className='stage_count_wrap'>
										<span>0{i + 1}</span>
										<h3>Stage {stage.stage}: </h3>
									</div>
									<h2>{stage.title}</h2>
									<p>
										<div
											dangerouslySetInnerHTML={{
												__html: stage.desc,
											}}
										/>
									</p>
								</div>
							</div>
						</div>
					)
				)}
			</div>
		</section>
	)
}

export default ServiceStages
