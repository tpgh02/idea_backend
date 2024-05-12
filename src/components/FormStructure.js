import {useMemo, useCallback, useState} from "react";
import styles from "./FormStructure.module.css";
import {useNavigate} from "react-router-dom";
import PortalPopup from "./PortalPopup";
import SkillsetOverview from "./SkillsetOverview";

const FormStructure = ({
  sIGNUP,
  emailFlex,
  emailWidth,
  propTextAlign,
  propMinWidth,
  propWidth,
    onClose,
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

  const onGroupButtonClick = useCallback(() => {
      navigate("/");
  }, [navigate]);

  const [post, setPost] = useState()
  const changeValue = (e) => {
    setPost({
      ...post, [e.target.name]: e.target.value
    })
  }

  const submitPost = (e) => {
    e.preventDefault()
    fetch("http://localhost:8080/members/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset-utf-8",
      },
      body: JSON.stringify(post),
    })
        .then((res) => res.json());
  }

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
      <button className={styles.rectangleParent} onClick={onGroupButtonClick}>
        <div className={styles.frameChild} />
        <div className={styles.signUp} style={sIGNUPStyle}>
          {sIGNUP}
        </div>
      </button>
    </form>
    </>
  );
};

export default FormStructure;
