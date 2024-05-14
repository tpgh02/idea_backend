import { useState, useCallback } from "react";
import MypageSetting from "../components/MypageSetting";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./Developers1.module.css";

const Developers1 = () => {
  const [isMypageSettingOpen, setMypageSettingOpen] = useState(false);
  const navigate = useNavigate();

  const onTextClick = useCallback(() => {
    navigate("/");
    localStorage.clear();
  }, [navigate]);

  const onIdeaClick = useCallback(() => {
    navigate("/main-log-in");
  }, [navigate]);

  const openMypageSetting = useCallback(() => {
    setMypageSettingOpen(true);
  }, []);

  const closeMypageSetting = useCallback(() => {
    setMypageSettingOpen(false);
  }, []);

  const onText4Click = useCallback(() => {
    navigate("/board");
  }, [navigate]);

  const onText5Click = useCallback(() => {
    navigate("/developers");
  }, [navigate]);

  const onText6Click = useCallback(() => {
    navigate("/developers1");
  }, [navigate]);

  return (
      <>
        <div className={styles.main}>

          <div className={styles.top}>
            <h1 className={styles.ida} onClick={onIdeaClick}>idéa</h1>
            <div className={styles.div} onClick={onTextClick}>
              로그아웃
            </div>
            <div className={styles.div1} onClick={openMypageSetting}>
              마이페이지
            </div>
          </div>

          <div className={styles.middle1}>
            <div className={styles.div2} onClick={onText4Click}>
              아이디어 게시판
            </div>
            <div className={styles.div3} onClick={onText5Click}>
              개발자 목록
            </div>
            <div className={styles.div4} onClick={onText6Click}>
              채팅 목록
            </div>
          </div>

          <div className={styles.middle2}>
            <div className={styles.searchField}>
              <img
                  className={styles.searchGlyph}
                  loading="lazy"
                  alt=""
                  src="/search.svg"
              />
              <input
                  className={styles.placeholderLabel}
                  placeholder="검색"
                  type="text"
              />
            </div>
          </div>

          <div className={styles.bottom}>
            <div className={styles.ideaPost}>
              <h1 className={styles.h1}>
                <p className={styles.p}>{`채팅 목록`}</p>
              </h1>
            </div>
          </div>
        </div>
        {isMypageSettingOpen && (
            <PortalPopup
                overlayColor="rgba(113, 113, 113, 0.3)"
                placement="Centered"
            >
              <MypageSetting onClose={closeMypageSetting} />
            </PortalPopup>
        )}
      </>
  );
};

export default Developers1;
