import Image from "next/image";
import Link from "next/link";
import styles from "./AboutSection.module.scss";

export default function AboutSection() {
  return (
    <>
      {/* SECTION 1 */}

      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2>
              The Radiology Center at Harding —
              <span> Decades of Trust. Advanced Diagnostic Care.</span>
            </h2>

            <div className={styles.infoBlock}>
              <h3>Accreditation and Clinical Standards:</h3>

              <p>
                Harding Radiology holds full ACR accreditation across its
                imaging modalities – a nationally recognized benchmark for
                equipment performance, imaging protocols and quality assurance.
                Our radiologists are board-certified and fellowship-trained,
                with a specialist on-site throughout all operating hours.
              </p>
            </div>

            <div className={styles.infoBlock}>
              <h3>Comprehensive Imaging. One Location</h3>

              <p>
                We offer the full spectrum of outpatient diagnostic imaging
                – Open MRI, CT, 3D Mammography, 3D Breast Ultrasound, DEXA,
                X-Ray, Ultrasound, and Whole-Body MRI – supported by a fully
                integrated RIS/PACS digital archiving system for seamless
                physician access to results.
              </p>
            </div>

            <div className={styles.infoBlock}>
              <h3>Designed Around Patient Access</h3>

              <p>
                Same-day reports as standard. STAT results on request.
                Walk-in and emergency appointments available. Free
                transportation for MRI and CT patients. Private on-site
                parking. Extended hours on Wednesdays.
              </p>
            </div>

            <Link href="/about" className={styles.aboutBtn}>
              More About Us
            </Link>
          </div>

          <div className={styles.imageWrapper}>
            <Image
                src="/images/mri-patient.jpg"
                alt="MRI Patient"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.image}
/>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}

      <section className={styles.mriSection}>
        <div className={styles.container}>
          <div className={styles.mriImage}>
            <Image
            src="/images/whole-body-mri.png"
            alt="Whole Body MRI"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.image}
/>
          </div>

          <div className={styles.content}>
            <h2>
              Whole-Body MRI —
              <span> Now Available at Harding Radiology</span>
            </h2>

            <p>
              Whole-Body MRI is a non-invasive screening that produces
              detailed images of the brain, spine, chest, abdomen,
              pelvis, major organ systems, and vasculature – without
              radiation or contrast agents. It is designed for patients
              who want a thorough internal health assessment, and for 
              physicians seeking a broader diagnostic picture outside of symptom-specific referrals.
            </p>


            <p>
              Results are reviewed and reported by board-certified
              radiologists and shared with your referring provider.
            </p>

            <h4>
              Comprehensive. Radiation-free. One session.
            </h4>
          </div>
        </div>
      </section>
    </>
  );
}
