import Header from "../components/header";
import Layout from "../components/layout";
import "../styles/globals.css";
import { DefaultSeo } from "next-seo";
import SEO from "../next_seo.config";
import { Component } from "react";
function MyApp({ Component, pageProps, navigation }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Layout>
        <Header navigation={navigation} />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
MyApp.getInitialProps = async ({ ctx }) => {
  const response = await fetch(`
  https://stapi-next-app.herokuapp.com/navigations`);
  const navigation = await response.json();
  return { navigation };
};

export default MyApp;
