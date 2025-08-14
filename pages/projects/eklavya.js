import EklavyaProjects from '../../components/Projects/EklavyaProjects/EklavyaProjects';
import Navbar from '../../components/Navbar/Navbar';
import Head from 'next/head';
import { useRouter } from 'next/router';

const EklavyaProjectsPage = () => {
  const router = useRouter();

  const navigationSections = [
    'Home',
    'About',
    'Projects',
    'Sponsors',
    'Corporate',
    'Contact',
  ];

  const handleNavigation = (index) => {
    if (index === 0) {
      // Home - go to main page
      router.push('/');
    } else if (index === 1) {
      // About - go to main page and scroll to About section
      router.push('/?section=1');
    } else if (index === 2) {
      // Projects - go to projects page
      router.push('/projects');
    } else if (index === 3) {
      // Sponsors
      router.push('/sponsors');
    } else if (index === 4) {
      // Corporate
      router.push('/corporateSupport');
    } else if (index === 5) {
      // Contact
      router.push('/contactus');
    }
  };

  return (
    <>
      <Head>
        <title>Eklavya Projects | SRA VJTI</title>
      </Head>
      <Navbar
        sections={navigationSections}
        onSectionChange={handleNavigation}
      />
      <EklavyaProjects />
    </>
  );
};

export default EklavyaProjectsPage;
