import styles from "./Developers.module.css";
import {useCallback, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import PortalPopup from "../components/PortalPopup";
import MypageSetting from "../components/MypageSetting";
import axios from "axios";
import {Scrollbars} from "react-custom-scrollbars-2";

const Developers = () => {
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
                        <Scrollbars
                            thumbsize={85}
                            renderTrackHorizontal={props => <div {...props} className={"track-horizontal"}/>}
                            renderTrackVertical={({style, ...props}) => {
                                return <div {...props} className={"track-vertical"} style={{...style, width : 20}}/>
                            }}
                            renderThumbHorizontal={props => <div {...props} className={"thumb-horizontal"}/>}
                            renderThumbVertical={props => <div {...props} className={"thumb-vertical"}/>}
                            renderView={props => <div {...props} className="view"/>}>
                        <div className={styles.developerList}>
                            {developerList.map((developer, index) => (
                                <div key={index} className={styles.developer}>
                                    <div>이름 : {developer.name}, 이메일 : {developer.email}</div>
                                    <div>가용 언어 : {developer.language}</div>
                                    <div>개발 경험 : {developer.experience}</div>
                                    <div>기술 : {developer.skill}</div>
                                    <div>기타 : {developer.etc}</div>
                                </div>
                            ))}
                        </div>
                        </Scrollbars>
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

export default Developers;
