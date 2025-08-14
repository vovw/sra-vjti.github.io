import React, { useState, useEffect, useRef } from 'react';
import styles from './HorizontalLayout.module.scss';

const HorizontalLayout = ({
  components = [],
  currentSection,
  onSectionChange,
}) => {
  const containerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      if (isScrolling) return;

      e.preventDefault();
      setIsScrolling(true);

      if (e.deltaY > 0 && currentSection < components.length - 1) {
        onSectionChange(currentSection + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        onSectionChange(currentSection - 1);
      }

      setTimeout(() => setIsScrolling(false), 1000);
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [currentSection, components.length, onSectionChange, isScrolling]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.style.transform = `translateX(-${currentSection * 100}vw)`;
  }, [currentSection]);

  return (
    <div className={styles.viewport}>
      <div
        ref={containerRef}
        className={styles.container}
        style={{ width: `${components.length * 100}vw` }}
      >
        {components.map((Component, index) => (
          <div
            key={index}
            className={styles.section}
            data-active={index === currentSection}
          >
            <Component />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalLayout;
