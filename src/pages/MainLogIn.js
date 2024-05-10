import { useState, useCallback } from "react";
import MypageSetting from "../components/MypageSetting";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import FrameComponent4 from "../components/FrameComponent4";
import PreviewContainer from "../components/PreviewContainer";
import styles from "./MainLogIn.module.css";

const MainLogIn = () => {
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

  return (
    <>
      <div className={styles.mainLogIn}>
        <header className={styles.topNavigation}>
          <div className={styles.userNavigation}>
            <div className={styles.userOptions}>
              <div className={styles.userActions}>
                <div className={styles.div} onClick={onTextClick}>
                  로그아웃
                </div>
              </div>
              <div className={styles.separator} />
              <div className={styles.userActions1}>
                <div className={styles.div1} onClick={openMypageSetting}>
                  마이페이지
                </div>
              </div>
            </div>
          </div>
          <h1 className={styles.ida}>idéa</h1>
        </header>
        <FrameComponent4 />
        <main className={styles.boardContainer}>
          <PreviewContainer />
        </main>
      </div>
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

export default MainLogIn;
