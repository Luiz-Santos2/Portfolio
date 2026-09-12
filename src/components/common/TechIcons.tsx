'use client';
import React, { memo, useState, useCallback } from 'react';
import { parseTechIcons, TechIconMeta } from '@/services/iconMapping';
import styles from '@/app/page.module.css';

interface TechIconsProps {
  icons: string | Array<string>;
  size?: 'sm' | 'md';
  className?: string;
}

const TechIconItem = memo(({ icon, size }: { icon: TechIconMeta; size: 'sm' | 'md' }) => {
  const [hasError, setHasError] = useState(false);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  if (hasError) {
    return null;
  }

  const wrapperClass = size === 'sm' ? styles.techIconWrapperSm : styles.techIconWrapperMd;
  const iconClass = size === 'sm' ? styles.techIconSm : styles.techIconMd;

  return (
    <span className={wrapperClass} title={icon.label}>
      <img
        src={icon.iconUrl}
        alt={`Logo da tecnologia ${icon.label}`}
        className={iconClass}
        loading="lazy"
        decoding="async"
        onError={handleError}
      />
    </span>
  );
});

TechIconItem.displayName = 'TechIconItem';

const TechIcons = memo(({ icons, size = 'md', className }: TechIconsProps) => {
  const iconList = parseTechIcons(icons);

  if (!iconList || iconList.length === 0) {
    return null;
  }

  return (
    <div className={`${styles.techIconsContainer} ${className || ''}`}>
      {iconList.map((icon, idx) => (
        <TechIconItem key={`${icon.key}-${idx}`} icon={icon} size={size} />
      ))}
    </div>
  );
});

TechIcons.displayName = 'TechIcons';

export default TechIcons;
