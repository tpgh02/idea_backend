import styles from "./Post.module.css";
import {useCallback, useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import PortalPopup from "../components/PortalPopup";
import MypageSetting from "../components/MypageSetting";
import axios from "axios";

const Post = () => {
    const [isMypageSettingOpen, setMypageSettingOpen] = useState(false);
    const navigate = useNavigate();
    const [developerList, setDeveloperList] = useState([]);

    const onTextClick = useCallback(() => {
        navigate("/");
        localStorage.clear();
    }, [navigate]);

    const onIdeaClick = useCallback(() => {
        navigate("/main-log-in");
    }, [navigate]);

    const openMypageSetting = useCallback(() => {
        setMypageSettingOpen(true);
    }, []);

    const closeMypageSetting = useCallback(() => {
        setMypageSettingOpen(false);
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

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSave = (event) => {
        event.preventDefault();
        const newPost = {
            writerId: JSON.parse(localStorage.getItem("member")).id,
            title: title,
            content: content,
        };
        axios.post("http://3.25.61.21:8080/boards/new", newPost)
            .then((response) => {
                console.log("post added successfully.");
                onText4Click();
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
                        <div className={styles.post}>
                            <input
                                className={styles.postTitle} onChange={(event) => {setTitle(event.target.value)}}
                                placeholder="제목을 입력하세요."
                                value={title}
                                type="text"
                                id="title"
                                name="title"
                                required
                            />
                            <textarea
                                className={styles.postContent} onChange={(event) => {setContent(event.target.value)}}
                                placeholder="게시글을 입력하세요."
                                value={content}
                                id="content"
                                name="content"
                                required
                            />
                                <button className={styles.rectangleParent2} onClick={handleSave}>
                                    <div className={styles.div11}>저장</div>
                                </button>
                            </div>
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
        </>
    );
};

export default Post;
