import {useState, useCallback, useEffect} from "react";
import MypageSetting from "../components/MypageSetting";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./Developers1.module.css";
import {Scrollbars} from "react-custom-scrollbars-2";
import axios from "axios";
import MypageSettingDeveloper from "../components/MypageSettingDeveloper";

const Developers1 = () => {
  const [isMypageSettingOpen, setMypageSettingOpen] = useState(false);
  const [isMypageSettingDeveloperOpen, setMypageSettingDeveloperOpen] = useState(false);
  const navigate = useNavigate();
  const [postList, setPostList] = useState([]);
  const [keyword, setKeyword] = useState("");

  const onTextClick = useCallback(() => {
    navigate("/");
    localStorage.clear();
  }, [navigate]);

  const onIdeaClick = useCallback(() => {
    navigate("/main-log-in");
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
    const memberId = JSON.parse(localStorage.getItem("member")).id;
    axios.get(`http://3.25.61.21:8080/boards/mylist/${memberId}`)
        .then((res) => {
          console.log(res.data);
          setPostList(res.data);
        })
        .catch((err) => {
          console.log(err);
          alert(err.response.data.message);
        });
  }, []);

  useEffect(()=> {
    fetchData();
  }, []);

  const handleSave = (event) => {
    event.preventDefault();
    axios.get(`http://3.25.61.21:8080/members/search/${keyword}`)
        .then((res) => {
          console.log("post searched successfully.");
          setPostList(res.data);
          console.log(res.data)
        })
        .catch((error) => {
          console.log("Error while adding member:", error);
          alert(error.response.data.message);
        });
  }

  return (
      <>
        <div className={styles.main}>

          <div className={styles.top}>
            <div className={styles.onPost} onClick={onPost}> 게시글 작성</div>
            <h1 className={styles.ida} onClick={onIdeaClick}>idéa</h1>
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

          <div className={styles.bottom}>
            <div className={styles.ideaPost}>
              <Scrollbars
                  thumbsize={85}
                  renderTrackHorizontal={props => <div {...props} className={"track-horizontal"}/>}
                  renderTrackVertical={({style, ...props}) => {
                    return <div {...props} className={"track-vertical"} style={{...style, width : 20}}/>
                  }}
                  renderThumbHorizontal={props => <div {...props} className={"thumb-horizontal"}/>}
                  renderThumbVertical={props => <div {...props} className={"thumb-vertical"}/>}
                  renderView={props => <div {...props} className="view"/>}>
                {
                  postList.length === 0
                      ? <div className={styles.defaultPost}> 게시글이 없습니다. </div>
                      : <div className={styles.postList}>
                        {postList.map((post, index) => (
                            <div key={index} className={styles.post}>
                              <div className={styles.postTop}>
                                <div className={styles.title}>{post.title}</div>
                                <div> 작성자 : {post.writerName}</div>
                                <div> 이메일 : {post.writerEmail}</div>
                                <div> 작성일시 : {post.createdDate} </div>
                              </div>

                              <div>{post.content}</div>
                            </div>
                        ))}
                      </div>
                }
              </Scrollbars>
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

export default Developers1;
