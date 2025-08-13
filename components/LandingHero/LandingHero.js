import styles from './LandingHero.module.scss';
import Link from 'next/link';

const LandingHero = () => {
  return (
    <header className={styles.hero}>
      <Link href="/ideate" className={`${styles.link} ${styles.ideate}`}>
        <h1 className={styles.word}>IDEATE</h1>
        <p className={styles.tagline}>
          novel technological ideas for<br />the future.
        </p>
      </Link>

      {/* Center image */}
      <div className={styles.imageWrapper}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/static/images/landing_robot.png"
          alt="Futuristic AI head"
          className={styles.image}
        />
      </div>

      {/* Top barcode */}
      <div className={`${styles.barcode} ${styles.barcodeTop}`} />

      {/* Right word */}
      <Link href="/innovate" className={`${styles.link} ${styles.innovate}`}>
        <h1 className={styles.word}>INNOVATE</h1>
        <p className={styles.tagline}>
          and prototype robotic solutions using skill<br />and cutting-edge
          technology.
        </p>
      </Link>

      {/* Bottom-left word */}
      <Link href="/inspire" className={`${styles.link} ${styles.inspire}`}>
        <h1 className={styles.word}>INSPIRE</h1>
        <p className={styles.tagline}>
          freshmen through workshops<br />and victories.
        </p>
      </Link>

      {/* Bottom barcode */}
      <div className={`${styles.barcode} ${styles.barcodeBottom}`} />

      {/* Arrows */}
      <div className={styles.arrows} />
    </header>
  );
};

export default LandingHero; 