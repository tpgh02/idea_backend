import {useCallback, useMemo, useState} from "react";
import FrameComponent from "./FrameComponent5";
import styles from "./SignUpDeveloper.module.css";
import PortalPopup from "./PortalPopup";
import SkillsetOverview from "./SkillsetOverview";
import {useNavigate} from "react-router-dom";
import axios from "axios";

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

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    const handleSave = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8080/members/validate", {
            name, email, password1, password2
        })
            .then(res => {
                console.log("next");

                localStorage.setItem("name", name);
                localStorage.setItem("email", email);
                localStorage.setItem("password1",  password1);
                localStorage.setItem("password2",  password2);

                openSkillsetOverView();

            })
            .catch((error) => {
                console.log(error);
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
                    <div className={styles.name}>Name</div>
                    <input className={styles.email} onChange={(event) => {setName(event.target.value)}}
                           value={name}
                           type="text"
                           id="name"
                           name="name"
                           required/>
                </div>
                <div className={styles.passwordInputs}>
                    <div className={styles.inputLabels}>
                        <div className={styles.email1}>Email</div>
                        <input className={styles.email2} onChange={(event) => {setEmail(event.target.value)}}
                               value={email}
                               type="text"
                               id="email"
                               name="email"
                               required/>
                    </div>
                    <div className={styles.inputLabels1}>
                        <div className={styles.password}>Password</div>
                        <input className={styles.inputLabelsChild} onChange={(event) => {setPassword1(event.target.value)}}
                               value={password1}
                               type="password"
                               id="password1"
                               name="password1"
                               required/>
                    </div>
                    <div className={styles.inputLabels2}>
                        <div className={styles.confirmPassword}>Confirm Password</div>
                        <input className={styles.inputLabelsItem} onChange={(event) => {setPassword2(event.target.value)}}
                               value={password2}
                               type="password"
                               id="password2"
                               name="password2"
                               required/>
                    </div>
                </div>
                <div className={styles.rectangleParent} onClick={handleSave}>
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
