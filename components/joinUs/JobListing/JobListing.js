import Link from 'next/link'

const JobListing = () => {
	return (
		<section className='cre_section section_padding position-relative'>
			<div className='container custom_container'>
				<div className='row justify-content-between mb_80'>
					<div className='col-lg-12 text-center wow fadeInUp'>
						<div className='section_title mb-0'>
							<h2 className='title'>
								Open Job<span> Positions</span>
							</h2>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-lg-12'>
						<div className='job_circular_wrapper bg-white d-flex align-items-center justify-content-between wow fadeInUp'>
							<div className='job_circular_info'>
								<h2 className='tittle'>
									Web Content Writer
									<span className='d-inline-block ms-2 fw-normal'>
										Open
									</span>
									<span className='d-inline-block ms-2 fw-normal'>
										Remote
									</span>
								</h2>
								<ul className='list-unstyled job_post_meta'>
									<li className='d-inline-block fs-6'>
										<span>Job type:</span> Full-Time
									</li>
									<li className='d-inline-block fs-6'>
										<span>Vacancy:</span> 5
									</li>
									<li className='d-inline-block fs-6'>
										<span>Deadline:</span> 30 June, 2022
									</li>
								</ul>
							</div>
							<div className='job_circular_btn'>
								<div className='animate_border_wrapper'>
									<a
										rel='noreferrer'
										target='_blank'
										href='https://www.linkedin.com/jobs/view/2953649554/?refId=vp9pjummROu3jNockt0oAg%3D%3D'
										className='cr_btn_style animate_border'
									>
										Learn More
									</a>
								</div>
							</div>
						</div>
						<div className='job_circular_wrapper bg-white d-flex align-items-center justify-content-between wow fadeInUp'>
							<div className='job_circular_info'>
								<h2 className='tittle'>
									Senior User Interface Designer
									<span className='d-inline-block ms-2 fw-normal'>
										Open
									</span>
									<span className='d-inline-block ms-2 fw-normal'>
										Remote
									</span>
								</h2>
								<ul className='list-unstyled job_post_meta'>
									<li className='d-inline-block fs-6'>
										<span>Job type:</span> Full-Time
									</li>
									<li className='d-inline-block fs-6'>
										<span>Vacancy:</span> 5
									</li>
									<li className='d-inline-block fs-6'>
										<span>Deadline:</span> 30 June, 2022
									</li>
								</ul>
							</div>
							<div className='job_circular_btn'>
								<div className='animate_border_wrapper'>
									<a
										rel='noreferrer'
										target='_blank'
										href='https://www.linkedin.com/jobs/view/2955196030/'
										className='cr_btn_style animate_border'
									>
										Learn More
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default JobListing
