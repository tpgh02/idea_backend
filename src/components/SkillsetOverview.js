import {useCallback, useMemo, useState} from "react";
import styles from "./SkillsetOverview.module.css";
import FrameComponent from "./FrameComponent5";
import {useNavigate} from "react-router-dom";

const SkillSetOverview = ({onClose}) => {

    const navigate = useNavigate();

    const onQuillescapeIconClick = useCallback(() => {
        if (onClose) {
            onClose();
        }
    }, [onClose]);

    const onGroupContainer4Click = useCallback(() => {
        if (onClose) {
            onClose();
        }
        navigate("/");
    }, [onClose, navigate]);

    const [emailFlex, setEmailFlex] = useState("unset");
    const [emailWidth, setEmailWidth] = useState("450px")

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
                        <div className={styles.name}>Languages</div>
                        <input className={styles.email} type="text"/>
                    </div>
                    <div className={styles.passwordInputs}>
                        <div className={styles.inputLabels}>
                            <div className={styles.email1}>Experience</div>
                            <input className={styles.email2} type="text"/>
                        </div>
                        <div className={styles.inputLabels1}>
                            <div className={styles.password}>Skills</div>
                            <input className={styles.inputLabelsChild} type="text"/>
                        </div>
                        <div className={styles.inputLabels2}>
                            <div className={styles.confirmPassword}>Etc</div>
                            <input className={styles.inputLabelsItem} type="text"/>
                        </div>
                    </div>
                    <div className={styles.rectangleParent} onClick={onGroupContainer4Click}>
                        <div className={styles.frameChild}/>
                        <div className={styles.signUp}>SIGN UP</div>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default SkillSetOverview;