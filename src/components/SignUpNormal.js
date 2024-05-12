import { useCallback } from "react";
import FrameComponent from "./FrameComponent5";
import FormStructure from "./FormStructure";
import styles from "./SignUpNormal.module.css";

const SignUpNormal = ({ onClose }) => {

  const onQuillescapeIconClick = useCallback(() => {
      if (onClose) {
          onClose();
      }
  }, [onClose]);

  return (
    <div className={styles.signUpNormal}>
      <FrameComponent onQuillescapeIconClick={onQuillescapeIconClick} />
      <section className={styles.formContainer}>
        <FormStructure sIGNUP="SIGN UP" />
      </section>
    </div>
  );
};

export default SignUpNormal;
