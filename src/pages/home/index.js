import Head from 'next/head'
import Home from '../../components/Home'

const Index = () => {
  return (
    <>
      <Head>
        <title>Inicio | Countries-app</title>
      </Head>
      <main>
        <Home />
      </main>
    </>
  )
}
export default Index
