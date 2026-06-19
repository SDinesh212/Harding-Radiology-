import Image from "next/image";
import Link from "next/link";
import styles from "./CTScan.module.scss";

const cards = [
  {
    icon: "/images/icons/ct-scan1.png",
    title: "What Is A CT Scan?",
    text: "A CT scan or computed tomography uses computer-processed combinations of X-ray measurements taken from multiple angles to produce detailed cross-sectional images. Unlike a standard X-ray, which produces a single flat image, CT creates a series of thin virtual slices that allow your physician to examine internal structures with far greater precision and depth. At Harding, our multi-slice spiral CT technology improves both image accuracy and scan speed and enables 2D and 3D reconstructions that are valuable for evaluating vascular structures, complex fractures, and organ abnormalities.",
  },
  {
    icon: "/images/icons/mri1.png",
    title: "What Can A CT Scan Detect?",
    text: "CT can image virtually any internal organ with high anatomic detail, making it particularly valuable for evaluating tumors and measuring a patient's response to chemotherapy or radiation therapy. It is an excellent test for diagnosing kidney stones, appendicitis, and pulmonary embolism. CT angiography can study arteries before and after surgery, and can also be a less invasive alternative to traditional cardiac angiography. CT bone density testing also provides accurate measurements of bone density, helping identify patients at risk before a fracture occurs.",
  },
  {
    icon: "/images/icons/doctor.png",
    title: "CT Screening For Proactive Health",
    text: "Beyond diagnostic referrals, CT plays an important role in preventive health. Low-dose CT chest screening for current and former smokers can detect lung cancer when tumors are still at stage 1 – a point at which the cure rate is significantly higher. CT Cardiac Calcium Scoring provides a non-invasive assessment of cardiovascular risk. CT Colonoscopy offers a less invasive alternative for colorectal screening. Early detection changes outcomes – and at Harding, we make them accessible and straightforward to schedule.",
  },
];

export default function CTScan() {
  return (
    <main className={styles.ctPage}>
      <section className={styles.hero}>
        <Image
          src="/images/ct-hero.jpg"
          alt="CT scan imaging"
          fill
          priority
          sizes="100vw"
          className={styles.heroBg}
        />

        <div className={styles.heroContent}>
          <h1>
            Advanced High-
            <br />
            Precision CT Imaging
          </h1>

          <p>
            Fast, cross-sectional imaging of organs, bones, and blood vessels —
            from our trusted GE Optima CT Scanner — that gives your physicians
            the full picture.
          </p>

          <Link href="/appointment">Book an Appointment</Link>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.aboutInner}>
          <div className={styles.aboutImage}>
            <Image
              src="/images/ct-room.jpg"
              alt="GE Optima CT scanner"
              width={560}
              height={560}
            />
          </div>

          <div className={styles.aboutContent}>
            <h2>
              <span>GE Optima</span> — A New Standard In
              <br />
              CT Imaging
            </h2>

            <p>
              At the Radiology Center at Harding, our GE Optima CT Scanner
              delivers high-quality, cross-sectional imaging across all major
              body regions. As hardware and software continue to advance, our
              ability to perform increasingly precise, non-invasive evaluations
              continues to improve alongside them.
            </p>

            <ul>
              <li>
                Comprehensive CT imaging across all major body areas referred by
                physicians.
              </li>
              <li>
                Preventive screenings including Cardiac Scoring, Lung Screening,
                and Virtual Colonoscopy.
              </li>
              <li>
                Multi-slice spiral technology for faster scan times and greater
                image accuracy.
              </li>
            </ul>

            <h3>
              Whether you’re here for a diagnostic referral or a preventive
              screening, you leave with clarity — and your physician receives the
              information they need to act.
            </h3>
          </div>
        </div>
      </section>

      <section className={styles.infoCard}>
        <h2>Understanding CT Scans</h2>

        <p className={styles.subtitle}>
          Learn How CT Imaging Evaluates Organs, Bones, Blood Vessels, And
          Internal Structures With Speed And Precision.
        </p>

        <div className={styles.cardGrid}>
          {cards.map((card) => (
            <article className={styles.card} key={card.title}>
              <Image src={card.icon} alt="" width={88} height={62} />
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
          <h2>Schedule Your CT Scan Appointment</h2>

          <p>
            Whether you’ve been referred by your physician or are interested in a
            preventive screening, our team can help you find the right exam and
            schedule it promptly.
          </p>

          <Link href="/contact">Call Now</Link>
        </div>

        <div className={styles.ctaImage}>
          <Image
            src="/images/ct-doctor.png"
            alt="Doctor reviewing CT scan"
            fill
            loading="eager"
            sizes="390px"
          />
        </div>
      </section>
    </main>
  );
}
