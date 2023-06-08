import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "material-icons/iconfont/material-icons.css";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import { AuthProvider } from "../context/AuthContext";

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>

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
    </AuthProvider>
    
  );
}

export default App;
