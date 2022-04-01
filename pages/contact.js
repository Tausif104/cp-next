import Layout from '../components/shared/Layout/Layout'
import ContactInfo from '../components/contactPage/ContactInfo/ContactInfo'
import PageBanner from '../components/shared/PageBanner/PageBanner'
import ContactForm from '../components/contactPage/ContactForm/ContactForm'

const contact = () => {
	return (
		<Layout>
			<PageBanner title='CONTACT US' />
			<div className='cre_section section_padding'>
				<div className='container custom_container gutter_38'>
					<div className='row justify-content-center'>
						<div className='col-lg-6'>
							<ContactInfo />
						</div>
						<div className='col-lg-6'>
							<ContactForm />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default contact
