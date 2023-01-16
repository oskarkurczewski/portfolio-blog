import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Head from "next/head";
import "../styles/index.scss";

export default function App({ Component, pageProps }) {

  return (
    <>
      <Head>    
        <title>Oskar Kurczewski</title>
      </Head>
      <div className="app-container">
        <Navbar/>
          <Component {...pageProps}/>
        <Footer/>
      </div>
    </>
    );
}
