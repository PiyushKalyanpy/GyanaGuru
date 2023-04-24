import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Providers } from "@/GlobalRedux/provider";
import "material-icons/iconfont/material-icons.css";
import { CoursesContext, CoursesProvider } from "../context/CoursesContext";
import { UserContext, UserProvider } from "@/context/UserContext";
// import 'material-icons/iconfont/filled.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <CoursesProvider>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </CoursesProvider>
  );
}

export default App;
