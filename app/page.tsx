import Head from 'next/head';
import { Layout } from '../components/Layout';
import { HeaderHero } from '../components/HeaderHero';
import { MainContent } from '../components/MainContent';
import { SecondarySection } from '../components/SecondarySection';

const Home: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Spotify Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderHero />
      <MainContent />
      <SecondarySection />
    </Layout>
  );
};

export default Home;