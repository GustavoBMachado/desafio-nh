import Head from 'next/head';
import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import { MainContent } from '../components/MainContent';
import { SecondarySection } from '../components/SecondarySection';
import './globals.css';

const Home: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Spotify Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <MainContent />
      <SecondarySection />
    </Layout>
  );
};

export default Home;