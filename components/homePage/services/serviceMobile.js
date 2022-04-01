const ServiceMobile = () => {
	return (
		<div className='service-mobile d-xl-none d-lg-none d-md-none d-sm-block d-block'>
			<div className='accordion' id='accordionExample'>
				<div className='accordion-item'>
					<h2 className='accordion-header' id='serviceOne'>
						<button
							className='accordion-button'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#serviceColOne'
							aria-expanded='true'
							aria-controls='serviceColOne'
						>
							Design
						</button>
					</h2>
					<div
						id='serviceColOne'
						className='accordion-collapse collapse show'
						aria-labelledby='serviceOne'
						data-bs-parent='#accordionExample'
					>
						<div className='accordion-body'>
							<ul>
								<li>Analysis &amp; Strategy</li>
								<li>Branding Design</li>
								<li>Marketing Material Design</li>
								<li>Mobile App Design</li>
								<li>UI Design</li>
								<li>UX Design</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='accordion-item'>
					<h2 className='accordion-header' id='serviceTwo'>
						<button
							className='accordion-button collapsed'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#serviceColTwo'
							aria-expanded='false'
							aria-controls='serviceColTwo'
						>
							Development
						</button>
					</h2>
					<div
						id='serviceColTwo'
						className='accordion-collapse collapse'
						aria-labelledby='serviceTwo'
						data-bs-parent='#accordionExample'
					>
						<div className='accordion-body'>
							<ul>
								<li>UX Design</li>
								<li>Branding Design</li>
								<li>Marketing Material Design</li>
								<li>Analysis &amp; Strategy</li>
								<li>UI Design</li>
								<li>Mobile App Design</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='accordion-item'>
					<h2 className='accordion-header' id='serviceThree'>
						<button
							className='accordion-button collapsed'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#serviceColThree'
							aria-expanded='false'
							aria-controls='serviceColThree'
						>
							Marketing
						</button>
					</h2>
					<div
						id='serviceColThree'
						className='accordion-collapse collapse'
						aria-labelledby='serviceThree'
						data-bs-parent='#accordionExample'
					>
						<div className='accordion-body'>
							<ul>
								<li>Marketing Material Design</li>
								<li>Branding Design</li>
								<li>UI Design</li>
								<li>Analysis &amp; Strategy</li>
								<li>UX Design</li>
								<li>Mobile App Design</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ServiceMobile
