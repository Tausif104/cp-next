import LinkCard from '../LinkCard/LinkCard'

const LivelinkList = ({ links }) => {
	return (
		<section className='live-site-links gray-bg section_padding'>
			<div className='container custom_container'>
				<div className='row mb-4'>
					<div className='col-lg-12'>
						<div className='section-title text-center'>
							<h2 className='title'>
								Samples Of Our <span>Previous Works</span>
							</h2>
						</div>
					</div>
				</div>
				<div className='row g-xl-4 g-lg-4 g-md-4 g-4'>
					{links.map((link) => (
						<LinkCard key={link.id} link={link} />
					))}
				</div>
			</div>
		</section>
	)
}

export default LivelinkList
