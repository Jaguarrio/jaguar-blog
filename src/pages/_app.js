import "../../styles/globals.css";

import NextNProgress from "nextjs-progressbar";

import Navbar from "../components/cores/Navbar";
import Footer from "../components/cores/Footer";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>บทความและเนื้อหาที่น่าสนใจ - Jaguar Blog</title>
      </Head>
      <NextNProgress color="orange" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} options={{ easing: "ease" }} />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
