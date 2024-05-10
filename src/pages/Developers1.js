import { useState, useCallback } from "react";
import MypageSetting from "../components/MypageSetting";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import styles from "./Developers1.module.css";

const Developers1 = () => {
  const [isMypageSettingOpen, setMypageSettingOpen] = useState(false);
  const navigate = useNavigate();

  const onText7Click = useCallback(() => {
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

  return (
    <>
      <div className={styles.developers}>
        <section className={styles.navigation}>
          <div className={styles.dropdownMenu}>
            <div className={styles.userActionsWrapper}>
              <div className={styles.userActions}>
                <div className={styles.actionItems}>
                  <div className={styles.div} onClick={onText7Click}>
                    로그아웃
                  </div>
                </div>
                <div className={styles.userActionsChild} />
                <div className={styles.actionItems1}>
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
        </section>
        <div className={styles.contentPanel}>
          <FrameComponent2 />
        </div>
        <div className={styles.searchArea}>
          <div className={styles.searchField}>
            <div className={styles.searchGlyph}>􀊫</div>
            <div className={styles.placeholderLabel}>검색</div>
          </div>
          <FrameComponent3 />
        </div>
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

export default Developers1;
