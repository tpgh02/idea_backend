import {useMemo, useCallback, useState} from "react";
import styles from "./FormStructure.module.css";
import PortalPopup from "./PortalPopup";
import SkillsetOverview from "./SkillsetOverview";

const FormStructure = ({
  sIGNUP,
  emailFlex,
  emailWidth,
  propTextAlign,
  propMinWidth,
  propWidth,
}) => {
  const formStructureStyle = useMemo(() => {
    return {
      flex: emailFlex,
      width: emailWidth,
    };
  }, [emailFlex, emailWidth]);

  const sIGNUPStyle = useMemo(() => {
    return {
      textAlign: propTextAlign,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propTextAlign, propMinWidth, propWidth]);

  const [isSkillsetOverviewOpen, setSkillsetOverviewOpen] = useState(false);

  const openSkillsetOverview = useCallback(() => {
    setSkillsetOverviewOpen(true);
  }, []);

  const closeSkillsetOverview = useCallback(() => {
    setSkillsetOverviewOpen(false);
  }, []);

  return (
      <>
    <form className={styles.formStructure} style={formStructureStyle}>
      <div className={styles.inputFields}>
        <div className={styles.name}>Name</div>
        <input className={styles.email} type="text" />
      </div>
      <div className={styles.passwordInputs}>
        <div className={styles.inputLabels}>
          <div className={styles.email1}>Email</div>
          <input className={styles.email2} type="text" />
        </div>
        <div className={styles.inputLabels1}>
          <div className={styles.password}>Password</div>
          <input className={styles.inputLabelsChild} type="text" />
        </div>
        <div className={styles.inputLabels2}>
          <div className={styles.confirmPassword}>Confirm Password</div>
          <input className={styles.inputLabelsItem} type="text" />
        </div>
      </div>
      <button className={styles.rectangleParent} onClick={openSkillsetOverview}>
        <div className={styles.frameChild} />
        <div className={styles.signUp} style={sIGNUPStyle}>
          {sIGNUP}
        </div>
      </button>
    </form>
      {isSkillsetOverviewOpen && (
          <PortalPopup
              overlayColor="rgba(113, 113, 113, 0.3)"
              placement="Centered"
              onOutsideClick={closeSkillsetOverview}
          >
            <SkillsetOverview onClose={closeSkillsetOverview} />
          </PortalPopup>
      )}
    </>
  );
};

export default FormStructure;
