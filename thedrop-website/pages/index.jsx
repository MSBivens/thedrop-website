import Head from "next/head";
import Main from "../components/Main";
import Roadmap from "../components/Roadmap";

export default function Home() {
  return (
    <div>
      <Head>
        <title>TheDrop</title>
        <meta
          name="description"
          content="An NFT newsletter for collectors and traders"
        />
        <meta name="keywords" content="NFT, tools, resources, news, events" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <Roadmap />
    </div>
  );
}
