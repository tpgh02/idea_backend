import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = () => {
  const navigate = useNavigate();

  const onText9Click = useCallback(() => {
    navigate("/board");
  }, [navigate]);

  const onText10Click = useCallback(() => {
    navigate("/developers");
  }, [navigate]);

  return (
    <div className={styles.contentStructure}>
      <div className={styles.ideaBoard}>
        <div className={styles.div} onClick={onText9Click}>
          아이디어 게시판
        </div>
      </div>
      <div className={styles.contentStructureInner}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.developerDirectory}>
        <div className={styles.div1} onClick={onText10Click}>
          개발자 목록
        </div>
      </div>
      <div className={styles.contentStructureChild}>
        <div className={styles.frameItem} />
      </div>
      <div className={styles.chatInterface}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameInner} />
          <div className={styles.div2}>채팅 목록</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
