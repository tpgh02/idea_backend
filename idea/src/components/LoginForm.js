import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/main-log-in");
  }, [navigate]);

  return (
    <form className={styles.loginForm}>
      <div className={styles.loginAreas}>
        <div className={styles.email}>Email</div>
        <input className={styles.email1} type="text" />
      </div>
      <div className={styles.loginAreas1}>
        <div className={styles.password}>Password</div>
        <input className={styles.loginAreasChild} type="text" />
      </div>
      <button className={styles.rectangleParent} onClick={onGroupButtonClick}>
        <div className={styles.frameChild} />
        <div className={styles.logIn}>LOG IN</div>
      </button>
    </form>
  );
};

export default LoginForm;
