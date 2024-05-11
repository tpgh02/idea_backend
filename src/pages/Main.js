import { useState, useCallback } from "react";
import SignIn from "../components/SignIn";
import PortalPopup from "../components/PortalPopup";
import Letter from "../components/Letter";
import Letter1 from "../components/Letter1";
import styles from "./Main.module.css";

const Main = () => {
  const [isSignInOpen, setSignInOpen] = useState(false);
  const [isLetter1Open, setLetter1Open] = useState(false);
  const [isLetter2Open, setLetter2Open] = useState(false);

  const openSignIn = useCallback(() => {
    setSignInOpen(true);
  }, []);

  const closeSignIn = useCallback(() => {
    setSignInOpen(false);
  }, []);

  const openLetter1 = useCallback(() => {
    setLetter1Open(true);
  }, []);

  const closeLetter1 = useCallback(() => {
    setLetter1Open(false);
  }, []);

  const openLetter2 = useCallback(() => {
    setLetter2Open(true);
  }, []);

  const closeLetter2 = useCallback(() => {
    setLetter2Open(false);
  }, []);

  return (
    <>
      <div className={styles.main}>

        <div className={styles.top}>
          <h1 className={styles.ida}>idéa</h1>
          <div className={styles.div} onClick={openSignIn}>
            로그인
          </div>
          <div className={styles.div1} onClick={openLetter1}>
            회원가입
          </div>
        </div>

        <div className={styles.middle1}>
          <div className={styles.div2} onClick={openLetter2}>
            아이디어 게시판
          </div>
          <div className={styles.div3} onClick={openLetter2}>
            개발자 목록
          </div>
          <div className={styles.div4} onClick={openLetter2}>
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

      {isSignInOpen && (
          <PortalPopup
              overlayColor="rgba(113, 113, 113, 0.3)"
              placement="Centered"
              onOutsideClick={closeSignIn}
          >
            <SignIn onClose={closeSignIn}/>
          </PortalPopup>
      )}
      {isLetter1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLetter1}
        >
          <Letter onClose={closeLetter1} />
        </PortalPopup>
      )}
      {isLetter2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLetter2}
        >
          <Letter1 onClose={closeLetter2} />
        </PortalPopup>
      )}
    </>
  );
};

export default Main;
