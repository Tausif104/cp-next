const LinkCard = ({ link }) => {
	const { id, image, sitename, url } = link
	return (
		<div className='col-xl-3 col-lg-4 col-md-6'>
			<div className='linkcard'>
				<img className='img-fluid' src={image} alt={sitename} />
				<div className='link-card-content'>
					<a target='_blank' href={url}>
						{sitename}
					</a>
				</div>
			</div>
		</div>
	)
}

export default LinkCard
