import styles from "./PreviewArea.module.css";

const PreviewArea = () => {
  return (
    <section className={styles.previewArea}>
      <div className={styles.previewContentHeaderParent}>
        <div className={styles.previewContentHeader}>
          <h1 className={styles.h1}>
            <p className={styles.p}>{`아이디어 게시판 `}</p>
            <p className={styles.p1}>미리보기</p>
          </h1>
        </div>
        <div className={styles.lineWrapper}>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.previewContentHeader1}>
          <h1 className={styles.h11}>
            <p className={styles.p2}>{`개발자 목록 `}</p>
            <p className={styles.p3}>미리보기</p>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default PreviewArea;
