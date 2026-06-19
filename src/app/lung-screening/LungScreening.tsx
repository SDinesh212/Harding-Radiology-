import Image from "next/image";
import Link from "next/link";
import styles from "./LungScreening.module.scss";

const cards = [
  {
    icon: "/images/icons/lung1.png",
    title: "Who Should Consider LDCT Lung Screening?",
    text: "LDCT lung screening is recommended for adults at higher risk of lung cancer – primarily current or former smokers aged 55 and older with a smoking history of 30 pack years or more. Pack years are calculated by multiplying the number of packs smoked per day by the number of years smoked. People who smoked heavily but have since quit, those with a personal history of lung cancer treated more than five years ago, and those with other risk factors, including COPD, a family history of lung cancer, or occupational asbestos exposure, may also be candidates.",
  },
  {
    icon: "/images/icons/lung2.png",
    title: "Who May Not Be Suitable for Screening?",
    text: "Lung cancer screening is intended for people who are in generally good health and able to benefit from treatment if cancer is detected. It may not be appropriate for individuals with poor lung function or serious health conditions that would make surgery difficult, those who require continuous supplemental oxygen, or people who have had a chest CT scan within the past year. A physician review is always the right first step before scheduling.",
  },
  {
    icon: "/images/icons/lung3.png",
    title: "Insurance Coverage And Scheduling",
    text: "Medicare Part B, along with most major insurance plans, covers annual LDCT lung screening for patients who meet the qualifying criteria. If you believe you are eligible, speak with your doctor first. If screening is right for you, your physician will provide a referral so you can schedule at Harding. The most effective way to reduce your risk of lung cancer remains avoiding smoking and secondhand smoke – but for those already at elevated risk, early detection through screening can be genuinely life-changing.",
  },
];

export default function LungScreening() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <Image
          src="/images/lung-hero.jpg"
          alt="CT Lung Screening"
          fill
          priority
          sizes="100vw"
          className={styles.heroBg}
        />

        <div className={styles.heroContent}>
          <h1>
            Preventive Low-Dose
            <br />
            CT Lung Screening
          </h1>

          <p>
            Early detection Is the difference between options and outcomes.
            Quick, non-invasive screening, covered by most insurance plans.
          </p>

          <Link href="/appointment">Book an Appointment</Link>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.aboutInner}>
          <div className={styles.aboutImage}>
            <Image
              src="/images/lung-scan.jpg"
              alt="Lung CT scan"
              width={560}
              height={560}
            />
          </div>

          <div className={styles.aboutContent}>
            <h2>
              <span>Low-Dose CT Scan</span> — Precision
              <br />
              Lung Screening
            </h2>

            <p>
              Low-dose CT or LDCT uses significantly lower radiation than a standard CT scan to produce high-resolution images of the lungs, allowing radiologists to identify small nodules and abnormalities at a stage when treatment is most likely to be effective. Studies have shown that regular CT chest screening in high-risk patients can detect lung cancer when tumors are still at stage 1 – a point at which the cure rate is significantly higher than when diagnosed by X-ray alone. Talk to your doctor first. If screening is right for you, your physician can provide a referral and our team will take care of the rest.
            </p>

            

            <ul>
              <li>
                Quick, painless, and non-invasive — no injections or special
                preparation required.
              </li>
              <li>
                Low-radiation CT imaging that detects small lung nodules at
                their earliest, most treatable stage.
              </li>
              <li>
                Results reviewed and reported by our board-certified
                radiologists to guide follow-up care.
              </li>
            </ul>

            <h3>
              A 30-minute scan today could mean a very different conversation
              with your doctor tomorrow. That’s what early detection looks like
              in practice.
            </h3>
          </div>
        </div>
      </section>

      <section className={styles.infoCard}>
        <h2>
          LDCT Lung Screening — Who
          <br />
          Should Get Tested
        </h2>

        <p className={styles.subtitle}>
          A Quick Guide To Eligibility, Health Considerations, And Insurance
          Coverage For Low-Dose CT Lung Screening.
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
            Schedule Your Lung Cancer
            <br />
            Screening
          </h2>

          <p>
            If you or someone you care about may be at high risk, the first step
            is a conversation with your physician. If they refer you for LDCT
            screening, our team is ready to schedule your appointment quickly and
            easily.
          </p>

          <Link href="/contact">Call Now</Link>
        </div>

        <div className={styles.ctaImage}>
          <Image
            src="/images/lung-doctor.png"
            alt="Doctor"
            fill
            sizes="390px"
          />
        </div>
      </section>
    </main>
  );
}