import React from "react"; // Import React (optional in modern React but good practice)
import styles from "./CoreValues.module.css"; // Import CSS module
import compassion from "../assets/image/compassion.png";

const coreValuesData = [
  {
    title: "COMPASSION",
    description: "We approach every situation with empathy and understanding.",
    image: compassion,
  },
  {
    title: "COLLABORATION",
    description:
      "We believe in the power of working together to achieve common goals.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/70cf8263370ffcf86d8b6ae75debf9281efec9b3647a9a7ee034ee9ebfc2fb4b?placeholderIfAbsent=true&apiKey=75e58fe109c84e3a8de6261b5c432f09",
  },
  {
    title: "INTEGRITY",
    description:
      "We are committed to transparency and accountability in all our actions.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f0c9e0fe89f49ef7708949aae237595c124837d562c9f51827d467d23b7a390d?placeholderIfAbsent=true&apiKey=75e58fe109c84e3a8de6261b5c432f09",
  },
  {
    title: "EMPOWERMENT",
    description:
      "We strive to empower individuals with the knowledge and resources they need to succeed.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2fca946bda67fb2ea0e7dc262acbf10a895feb546786f96e0f8815a882b57cc8?placeholderIfAbsent=true&apiKey=75e58fe109c84e3a8de6261b5c432f09",
  },
];

const CoreValues = () => {
  return (
    <section className={styles.coreValues}>
      <h2 className={styles.sectionTitle}>Core Values</h2>
      <div className={styles.valueGrid}>
        {coreValuesData.map((value, index) => (
          <div key={index} className={styles.valueCard}>
            <img
              src={value.image}
              alt={`${value.title} icon`}
              className={styles.valueImage}
            />
            <h3 className={styles.valueTitle}>{value.title}</h3>
            <p className={styles.valueDescription}>{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
