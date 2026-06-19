import Image from "next/image";
import styles from "./Testimonials.module.scss";

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.heading}>
        <h2>What Our Patients Say</h2>
        <p>Our Multiple Scans Have Made Quite An Impact</p>
      </div>

      <div className={styles.wrapper}>
        {/* Left Image */}
        <div className={styles.imageSide}>
          <Image
  src="/images/patient-review.jpg"
  alt="Patient Review"
  fill
  priority
  sizes="(max-width: 768px) 100vw, 50vw"
  className={styles.reviewImage}
/>

          <span className={styles.badgeOne}>Happy Patient</span>
          <span className={styles.badgeTwo}>Dedicated Team</span>
          <span className={styles.badgeThree}>Good Service</span>
        </div>

        {/* Right Card */}
        <div className={styles.reviewCard}>
          <div className={styles.avatar}>
            <Image
  src="/images/avatar.jpg"
  alt="Avatar"
  fill
  sizes="64px"
  className={styles.avatar}
/>
          </div>

          <p className={styles.review}>
            I came in for a CT scan feeling very nervous, but the team at
            Harding made the entire process smooth and stress-free. They walked
            me through every step and the results were ready quickly.
          </p>

          <h4>Maria Johnson</h4>
          <span>Retired Teacher</span>

          <button className={styles.arrow}>
            →
          </button>
        </div>
      </div>
    </section>
  );
}