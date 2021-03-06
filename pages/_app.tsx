import type { AppProps } from 'next/app'
import 'antd/dist/antd.less'
import '../styles/globals.less'
import '../styles/tailwindcss.less'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
