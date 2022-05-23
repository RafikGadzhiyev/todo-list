import { Provider } from 'react-redux'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MainStore } from './../assets/redux/stores/store';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {

  return <Provider
    store={MainStore}
  >
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
