"use client";

import styles from "./VideoSection.module.scss";

export default function VideoSection() {
  return (
    <section className={styles.videoSection}>
      <div className={styles.topBar}></div>

      <div className={styles.container}>
        <h2 className={styles.title}>
          Committed To Diagnostic
          <br />
          Excellence Since 1989
        </h2>

        <h3 className={styles.subtitle}>
          Precision Imaging Backed By Decades Of Clinical Trust.
        </h3>

        <p className={styles.text}>
          Radiology Center at Harding is a freestanding, independent
          outpatient imaging center, not a hospital affiliate or a
          franchise network. For over 35 years, we have provided
          Morris County and surrounding communities with diagnostic
          imaging services that meet the highest clinical standards.
        </p>

        <p className={styles.text}>
          For patients, that means one thing above all, when you come
          to Harding, your results are accurate, your experience is
          respectful, and your physicians get what they need to take
          care of you well.
        </p>

        <div className={styles.videoWrapper}>
          <iframe
            src="https://youtu.be/eDTjxS5OKh0?si=VpYqqpyY2z48oNyh"
            title="Radiology Center at Harding"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}