import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "material-icons/iconfont/material-icons.css";
import "material-symbols";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import { AuthProvider } from "../context/AuthContext";
import { CourseProvider } from "@/context/CourseContext";
import { CookiesProvider } from "react-cookie";
import { NextPageWithLayout } from "./page";

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <CookiesProvider>
      <AuthProvider>
        <CourseProvider>
          <ThemeProvider attribute="class">
            <Script
              strategy="lazyOnload"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />
            <Script id="googletagmanager" strategy="lazyOnload">
              {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
  `}
            </Script>
            <Component {...pageProps} />
          </ThemeProvider>
        </CourseProvider>
      </AuthProvider>
    </CookiesProvider>
  );
}

export default App;
