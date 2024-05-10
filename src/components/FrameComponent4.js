import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent4.module.css";

const FrameComponent4 = () => {
  const navigate = useNavigate();

  const onText4Click = useCallback(() => {
    navigate("/board");
  }, [navigate]);

  const onText5Click = useCallback(() => {
    navigate("/developers");
  }, [navigate]);

  const onText6Click = useCallback(() => {
    navigate("/developers1");
  }, [navigate]);

  return (
    <div className={styles.contentContainer}>
      <div className={styles.contentNavigation}>
        <div className={styles.directoryPreview}>
          <div className={styles.directoryImage} />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.div} onClick={onText4Click}>
            아이디어 게시판
          </div>
        </div>
        <div className={styles.contentNavigationChild} />
        <div className={styles.container}>
          <div className={styles.div1} onClick={onText5Click}>
            개발자 목록
          </div>
        </div>
        <div className={styles.contentNavigationItem} />
        <div className={styles.frame}>
          <div className={styles.div2} onClick={onText6Click}>
            채팅 목록
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
