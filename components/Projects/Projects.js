import React from 'react';
import Link from 'next/link';
import styles from './Projects.module.scss';

const Projects = () => {
  return (
    <div className={styles.projects}>
      <div className={styles.content}>
        <h1>Our Projects</h1>
        <p>
          Explore our innovative robotics and automation projects that push the
          boundaries of technology.
        </p>

        <div className={styles.projectButtons}>
          <Link href='/projects/flagship'>
            <button className={styles.projectButton}>
              <span className={styles.buttonText}>Flagship Projects</span>
              <span className={styles.arrow}>→</span>
            </button>
          </Link>
          <Link href='/projects/eklavya'>
            <button className={styles.projectButton}>
              <span className={styles.buttonText}>Eklavya Projects</span>
              <span className={styles.arrow}>→</span>
            </button>
          </Link>
          <Link href='/projects/ongoing'>
            <button className={styles.projectButton}>
              <span className={styles.buttonText}>Ongoing Projects</span>
              <span className={styles.arrow}>→</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
