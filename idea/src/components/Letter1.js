import { useCallback } from "react";
import styles from "./Letter1.module.css";

const Letter1 = ({ onClose }) => {
    const onOverlayClick = useCallback(() => {
        if (onClose) {
            onClose();
        }
    }, [onClose]);

    const onQuillescapeIconClick = useCallback((e) => {
        if (onClose) {
            onClose();
        }
    }, [onClose]);

    return (
        <div className={styles.overlay} onClick={onOverlayClick}>
            <div className={styles.letter2} onClick={(e) => e.stopPropagation()}>
                <section className={styles.homepageLayout}>
                    <h1 className={styles.ida}>idéa</h1>
                    <img
                        className={styles.quillescapeIcon}
                        loading="lazy"
                        alt=""
                        src="/quillescape.svg"
                        onClick={onQuillescapeIconClick}
                    />
                </section>
                <div className={styles.loginInterface}>
                    <div className={styles.div}>로그인이 필요한 서비스입니다.</div>
                </div>
            </div>
        </div>
    );
};

export default Letter1;