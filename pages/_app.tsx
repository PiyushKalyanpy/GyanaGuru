import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Providers} from '@/GlobalRedux/provider'
import 'material-icons/iconfont/material-icons.css';
// import 'material-icons/iconfont/filled.css';



export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
    
  )
}
