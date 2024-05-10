import { useState, useCallback } from "react";
import MypageSetting from "./MypageSetting";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = () => {
  const [isMypageSettingOpen, setMypageSettingOpen] = useState(false);
  const navigate = useNavigate();

  const onTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const openMypageSetting = useCallback(() => {
    setMypageSettingOpen(true);
  }, []);

  const closeMypageSetting = useCallback(() => {
    setMypageSettingOpen(false);
  }, []);

  const onIdaTextClick = useCallback(() => {
    navigate("/main-log-in");
  }, [navigate]);

  const onText2Click = useCallback(() => {
    navigate("/board");
  }, [navigate]);

  const onText4Click = useCallback(() => {
    navigate("/developers1");
  }, [navigate]);

  return (
    <>
      <section className={styles.mainContent}>
        <div className={styles.navigationHeader}>
          <div className={styles.navigationBar}>
            <div className={styles.navigationItems}>
              <div className={styles.userProfileActions}>
                <div className={styles.profileOptions}>
                  <div className={styles.userActions}>
                    <div className={styles.div} onClick={onTextClick}>
                      로그아웃
                    </div>
                  </div>
                  <div className={styles.profileOptionsChild} />
                  <div className={styles.userActions1}>
                    <div className={styles.div1} onClick={openMypageSetting}>
                      마이페이지
                    </div>
                  </div>
                </div>
              </div>
              <h1 className={styles.ida} onClick={onIdaTextClick}>
                idéa
              </h1>
            </div>
          </div>
          <div className={styles.mainArea}>
            <div className={styles.wrapper}>
              <div className={styles.div2} onClick={onText2Click}>
                아이디어 게시판
              </div>
            </div>
            <div className={styles.contentDivider} />
            <div className={styles.developerListAreaWrapper}>
              <div className={styles.developerListArea}>
                <div className={styles.developerListAreaChild} />
                <div className={styles.div3}>개발자 목록</div>
              </div>
            </div>
            <div className={styles.contentDivider1} />
            <div className={styles.container}>
              <div className={styles.div4} onClick={onText4Click}>
                채팅 목록
              </div>
            </div>
          </div>
        </div>
      </section>
      {isMypageSettingOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMypageSetting}
        >
          <MypageSetting onClose={closeMypageSetting} />
        </PortalPopup>
      )}
    </>
  );
};

export default FrameComponent1;
