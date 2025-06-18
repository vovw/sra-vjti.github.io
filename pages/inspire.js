import Alumni from '../components/Teams/Alumni/Alumni';
import Head from 'next/head';
import OurReach from '../components/OurReach/OurReach';

const InspirePage = () => {
  return (
    <>
      <Head>
        <title>Inspire | SRA VJTI</title>
      </Head>
      {/* Alumni section */}
      <Alumni />
      {/* Reach section */}
      <OurReach />
    </>
  );
};

export default InspirePage; 