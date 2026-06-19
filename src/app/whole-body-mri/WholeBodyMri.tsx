import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import styles from "./WholeBodyMri.module.scss";

const insightCards = [
  {
    title: "The Human Touch Body",
    text: "Most screening tools generate data. At Harding, every whole-body MRI is personally reviewed by a board-certified radiologist who adds meaningful clinical context to your report. Rather than leaving you with a list of findings to decode, our radiologists interpret what they see in relation to your overall health - so your physician has what they need to guide your next steps with clarity and confidence.",
  },
  {
    title: "Your Health As A Whole Body",
    text: "A whole-body MRI doesn't just look at one system in isolation - it captures brain, spine, chest, abdomen, pelvis, and vasculature together in a single session. This panoramic view allows our radiologists to identify patterns and findings that might be missed when each organ is evaluated separately, giving you and your physician a far more complete picture of what's happening inside your body.",
  },
  {
    title: "Tailored Technology For Accuracy Body",
    text: "Whole-body MRI at Harding is designed to detect conditions at their earliest, most treatable stage, from solid tumors and aneurysms to metabolic disorders and neurological changes. Our imaging protocols are continuously refined to improve sensitivity and reduce the likelihood of missed findings, ensuring that the insights you receive are both accurate and clinically meaningful.",
  },
];

const plans = [
  {
    title: "Comprehensive Whole Body Scan",
    time: "45 Minutes",
    price: "$1999",
    text: "A comprehensive imaging-based health assessment that includes an evaluation of major organs and spine for cancer, aneurysms and disease. Does not include arms or feet.",
  },
  {
    title: "Quick Whole Body Scan",
    time: "25 Minutes",
    price: "$999",
    text: "A quick scan designed for those concerned about catching cancer early in the torso to identify solid tumors. Does not include the spine.",
  },
];

const coveredRows = [
  {
    label: "Solid tumors (as early as stage 1)",
    comprehensive: true,
    quick: true,
  },
  {
    label: "Whole spine, including degenerative spine and joint conditions",
    comprehensive: true,
    quick: true,
  },
  {
    label: "Metabolic disorders (for example, fatty liver, hemochromatosis)",
    comprehensive: true,
    quick: true,
  },
  {
    label: "Neurological disorders (such as multiple sclerosis and dementia)",
    comprehensive: true,
    quick: true,
  },
  {
    label: "Non-cancerous conditions such as cysts, hematomas, and hemangiomas",
    comprehensive: true,
    quick: true,
  },
  {
    label: "Aneurysms",
    comprehensive: true,
    quick: true,
  },
  {
    label: "Harding Body Composition analysis",
    comprehensive: true,
    quick: false,
  },
  {
    label: "Advanced brain health assessment including brain volume analysis",
    comprehensive: true,
    quick: false,
  },
  {
    label: "Convenient lab testing",
    comprehensive: true,
    quick: false,
  },
];

function CheckMark({ show }: { show: boolean }) {
  if (!show) {
    return null;
  }

  return <CheckCircle2 aria-label="Included" size={20} strokeWidth={3} />;
}

export default function WholeBodyMri() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>
            Whole-Body MRI For
            <br />
            Preventive Insight
          </h1>

          <p>
            Radiation-free, high-resolution imaging designed to assess your
            health with greater comfort and clarity.
          </p>

          <Link href="/appointment">Book an Appointment</Link>
        </div>

        <div className={styles.heroImage} aria-hidden="true">
          <Image
            src="/images/ct-doctor.png"
            alt=""
            fill
            priority
            loading="eager"
            sizes="(max-width: 900px) 0px, 52vw"
          />
        </div>
      </section>

      <section className={styles.advancedSection}>
        <div className={styles.advancedInner}>
          <div className={styles.advancedImage}>
            <Image
              src="/images/mri-patient.jpg"
              alt="Patient being prepared for an MRI scan"
              width={560}
              height={560}
            />
          </div>

          <div className={styles.advancedContent}>
            <h2>
              Advanced <span>Whole-Body MRI</span> With
              <br />
              Patient-First Comfort
            </h2>

            <p>
              At Harding Radiology, our whole-body MRI uses high-field imaging
              hardware and advanced acquisition protocols to capture detailed
              diagnostic data across your entire body in a single session. Every
              scan is reviewed by a board-certified radiologist who provides
              clinical context, not just data, so you and your physician can
              make informed decisions about your health.
            </p>

            <p>
              High-field open MRI capturing detailed images across all major
              organ systems, spine, and brain. Advanced acquisition protocols
              delivering comprehensive, multi-parametric results in under one
              hour. Open, spacious scanning environment designed to reduce
              anxiety and support a calm experience throughout.
            </p>

            <h3>
              Enjoy A Spacious, Comfortable Scan With Real-Time Communication
              And A Care Team That&apos;s With You Every Step Of The Way.
            </h3>
          </div>
        </div>
      </section>

      <section className={styles.insightsSection}>
        <div className={styles.insightCard}>
          <h2>
            Expert Radiologist Insights You
            <br />
            Can Trust
          </h2>

          <p className={styles.insightSubtitle}>
            Whole-Body MRI Reports Reviewed By Experienced Radiologists
            <br />
            For Accurate, Actionable Health Insights.
          </p>

          <div className={styles.insightGrid}>
            {insightCards.map((card) => (
              <article className={styles.insightItem} key={card.title}>
                <Image
                  src="/images/icons/cslogo1.png"
                  alt=""
                  width={62}
                  height={62}
                />

                <span />

                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>

          <Link href="/appointment">Book an Appointment</Link>
        </div>
      </section>

      <section className={styles.compareSection}>
        <div className={styles.pricingIntro}>
          <h2>
            Whole-Body MRI Pricing &amp;
            <br />
            Packages
          </h2>

          <p>
            Explore our comprehensive scan packages and choose the option that
            best fits your health screening needs.
          </p>
        </div>

        <div className={styles.compareTable}>
          <div className={styles.coveredHeading}>
            <h2>What&apos;s Covered</h2>
          </div>

          {plans.map((plan) => (
            <article className={styles.planCard} key={plan.title}>
              <h3>{plan.title}</h3>
              <p>Scan Time: {plan.time}</p>
              <strong>
                {plan.price} <span>Usd</span>
              </strong>
              <p>{plan.text}</p>
              <Link href="/appointment">Book Now</Link>
            </article>
          ))}

          {coveredRows.map((row) => (
            <div className={styles.compareRow} key={row.label}>
              <div className={styles.featureLabel}>{row.label}</div>
              <div className={styles.featureCell}>
                <CheckMark show={row.comprehensive} />
              </div>
              <div className={styles.featureCell}>
                <CheckMark show={row.quick} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2>
            Have Questions About Your Whole-
            <br />
            Body MRI?
          </h2>

          <p>
            Not sure if a whole-body MRI is right for you? Our team is happy to
            walk you through what the scan covers, what to expect on the day,
            and how to get started.
          </p>

          <Link href="tel:9082210603">Call Now</Link>
        </div>

        <div className={styles.ctaImage}>
          <Image
            src="/images/ct-doctor.png"
            alt="Doctor reviewing a scan"
            fill
            loading="eager"
            sizes="(max-width: 768px) 360px, 460px"
          />
        </div>
      </section>
    </main>
  );
}
