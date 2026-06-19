import styles from "./ContactSection.module.scss";

export default function ContactSection() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps?q=1201+Mount+Kemble+Avenue,+Morristown,+NJ+07960&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>

        <div className={styles.info}>
          <h2>Contact us</h2>

          <div className={styles.item}>
            <h3>Our Address</h3>
            <p>1201 Mount Kemble Avenue, Morristown, NJ 07960</p>
          </div>

          <div className={styles.item}>
            <h3>Phone</h3>
            <p>908-221-0603</p>
          </div>

          <div className={styles.item}>
            <h3>Email</h3>
            <p>Scheduling@hardingradiology.com</p>
          </div>

          <div className={styles.item}>
            <h3>Business Hours</h3>

            <ul>
              <li>Monday 8:30AM - 5:00PM</li>
              <li>Tuesday 8:30AM - 5:00PM</li>
              <li>Wednesday 8:30AM - 6:00PM</li>
              <li>Thursday 8:30AM - 5:00PM</li>
              <li>Friday 8:30AM - 5:00PM</li>
              <li>Saturday Closed</li>
              <li>Sunday Closed</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
