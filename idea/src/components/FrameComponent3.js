import styles from "./FrameComponent3.module.css";

const FrameComponent3 = () => {
  return (
    <div className={styles.chatPreviews}>
      <div className={styles.chatPreviewsChild} />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.previewDetails}>
          <div className={styles.div}>유저이름</div>
        </div>
        <div className={styles.previewDivider} />
        <div className={styles.previewDetails1}>
          <div className={styles.div1}>마지막 채팅 미리보기</div>
        </div>
      </div>
      <div className={styles.chatListings}>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <div className={styles.usernames}>
            <div className={styles.div2}>유저이름</div>
          </div>
          <div className={styles.rowDivider} />
          <div className={styles.previewMessages}>
            <div className={styles.div3}>마지막 채팅 미리보기</div>
          </div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.frameInner} />
          <div className={styles.wrapper}>
            <div className={styles.div4}>유저이름</div>
          </div>
          <div className={styles.lineDiv} />
          <div className={styles.container}>
            <div className={styles.div5}>마지막 채팅 미리보기</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
