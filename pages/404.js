import Head from 'next/head'
import ErrorComponent from '../components/ErrorComponent/ErrorComponent'

const ErrorPage = () => {
  return (
    <>
      <Head>
        <title>404 Not found</title>
        <meta name='description' content='The URL you have entered is not found.' />
      </Head>
      <ErrorComponent />
    </>
  )
}

export default ErrorPage
