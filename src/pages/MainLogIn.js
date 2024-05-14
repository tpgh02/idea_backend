import { useState, useCallback } from "react";
import MypageSetting from "../components/MypageSetting";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./MainLogIn.module.css";

const MainLogIn = () => {
  const [isMypageSettingOpen, setMypageSettingOpen] = useState(false);
  const navigate = useNavigate();

  const onTextClick = useCallback(() => {
    navigate("/");
    localStorage.clear();
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

  const post = useCallback(() => {
    navigate("/post");
  }, [navigate]);

  return (
      <>
        <div className={styles.main}>

          <div className={styles.top}>
            <div className={styles.post} onClick={post}> 게시글 작성 </div>
            <h1 className={styles.ida}>idéa</h1>
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
              <input
                  className={styles.placeholderLabel}
                  placeholder="검색"
                  type="text"
              />
              <img
                  className={styles.searchGlyph}
                  loading="lazy"
                  alt=""
                  src="/search.svg"
              />
            </div>
          </div>

          <div className={styles.bottom}>
            <div className={styles.ideaPost}>
              <h1 className={styles.h1}>
                <p className={styles.p}>{`아이디어 게시판 미리보기`}</p>
              </h1>
            </div>
            <div className={styles.developerList}>
              <h1 className={styles.h11}>
                <p className={styles.p1}>{`개발자 목록 미리보기`}</p>
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

export default MainLogIn;