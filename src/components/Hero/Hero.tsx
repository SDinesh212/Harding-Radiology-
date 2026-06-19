import Link from "next/link";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1>
          Preventive Health, Reimagined with
          <span> Whole-Body MRI </span>
          – now available at Harding.
          A radiation-free, non-invasive scan
          covering brain to pelvis in a single
          session.
        </h1>

        <Link href="/appointment">
          Book your Appointment
        </Link>
      </div>
    </section>
  );
}
