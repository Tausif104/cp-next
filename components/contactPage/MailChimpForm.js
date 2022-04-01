import MailchimpSubscribe from 'react-mailchimp-subscribe'
import CustomForm from './CustomForm'

const MailChimpForm = () => {
	const url = `https://creativepeoplesdesign.us14.list-manage.com/subscribe/post?u=24f115277814af39bffc7a263&id=4dd9d70cc2`
	return (
		<div>
			<MailchimpSubscribe
				url={url}
				render={({ subscribe, status, message }) => (
					<CustomForm
						status={status}
						message={message}
						onValidated={(formData) => subscribe(formData)}
					/>
				)}
			/>
		</div>
	)
}

export default MailChimpForm
