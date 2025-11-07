import Image from 'next/image';
import { memo } from 'react';
import { SponsorListImages, SponsorLinks } from '@/data/config/sponsors';
import styles from './OurSponsors.module.scss';

const OurSponsors = memo(() => {
  return (
    <div className={styles.reach}>
      <h1>Sponsors</h1>
      <div className={styles.reachGroup}>
        {SponsorListImages.map((name, idx) => (
          <a
            href={SponsorLinks[idx]}
            key={`sponsor_${idx}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className={styles.reachImg}>
              <Image
                src={`/images/sponsors/${name}`}
                alt={`Sponsor ${idx + 1}`}
                width={200}
                height={100}
                loading='lazy'
                quality={85}
                style={{ objectFit: 'contain' }}
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
});

OurSponsors.displayName = 'OurSponsors';

export default OurSponsors;
