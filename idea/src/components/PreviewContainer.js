import styles from "./PreviewContainer.module.css";

const PreviewContainer = () => {
  return (
    <section className={styles.previewContainer}>
      <div className={styles.previewNavigation}>
        <div className={styles.searchField}>
          <div className={styles.searchGlyph}>􀊫</div>
          <div className={styles.placeholderLabel}>검색</div>
        </div>
      </div>
      <div className={styles.previews}>
        <div className={styles.previewTitles}>
          <h1 className={styles.h1}>
            <p className={styles.p}>{`아이디어 게시판 `}</p>
            <p className={styles.p1}>미리보기</p>
          </h1>
        </div>
        <div className={styles.previewDivider}>
          <div className={styles.previewSeparator} />
        </div>
        <div className={styles.previewTitles1}>
          <h1 className={styles.h11}>
            <p className={styles.p2}>{`개발자 목록 `}</p>
            <p className={styles.p3}>미리보기</p>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default PreviewContainer;
