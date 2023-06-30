import { AppProps } from "next/app";
import { NextPage } from "next";

import "@/styles/globals.css";
import "material-icons/iconfont/material-icons.css";
import "material-symbols";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import { CourseProvider } from "@/context/CourseContext";
import { CookiesProvider } from "react-cookie";
import { NextPageWithLayout } from "../util/page";
import { AuthProvider } from "../context/AuthContext";

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    (Component as NextPageWithLayout)?.getLayout || ((page) => page);

  return (
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
            {getLayout(<Component {...pageProps} />)}
          </ThemeProvider>
        </CourseProvider>
      </AuthProvider>
    </CookiesProvider>
  );
}

export default App;
