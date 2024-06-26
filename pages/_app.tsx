import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { UserProvider } from "@/context/authContext";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
  <Head>
  <link rel="icon" type="image/svg" href="/files/logo.svg" />
                     
                     <title>NJFC INDIA CHURCH</title>
  </Head>
  <Component {...pageProps} /></UserProvider>
  );
}
