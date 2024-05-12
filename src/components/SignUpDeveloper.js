import {useCallback, useMemo, useState} from "react";
import FrameComponent from "./FrameComponent5";
import styles from "./SignUpDeveloper.module.css";
import PortalPopup from "./PortalPopup";
import SkillsetOverview from "./SkillsetOverview";
import {useNavigate} from "react-router-dom";

const SignUpDeveloper = ({ onClose }) => {

    const [isSkillsetOverViewOpen, setSkillsetOverViewOpen] = useState(false);
    const navigate = useNavigate();

    const onQuillescapeIconClick = useCallback(() => {
        if (onClose) {
            onClose();
        }
    }, [onClose]);

    const openSkillsetOverView = useCallback(() => {
        setSkillsetOverViewOpen(true);
    }, []);

    const [emailFlex, setEmailFlex] = useState("unset");
    const [emailWidth, setEmailWidth] = useState("450px")

    const onGroupContainer4Click = useCallback(() => {
        navigate("/");
    }, [navigate]);

    const closeSkillsetOverView = useCallback(() => {
        setSkillsetOverViewOpen(false);
        if (onClose) {
            onClose();
        }
    }, [onClose]);

    const formStructureStyle = useMemo(() => {
        return {
            flex: emailFlex,
            width: emailWidth,
        };
    }, [emailFlex, emailWidth]);

  return (
    <div className={styles.signUpDeveloper}>
      <FrameComponent
        contentAreaWidth="387px"
        onQuillescapeIconClick={onQuillescapeIconClick}
      />
        <section className={styles.formContainer}>
            <form className={styles.formStructure} style={formStructureStyle}>
                <div className={styles.inputFields}>
                    <div className={styles.name}>Name</div>
                    <input className={styles.email} type="text"/>
                </div>
                <div className={styles.passwordInputs}>
                    <div className={styles.inputLabels}>
                        <div className={styles.email1}>Email</div>
                        <input className={styles.email2} type="text"/>
                    </div>
                    <div className={styles.inputLabels1}>
                        <div className={styles.password}>Password</div>
                        <input className={styles.inputLabelsChild} type="text"/>
                    </div>
                    <div className={styles.inputLabels2}>
                        <div className={styles.confirmPassword}>Confirm Password</div>
                        <input className={styles.inputLabelsItem} type="text"/>
                    </div>
                </div>
                <div className={styles.rectangleParent} onClick={openSkillsetOverView}>
                    <div className={styles.frameChild}/>
                    <div className={styles.signUp}>NEXT</div>
                </div>
                {isSkillsetOverViewOpen && (
                    <PortalPopup
                        overlayColor="rgba(113, 113, 113, 0.3)"
                        placement="Centered"
                        onOutsideClick={closeSkillsetOverView}
                    >
                        <SkillsetOverview onClose={closeSkillsetOverView}/>
                    </PortalPopup>
                )}
            </form>
        </section>
    </div>
  );
};

export default SignUpDeveloper;
