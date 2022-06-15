import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Thread Affair</title>
      </Head>

      <header className="header">
        Hello
        <img src="/images/logo.jpg" alt="Logo Thread Affair"></img>
        <i className="fa-solid fa-phone"></i>
      </header>

      <main className="content"></main>

      <footer className="footer"></footer>
    </div>
  );
}
