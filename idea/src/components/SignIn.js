import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import styles from "./SignIn.module.css";

const SignIn = ({ onClose }) => {
  const navigate = useNavigate();

  const onQuillescapeIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.signIn}>
      <div className={styles.homepage}>
        <img
          className={styles.quillescapeIcon}
          loading="lazy"
          alt=""
          src="/quillescape.svg"
          onClick={onQuillescapeIconClick}
        />
      </div>
      <div className={styles.idaWrapper}>
        <h1 className={styles.ida}>idéa</h1>
      </div>
      <LoginForm />
    </div>
  );
};

export default SignIn;
