import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import { ToastContainer } from 'react-toastify'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
})

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <div className={roboto.className}>
      <ToastContainer />
      <Component {...pageProps} />
    </div>
  )
}
