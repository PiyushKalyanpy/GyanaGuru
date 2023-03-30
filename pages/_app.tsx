import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Providers} from '@/GlobalRedux/provider'
import 'material-icons/iconfont/material-icons.css';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
    
  )
}
