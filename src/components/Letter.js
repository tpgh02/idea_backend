import { useState, useCallback } from "react";
import SignUpNormal from "./SignUpNormal";
import PortalPopup from "./PortalPopup";
import SignUpDeveloper from "./SignUpDeveloper";
import styles from "./Letter.module.css";

const Letter = ({ onClose }) => {
  const [isSignUpNormalOpen, setSignUpNormalOpen] = useState(false);
  const [isSignUpDeveloperOpen, setSignUpDeveloperOpen] = useState(false);

  const onQuillescapeIconClick = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const openSignUpNormal = useCallback(() => {
    setSignUpNormalOpen(true);
  }, []);

  const closeSignUpNormal = useCallback(() => {
    setSignUpNormalOpen(false);
  }, []);

  const openSignUpDeveloper = useCallback(() => {
    setSignUpDeveloperOpen(true);
  }, []);

  const closeSignUpDeveloper = useCallback(() => {
    setSignUpDeveloperOpen(false);
  }, []);

  return (
    <>
      <div className={styles.letter1}>
        <div className={styles.contentAreaParent}>
          <div className={styles.contentArea}>
            <h1 className={styles.im}>I’m ...</h1>
          </div>
          <img
            className={styles.quillescapeIcon}
            loading="lazy"
            alt=""
            src="/quillescape.svg"
            onClick={onQuillescapeIconClick}
          />
        </div>
        <section className={styles.userInfoWrapper}>
          <div className={styles.userInfo}>
            <div className={styles.userSpecs}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <img
                  className={styles.materialSymbolspersonIcon}
                  loading="lazy"
                  alt=""
                  src="/materialsymbolsperson.svg"
                  onClick={openSignUpNormal}
                />
              </div>
              <div className={styles.userName}>
                <div className={styles.normal}>Normal</div>
              </div>
            </div>
            <div className={styles.roleInfo}>
              <div className={styles.affiliation}>
                <div className={styles.affiliationChild} />
                <img
                  className={styles.rimacbookLineIcon}
                  loading="lazy"
                  alt=""
                  src="/rimacbookline.svg"
                  onClick={openSignUpDeveloper}
                />
              </div>
              <div className={styles.jobTitle}>
                <div className={styles.developer}>Developer</div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {isSignUpNormalOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSignUpNormal}
        >
          <SignUpNormal onClose={closeSignUpNormal} />
        </PortalPopup>
      )}
      {isSignUpDeveloperOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSignUpDeveloper}
        >
          <SignUpDeveloper onClose={closeSignUpDeveloper} />
        </PortalPopup>
      )}
    </>
  );
};

export default Letter;
