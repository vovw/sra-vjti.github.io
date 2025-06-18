import LandingHero from '../components/LandingHero/LandingHero';
import HomeAboutUs from '../components/HomeAboutUs/HomeAboutUs';
import OurReach from '../components/OurReach/OurReach';
import OurSponsors from '../components/OurSponsors/OurSponsors';
import OurCorporates from '../components/OurCorporates/OurCorporates';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home | SRA VJTI</title>
      </Head>
      <LandingHero />
      <HomeAboutUs />
      <OurSponsors />
      <OurReach />
      <OurCorporates />
    </>
  );
};

export default Home;
