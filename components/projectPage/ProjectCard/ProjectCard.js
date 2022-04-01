import moment from 'moment'
import Link from 'next/link'

const ProjectCard = ({ project }) => {
	const { id, title, published_at, images } = project
	return (
		<div className='col-xl-4 col-lg-4 col-md-6 wow fadeInUp'>
			<div
				className='project-item'
				style={{
					backgroundImage: `url(${
						images.hidpi ? images.hidpi : images.normal
					})`,
				}}
			>
				<div className='project-item-meta d-flex justify-content-between align-items-center'>
					<div className='meta-left'>
						<h4>{title}</h4>
						<p>
							<i className='far fa-clock me-'></i>{' '}
							{moment(published_at).format('MMM Do YY')}
						</p>
					</div>
					<div className='meta-right'>
						<Link href={`/project/${id}`}>
							<a>
								<i className='fas fa-arrow-right'></i>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
