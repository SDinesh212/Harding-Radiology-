import Image from "next/image";
import styles from "./AboutPage.module.scss";

const services = [
  {
    icon: "/images/ct-scan.png",
    title: "Computed Tomography (CT Scan)",
    description:
      "Full diagnostic CT capability, including low-dose lung cancer screening and cardiac calcium scoring with our GE Optima Scanner.",
  },
  {
    icon: "/images/icons/mri.png",
    title: "Magnetic Resonance Imaging (MRI)",
    description:
      "High-field open MRI using the Hitachi Altaire — clinically rigorous, with a fully open design that eliminates the enclosed tunnel experience.",
  },
  {
    icon: "/images/icons/mammogram.png",
    title: "Mammogram & 3D Mammography",
    description:
      "Conventional and 3D tomosynthesis mammography. The most clinically advanced breast X-ray available for routine and diagnostic screening.",
  },
  {
    icon: "/images/icons/dexa.png",
    title: "DEXA & Bone Density Scan",
    description:
      "Dual-energy X-ray absorptiometry measuring bone mineral density at the lumbar spine and hip. Standard of care for osteoporosis assessment.",
  },
  {
    icon: "/images/icons/lung.png",
    title: "CT Lung Screening (Low Dose LDCT)",
    description:
      "Low-dose CT lung screening for early detection of lung cancer in high-risk individuals, in line with current USPSTF guidelines.",
  },
  {
    icon: "/images/icons/breast-ultrasound.png",
    title: "Breast Ultrasound & 3D Breast Ultrasound",
    description:
      "Hitachi SOFIA automated whole-breast ultrasound — 30 seconds per breast, radiation-free, and specifically indicated for dense breast tissue.",
  },
  {
    icon: "/images/icons/cardiac.png",
    title: "CT Cardiac Scoring",
    description:
      "Non-invasive coronary artery calcium scoring to assess cardiovascular risk in asymptomatic patients.",
  },
  {
    icon: "/images/icons/xray.png",
    title: "X-Ray",
    description:
      "Fully computerized digital radiography for bone, chest, abdominal, and spine studies.",
  },
  {
    icon: "/images/icons/ultrasound.png",
    title: "Ultrasound",
    description:
      "GE Logic series with Doppler color capability for abdominal, pelvic, musculoskeletal, and vascular applications.",
  },
];

const doctors = [
  {
    name: "Dr. Ann M. Moore, MD",
    description:
      "Diagnostic Radiologist with over 30 years of experience. Residency at Overlook Hospital; fellowship in Nuclear Medicine at NYU Medical Center. Former Chief of Radiology at Hospital Center at Orange. Certified by the American Board of Radiology with special competence in Nuclear Medicine. Specialty: General Radiology · Subspecialty: Nuclear Radiology",
  },
  {
    name: "Dr. Sheela Sonalkar, MD",
    description:
      "Diagnostic Radiology specialist with over 41 years of clinical experience. Medical school graduate 1976. Residency at Hackensack University Medical Center; fellowship in Nuclear Medicine and Diagnostic Imaging at St. Vincent's Hospital, New York. Specialties: General Radiology, Ultrasound, Vascular & Interventional Radiology, Nuclear Radiology",
  },
  {
    name: "Dr. Christel Bauer, MD",
    description:
      "Diagnostic Radiologist. Graduate of Cornell University Medical College, 1988. Over 29 years of experience with subspecialty focus in Neuroradiology. Specialty: Diagnostic Radiology · Subspecialty: Neuroradiology",
  },
  {
    name: "Dr. Simon Ryoo, MD",
    description:
      "Diagnostic Radiologist. Graduate of SUNY Upstate Medical University School of Medicine, 2004. Musculoskeletal fellowship at SUNY. Certified by the American Board of Radiology. Subspecialty: Musculoskeletal Radiology",
  },
  {
    name: "Dr. Stephen Toder, MD",
    description:
      "General Radiologist. Board-certified since 1980. Trained at New York University Medical Center with an additional fellowship in Abdominal Radiology. Extensive experience across hospital and freestanding outpatient radiology settings. Subspecialty: Abdominal Radiology",
  },
  {
    name: "Dr. Ajay K. Agarwala, MD",
    description:
      "Cardiovascular Disease specialist. Graduate of University of Illinois at Chicago Health Science Center, 1994. Over 23 years of experience in interventional and general cardiology. Certified by the American Board of Internal Medicine in Interventional Cardiology. Specialty: Cardiovascular Disease · Subspecialty: Interventional Cardiology",
  },
];

