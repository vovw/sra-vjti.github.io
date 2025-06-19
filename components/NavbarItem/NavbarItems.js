import React from 'react';
import styles from './NavbarItems.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';

const NavbarItems = ({ navItem, idx, linkClick }) => {
  // Animation variants for hover effect
  const hoverVariants = {
    initial: { width: 0 },
    hover: { width: '100%' },
  };

  return (
    <div className={styles.navItem}>
      {navItem.subMenu ? (
        <>
          <Link href={navItem.link} onClick={linkClick}>
            <div className={styles.navItemTitle}>
              <span>{navItem.name}</span>
              <motion.div
                className={styles.underline}
                initial='initial'
                whileHover='hover'
                variants={hoverVariants}
              />
            </div>
          </Link>
          <div className={styles.subItems}>
            {navItem.subMenu.map((subItem, subIdx) => (
              <Link key={subIdx} href={subItem.link} onClick={linkClick}>
                <div className={styles.subItemTitle}>
                  <span>{subItem.name}</span>
                  <motion.div
                    className={styles.underline}
                    initial='initial'
                    whileHover='hover'
                    variants={hoverVariants}
                  />
                </div>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <Link href={navItem.link} onClick={linkClick}>
          <div className={styles.navItemTitle}>
            <span>{navItem.name}</span>
            <motion.div
              className={styles.underline}
              initial='initial'
              whileHover='hover'
              variants={hoverVariants}
            />
          </div>
        </Link>
      )}
    </div>
  );
};

export default NavbarItems;
