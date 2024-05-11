import { useCallback } from "react";
import Navigation1 from "./Navigation1";
import styles from "./MypageSetting.module.css";

const MypageSetting = ({ onClose }) => {

  const onQuillescapeIconClick = useCallback(() => {
      if (onClose) {
          onClose();
      }
  }, [onClose]);

  return (
    <div className={styles.mypageSetting}>
      <div className={styles.mainContent}>
        <img
          className={styles.quillescapeIcon}
          loading="lazy"
          alt=""
          src="/quillescape.svg"
          onClick={onQuillescapeIconClick}
        />
      </div>
      <Navigation1 />
      <div className={styles.mypageSettingInner}>
        <button className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.div}>저장</div>
        </button>
      </div>
    </div>
  );
};

export default MypageSetting;
