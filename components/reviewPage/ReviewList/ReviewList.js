import reviews from './reviews.json'
import ReviewCard from '../ReviewCard/ReviewCard'

const ReviewList = () => {
	return (
		<div className='cre_testimonial_section position-relative section_padding'>
			<div className='w-100 position-absolute bottom-0 start-50 translate-middle-x'></div>
			<div className='container custom_container'>
				<div className='row g-5 position-relative'>
					{reviews.map((review) => (
						<ReviewCard key={review.id} review={review} />
					))}
				</div>
			</div>
		</div>
	)
}

export default ReviewList
