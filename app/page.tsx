import Head from 'next/head';
import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import { MainContent } from '../components/MainContent';
import { SecondarySection } from '../components/SecondarySection';
import Image from 'next/image'

const Home: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>desafionh</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Hero />
      <MainContent />
      <SecondarySection />
    </Layout>
  );
};

export default Home;