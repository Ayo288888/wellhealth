import React from "react";
import styles from "./MissionVision.module.css";
import nurse from "../assets/image/nurse.jpeg";

const MissionVision = () => {
  return (
    <section className={styles.missionVision}>
      <img src={nurse} alt="nurse Image" className={styles.backgroundImage} />
      <div className={styles.missionContainer}>
        <div className={styles.missionOverlay} />
        <h2 className={styles.sectionTitle}>MISSION</h2>
        <p className={styles.sectionContent}>
          To empower individuals and families by providing essential resources
          and support to achieve long-term housing stability and prevent
          homelessness.
        </p>
      </div>
      <div className={styles.visionContainer}>
        <div className={styles.overlay} />
        <h2 className={styles.sectionTitle}>VISION</h2>
        <p className={styles.sectionContent}>
          To create a community where every individual and family has access to
          stable and affordable housing, fostering a secure and dignified life.
        </p>
      </div>
    </section>
  );
};

export default MissionVision;
