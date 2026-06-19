"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./ServicesSection.module.scss";

const services = [
  {
    title: "3D Mammography",
    href: "/3d-mammography",
    description:
      "Tomosynthesis-based breast imaging. Greater sensitivity than conventional mammography, with fewer false positives and reduced callback rates.",
  },
  {
    title: "3D Breast Ultrasound",
    href: "/3d-mammography",
    description:
      "Hitachi SOFIA automated whole-breast ultrasound. Thirty-second scan per breast. Recommended for women with dense or heterogeneous breast tissue.",
  },
  {
    title: "CT Scans",
    href: "/3d-mammography",
    description:
      "GE Optima CT. Full diagnostic capability including low-dose lung cancer screening (LDCT) and coronary artery calcium scoring.",
  },
  {
    title: "Open MRI",
    href: "/3d-mammography",
    description:
      "Hitachi Altaire high-field open MRI. Clinically equivalent to closed-bore systems, with significantly improved patient comfort and accessibility.",
  },
  {
    title: "Ultrasound",
    href: "/3d-mammography",
    description:
      "GE Logic series with full Doppler color capability. Abdominal, pelvic, musculoskeletal, and vascular applications.",
  },
  {
    title: "X-Ray",
    href: "/3d-mammography",
    description:
      "Fully computerized digital radiography. Bone studies, chest, abdomen, and spine. Results available promptly for physician review.",
  },
  {
    title: "DEXA Scan",
    href: "/3d-mammography",
    description:
      "Dual-energy X-ray absorptiometry for bone mineral density assessment at the lumbar spine and hip.",
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Radiology Services</h2>

        <div className={styles.container}>
          <div className={styles.leftColumn}>
            {services.map((service, index) => (
              <div className={styles.serviceItem} key={service.title}>
                <Link href={service.href} className={styles.serviceTitle}>
                  {service.title}
                  {index === 0 && (
                    <span className={styles.arrow}>-&gt;</span>
                  )}
                </Link>

                <p>{service.description}</p>
              </div>
            ))}
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.stickyCard}>
              <div className={styles.cardImage}>
                <Image
                src="/images/service-card.jpg"
                alt="Service Card"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={styles.image}
                />
              </div>

              <div className={styles.cardContent}>
                <Image
                  src="/images/mri-icon.png"
                  alt="MRI"
                  width={70}
                  height={70}
                />

                <h3>
                  Precision Breast Imaging
                  <br />
                  With
                  <br />
                  Next-Generation 3D
                  <br />
                  Mammograms
                </h3>

                <p>
                  It provides highly detailed, layered X-ray images of the
                  breast, allowing radiologists to examine tissue with greater
                  accuracy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
