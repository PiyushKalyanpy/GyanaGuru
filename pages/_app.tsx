import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Providers } from "@/GlobalRedux/provider";
import "material-icons/iconfont/material-icons.css";
import Script from "next/script";

function App({ Component, pageProps }: AppProps) {
  return (
      <Providers>
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
      </Providers>
  );
}

export default App;
