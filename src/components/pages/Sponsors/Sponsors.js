import { useState, useEffect, memo, useMemo } from 'react';
import Image from 'next/image';
import { saveAs } from 'file-saver';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExternalLink,
  faAngleDown,
  faAngleUp,
  faDonate,
} from '@fortawesome/free-solid-svg-icons';
import Hero from '@/components/common/Hero/Hero';
import useWindowSize from '@/lib/utils/ResizeHook';
import {
  diamondSponsors,
  goldSponsors,
  silverSponsors,
  levelImages,
  sponsorsText_1,
  sponsorsText_2,
  sponsorsSubText,
} from '@/data/config/sponsors';
import styles from './Sponsors.module.scss';

const SponsorTier = memo(({ sponsors, className, tier }) => (
  <div className={styles.reachGroup}>
    {sponsors.map((item, idx) => (
      <a
        href={item.link}
        key={`${tier}_sponsor_${idx}`}
        target='_blank'
        rel='noopener noreferrer'
      >
        <div className={className}>
          <Image
            src={`/images/sponsors/${item.image}`}
            alt={`${tier} sponsor ${idx + 1}`}
            width={tier === 'diamond' ? 300 : tier === 'gold' ? 250 : 200}
            height={150}
            loading='lazy'
            quality={90}
            style={{ objectFit: 'contain' }}
          />
        </div>
      </a>
    ))}
  </div>
));

SponsorTier.displayName = 'SponsorTier';

const Sponsors = () => {
  const [mobileView, setMobileView] = useState(false);
  const [visiblePara, setvisiblePara] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    setMobileView(size.width <= 780);
  }, [size.width]);

  useEffect(() => {
    setvisiblePara(!mobileView);
  }, [mobileView]);

  const saveFile = () => {
    saveAs(`/documents/PR_brochure_24-25.pdf`, `SRA_Brochure_2k24.pdf`);
  };

  return (
    <>
      <Hero
        imgName={'sponsors-hero.webp'}
        backgroundPosition={'center top'}
        title={<>Sponsor us</>}
        subtitleList={['Help us maintain our legacy of excellence!']}
        isHome={false}
      />
      <div className={styles.activityList} id='is'>
        <div className={styles.reach}>
          <h1>Why Sponsor Us?</h1>
          <p>{sponsorsText_1}</p>
          {visiblePara && <p>{sponsorsText_2}</p>}
          {mobileView && (
            <button
              className={styles.more}
              onClick={() => setvisiblePara((prev) => !prev)}
              aria-label={visiblePara ? 'Read less' : 'Read more'}
            >
              {visiblePara ? 'Read Less ' : 'Read More '}
              <span>
                <FontAwesomeIcon icon={visiblePara ? faAngleUp : faAngleDown} />
              </span>
            </button>
          )}
          <p>
            <b>{sponsorsSubText}</b>
          </p>
          <div className={styles.buttonGroup}>
            <button onClick={saveFile} aria-label='Download brochure'>
              Brochure{' '}
              <span>
                <FontAwesomeIcon icon={faExternalLink} />
              </span>
            </button>
            <a
              href='https://pages.razorpay.com/support-sra'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button aria-label='Donate to SRA'>
                Donate{' '}
                <span>
                  <FontAwesomeIcon icon={faDonate} />
                </span>
              </button>
            </a>
          </div>

          <h1>Sponsors</h1>

          {/* Diamond Tier */}
          <div className={styles.levelImage}>
            <Image
              src={`/images/sponsors/sponsorsLevel/${levelImages[0]}`}
              alt='Diamond Tier Sponsors'
              width={400}
              height={100}
              quality={90}
              style={{ objectFit: 'contain' }}
            />
          </div>
          <hr />
          <SponsorTier
            sponsors={diamondSponsors}
            className={styles.diamondImg}
            tier='diamond'
          />

          {/* Gold Tier */}
          <div className={styles.levelImage}>
            <Image
              src={`/images/sponsors/sponsorsLevel/${levelImages[1]}`}
              alt='Gold Tier Sponsors'
              width={400}
              height={100}
              quality={90}
              style={{ objectFit: 'contain' }}
            />
          </div>
          <hr />
          <SponsorTier
            sponsors={goldSponsors}
            className={styles.goldImg}
            tier='gold'
          />

          {/* Silver Tier */}
          <div className={styles.levelImage}>
            <Image
              src={`/images/sponsors/sponsorsLevel/${levelImages[2]}`}
              alt='Silver Tier Sponsors'
              width={400}
              height={100}
              quality={90}
              style={{ objectFit: 'contain' }}
            />
          </div>
          <hr />
          <SponsorTier
            sponsors={silverSponsors}
            className={styles.silverImg}
            tier='silver'
          />
        </div>
      </div>
    </>
  );
};

export default memo(Sponsors);
