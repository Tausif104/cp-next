const LinkCard = ({ link }) => {
	console.log(link)
	const { acf, title, x_featured_media_original } = link
	return (
		<div className='col-xl-3 col-lg-4 col-md-6'>
			<div className='linkcard'>
				<img
					className='img-fluid'
					src={x_featured_media_original}
					alt={title.rendered}
				/>
				<div className='link-card-content'>
					<a target='_blank' rel='noreferrer' href={acf.link_url}>
						{title.rendered}
					</a>
				</div>
			</div>
		</div>
	)
}

export default LinkCard
