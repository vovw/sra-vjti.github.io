import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import HorizontalLayout from '../components/HorizontalLayout/HorizontalLayout';
import Navbar from '../components/Navbar/Navbar';
import LandingHero from '../components/LandingHero/LandingHero';
import HomeAboutUs from '../components/HomeAboutUs/HomeAboutUs';
import Projects from '../components/Projects/Projects';
import OurSponsors from '../components/OurSponsors/OurSponsors';
import OurCorporates from '../components/OurCorporates/OurCorporates';

const Home = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const router = useRouter();

  // Handle section parameter from URL
  useEffect(() => {
    const { section } = router.query;
    if (section && !isNaN(section)) {
      setCurrentSection(parseInt(section));
    }
  }, [router.query]);

  // Ensure page is ready for horizontal scrolling when loaded
  useEffect(() => {
    // Reset any scroll position and ensure focus
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const sections = ['Home', 'About', 'Projects', 'Sponsors', 'Corporate'];

  const SectionComponents = [
    LandingHero,
    HomeAboutUs,
    Projects,
    OurSponsors,
    OurCorporates,
  ];

  return (
    <>
      <Head>
        <title>Home | SRA VJTI</title>
        <meta
          name='description'
          content='Society for Robotics and Automation - VJTI'
        />
      </Head>

      <Navbar
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
        sections={sections}
      />

      <HorizontalLayout
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
        components={SectionComponents}
      />
    </>
  );
};

export default Home;
