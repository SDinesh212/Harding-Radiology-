import Image from "next/image";
import Link from "next/link";
import styles from "./XRay.module.scss";

const cards = [
  {
    icon: "/images/icons/procedure.png",
    title: "Common Uses Of This Procedure",
    text: "If you've been referred for an X-ray, it's likely because your physician wants a clearer look at a bone, joint, or organ. X-ray is most commonly used to identify fractures, as well as arthritis, bone infections, and joint conditions. It's also used to evaluate the lungs for pneumonia or other respiratory concerns, and to examine the spine and abdomen. X-ray also plays a role in the detection and monitoring of cancer, though CT or MRI is generally better suited to defining the nature and extent of a suspected tumor. It's often the first step toward understanding what's causing pain or discomfort, and getting you the right care sooner.",
  },
  {
    icon: "/images/icons/settings.png",
    title: "How Does It Work?",
    text: "During your X-ray, a small amount of radiation passes through your body and is captured by our digital detector on the other side. Different tissues absorb radiation in different amounts – bone appears white and bright, while softer tissues and air-filled areas like the lungs show up in darker shades. The resulting image gives your physician a clear, detailed view of your internal structures. You'll be in and out quickly, with your physician informed and ready to discuss next steps.",
  },
  {
    icon: "/images/icons/benefits.png",
    title: "Is It Safe?",
    text: "X-ray is one of the most well-established and extensively studied diagnostic tools in medicine. The dose of radiation used is very small – comparable to what you'd naturally absorb from the environment over a short period of time. At Harding, our digital system is calibrated to use the lowest effective dose while maintaining the image quality your physician needs. If you have specific concerns about radiation or your suitability for an X-ray, our team is happy to address them before your exam.",
  },
];

export default function XRay() {
  return (
    <main className={styles.xrayPage}>
      {/* HERO */}

      <section className={styles.hero}>
        <Image
          src="/images/xray-hero.jpg"
          alt="X-Ray Imaging"
          fill
          priority
          sizes="100vw"
          className={styles.heroBg}
        />

        <div className={styles.heroContent}>
          <h1>
           Precision Digital X-Ray Imaging for Confident Diagnosis
          </h1>

          <p>
            High-resolution digital imaging that helps physicians evaluate your injuries and conditions quickly, accurately, and with confidence.
          </p>

          <Link href="/appointment">Book an Appointment</Link>
        </div>
      </section>

      {/* INFO SECTION */}

      <section className={styles.infoSection}>
        <div className={styles.infoInner}>
          <div className={styles.infoImage}>
            <Image
              src="/images/xray-room.jpg"
              alt="X-Ray Room"
              width={420}
              height={480}
            />
          </div>

          <div className={styles.infoContent}>
            <h2>
              Safe, Painless, and Over Before You Know It—The Modern<span> X-ray</span> Experience.
            </h2>

            <p>
              An X-ray is one of the most straightforward imaging exams you can have. 
              It takes just minutes, requires no special preparation in most cases, 
              and uses a very small, controlled dose of radiation to create a detailed
              picture of your internal structures. At Harding, our digital system 
              produces sharper images at lower doses than older equipment – so you get 
              better results with less exposure.
            </p>

            <ul>
              <li>A brief, painless procedure that requires no injections, no preparation, and no recovery time.</li>
              <li>Dense structures like bone appear white on the image; soft tissue and air-filled areas like the lungs appear darker.</li>
              <li>Results are processed digitally and shared with your physician promptly so your care can move forward.</li>
            </ul>

            <h3>
              Everything is stored digitally at Harding, so your physician can access 
              your images immediately and compare them with future scans if needed.
            </h3>
          </div>
        </div>
      </section>

      {/* UNDERSTANDING CARD */}

      <section className={styles.learnCard}>
        <h2>What You Should Know About X-Ray</h2>

        <p className={styles.subtitle}>
          Learn how X-ray imaging works, when it’s used, and why it remains one of the most reliable diagnostic tests in medicine.
        </p>

        <div className={styles.cardGrid}>
          {cards.map((card) => (
            <article key={card.title} className={styles.card}>
              <Image src={card.icon} alt="" width={48} height={48} />

              <h3>{card.title}</h3>

              <p>{card.text}</p>
            </article>
          ))}
        </div>

        <Link href="/appointment">Book an Appointment</Link>
      </section>

      {/* CTA */}

      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2>Ready to Schedule Your X-Ray?</h2>

          <p>
            Walk-ins welcome. Same-day appointments available. Our team will make it as easy as possible.
          </p>

          <Link href="/contact">Call Now</Link>
        </div>

        <div className={styles.ctaImage}>
          <Image
            src="/images/xray-doctor.png"
            alt="Doctor Holding X-Ray"
            fill
            sizes="300px"
          />
        </div>
      </section>
    </main>
  );
}