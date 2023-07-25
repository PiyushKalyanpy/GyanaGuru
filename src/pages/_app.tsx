import '@/styles/globals.css';
import 'material-icons/iconfont/material-icons.css';
import 'material-symbols';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { AppProps } from 'next/app';
import Script from 'next/script';
import { ThemeProvider } from 'next-themes';
import { CourseProvider } from '@/context/CourseContext';
import { CookiesProvider } from 'react-cookie';
import { NextPageWithLayout } from '../util/page';
import { AuthProvider } from '../context/AuthContext';
import { ToastContainer } from 'react-toastify';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function App ({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    (Component as NextPageWithLayout)?.getLayout || (page => page);

  return (
    <CookiesProvider>
      <AuthProvider>
        <CourseProvider>
          <ThemeProvider attribute='class'>
            <ToastContainer />
            <Script
              strategy='lazyOnload'
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />
            <Script id='googletagmanager' strategy='lazyOnload'>
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
              `}
            </Script>

            {getLayout(<Component {...pageProps} />)}
          </ThemeProvider>
        </CourseProvider>
      </AuthProvider>
    </CookiesProvider>
  );
}

export default App;