export default function AboutPage() {
  return (
    <main className={styles.aboutPage}>
      <section className={styles.introSection}>
        <div className={styles.introContent}>
          <h4>About Harding Radiology</h4>

          <h1>
            Complete <span>Imaging</span>
            <br />
            Complete <span>Peace Of Mind</span>
          </h1>

          <p>
            At The Radiology Center At Harding, Our Mission Is Straightforward To
            Provide Accurate, Timely Diagnostic Imaging In An Environment Where
            Every Patient Feels Respected And Every Referring Physician Can Trust
            The Results. We Are An Independent, Physician-Led Outpatient Imaging
            Center, And We Have Held To That Mission For Over 35 Years.
          </p>
        </div>

        <div className={styles.introImage}>
          <Image
            src="/images/about-1.jpg"
            alt="About Harding Radiology"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.image}
            priority
          />
        </div>
      </section>

      <section className={styles.careSection}>
        <div className={styles.careImage}>
          <Image
            src="/images/about-2.jpg"
            alt="Patient First Care"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.image}
          />
        </div>

        <div className={styles.introContent}>
          <h1>
            Patient-<span>First Care</span>
            <br />
            Philosophy
          </h1>

          <p>
            We Understand That Coming In For An Imaging Study Is Rarely A
            Routine Event. For Most Patients, It Follows A Concern Raised By
            Their Doctor, A Symptom They’ve Been Managing, Or A Question That
            Needs Answering. We Take That Context Seriously.
          </p>

          <p>
            From The Moment You Call To Schedule Through The Time Your Results
            Reach Your Physician, Our Team Is Focused On Making The Process As
            Clear, Efficient, And Stress-Free As Possible. We Work Hard To
            Ensure That Your Experience Here Reflects The Care That Went Into
            Building This Practice.
          </p>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.servicesTop}>
          <div className={styles.servicesIntro}>
            <h2>
              Comprehensive <span>Imaging</span>
              <br />
              Services
            </h2>

            <p>
              We offer a full spectrum of outpatient diagnostic imaging,
              available under one roof, reported by the same experienced team,
              and supported by our fully integrated digital imaging system for
              secure, timely delivery of results to your care provider.
            </p>
          </div>

          <div className={styles.servicesImage}>
            <Image
              src="/images/services-mri.jpg"
              alt="MRI scan"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <article className={styles.serviceCard} key={service.title}>
              <div className={styles.serviceIcon}>
                <Image src={service.icon} alt="" width={72} height={72} />
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.teamConnectSection}>
        <div className={styles.leftColumn}>
          <div className={styles.teamCard}>
            <h2>Our Expert Team</h2>

            <p className={styles.teamIntro}>
              Harding Radiology is staffed by a team of board-certified,{" "}
              <strong>fellowship-trained radiologists</strong>, certified by the
              American Board of Radiology and bringing deep subspecialty
              expertise to their reading and reporting. A radiologist is on-site
              throughout all operating hours.
            </p>

            <div className={styles.doctorGrid}>
              {doctors.map((doctor) => (
                <article className={styles.doctorCard} key={doctor.name}>
                  <h3>{doctor.name}</h3>
                  <p>{doctor.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className={styles.referralBox}>
            <h2>
              A Trusted Referral Partner For Physicians
              <br />
              Across The Region
            </h2>

            <p>
              Physicians across Morris and Somerset Counties refer their patients
              to Harding Radiology knowing they will receive prompt scheduling,
              accurate imaging, and same-day reports as standard. STAT results
              are available on request.
            </p>

            <p>
              If you are a provider interested in establishing a referral
              relationship, our team is available to assist.
            </p>
          </div>
        </div>

        <aside className={styles.connectCard}>
          <div className={styles.connectOverlay}>
            <h2>Connect With Us</h2>

            <p>Ready to schedule, or have questions?</p>

            <h3>
              We Look Forward To Supporting Your Healthcare Journey With
              Expertise And Care.
            </h3>

            <a href="/appointment">Book an Appointment</a>
          </div>
        </aside>
      </section>
    </main>
  );
}