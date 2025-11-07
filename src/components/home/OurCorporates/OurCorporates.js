import Image from 'next/image';
import { memo } from 'react';
import { CorporateReachImgNames, CorporateReachLinks } from '@/data';
import styles from './OurCorporates.module.scss';

const OurCorporates = memo(() => {
  return (
    <div className={styles.reach}>
      <h1>Industrial Reach</h1>
      <div className={styles.reachGroup}>
        {CorporateReachImgNames.map((name, idx) => (
          <a
            href={CorporateReachLinks[idx]}
            key={`corporate_${idx}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className={styles.reachImg}>
              <Image
                src={`/images/corporates/${name}`}
                alt={`Corporate partner ${idx + 1}`}
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

OurCorporates.displayName = 'OurCorporates';

export default OurCorporates;
