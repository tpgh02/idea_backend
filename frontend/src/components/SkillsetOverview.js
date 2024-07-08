import {useCallback, useMemo, useState} from "react";
import styles from "./SkillsetOverview.module.css";
import FrameComponent from "./FrameComponent5";
import {useNavigate} from "react-router-dom";
import axios from "axios";

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

    const [language, setLanguage] = useState('');
    const [experience, setExperience] = useState('');
    const [skill, setSkill] = useState('');
    const [etc, setEtc] = useState('');

    const handleSave = (event) => {
        event.preventDefault();
        const newMember = {
            name: localStorage.getItem('name'),
            email: localStorage.getItem('email'),
            password1: localStorage.getItem('password1'),
            password2: localStorage.getItem('password2'),
            memberClassify : "DEVELOPER",
            language: language,
            experience: experience,
            skill: skill,
            etc: etc,
        };
        axios.post("http://3.25.61.21:8080/members/new", newMember)
            .then((response) => {
                console.log("user added successfully.");
                localStorage.clear();
                onGroupContainer4Click();
            })
            .catch((error) => {
                console.log("Error while adding member:", error);
                alert(error.response.data.message);
            });
    }

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
                        <input className={styles.email} onChange={(event) => {setLanguage(event.target.value)}}
                               value={language}
                               type="text"
                               id="language"
                               name="language"
                               required/>
                    </div>
                    <div className={styles.passwordInputs}>
                        <div className={styles.inputLabels}>
                            <div className={styles.email1}>Experience</div>
                            <input className={styles.email2} onChange={(event) => {setExperience(event.target.value)}}
                                   value={experience}
                                   type="text"
                                   id="experience"
                                   name="experience"
                                   required/>
                        </div>
                        <div className={styles.inputLabels1}>
                            <div className={styles.password}>Skills</div>
                            <input className={styles.inputLabelsChild} onChange={(event) => {setSkill(event.target.value)}}
                                   value={skill}
                                   type="text"
                                   id="skill"
                                   name="skill"
                                   required/>
                        </div>
                        <div className={styles.inputLabels2}>
                            <div className={styles.confirmPassword}>Etc</div>
                            <input className={styles.inputLabelsItem} onChange={(event) => {setEtc(event.target.value)}}
                                   value={etc}
                                   type="text"
                                   id="etc"
                                   name="etc"
                                   required/>
                        </div>
                    </div>
                    <div className={styles.rectangleParent} onClick={handleSave}>
                        <div className={styles.frameChild}/>
                        <div className={styles.signUp}>SIGN UP</div>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default SkillSetOverview;