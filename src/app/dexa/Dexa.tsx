import Image from "next/image";
import Link from "next/link";
import styles from "./Dexa.module.scss";

const cards = [
  {
    icon: "/images/icons/dexa1.png",
    title: "What Is A DEXA Scan?",
    text: "A DEXA scan uses two low-dose X-ray beams to measure bone mineral density at the lumbar spine and hip – the sites most commonly affected by osteoporosis-related fractures. The results give your physician a precise, objective picture of your bone strength. Unlike a standard bone scan, which involves an injection and is used to detect cancer or infection, a DEXA scan is non-invasive, requires no preparation, and is completed quickly with minimal radiation exposure.",
  },
  {
    icon: "/images/icons/ct-scan.png",
    title: "Who Should Have A Bone Density Test?",
    text: "A DEXA scan is recommended for post-menopausal women, older adults, and anyone with risk factors that increase the likelihood of bone loss, including previous fractures, long-term steroid use, or medical treatments that affect hormone levels. Your physician may also recommend it if you have had an organ transplant, or are already being treated for osteoporosis. If you have been referred for a DEXA scan, it is because your physician wants a clear, objective baseline for your bone health and that is a proactive step worth taking.",
  },
  {
    icon: "/images/icons/dexa2.png",
    title: "Why Is A Bone Density Test Done?",
    text: "Osteoporosis is often called a silent condition: bones thin gradually, without symptoms, until a fracture makes the problem impossible to ignore. A DEXA scan changes that picture. By identifying bone loss early, it gives your physician the opportunity to intervene before a fracture occurs – whether through lifestyle guidance, supplements, or medication. Regular DEXA screening, particularly for those at higher risk, is one of the most effective ways to stay ahead of this condition.",
  },
];

export default function Dexa() {
  return (
    <main className={styles.dexaPage}>
      <section className={styles.hero}>
        <Image
          src="/images/dexa-hero.jpg"
          alt="Bone density scan"
          fill
          priority
          sizes="100vw"
          className={styles.heroBg}
        />

        <div className={styles.heroContent}>
          <h1>
            Quick And Painless
            <br />
            Bone Density Check
          </h1>

          <p>
            Get accurate and reliable information on your bone health. Protect
            your bones before a fracture happens through DEXA or Dual Energy
            X-ray Absorptiometry scan.
          </p>

          <Link href="/appointment">Book an Appointment</Link>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.aboutInner}>
          <div className={styles.aboutImage}>
            <Image
              src="/images/dexa-bone.jpg"
              alt="Bone density test"
              width={560}
              height={560}
            />
          </div>

          <div className={styles.aboutContent}>
            <h2>
              What Is a <span>Bone Density Test?</span>
            </h2>

            <p>
              A DEXA scan measures the calcium and mineral content in your bones to determine how strong and dense they are. It is typically performed on the lumbar spine and hip and on the forearm when those sites cannot be evaluated, such as in patients with metal rods in the spine or a hip replacement. As we age, bones naturally lose density and become more susceptible to fractures. A DEXA scan detects that loss early, giving your physician the information needed to decide whether treatment or preventive measures are appropriate.
            </p>

            <ul>
              <li>Screens for osteoporosis and bone thinning before fractures occur.</li>
              <li>Assesses fracture risk as bones naturally weaken with age.</li>
              <li>Monitors patients on Calcium and Vitamin D supplements.</li>
              <li>Evaluates the spine, hip, and forearm when required.</li>
            </ul>

            <h3>
              Bone density testing is one of the most straightforward steps you
              can take toward protecting your long-term bone health.
            </h3>
          </div>
        </div>
      </section>

      <section className={styles.infoCard}>
        <h2>
          Check Your Bone Health
          <br />
          With DEXA
        </h2>

        <p className={styles.subtitle}>
          A Safe, Proactive, And Painless Way To Measure Bone Strength, Detect
          Osteoporosis Early, And Assess Fracture Risk.
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

      <section className={styles.videoSection}>
        <div className={styles.videoBox}>
          <iframe
            src="https://youtu.be/Y7aum8ry3y4?si=e7brcUKPCjTnA7Om"
            title="DEXA Scan Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2>
            Schedule Your DEXA Scan
            <br />
            Appointment
          </h2>

          <p>
            A short, simple scan that gives you and your physician a clear
            picture of your bone health. Call our team or book online today.
          </p>

          <Link href="/contact">Call Now</Link>
        </div>

        <div className={styles.ctaImage}>
          <Image
            src="/images/dexa-doctor.png"
            alt="Doctor reviewing scan"
            fill
            sizes="390px"
          />
        </div>
      </section>
    </main>
  );
}