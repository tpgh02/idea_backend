import {useCallback, useState} from "react";
import FrameComponent from "./FrameComponent5";
import FormStructure from "./FormStructure";
import styles from "./SignUpNormal.module.css";

const SignUpNormal = ({ onClose }) => {

  const onQuillescapeIconClick = useCallback(() => {
      if (onClose) {
          onClose();
      }
  }, [onClose]);

  const [isFromStructure, setFromStructure] = useState(false);

    const closeFromStructure = useCallback(() => {
        setFromStructure(false);
        if (onClose) {
            onClose();
        }
    }, [onClose]);

  return (
    <div className={styles.signUpNormal}>
      <FrameComponent onQuillescapeIconClick={onQuillescapeIconClick} />
      <section className={styles.formContainer}>
        <FormStructure sIGNUP="SIGN UP" onClose={closeFromStructure} />
      </section>
    </div>
  );
};

export default SignUpNormal;
