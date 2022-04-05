import Head from 'next/head'
import Layout from '../components/shared/Layout/Layout'
import ContactInfo from '../components/contactPage/ContactInfo/ContactInfo'
import PageBanner from '../components/shared/PageBanner/PageBanner'
import ContactForm from '../components/contactPage/ContactForm/ContactForm'

const contact = () => {
	return (
		<Layout>
			<Head>
				<title>Contact Here &amp; Be A Legend</title>
				<meta
					name='description'
					content='Our favorite thing to do is create and develop brand identities and develop new digital solutions. Contact us to learn everything about us!'
				/>
			</Head>
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
