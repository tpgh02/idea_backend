import {useCallback, useState} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/main-log-in");
  }, [navigate]);

  const [post, setPost] = useState()
  const changeValue = (e) => {
      setPost({
          ...post, [e.target.name]: e.target.value
      })
  }

  const submitPost = (e) => {
      e.preventDefault()
      fetch("http://localhost:8080/members/login", {
          method: "GET",
          headers: {
              "Content-Type": "application/json; charset-utf-8",
          },
          body: JSON.stringify(post),
      })
          .then((res) => res.json());
  }

  return (
    <form className={styles.loginForm} onSubmit={submitPost}>
      <div className={styles.loginAreas}>
        <div className={styles.email}>Email</div>
        <input className={styles.email1} type="text" name="email" onChange={changeValue}/>
      </div>
      <div className={styles.loginAreas1}>
        <div className={styles.password}>Password</div>
        <input className={styles.loginAreasChild} type="text" name="password" onChange={changeValue}/>
      </div>
      <button type="submit" className={styles.rectangleParent} onClick={onGroupButtonClick}>
        <div className={styles.frameChild} />
        <div className={styles.logIn}>LOG IN</div>
      </button>
    </form>
  );
};

export default LoginForm;
