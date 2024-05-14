import { useCallback } from "react";
import LoginForm from "./LoginForm";
import styles from "./SignIn.module.css";

const SignIn = ({ onClose }) => {

  const onQuillescapeIconClick = useCallback(() => {
      if (onClose) {
          onClose();
      }
  }, [onClose]);

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
