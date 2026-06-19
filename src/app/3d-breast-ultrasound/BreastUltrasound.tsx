import Image from "next/image";
import Link from "next/link";
import styles from "./BreastUltrasound.module.scss";

const cards = [
  {
    icon: "/images/icons/ultrasound-monitor1.png",
    title: "What Does It Mean To Have Dense Breasts?",
    text: "Breast density cannot be determined by how a breast looks or feels, it is assessed only by a radiologist reviewing mammogram images. Women with dense breasts have a higher proportion of fibroglandular tissue relative to fat. On a mammogram, fatty tissue appears dark, while dense tissue appears white – the same color as cancer. In women with dense breasts, tumors can go undetected on a standard mammogram. Dense breasts are normal and affect approximately 40% of women of mammography age.",
  },
  {
    icon: "/images/icons/breast-ultrasound2.png",
    title: "Why Should I Consider Additional Screening?",
    text: "Dense tissue can mask cancers that would be clearly visible in fatty breast tissue.This makes women with dense breasts at a higher risk of what is known as an interval cancer, where cancer is detected shortly after a negative mammogram. Research shows that combining mammography with 3D whole-breast ultrasound increases cancer detection from 78% to 92% in women with dense breasts. Dense breast notification laws across 36 states require providers to inform women of their breast density and discuss supplemental screening options.",
  },
  {
    icon: "/images/icons/breast-risk3.png",
    title: "Does Dense Breast Tissue Increase Cancer Risk?",
    text: "Yes. Research confirms that breast density is a well-established predictor of breast cancer risk – one that exceeds family history as a risk factor. Mammography misses approximately one in every two cancers in women with dense breasts. Supplemental imaging such as SOFIA 3D whole-breast ultrasound provides a significantly clearer evaluation. The scan is fast, comfortable, and produces detailed images that allow our radiologists to assess the full breast with a level of confidence that mammography alone cannot provide.",
  },
];

export default function BreastUltrasound() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <Image
          src="/images/breast-ultrasound-hero.jpg"
          alt="3D Breast Ultrasound"
          fill
          priority
          sizes="100vw"
          className={styles.heroBg}
        />

        <div className={styles.heroContent}>
          <h1>
            Advanced 3D Breast
            <br />
            Ultrasound
          </h1>

          <p>
            Introducing advanced breast imaging for women with dense breast
            tissue powered by Hitachi’s SOFIA for a 30-second scan. No
            compression. No radiation.
          </p>

          <Link href="/appointment">Book an Appointment</Link>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.aboutInner}>
          <div className={styles.aboutImage}>
            <Image
              src="/images/breast-ultrasound-room.jpg"
              alt="SOFIA 3D whole breast ultrasound"
              width={560}
              height={560}
            />
          </div>

          <div className={styles.aboutContent}>
            <h2>
              Now In N.J — <span>SOFIA 3D Whole Breast Ultrasound</span>
            </h2>

            <p>
              Harding Radiology was the first facility in New Jersey to offer SOFIA for advanced imaging of dense breast tissue. SOFIA uses ultrasound to scan the entire breast while the patient lies comfortably face-down, with the table acting as the probe. There is no compression and no radiation. Each breast is scanned in just 30 seconds, producing detailed 3D volumetric images for our radiologists to review.
            </p>

            <ul>
              <li>No compression and no radiation — a comfortable experience from start to finish.</li>
              <li>Comfortable prone positioning with the patient remaining fully covered throughout the exam.</li>
              <li>Each breast scanned in 30 seconds, producing detailed 3D volumetric images for radiologist review.</li>
            </ul>

            <h3>
              Designed for women with dense breast tissue and is often used as a
              supplemental step following a mammogram.
            </h3>
          </div>
        </div>
      </section>

      <section className={styles.infoCard}>
        <h2>
          Understanding Dense Breasts &
          <br />
          Supplemental Screening
        </h2>

        <p className={styles.subtitle}>
          The Genius Exam Lets Doctors View Breast Tissue Page By Page, Ensuring
          No Detail Is Hidden.
        </p>

        <div className={styles.cardGrid}>
          {cards.map((card) => (
            <article className={styles.card} key={card.title}>
              <Image src={card.icon} alt="" width={62} height={62} />
              <span />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>

        <Link href="/appointment">Book an Appointment</Link>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2>
            Schedule Your 3D Breast Ultrasound
            <br />
            Appointment
          </h2>

          <p>
            If your mammogram has indicated dense breast tissue, or if you would
            like to discuss whether supplemental screening is right for you, our
            team is here to help.
          </p>

          <Link href="/contact">Call Now</Link>
        </div>

        <div className={styles.ctaImage}>
          <Image
            src="/images/breast-ultrasound-doctor.png"
            alt="Doctor"
            fill
            sizes="390px"
          />
        </div>
      </section>
    </main>
  );
}