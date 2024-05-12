import { useState, useCallback } from "react";
import MypageSetting from "./MypageSetting";
import PortalPopup from "./PortalPopup";
import styles from "./MypagePost.module.css";

const MypagePost = ({ onClose }) => {
    const [isMypageSettingOpen, setMypageSettingOpen] = useState(false);

    const openMypageSetting = useCallback(() => {
        setMypageSettingOpen(true);
    }, []);

    const closeMypageSetting = useCallback(() => {
        setMypageSettingOpen(false);
        if (onClose) {
            onClose();
        }
    }, [onClose]);

    const onQuillescapeIconClick = useCallback(() => {
        if (onClose) {
            onClose();
        }
    }, [onClose]);

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
                                    <div className={styles.rectangleParent} onClick={openMypageSetting}>
                                        <div className={styles.frameChild}/>
                                        <div className={styles.div2}>내 정보 수정</div>
                                    </div>
                                    <div className={styles.wrapper2}>
                                        <div className={styles.wrapper}>
                                            <div className={styles.div4}>내가 쓴 글</div>
                                        </div>
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
                    </div>
                </div>
            </section>
            <div className={styles.mypageSettingInner}>
                <div className={styles.rectangleParent2}>
                    <div className={styles.frameChild2}/>
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
        </div>
    )
        ;
};

export default MypagePost;