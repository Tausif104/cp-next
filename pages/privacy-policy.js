import Layout from '../components/shared/Layout/Layout'
import PageBanner from '../components/shared/PageBanner/PageBanner'

const PrivacyPolicy = () => {
	return (
		<Layout>
			<PageBanner title='Privacy Policy' />
			<section className='container custom_container padding_top padding_bottom'>
				<div className='row'>
					<div className='col-lg-12'>
						<div className='text-box'>
							<p>
								This Privacy Policy describes Our policies and
								procedures on the collection, use, and
								disclosure of Your information when You use the
								Service and tells You about Your privacy rights
								and how the law protects You.
							</p>
							<p>
								We use Your Personal data to provide and improve
								the Service. By using the Service, You agree to
								the collection and use of information in
								accordance with this Privacy Policy. This
								Privacy Policy has been created with the help of
								the Privacy Policy Template.
							</p>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default PrivacyPolicy
