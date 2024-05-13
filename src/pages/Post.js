import styles from "./Post.module.css";
import {useCallback, useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import PortalPopup from "../components/PortalPopup";
import MypageSetting from "../components/MypageSetting";
import axios from "axios";
import {Scrollbars} from "react-custom-scrollbars-2";

const Post = () => {
    const [isMypageSettingOpen, setMypageSettingOpen] = useState(false);
    const navigate = useNavigate();
    const [developerList, setDeveloperList] = useState([]);

    const onTextClick = useCallback(() => {
        navigate("/");
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

    const fetchData = useCallback(() => {
        axios.get("http://localhost:8080/members/developers")
            .then((res) => {
                console.log(res.data);
                setDeveloperList(res.data);
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
                        채팅 목록
                    </div>
                </div>

                <div className={styles.middle2}>
                    <div className={styles.searchField}>
                        <input
                            className={styles.placeholderLabel}
                            placeholder="검색"
                            type="text"
                        />
                        <img
                            className={styles.searchGlyph}
                            loading="lazy"
                            alt=""
                            src="/search.svg"
                        />
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.ideaPost}>
                        <div className={styles.post}>
                            <input
                                className={styles.postTitle}
                                placeholder="제목을 입력하세요."
                            />
                            <textarea
                                className={styles.postContent}
                                placeholder="게시글을 입력하세요."
                            />
                                <button className={styles.rectangleParent2}>
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
                    onOutsideClick={closeMypageSetting}
                >
                <MypageSetting onClose={closeMypageSetting}/>
                </PortalPopup>
            )}
        </>
    );
};

export default Post;
