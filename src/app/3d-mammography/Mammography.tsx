import Image from "next/image";
import Link from "next/link";
import styles from "./Mammography.module.scss";

const cards = [
  {
    icon: "/images/icons/mammogram-device.png",
    title: "What Is A Genius™ 3D Mammography™ Exam?",
    text: "The Genius™ exam uses digital breast tomosynthesis – a technology that captures multiple low-dose images of the breast in seconds as an X-ray arm moves in a gentle arc. These images are reconstructed into thin, layered slices that our radiologists examine one by one, like turning the pages of a book. Rather than viewing all of your breast tissue compressed into a single flat image, they can see through each layer independently, making fine details visible. A conventional 2D image can also be generated from the same scan.",
  },
  {
    icon: "/images/icons/breast-scan.png",
    title: "Who Can Have A Genius™ 3D Mammography™ Exam?",
    text: "The Genius™ exam is appropriate for all women – whether you are coming in for a routine annual screening or a diagnostic exam following a specific concern such as a lump or pain, or visible changes. Screening mammograms are routinely recommended starting at age 40, or earlier if advised by your physician. The Genius™ exam is FDA-approved as superior for women with dense breasts, and is also safe for women with breast implants.",
  },
  {
    icon: "/images/icons/checklist.png",
    title: "What To Expect During Your Exam Body",
    text: "The Genius™ 3D exam is performed in the same way as a standard 2D mammogram – the process is familiar, the compression is no different, and it takes only a few extra seconds per breast. What changes is what your radiologist can see. Studies show that 3D mammography detects more invasive cancers and reduces recall rates for additional imaging, meaning fewer unnecessary follow-up appointments and greater confidence in your results.",
  },
];

export default function Mammography() {
  return (
    <main className={styles.mammoPage}>
      <section className={styles.hero}>
        <Image
          src="/images/mammo-hero.jpg"
          alt="3D Mammography"
          fill
          priority
          sizes="100vw"
          className={styles.heroBg}
        />

        <div className={styles.heroContent}>
          <h1>
            Ensure Early Detection
            <br />
            With 3D
            <br />
            Mammography
          </h1>

          <p>
            The Genius™ 3D Mammography exam is FDA-approved for all breast
            densities and clinically proven to detect cancer earlier, with fewer
            unnecessary callbacks.
          </p>

          <Link href="/appointment">Book an Appointment</Link>
        </div>
      </section>

      <section className={styles.machineSection}>
        <div className={styles.machineInner}>
          <div className={styles.machineImage}>
            <Image
              src="/images/mammo-machine.jpg"
              alt="Mammography machine"
              width={560}
              height={620}
            />
          </div>

          <div className={styles.machineContent}>
            <h2>
              What Is <span>Mammography?</span>
            </h2>

            <p>
              A mammogram is a low-dose X-ray of the breast, designed to detect cancer long before it becomes symptomatic. Research consistently shows it is the most effective breast cancer screening tool available. Modern 3D mammography goes further – producing layered, detailed images that give our radiologists a clearer, more complete view of breast tissue than conventional 2D imaging
            </p>

            

            <ul>
              <li>
                Used for both routine screening and diagnostic exams following a
                specific concern.
              </li>
              <li>
                Detects breast cancer at an earlier, more treatable stage, often
                before symptoms appear.
              </li>
              <li>
                3D imaging reduces the chance that findings are obscured by
                overlapping breast tissue.
              </li>
              <li>
                FDA-approved as superior for women with dense breasts, and
                appropriate for all women.
              </li>
            </ul>

            <h3>
              Experience advanced and comfortable breast screening using Hologic
              Genius™ 3D Mammography – the only mammogram FDA-approved as
              superior for women with dense breasts.
            </h3>
          </div>
        </div>
      </section>

      <section className={styles.experienceCard}>
        <h2>
          The Genius 3D Mammography
          <br />
          Exam Experience
        </h2>

        <p className={styles.subtitle}>
          The Genius Exam Lets Doctors View Breast Tissue Page By Page, Ensuring
          No Detail Is Hidden.
        </p>

        <div className={styles.cardGrid}>
          {cards.map((card) => (
            <article className={styles.infoCard} key={card.title}>
              <Image src={card.icon} alt="" width={76} height={58} />
              <span />

              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>

        <Link href="/appointment" className={styles.cardButton}>
          Book an Appointment
        </Link>
      </section>

      <section className={styles.videoSection}>
        <div className={styles.videoBox}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/KU8Uz1x9xWM?si=ZM1clBgz0rZc1Kwr" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2>
            Schedule Your 3D Mammography
            <br />
            Appointment
          </h2>

          <p>
            Annual mammograms save lives. If you are due for yours, or have been
            referred for a diagnostic exam, our team is ready to help you
            schedule quickly and easily.
          </p>

          <Link href="/contact">Call Now</Link>
        </div>

        <div className={styles.ctaImage}>
          <Image
            src="/images/mammo-cta.png"
            alt="3D Mammography appointment"
            fill
            sizes="390px"
          />
        </div>
      </section>
    </main>
  );
}
