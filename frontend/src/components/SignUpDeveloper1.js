import {useCallback, useState} from "react";
import SkillsetOverview from "./SkillsetOverview";
import styles from "./SignUpDeveloper1.module.css";
import PortalPopup from "./PortalPopup";
import MypagePost from "./MypagePost";

const SignUpDeveloper1 = ({ onClose }) => {

    const [isSkillsetOverViewOpen, setSkillsetOverViewOpen] = useState(false);

    const onQuillescapeIconClick = useCallback(() => {
          if (onClose) {
              onClose();
          }
      }, [onClose]);

    const openSkillsetOverView = useCallback(() => {
        setSkillsetOverViewOpen(true);
    }, []);

    const closeSkillsetOverView = useCallback(() => {
        setSkillsetOverViewOpen(false);
        if (onClose) {
            onClose();
        }
    }, [onClose]);

  return (
    <div className={styles.signUpDeveloper2}>
      <section className={styles.mainLayout}>
        <div className={styles.contentBlock}>
          <div className={styles.quillescapeWrapper}>
            <img
              className={styles.quillescapeIcon}
              loading="lazy"
              alt=""
              src="/quillescape.svg"
              onClick={onQuillescapeIconClick}
            />
          </div>
          <h1 className={styles.ida}>idéa</h1>
        </div>
      </section>
      <div className={styles.rectangleParent} onClick={openSkillsetOverView}>
        <div className={styles.frameChild} />
        <div className={styles.signUp}>NEXT</div>
      </div>
    </div>
  );
};

export default SignUpDeveloper1;
