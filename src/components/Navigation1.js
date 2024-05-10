import { useState, useCallback } from "react";
import MypagePost from "./MypagePost";
import PortalPopup from "./PortalPopup";
import styles from "./Navigation1.module.css";

const Navigation1 = () => {
  const [isMypagePostOpen, setMypagePostOpen] = useState(false);

  const openMypagePost = useCallback(() => {
    setMypagePostOpen(true);
  }, []);

  const closeMypagePost = useCallback(() => {
    setMypagePostOpen(false);
  }, []);

  return (
    <>
      <section className={styles.navigation}>
        <div className={styles.profileNavigation}>
          <div className={styles.userInformation}>
            <div className={styles.div}>이름</div>
          </div>
          <div className={styles.profileSettingsParent}>
            <div className={styles.profileSettings}>
              <div className={styles.profileModification}>
                <div className={styles.editProfile}>
                  <div className={styles.profileData}>
                    <div className={styles.div1}>마이페이지</div>
                  </div>
                  <div className={styles.editProfileChild} />
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <div className={styles.div2}>내 정보 수정</div>
                  </div>
                </div>
              </div>
              <div className={styles.emailInput}>
                <input className={styles.email} type="text" />
                <div className={styles.div3}>이메일</div>
              </div>
            </div>
            <div className={styles.userPosts}>
              <div className={styles.wrapper} onClick={openMypagePost}>
                <div className={styles.div4}>내가 쓴 글</div>
              </div>
              <div className={styles.postInput}>
                <input className={styles.email1} type="text" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {isMypagePostOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMypagePost}
        >
          <MypagePost onClose={closeMypagePost} />
        </PortalPopup>
      )}
    </>
  );
};

export default Navigation1;
