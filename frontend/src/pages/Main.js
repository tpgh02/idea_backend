import {useState, useCallback, useEffect} from "react";
import SignIn from "../components/SignIn";
import PortalPopup from "../components/PortalPopup";
import Letter from "../components/Letter";
import Letter1 from "../components/Letter1";
import styles from "./Main.module.css";
import axios from 'axios'

const Main = () => {
  const [isSignInOpen, setSignInOpen] = useState(false);
  const [isLetter1Open, setLetter1Open] = useState(false);
  const [isLetter2Open, setLetter2Open] = useState(false);

  const [developer, setDeveloper] = useState([]);
  const [post, setPost] = useState([]);

  const openSignIn = useCallback(() => {
    setSignInOpen(true);
  }, []);

  const closeSignIn = useCallback(() => {
    setSignInOpen(false);
  }, []);

  const openLetter1 = useCallback(() => {
    setLetter1Open(true);
  }, []);

  const closeLetter1 = useCallback(() => {
    setLetter1Open(false);
  }, []);

  const openLetter2 = useCallback(() => {
    setLetter2Open(true);
  }, []);

  const closeLetter2 = useCallback(() => {
    setLetter2Open(false);
  }, []);

  const fetchData = useCallback(() => {
    axios.get("http://3.25.61.21:8080/home")
        .then((res) => {
          console.log(res.data);
          setDeveloper(res.data.memberData);
          setPost(res.data.boardData);

        })
        .catch((err) => {
          console.log(err);
          alert(err.response.data.message);
        });
  }, [])

  useEffect(()=> {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <div className={styles.main}>

        <div className={styles.top}>
          <h1 className={styles.ida}>idéa</h1>
          <div className={styles.div} onClick={openSignIn}>
            로그인
          </div>
          <div className={styles.div1} onClick={openLetter1}>
            회원가입
          </div>
        </div>

        <div className={styles.middle1}>
          <div className={styles.div2} onClick={openLetter2}>
            아이디어 게시판
          </div>
          <div className={styles.div3} onClick={openLetter2}>
            개발자 목록
          </div>
          <div className={styles.div4} onClick={openLetter2}>
            내가 쓴 글 목록
          </div>
        </div>

        <div className={styles.middle2}>

        </div>

        <div className={styles.bottom}>
          <div className={styles.ideaPost}>
            {
              post == null
                  ? <div className={styles.defaultPost}> 게시글이 없습니다. </div>
                  : <div className={styles.post}>
                    <div className={styles.postTop}>
                      <div className={styles.title}>{post.title}</div>
                      <div> 작성자 : {post.writerName}</div>
                      <div> 이메일 : {post.writerEmail}</div>
                      <div> 작성일시 : {post.createdDate} </div>
                    </div>

                    <div>{post.content}</div>
                  </div>
            }
          </div>
          <div className={styles.developerList}>
            {
              developer == null
                  ? <div className={styles.defaultPost}> 개발자가 없습니다. </div>
                  : <div className={styles.developer}>
                    <div>이름 : {developer.name}, 이메일 : {developer.email}</div>
                    <div>가용 언어 : {developer.language}</div>
                    <div>개발 경험 : {developer.experience}</div>
                    <div>기술 : {developer.skill}</div>
                    <div>기타 : {developer.etc}</div>
                  </div>
            }
          </div>
        </div>
      </div>

      {isSignInOpen && (
          <PortalPopup
              overlayColor="rgba(113, 113, 113, 0.3)"
              placement="Centered"
          >
            <SignIn onClose={closeSignIn}/>
          </PortalPopup>
      )}
      {isLetter1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
        >
          <Letter onClose={closeLetter1} />
        </PortalPopup>
      )}
      {isLetter2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
        >
          <Letter1 onClose={closeLetter2} />
        </PortalPopup>
      )}
    </>
  );
};

export default Main;
