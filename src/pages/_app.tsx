import type {AppProps} from 'next/app'
import type {NextPageWithLayout} from '../util/page'
import '@/styles/globals.css'
import 'material-icons/iconfont/material-icons.css'
import 'material-symbols'
import {config} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Script from 'next/script'
import {ThemeProvider} from 'next-themes'
import {CourseProvider} from '../context/CourseContext'
import {AuthProvider} from '../context/AuthContext'
import {ToastContainer} from 'react-toastify'

config.autoAddCss = false

// Rest of your code...
interface AppPropsWithLayout extends AppProps {
	Component: NextPageWithLayout
}

function App({Component, pageProps}: AppPropsWithLayout): JSX.Element {
	const getLayout = Component?.getLayout ?? ((page) => page)

	return (
		<AuthProvider>
			<CourseProvider>
				<ThemeProvider attribute="class">
					<ToastContainer />
					<Script
						strategy="lazyOnload"
						src={`https://www.googletagmanager.com/gtag/js?id=${
							process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ?? ''
						}`}
					/>
					<Script id="googletagmanager" strategy="lazyOnload">
						{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', "${
					process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ?? 'sample'
				}");
    `}
					</Script>

					{getLayout(<Component {...pageProps} />)}
				</ThemeProvider>
			</CourseProvider>
		</AuthProvider>
	)
}

export default App
