import {
  AboutUsText,
  AboutVJTI,
  AboutUsTeamText,
  AboutUsAlumniText,
  AboutUsImages,
} from '../../data';
import styles from './HomeAboutUs.module.scss';
import Link from 'next/link';

const HomeAboutUs = () => {
  return (
    <div className={styles.aboutUs} id='About-us'>
      {/* Single focused About section for horizontal layout */}
      <div className={styles.aboutUsMain}>
        <div className={styles.content}>
          <h1>About SRA</h1>
          <p>{AboutUsText}</p>

          <div className={styles.quickInfo}>
            <div className={styles.infoCard}>
              <h3>Founded</h3>
              <p>September 2008</p>
            </div>
            <div className={styles.infoCard}>
              <h3>Focus</h3>
              <p>Robotics & Automation</p>
            </div>
            <div className={styles.infoCard}>
              <h3>Location</h3>
              <p>VJTI, Mumbai</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutUs;
