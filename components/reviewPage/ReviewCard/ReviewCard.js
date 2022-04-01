const ReviewCard = ({ review }) => {
	const { name, body } = review
	return (
		<div className='col-lg-4 col-sm-6 wow fadeInUp'>
			<div className='cre_testimonial_item bg-white'>
				<div className='cre_testimonial_header mb-4 pb-4 border-bottom d-flex flex-wrap align-items-center justify-content-between'>
					<div className='client_info d-flex align-items-center'>
						<div className='client_info_inner'>
							<h5 className='name fs-5 fw-bold'>{name}</h5>
							<p className='position fs-6'>Marketplace Client</p>
						</div>
					</div>
					<div className='client_rating base_color'>
						<i className='fas fa-star'></i>
						<i className='fas fa-star'></i>
						<i className='fas fa-star'></i>
						<i className='fas fa-star'></i>
						<i className='fas fa-star'></i>
					</div>
				</div>
				<p className='discription'>{body}</p>
			</div>
		</div>
	)
}

export default ReviewCard
