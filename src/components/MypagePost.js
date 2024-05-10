import { useCallback } from "react";
import FrameComponent from "./FrameComponent6";
import { useNavigate } from "react-router-dom";
import styles from "./MypagePost.module.css";

const MypagePost = ({ onClose }) => {
  const navigate = useNavigate();

  const onQuillescapeIconClick = useCallback(() => {
    navigate("/main-log-in");
  }, [navigate]);

  return (
    <div className={styles.mypagePost}>
      <section className={styles.mainContainer}>
        <div className={styles.mainContainerInner}>
          <FrameComponent />
        </div>
        <div className={styles.email} />
      </section>
      <img
        className={styles.quillescapeIcon}
        loading="lazy"
        alt=""
        src="/quillescape.svg"
        onClick={onQuillescapeIconClick}
      />
    </div>
  );
};

export default MypagePost;
