import { useState, useCallback } from "react";
import MypageSetting from "./MypageSetting";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./Body.module.css";

const Body = () => {
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

  const onText4Click = useCallback(() => {
    navigate("/developers");
  }, [navigate]);

  const onText5Click = useCallback(() => {
    navigate("/developers1");
  }, [navigate]);

  return (
    <>
      <section className={styles.body}>
        <div className={styles.navigationPanel}>
          <div className={styles.experienceContent}>
            <div className={styles.dropdownItems}>
              <div className={styles.userOptions}>
                <div className={styles.profileIntro}>
                  <div className={styles.actionButtons}>
                    <div className={styles.div} onClick={onTextClick}>
                      로그아웃
                    </div>
                  </div>
                  <div className={styles.navigation} />
                  <div className={styles.actionButtons1}>
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
          <div className={styles.ideaBoardParent}>
            <div className={styles.ideaBoard}>
              <div className={styles.boardContainer}>
                <div className={styles.boardContainerChild} />
                <div className={styles.div2}>아이디어 게시판</div>
              </div>
            </div>
            <div className={styles.robertGarcia} />
            <div className={styles.wrapper}>
              <div className={styles.div3} onClick={onText4Click}>
                개발자 목록
              </div>
            </div>
            <div className={styles.frameChild} />
            <div className={styles.container}>
              <div className={styles.div4} onClick={onText5Click}>
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

export default Body;
