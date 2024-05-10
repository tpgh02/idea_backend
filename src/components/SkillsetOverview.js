import styles from "./SkillsetOverview.module.css";

const SkillsetOverview = () => {
  return (
    <section className={styles.skillsetOverview}>
      <div className={styles.skillsetCategories}>
        <div className={styles.languages}>Languages</div>
        <input className={styles.languages1} type="text" />
      </div>
      <div className={styles.skillsetCategories1}>
        <div className={styles.experience}>Experience</div>
        <input className={styles.experience1} type="text" />
      </div>
      <div className={styles.skillsetCategories2}>
        <div className={styles.skills}>Skills</div>
        <input className={styles.skillsetCategoriesChild} type="text" />
      </div>
      <div className={styles.information}>
        <div className={styles.info}>Info</div>
        <div className={styles.details}>
          <div className={styles.info1} />
        </div>
      </div>
    </section>
  );
};

export default SkillsetOverview;
