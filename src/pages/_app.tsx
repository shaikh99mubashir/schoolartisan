import QueryProvider from "@/providers/query-provider";
import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return   <QueryProvider><Component {...pageProps} /></QueryProvider>;
}
