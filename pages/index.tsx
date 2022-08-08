import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className=" relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Head>
        <title>NetFlix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        {/*Banner*/}
        <section>{/*ROWs*/}</section>
      </main>
      {/*MODAL*/}
    </div>
  );
};

export default Home;
