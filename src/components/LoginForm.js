import React, {useCallback, useState} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";
import axios from "axios";

const LoginForm = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/main-log-in");
  }, [navigate]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userInfo, setUserInfo] = useState([]);

    const UserContext = React.createContext({
        userInfo: null,
        setUserInfo: () => {},
    })

    const handleLogin = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8080/members/login", {
            email, password,
        })
            .then(res => {
                console.log("user logged in successfully.", res);
                localStorage.setItem("memberId", res.data.id);
                navigate("/main-log-in");
            })
            .catch((error) => {
                console.log(error);
                alert(error.response.data.message);
                navigate("/")
            });
    }

  return (
    <form className={styles.loginForm}>
      <div className={styles.loginAreas}>
        <div className={styles.email}>Email</div>
        <input className={styles.email1} onChange={(event) => {setEmail(event.target.value)}}
               value={email}
               type="text"
               id="email"
               name="email"
               required/>
      </div>
      <div className={styles.loginAreas1}>
        <div className={styles.password}>Password</div>
        <input className={styles.loginAreasChild} onChange={(event) => {setPassword(event.target.value)}}
               value={password}
               type="text"
               id="password"
               name="password"
               required/>
      </div>
      <button className={styles.rectangleParent} onClick={handleLogin}>
        <div className={styles.frameChild} />
        <div className={styles.logIn}>LOG IN</div>
      </button>
    </form>
  );
};

export default LoginForm;
