import Image from 'next/image';
import { memo } from 'react';
import { AlumniReachImgNames, AlumniReachLinks } from '@/data';
import styles from './HomeReach.module.scss';

const OurReach = memo(() => {
  return (
    <div className={styles.reach}>
      <h1>University Reach</h1>
      <div className={styles.reachGroup}>
        {AlumniReachImgNames.map((name, idx) => (
          <a
            href={AlumniReachLinks[idx]}
            key={`university_${idx}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className={styles.reachImg}>
              <Image
                src={`/images/reach/${name}`}
                alt={`University ${idx + 1}`}
                width={150}
                height={150}
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

OurReach.displayName = 'OurReach';

export default OurReach;
