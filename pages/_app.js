import NavBar from "../components/NavBar";
import Layout from "../components/Layout";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}