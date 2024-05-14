import { useState, useCallback } from "react";
import styles from "./MypageSettingDeveloper.module.css";
import axios from "axios";

const MypageSettingDeveloper = ({ onClose }) => {
    const [isMypagePostOpen, setMypagePostOpen] = useState(false);

    const closeMypagePost = useCallback(() => {
        setMypagePostOpen(false);
        if (onClose) {
            onClose();
        }
    }, [onClose]);

    const onQuillescapeIconClick = useCallback(() => {
        closeMypagePost();
    }, [closeMypagePost]);

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [language, setLanguage] = useState(null);
    const [experience, setExperience] = useState(null);
    const [skill, setSkill] = useState(null);
    const [etc, setEtc] = useState(null);

    const handleSave = (event) => {
        event.preventDefault();
        const updateMember = {
            id: JSON.parse(localStorage.getItem('member')).id,
            name: name,
            email: email,
            language: language,
            experience: experience,
            skill: skill,
            etc: etc,
        };
        axios.post("http://localhost:8080/members/update", updateMember)
            .then((response) => {
                console.log("user updated successfully.");
                onQuillescapeIconClick();
            })
            .catch((error) => {
                console.log("Error while adding member:", error);
                alert(error.response.data.message);
            });
    }

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

                                </div>
                            </div>
                            <div className={styles.emailInput}>
                                <div className={styles.divn}>이름</div>
                                <input className={styles.email} onChange={(event) => {
                                    setName(event.target.value)
                                }}
                                       value={name}
                                       type="text"
                                       id="name"
                                       name="name"
                                       required/>
                                <div className={styles.div3}>이메일</div>
                                <div className={styles.postInput}>
                                    <input className={styles.email1} onChange={(event) => {
                                        setEmail(event.target.value)
                                    }}
                                           value={email}
                                           type="text"
                                           id="email"
                                           name="email"
                                           required/>
                                </div>
                                <div className={styles.div3}>가용 언어</div>
                                <div className={styles.postInput}>
                                    <input className={styles.email1} onChange={(event) => {setLanguage(event.target.value)}}
                                           value={language}
                                           type="text"
                                           id="language"
                                           name="language"
                                           required/>
                                </div>
                                <div className={styles.div3}>경력</div>
                                <div className={styles.postInput}>
                                    <input className={styles.email1} onChange={(event) => {setExperience(event.target.value)}}
                                           value={experience}
                                           type="text"
                                           id="experience"
                                           name="experience"
                                           required/>
                                </div>
                                <div className={styles.div3}>기술</div>
                                <div className={styles.postInput}>
                                    <input className={styles.email1} onChange={(event) => {setSkill(event.target.value)}}
                                           value={skill}
                                           type="text"
                                           id="skill"
                                           name="skill"
                                           required/>
                                </div>
                                <div className={styles.div3}>기타</div>
                                <div className={styles.postInput}>
                                    <input className={styles.email1} onChange={(event) => {setEtc(event.target.value)}}
                                           value={etc}
                                           type="text"
                                           id="etc"
                                           name="etc"
                                           required/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className={styles.mypageSettingInner}>
                <button className={styles.rectangleParent2} onClick={handleSave}>
                    <div className={styles.frameChild2}/>
                    <div className={styles.div}>저장</div>
                </button>
            </div>
        </div>
    );
};

export default MypageSettingDeveloper;
