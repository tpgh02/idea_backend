import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SkillsetOverview from "./SkillsetOverview";
import styles from "./SignUpDeveloper1.module.css";

const SignUpDeveloper1 = ({ onClose }) => {
  const navigate = useNavigate();

  const onQuillescapeIconClick = useCallback(() => {
      if (onClose) {
          onClose();
      }
  }, [onClose]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

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
      <SkillsetOverview />
      <div className={styles.rectangleParent} onClick={onGroupContainerClick}>
        <div className={styles.frameChild} />
        <div className={styles.signUp}>SIGN UP</div>
      </div>
    </div>
  );
};

export default SignUpDeveloper1;
