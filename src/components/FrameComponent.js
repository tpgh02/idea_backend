import { useState, useCallback } from "react";
import SignIn from "./SignIn";
import PortalPopup from "./PortalPopup";
import Letter from "./Letter";
import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
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
      <header className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.wrapper}>
                  <div className={styles.div} onClick={openSignIn}>
                    로그인
                  </div>
                </div>
                <div className={styles.frameChild} />
                <div className={styles.frameWrapper1}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameItem} />
                    <div className={styles.div1} onClick={openLetter1}>
                      회원가입
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h1 className={styles.ida}>idéa</h1>
          </div>
        </div>
        <div className={styles.frameWrapper2}>
          <div className={styles.frameParent1}>
            <div className={styles.container}>
              <div className={styles.div2} onClick={openLetter2}>
                아이디어 게시판
              </div>
            </div>
            <div className={styles.contentHeader} />
            <div className={styles.contentHeader1}>
              <div className={styles.div3} onClick={openLetter21}>
                개발자 목록
              </div>
            </div>
            <div className={styles.contentHeader2} />
            <div className={styles.contentHeader3}>
              <div className={styles.div4} onClick={openLetter22}>
                채팅 목록
              </div>
            </div>
          </div>
        </div>
        <div className={styles.searchField}>
          <div className={styles.searchGlyph}>􀊫</div>
          <div className={styles.placeholderLabel}>검색</div>
        </div>
      </header>
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
          <Letter onClose={closeLetter2} />
        </PortalPopup>
      )}
      {isLetter21Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLetter21}
        >
          <Letter onClose={closeLetter21} />
        </PortalPopup>
      )}
      {isLetter22Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLetter22}
        >
          <Letter onClose={closeLetter22} />
        </PortalPopup>
      )}
    </>
  );
};

export default FrameComponent;
