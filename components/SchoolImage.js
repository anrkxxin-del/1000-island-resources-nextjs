import { useState } from 'react';
import Image from 'next/image';
import styles from './SchoolImage.module.css';

const R2_BASE_URL = 'https://assets.1000-island.com';

export default function SchoolImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
}) {
  const [hasError, setHasError] = useState(false);
  const imageSrc = src.startsWith('http') ? src : `${R2_BASE_URL}/${src}`;
  const classNames = [styles.image, className].filter(Boolean).join(' ');
  const aspectRatio = width && height ? `${width} / ${height}` : undefined;

  if (hasError) {
    return (
      <div
        aria-label={alt}
        className={[styles.placeholder, className].filter(Boolean).join(' ')}
        role="img"
        style={{ aspectRatio }}
      />
    );
  }

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={classNames}
      onError={() => setHasError(true)}
    />
  );
}
