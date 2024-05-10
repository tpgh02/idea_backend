import FrameComponent1 from "../components/FrameComponent1";
import styles from "./Developers.module.css";

const Developers = () => {
  return (
    <div className={styles.developers}>
      <FrameComponent1 />
      <div className={styles.searchArea}>
        <div className={styles.searchField}>
          <div className={styles.searchGlyph}>􀊫</div>
          <div className={styles.placeholderLabel}>검색</div>
        </div>
        <div className={styles.developerResults}>
          <div className={styles.developerResultsChild} />
          <h1 className={styles.h1}>개발자 목록</h1>
        </div>
      </div>
    </div>
  );
};

export default Developers;
