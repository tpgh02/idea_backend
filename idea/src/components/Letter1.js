import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Letter1.module.css";

const Letter = ({ onClose }) => {
  const navigate = useNavigate();

  const onQuillescapeIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.letter2}>
      <section className={styles.homepageLayout}>
        <h1 className={styles.ida}>idéa</h1>
        <img
          className={styles.quillescapeIcon}
          loading="lazy"
          alt=""
          src="/quillescape.svg"
          onClick={onQuillescapeIconClick}
        />
      </section>
      <div className={styles.loginInterface}>
        <div className={styles.div}>로그인이 필요한 서비스입니다.</div>
      </div>
    </div>
  );
};

export default Letter;
