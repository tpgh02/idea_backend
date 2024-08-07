import {useState, useCallback, useEffect} from "react";
import MypageSetting from "../components/MypageSetting";
import MypageSettingDeveloper from "../components/MypageSettingDeveloper";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./MainLogIn.module.css";
import axios from "axios";

const MainLogIn = () => {
  const [isMypageSettingOpen, setMypageSettingOpen] = useState(false);
  const [isMypageSettingDeveloperOpen, setMypageSettingDeveloperOpen] = useState(false);
  const navigate = useNavigate();

  const [developer, setDeveloper] = useState([]);
  const [post, setPost] = useState([]);

  const onTextClick = useCallback(() => {
    navigate("/");
    localStorage.clear();
  }, [navigate]);

  const openMypageSetting = useCallback(() => {
    if (JSON.parse(localStorage.getItem('member')).memberClassify === "NORMAL") {
      setMypageSettingOpen(true);
    } else {
      setMypageSettingDeveloperOpen(true);
    }

  }, []);

  const closeMypageSetting = useCallback(() => {
    setMypageSettingOpen(false);
  }, []);
  const closeMypageSettingDeveloper = useCallback(() => {
    setMypageSettingDeveloperOpen(false);
  }, []);

  const onIdeaClick = useCallback(() => {
    location.reload();
  }, []);

  const onText4Click = useCallback(() => {
    navigate("/board");
  }, [navigate]);

  const onText5Click = useCallback(() => {
    navigate("/developers");
  }, [navigate]);

  const onText6Click = useCallback(() => {
    navigate("/developers1");
  }, [navigate]);

  const onPost = useCallback(() => {
    navigate("/post");
  }, [navigate]);

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
            <div className={styles.onPost} onClick={onPost}> 게시글 작성 </div>
            <h1 className={styles.ida} onClick={onIdeaClick} >idéa</h1>
            <div className={styles.div} onClick={onTextClick}>
              로그아웃
            </div>
            <div className={styles.div1} onClick={openMypageSetting}>
              마이페이지
            </div>
          </div>

          <div className={styles.middle1}>
            <div className={styles.div2} onClick={onText4Click}>
              아이디어 게시판
            </div>
            <div className={styles.div3} onClick={onText5Click}>
              개발자 목록
            </div>
            <div className={styles.div4} onClick={onText6Click}>
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

        {isMypageSettingOpen && (
            <PortalPopup
                overlayColor="rgba(113, 113, 113, 0.3)"
                placement="Centered"
            >
              <MypageSetting onClose={closeMypageSetting}/>
            </PortalPopup>
        )}
        {isMypageSettingDeveloperOpen && (
            <PortalPopup
                overlayColor="rgba(113, 113, 113, 0.3)"
                placement="Centered"
            >
              <MypageSettingDeveloper onClose={closeMypageSettingDeveloper}/>
            </PortalPopup>
        )}
      </>
  );
};

export default MainLogIn;