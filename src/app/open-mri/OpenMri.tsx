import Image from "next/image";
import Link from "next/link";
import styles from "./OpenMri.module.scss";

const detailCards = [
  {
    icon: "/images/icons/openmri1.png",
    title: "What Is An Open MRI?",
    text: "An MRI uses a powerful magnetic field and radio waves to produce detailed images of the inside of your body. No radiation, no X-rays and no injections in most cases. What makes the open MRI different is its design. Rather than sliding into an enclosed tube, you lie on a table between two open magnets with space on all sides. For patients who experience claustrophobia or anxiety, or who have had difficult MRI experiences in the past, this distinction can make all the difference between avoiding a necessary scan and finally getting the answers your physician needs.",
  },
  {
    icon: "/images/icons/openmri2.png",
    title: "Common Uses Of This Procedure",
    text: "MRI produces some of the most detailed soft-tissue images available in diagnostic medicine, making it the preferred tool for evaluating spinal and joint conditions, sports injuries, and neurological concerns. It is widely used to assess the knee, shoulder, hip, elbow, and wrist – detecting even very small tears to ligaments, tendons, and muscles that other imaging methods may miss. If your physician has referred you for an MRI, it is because they need a level of detail that only this technology can reliably provide.",
  },
  {
    icon: "/images/icons/openmri3.png",
    title: "How Does It Work?",
    text: "Unlike X-ray or CT, MRI does not use ionizing radiation. Instead, it uses a strong magnetic field and radio waves to stimulate hydrogen protons naturally present throughout your body. As these protons return to their resting state, they emit signals that are processed by sophisticated computer systems into high-resolution cross-sectional images. A typical MRI exam consists of several imaging sequences, each lasting two to ten minutes, capturing views of the body from multiple planes for the most complete diagnostic picture possible.",
  },
];

export default function OpenMri() {
  return (
    <main className={styles.openMriPage}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <Image
          src="/images/open-mri-hero.jpg"
          alt="Patient receiving an open MRI scan"
          fill
          priority
          sizes="100vw"
          className={styles.heroBg}
        />

        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <h1>Open MRI Designed Around Patient Comfort</h1>

            <p>
              Hitachi Altaire Open MRI - clinical-grade imaging with a
              high-field open MRI experience that helps patients feel calmer,
              comfortable, and more at ease throughout their scan.
            </p>

            <Link href="/appointment">
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* MACHINE SECTION */}
      <section className={styles.machineSection}>
        <div className={styles.machineInner}>
          <div className={styles.machineImage}>
            <Image
              src="/images/open-mri-machine.png"
              alt="Hitachi Altaire Open MRI"
              width={515}
              height={420}
            />
          </div>

          <div className={styles.machineContent}>
            <h2>
              <span>Hitachi Altaire</span> - High Field Open MRI
            </h2>

            <p>
              Our Hitachi Altaire High-Field Open MRI uses magnets positioned
              above and below the patient while remaining{" "}
              <span>completely open on all sides</span> – no tunnel, no
              enclosure, no sense of being confined. It is a high-field system,
              meaning image quality is equivalent to conventional closed-bore
              MRI scanners, with the added benefit of a design that
              significantly reduces anxiety and is suitable for patients of all
              body types and mobility levels.
            </p>

            <ul>
              <li>
                No enclosed tunnel - open on all four sides with magnets
                positioned above and below.
              </li>
              <li>
                High-field imaging, delivering clinical-grade diagnostic
                accuracy equivalent to closed-bore systems.
              </li>
              <li>
                Recently upgraded with advanced software for improved image
                clarity and diagnostic precision.
              </li>
            </ul>

            <h3>
              Spacious, calm, and unhurried - because a better experience
              produces better results.
            </h3>
          </div>
        </div>
      </section>

      {/* LOOK CARD SECTION */}
      <section className={styles.lookCard}>
        <h2>A Closer Look At Open MRI</h2>

        <p className={styles.lookSubtitle}>
          Clear Diagnostic Imaging With A More Comfortable Patient Experience
        </p>

        <div className={styles.cardGrid}>
          {detailCards.map((card) => (
            <article
              className={styles.infoCard}
              key={card.title}
            >
              <Image
                src={card.icon}
                alt={card.title}
                width={70}
                height={70}
                className={styles.cardIcon}
              />

              <div className={styles.line} />

              <h3>{card.title}</h3>

              <p>{card.text}</p>
            </article>
          ))}
        </div>

        <Link
          href="/appointment"
          className={styles.cardButton}
        >
          Book an Appointment
        </Link>
      </section>

      {/* CTA SECTION */}
      <section className={styles.ctaCard}>
        <div className={styles.ctaContent}>
          <h2>Ready to Schedule Your Open MRI?</h2>

          <p>
            If you have been putting it off, this is the scan that changes
            that. If advised by your physician, call our team or book online.
            Same-day appointments are available based on scheduling.
          </p>

          <Link href="tel:9082210603">
            Call Now
          </Link>
        </div>

        <div className={styles.ctaImage}>
          <Image
            src="/images/open-mri-doctor.png"
            alt="Doctor holding scan"
            fill
            sizes="(max-width: 860px) 420px, 330px"
          />
        </div>
      </section>
    </main>
  );
}