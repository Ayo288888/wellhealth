import React from "react";
import styles from "./Services.module.css";

const servicesData = [
  {
    title: "Emergency Financial Assistance",
    description:
      "Rental assistance to prevent eviction. Utility payment support to ensure essential services remain active.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e9413437a57e3c258c30e7a64fcd37518aa4230b4bf8bc96d1707cbb12d1d405?placeholderIfAbsent=true&apiKey=75e58fe109c84e3a8de6261b5c432f09",
  },
  {
    title: "Housing Navigation",
    description:
      "Assistance in finding affordable housing options. Support with the application process for housing programs and subsidies.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b0224a85ada6a78d7ed3ef6849080c8532ee0658ef871608190f13f889ddf684?placeholderIfAbsent=true&apiKey=75e58fe109c84e3a8de6261b5c432f09",
  },
  {
    title: "Workshops and Education",
    description:
      "Financial literacy and budgeting workshops. Tenant rights and responsibilities education.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6ed6c353f776e315239e0f8faf29c950878eb8e39e39ff8f8531fdf501868f15?placeholderIfAbsent=true&apiKey=75e58fe109c84e3a8de6261b5c432f09",
  },
  {
    title: "Case Management",
    description:
      "Personalized case management to assess individual needs. Development of a tailored action plan for sustainable housing solutions.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9c9d8ff4dae7e75de3872ba798de3f2a429c5ec161834f5feb81473b658f527d?placeholderIfAbsent=true&apiKey=75e58fe109c84e3a8de6261b5c432f09",
  },
  {
    title: "Collaborations and Referrals",
    description:
      "Personalized case management to assess individual needs. Development of a tailored action plan for sustainable housing solutions.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f71b3c6ac24e329c76c43557fb2fb9bff78277d1cbedfab15222e1fa2b941b36?placeholderIfAbsent=true&apiKey=75e58fe109c84e3a8de6261b5c432f09",
  },
];

const Services = () => {
  return (
    <section className={styles.services}>
      <h2 className={styles.sectionTitle}>What We Offer</h2>
      <div className={styles.serviceGrid}>
        {servicesData.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <img
              src={service.image}
              alt={`${service.title} illustration`}
              className={styles.serviceImage}
            />
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
