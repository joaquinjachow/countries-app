import Head from 'next/head'
import LandingPage from '../components/LandingPage'
const Index = () => {
  return (
    <>
      <Head>
        <title>Inicio | Countries-app</title>
      </Head>
      <main>
        <LandingPage />
      </main>
    </>
  )
}
export default Index
