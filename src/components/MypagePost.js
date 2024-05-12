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
        <div className={styles.mypagePost}>
            <section className={styles.mainContainer}>
                <div className={styles.mainContainerInner}>
                    <div className={styles.detailsPanelParent}>
                        <div className={styles.detailsPanel}>
                            <div className={styles.div}>마이페이지</div>
                        </div>
                        <div className={styles.separator} />
                        <div className={styles.div1} onClick={openMypageSetting}>
                            내 정보 수정
                        </div>
                        <div className={styles.rectangleParent}>
                            <div className={styles.frameChild} />
                            <div className={styles.div2}>내가 쓴 글</div>
                        </div>
                    </div>
                </div>
                <div className={styles.email} />
            </section>
            <img
                className={styles.quillescapeIcon}
                loading="lazy"
                alt=""
                src="/quillescape.svg"
                onClick={onQuillescapeIconClick}
            />
            {isMypageSettingOpen && (
                <PortalPopup
                    overlayColor="rgba(113, 113, 113, 0.3)"
                    placement="Centered"
                    onOutsideClick={closeMypageSetting}
                >
                    <MypageSetting onClose={closeMypageSetting} />
                </PortalPopup>
            )}
        </div>
    );
};

export default MypagePost;