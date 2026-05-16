import SchoolImage from './SchoolImage';
import styles from './SchoolImageGallery.module.css';

export default function SchoolImageGallery({ images = [], schoolSlug }) {
  if (!images.length) return null;

  return (
    <div className={styles.gallery} data-school-slug={schoolSlug}>
      {images.map((image, index) => (
        <SchoolImage
          key={`${image.src}-${index}`}
          src={image.src}
          alt={image.alt}
          width={image.width || 800}
          height={image.height || 600}
          priority={index === 0}
          className={styles.image}
        />
      ))}
    </div>
  );
}
