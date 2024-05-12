import { useState, useCallback } from "react";
import MypagePost from "./MypagePost";
import PortalPopup from "./PortalPopup";
import styles from "./MypageSetting.module.css";

const MypageSetting = ({ onClose }) => {
    const [isMypagePostOpen, setMypagePostOpen] = useState(false);

    const openMypagePost = useCallback(() => {
        setMypagePostOpen(true);
    }, []);

    const closeMypagePost = useCallback(() => {
        setMypagePostOpen(false);
        if (onClose) {
            onClose();
        }
    }, [onClose]);

    const onQuillescapeIconClick = useCallback(() => {
        closeMypagePost();
    }, [closeMypagePost]);

    return (
        <div className={styles.mypageSetting}>
            <div className={styles.mainContent}>
                <img
                    className={styles.quillescapeIcon}
                    loading="lazy"
                    alt=""
                    src="/quillescape.svg"
                    onClick={onQuillescapeIconClick}
                />
            </div>
            <section className={styles.navigation}>
                <div className={styles.profileNavigation}>

                    <div className={styles.profileSettingsParent}>
                        <div className={styles.profileSettings}>
                            <div className={styles.profileModification}>
                                <div className={styles.editProfile}>
                                    <div className={styles.profileData}>
                                        <div className={styles.div1}>마이페이지</div>
                                    </div>
                                    <div className={styles.editProfileChild}/>
                                    <div className={styles.rectangleParent}>
                                        <div className={styles.frameChild}/>
                                        <div className={styles.div2}>내 정보 수정</div>
                                    </div>
                                        <div className={styles.wrapper} onClick={openMypagePost}>
                                        <div className={styles.div4}>내가 쓴 글</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.emailInput}>
                                <div className={styles.divn}>이름</div>
                                <input className={styles.email} type="text"/>
                                <div className={styles.div3}>이메일</div>
                                <div className={styles.postInput}>
                                    <input className={styles.email1} type="text"/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.userPosts}>


                        </div>
                    </div>
                </div>
            </section>
            <div className={styles.mypageSettingInner}>
                <button className={styles.rectangleParent2}>
                    <div className={styles.frameChild2} />
                    <div className={styles.div}>저장</div>
                </button>
            </div>
            {isMypagePostOpen && (
                <PortalPopup
                    overlayColor="rgba(113, 113, 113, 0.3)"
                    placement="Centered"
                    onOutsideClick={closeMypagePost}
                >
                    <MypagePost onClose={closeMypagePost} />
                </PortalPopup>
            )}
        </div>
    );
};

export default MypageSetting;
