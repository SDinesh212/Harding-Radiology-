import Image from "next/image";
import Link from "next/link";
import styles from "./Ultrasound.module.scss";

const infoCards = [
  {
    icon: "/images/icons/ultrasound-monitor.png",
    title: "What Is An Ultrasound?",
    text: "Ultrasound, or sonography, is a diagnostic imaging procedure that uses high-frequency sound waves to create real-time images of the inside of the body. Because it does not use radiation or X-rays, ultrasound is a safe, non-invasive, and comfortable examination for patients. It is commonly used to evaluate internal organs, soft tissues, blood vessels, and developing pregnancies, helping physicians diagnose conditions and monitor health effectively",
  },
  {
    icon: "/images/icons/process.png",
    title: "How Does It Work?",
    text: "Ultrasound works on the same principle as sonar. Because the human body contains over 60% water, high-frequency sound waves can travel through tissue and reflect back whenever they encounter a boundary, such as the wall of a blood vessel or the edge of an organ. Sophisticated computers process these returning echoes into detailed, real-time images your physician can read immediately.",
  },
  {
    icon: "/images/icons/pregnancy.png",
    title: "Common Uses Of This Procedure",
    text: "Ultrasound is widely used to evaluate abdominal organs including the liver, pancreas, gallbladder, and kidneys, as well as the thyroid, breast, and scrotum. In gynecology, it helps diagnose the causes of pelvic pain, detect abnormalities of the ovaries and uterus, and monitor ovulation in fertility treatment. It is also used to assess blood flow to the brain and through the arms and legs, and to identify abnormal or enlarged blood vessels such as aneurysms. This exam offers the most direct, radiation-free view of what physicians need to see.",
  },
  {
    icon: "/images/icons/shapes.png",
    title: "Types Of Ultrasound We Offer",
    text: "At Harding, we perform a comprehensive range of ultrasound studies to support the full spectrum of referrals we receive.",
  },
];

const ultrasoundTypes = [
  "3D Breast Ultrasound",
  "Thyroid Ultrasound",
  "Carotid Ultrasound",
  "Echocardiogram",
  "Abdominal Aortic Aneurysm (AAA)",
  "OB Ultrasound — 1st Trimester",
  "OB – Ultrasound for Viability/Dating",
  "Pelvic Ultrasound for IUD Placement",
  "Pelvic Ultrasound Transabdominal",
  "Pelvic Ultrasound Transvaginal",
  "Abdomen Ultrasound",
  "Renal Ultrasound",
  "Scrotal Ultrasound",
  "Arterial Doppler — Upper",
  "Arterial Doppler — Lower",
  "Venous Doppler — Upper",
  "Venous Doppler — Lower",
];

export default function Ultrasound() {
  return (
    <main className={styles.ultrasoundPage}>
      <section className={styles.hero}>
        <Image
          src="/images/ultrasound-hero.jpg"
          alt="Ultrasound scan"
          fill
          priority
          sizes="100vw"
          className={styles.heroBg}
        />

        <div className={styles.heroContent}>
          <h1>
            Advanced Ultrasound
            <br />
            For Clearer, Real-
            <br />
            Time Insight
          </h1>

          <p>
            Safe, radiation-free imaging that helps physicians evaluate organs,
            soft tissues, and blood flow with clarity, comfort, and precision.
          </p>

          <Link href="/appointment">Book an Appointment</Link>
        </div>
      </section>

      <section className={styles.machineSection}>
        <div className={styles.machineInner}>
          <div className={styles.machineImage}>
            <Image
              src="/images/ultrasound-machine.png"
              alt="GE LOGIQ ultrasound machine"
              width={560}
              height={720}
            />
          </div>

          <div className={styles.machineContent}>
            <h2>
              No Radiation. No Discomfort.
              <br />
              Remarkably Detailed Scans With
              <br />
              <span>GE LOGIQ Series</span>
            </h2>

            <p>
              Ultrasound uses high-frequency sound waves, and not radiation, to create real-time images of your internal organs, tissues, and blood flow. It is one of the safest diagnostic tools available, suitable for a wide range of patients and clinical needs. Our GE Logic series unit offers full color Doppler capability, allowing detailed assessment of blood movement through arteries and veins alongside standard organ imaging
            </p>

            <p>
             GE Logic series ultrasound delivers detailed, real-time images across a wide range of diagnostic applications. Whether your physician has referred you for an abdominal concern, a vascular assessment, or a gynecological evaluation, we provide the clarity they need to guide your care.
            </p>

            <ul>
              <li>
                High-frequency sound waves create detailed, real-time images of
                organs, vessels, and soft tissues.
              </li>
              <li>
                Color-flow Doppler capability allows assessment of blood
                movement through arteries and veins.
              </li>
              <li>
                No radiation, no injections, and no recovery time — a comfortable
                experience from start to finish.
              </li>
            </ul>

            <h3>
              Experience a fast, painless exam that gives your physician
              immediate, actionable insight into what your body is telling them.
            </h3>
          </div>
        </div>
      </section>

      <section className={styles.infoCard}>
        <h2>What Ultrasound Can Do For You</h2>

        <p className={styles.subtitle}>
          Learn How Ultrasound Imaging Evaluates Organs, Tissues, Blood Flow,
          And Pregnancy — Safely And Without Radiation.
        </p>

        <div className={styles.infoGrid}>
          {infoCards.map((card, index) => (
            <article className={styles.infoItem} key={card.title}>
              <Image src={card.icon} alt="" width={64} height={64} />
              <span />

              <h3>{card.title}</h3>

              {index === 3 ? (
                <>
                  <p>{card.text}</p>
                  <ul className={styles.typesList}>
                    {ultrasoundTypes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </>
              ) : (
                <p>{card.text}</p>
              )}
            </article>
          ))}
        </div>

        <Link href="/appointment" className={styles.cardButton}>
          Book an Appointment
        </Link>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2>Ready to Schedule Your Ultrasound?</h2>

          <p>
            Our team can typically accommodate prompt scheduling for most
            ultrasound referrals. Walk-ins welcome based on availability. Call us
            now to speak with our team or book your appointment online by
            clicking the Appointment button.
          </p>

          <Link href="/contact">Call Now</Link>
        </div>

        <div className={styles.ctaImage}>
          <Image
            src="/images/ultrasound-doctor.png"
            alt="Doctor holding ultrasound scan"
            fill
            sizes="360px"
          />
        </div>
      </section>
    </main>
  );
}