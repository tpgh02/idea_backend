import {useMemo, useCallback, useState, useEffect} from "react";
import styles from "./FormStructure.module.css";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const FormStructure = ({
  sIGNUP,
  emailFlex,
  emailWidth,
  propTextAlign,
  propMinWidth,
  propWidth,
  onClose
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

  const navigate = useNavigate();

  const [isMypagePostOpen, setFromStructureOpen] = useState(false);

  const closeFormStructure = useCallback(() => {
    setFromStructureOpen(false);
    if (onClose) {
      onClose();
    }
    navigate("/");
  }, [onClose, navigate]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  const handleSave = (event) => {
    event.preventDefault();
    const newMember = {
      name: name,
      email: email,
      password1: password1,
      password2: password2,
      memberClassify : "NORMAL",
    };
    axios.post("http://localhost:8080/members/new", newMember)
        .then((response) => {
          console.log("user added successfully.");
          closeFormStructure(); // closeFormStructure 함수 호출 추가
        })
        .catch((error) => {
          console.log("Error while adding member:", error);
          alert(error.response.data.message);
        });
  }

  return (
      <>
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
                     type="text"
                     id="password1"
                     name="password1"
                     required/>
            </div>
            <div className={styles.inputLabels2}>
              <div className={styles.confirmPassword}>Confirm Password</div>
              <input className={styles.inputLabelsItem} onChange={(event) => {setPassword2(event.target.value)}}
                     value={password2}
                     type="text"
                     id="password2"
                     name="password2"
                     required/>
            </div>
          </div>
          <button className={styles.rectangleParent} onClick={handleSave}>
            <div className={styles.frameChild}/>
            <div className={styles.signUp} style={sIGNUPStyle}>
              {sIGNUP}
            </div>
          </button>
        </form>
      </>
  );
};

export default FormStructure;
