import Link from 'next/link'
import ClientBg from './images/clients-bg.png'

const Clients = () => {
	return (
		<section
			className='clients_section'
			style={{ backgroundImage: `url(${ClientBg.src})` }}
		>
			<div className='container custom_container'>
				<div className='row align-items-center clients_section_title_wrap'>
					<div className='col-lg-8'>
						<div className='section_title'>
							<h2 className='title'>
								<span>Testimonial</span>
							</h2>
							<h3>You Can See Our Clients Feedback</h3>
						</div>
					</div>
					<div className='col-lg-4'>
						<div className='clients_button text-end'>
							<div className='animate_border_wrapper wow fadeInUp'>
								<Link href='/reviews'>
									<a className='cr_btn_style animate_border'>
										See All Reviews
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className='row client_boxes gy-4'>
					<div className='col-lg-6'>
						<div className='single_client_box'>
							<div className='s_clients_author_meta_wrap'>
								<div className='s_clients_author_info'>
									<h4>saviodesigns</h4>
									<p>Marketplace Client</p>
								</div>
							</div>
							<p className='clients_messege'>
								Loved the talked/artistic skill/willingness to
								take feedback and make adjustments. Definitely a
								great experience and I hope to work with him
								again!!!
							</p>
							<div className='s_clients_quote_wrap'>
								<div className='clients_bullets'>
									<i className='fas fa-star'></i>
									<i className='fas fa-star'></i>
									<i className='fas fa-star'></i>
									<i className='fas fa-star'></i>
									<i className='fas fa-star'></i>
								</div>
								<i className='fas fa-quote-right'></i>
							</div>
						</div>
					</div>
					<div className='col-lg-6'>
						<div className='single_client_box'>
							<div className='s_clients_author_meta_wrap'>
								<div className='s_clients_author_info'>
									<h4>josephbenstowe</h4>
									<p>Marketplace Client</p>
								</div>
							</div>
							<p className='clients_messege'>
								Seller was great I can tell the design he chose
								was 100% authentic and custom and it look
								incredibly high quality
							</p>
							<div className='s_clients_quote_wrap'>
								<div className='clients_bullets'>
									<i className='fas fa-star'></i>
									<i className='fas fa-star'></i>
									<i className='fas fa-star'></i>
									<i className='fas fa-star'></i>
									<i className='fas fa-star'></i>
								</div>
								<i className='fas fa-quote-right'></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Clients
