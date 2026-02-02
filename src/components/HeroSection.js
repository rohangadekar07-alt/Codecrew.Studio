import styles from './PosterBackground.module.css';

const HeroSection = () => {
  return (
    <div className={styles['poster-container']}>
      {/* 
        We are only adding these subtle overlays to animate the EXISTING lines 
        in the background image, as requested. No extra random elements.
      */}

      {/* Moving Dotted Line: Left Side, Middle */}
      <div className={`${styles['animated-dotted-line']} ${styles['line-horizontal-left']}`}></div>

      {/* Moving Dotted Line: Right Side */}
      <div className={`${styles['animated-dotted-line']} ${styles['line-horizontal-right']}`}></div>

      {/* Moving Dotted Line: Vertical Top Left */}
      <div className={`${styles['animated-dotted-line-vertical']} ${styles['line-vertical-top-1']}`}></div>

      {/* Moving Dotted Line: Vertical Top Right */}
      <div className={`${styles['animated-dotted-line-vertical']} ${styles['line-vertical-top-2']}`}></div>

      {/* The rest of the content (Text/Logo) is part of the image, 
          so we don't overlay HTML text unless the user wants it editable.
          The user said: "take this image and use same everything... add animation but for same image"
          This implies the image serves as the full UI. 
      */}
    </div>
  );
};

export default HeroSection;
