import { useCallback } from "react";
import FrameComponent from "./FrameComponent5";
import FormStructure from "./FormStructure";
import styles from "./SignUpDeveloper.module.css";

const SignUpDeveloper = ({ onClose }) => {

  const onQuillescapeIconClick = useCallback(() => {
      if (onClose) {
          onClose();
      }
  }, [onClose]);

  return (
    <div className={styles.signUpDeveloper}>
      <FrameComponent
        contentAreaWidth="387px"
        onQuillescapeIconClick={onQuillescapeIconClick}
      />
      <section className={styles.formContainer}>
        <FormStructure
          sIGNUP="NEXT"
          emailFlex="unset"
          emailWidth="450px"
          propTextAlign="center"
          propMinWidth="unset"
          propWidth="103px"
        />
      </section>
    </div>
  );
};

export default SignUpDeveloper;
