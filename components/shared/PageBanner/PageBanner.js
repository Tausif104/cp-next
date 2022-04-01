import Link from 'next/link'

const PageBanner = ({ title }) => {
	return (
		<div className='cre_breadcrumb' style={{ backgroundColor: '#293947' }}>
			<div className='container custom_container'>
				<div className='row align-items-center'>
					<div className='col-lg-8 wow fadeInUp'>
						<div className='cre_breadcrumb_wrapper'>
							<h2 className='title text-white'>{title}</h2>
						</div>
					</div>
					<div className='col-lg-4'>
						<div className='cre_breadcrumb_link'>
							<Link href='/'>Home</Link>
							<span className='separator'>|</span>
							<p className='current_page'>{title}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PageBanner
