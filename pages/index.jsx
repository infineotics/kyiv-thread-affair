import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ContentSlider from '../components/homepage/ContentSlider';
import HomeNewsletter from '../components/homepage/HomeNewsletter';
import HomePayment from '../components/homepage/HomePayment';
import HomeSocial from '../components/homepage/HomeSocial';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Thread Affair</title>
      </Head>

      <Header></Header>

      <main className="content">
        <header className="content-header mb-5">
          <ContentSlider></ContentSlider>
        </header>

        <section className="content-main">
          <HomeNewsletter></HomeNewsletter>

          <HomeSocial></HomeSocial>

          <HomePayment></HomePayment>
        </section>
      </main>

      <Footer></Footer>
    </div>
  );
}
