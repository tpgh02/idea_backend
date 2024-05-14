import Body from "../components/Body";
import styles from "./Board.module.css";

const Board = () => {
  return (
    <div className={styles.board}>
      <Body />
      <div className={styles.searchArea}>
        <div className={styles.searchField}>
          <div className={styles.searchGlyph}>􀊫</div>
          <div className={styles.placeholderLabel}>검색</div>
        </div>
        <div className={styles.boardContent}>
          <div className={styles.boardContentChild} />
          <h1 className={styles.h1}>
            <p className={styles.p}>{`아이디어 게시판 `}</p>
            <p className={styles.p1}>목록</p>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Board;
