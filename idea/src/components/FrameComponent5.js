import { useMemo } from "react";
import styles from "./FrameComponent5.module.css";

const FrameComponent = ({ contentAreaWidth, onQuillescapeIconClick }) => {
  const frameSectionStyle = useMemo(() => {
    return {
      width: contentAreaWidth,
    };
  }, [contentAreaWidth]);

  return (
    <section className={styles.contentAreaParent} style={frameSectionStyle}>
      <div className={styles.contentArea}>
        <img
          className={styles.quillescapeIcon}
          loading="lazy"
          alt=""
          src="/quillescape.svg"
          onClick={onQuillescapeIconClick}
        />
      </div>
      <h1 className={styles.ida}>idéa</h1>
    </section>
  );
};

export default FrameComponent;
