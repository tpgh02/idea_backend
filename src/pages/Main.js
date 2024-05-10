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
  const [isLetter21Open, setLetter21Open] = useState(false);
  const [isLetter22Open, setLetter22Open] = useState(false);

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

  const openLetter21 = useCallback(() => {
    setLetter21Open(true);
  }, []);

  const closeLetter21 = useCallback(() => {
    setLetter21Open(false);
  }, []);

  const openLetter22 = useCallback(() => {
    setLetter22Open(true);
  }, []);

  const closeLetter22 = useCallback(() => {
    setLetter22Open(false);
  }, []);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.visualElement} />
        <div className={styles.mainChild} />
        <div className={styles.contentHeader} />
        <div className={styles.mainItem} />
        <div className={styles.div} onClick={openSignIn}>
          로그인
        </div>
        <div className={styles.div1} onClick={openLetter1}>
          회원가입
        </div>
        <h1 className={styles.ida}>idéa</h1>
        <div className={styles.div2} onClick={openLetter2}>
          아이디어 게시판
        </div>
        <div className={styles.div3} onClick={openLetter21}>
          개발자 목록
        </div>
        <div className={styles.contentHeader1} />
        <div className={styles.div4} onClick={openLetter22}>
          채팅 목록
        </div>
        <div className={styles.searchField}>
          <div className={styles.searchGlyph}>􀊫</div>
          <div className={styles.placeholderLabel}>검색</div>
        </div>
        <div className={styles.ideaPost}>
          <h1 className={styles.h1}>
            <p className={styles.p}>{`아이디어 게시판 `}</p>
            <p className={styles.p1}>미리보기</p>
          </h1>
        </div>
        <div className={styles.developerList}>
          <h1 className={styles.h11}>
            <p className={styles.p2}>{`개발자 목록 `}</p>
            <p className={styles.p3}>미리보기</p>
          </h1>
        </div>
      </div>
      {isSignInOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSignIn}
        >
          <SignIn onClose={closeSignIn} />
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
      {isLetter21Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLetter21}
        >
          <Letter1 onClose={closeLetter21} />
        </PortalPopup>
      )}
      {isLetter22Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLetter22}
        >
          <Letter1 onClose={closeLetter22} />
        </PortalPopup>
      )}
    </>
  );
};

export default Main;
