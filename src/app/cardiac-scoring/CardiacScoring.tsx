import Image from "next/image";
import Link from "next/link";
import styles from "./CardiacScoring.module.scss";

const cards = [
  {
    icon: "/images/icons/cslogo1.png",
    title: "Common Uses Of This Test",
    text: "Cardiac Calcium Scoring is used to assess cardiovascular risk in adults who have risk factors for heart disease but have not yet experienced symptoms. Studies have shown that CAC Scoring is a stronger predictor of heart disease than cholesterol levels alone. It can detect arterial plaque buildup before a heart attack or other cardiac event – giving patients and their physicians the information needed to make proactive decisions about lifestyle changes and medication.",
  },
  {
    icon: "/images/icons/cslogo2.png",
    title: "How Does It Work?",
    text: "During the exam, you lie comfortably on the CT imaging table and hold your breath for intervals of approximately 20 seconds while the scanner captures high-resolution images of your coronary arteries. The scan is fast, safe, and entirely non-invasive – no needles, no contrast dye, and no special preparation required. After the exam, one of our on-site radiologists reviews the images, identifies any areas of arterial calcification, and calculates your CAC Score.",
  },
  {
    icon: "/images/icons/cslogo3.png",
    title: "Who Should Consider This Test?",
    text: "Cardiac Calcium Scoring is recommended for anyone aged 40 or older who is considered at risk for heart disease based on personal or family history. This includes people with high blood pressure, diabetes, high cholesterol, a family history of heart disease, a history of smoking, a sedentary or high-stress lifestyle, or who are significantly overweight. If one or more of these factors apply to you, speak with your physician about whether a CAC Scoring CT is appropriate.",
  },
];

export default function CardiacScoring() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <Image
          src="/images/cardiac-hero.jpg"
          alt="Coronary Artery Calcium Scoring"
          fill
          priority
          sizes="100vw"
          className={styles.heroBg}
        />

        <div className={styles.heroContent}>
          <h1>
            Coronary Artery Calcium
            <br />
            (CAC) Scoring
          </h1>

          <p>
            Experience preventive heart screening with advanced CT Imaging — a
            fast, non-invasive CT scan that gives you and your physician a
            clearer picture of your cardiac health.
          </p>

          <Link href="/appointment">Book an Appointment</Link>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.aboutInner}>
          <div className={styles.aboutImage}>
            <Image
              src="/images/cardiac-score.jpg"
              alt="Cardiac calcium scoring CT images"
              width={560}
              height={560}
            />
          </div>

          <div className={styles.aboutContent}>
            <h2>
              What Is a <span>Coronary Artery Calcium Scoring CT ?</span>
            </h2>

            <p>
              Calcium is a marker of Coronary Artery Disease. A Coronary Artery Calcium or CAC Scoring CT uses a low-dose CT scanner to detect and measure calcified plaque buildup inside the coronary arteries – producing a single number, your CAC Score, that reflects your overall cardiac risk. The exam is non-invasive, requires no injections, and is completed in minutes. Your score is then reviewed by one of our on-site radiologists and communicated to you and your physician to guide next steps.
            </p>

            <ul>
              <li>The CT scanner captures detailed images of the coronary arteries.</li>
              <li>A radiologist measures calcified plaque buildup inside the arteries.</li>
              <li>Results are expressed as a CAC Score to help assess your overall cardiac risk.</li>
            </ul>

            <h3>
              Experience a quick, reliable screening that gives you and your
              physician a meaningful, actionable picture of your heart health.
            </h3>
          </div>
        </div>
      </section>

      <section className={styles.infoCard}>
        <h2>
          Understanding Coronary Artery
          <br />
          Calcium Scoring
        </h2>

        <p className={styles.subtitle}>
          Understand How This Fast, Non-Invasive CT Scan Works, Who Should
          Consider It, And How It Supports Earlier Detection Of Coronary Artery
          Disease.
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
            Schedule Your Cardiac Scoring
            <br />
            Appointment
          </h2>

          <p>
            A single scan that takes minutes could tell you something your annual
            checkup cannot. If you or your physician believe this screening is
            right for you, we are ready to help.
          </p>

          <Link href="/contact">Call Now</Link>
        </div>

        <div className={styles.ctaImage}>
          <Image
            src="/images/cardiac-doctor.png"
            alt="Doctor"
            fill
            sizes="390px"
          />
        </div>
      </section>
    </main>
  );
}