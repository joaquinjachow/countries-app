import Head from 'next/head'
import ActivityCreate from '../../components/ActivityCreate'

const Index = () => {
  return (
    <>
      <Head>
        <title>Crear Actividad | Countries-app</title>
      </Head>
      <main>
        <ActivityCreate />
      </main>
    </>
  )
}
export default Index
