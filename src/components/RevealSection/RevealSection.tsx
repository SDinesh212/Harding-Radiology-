import styles from "./RevealSection.module.scss";

const items = [
  {
    text: "Early-stage cancers and tumors",
    className: "gray",
  },
  {
    text: "Neurological abnormalities",
    className: "lightBlue",
  },
  {
    text: "Cardiovascular and vascular changes",
    className: "gray",
  },
  {
    text: "Organ health abnormalities",
    className: "lightBlue",
  },

  {
    text: "Spinal and musculoskeletal conditions",
    className: "lightBlue",
  },
  {
    text: "Inflammatory changes",
    className: "darkBlue",
  },
  {
    text: "Liver and kidney irregularities",
    className: "lightBlue",
  },
  {
    text: "Pancreatic and abdominal findings",
    className: "darkBlue",
  },

  {
    text: "Joint and cartilage degeneration",
    className: "green",
  },
  {
    text: "Hidden structural abnormalities",
    className: "lightBlue",
  },
  {
    text: "Chronic disease indicators",
    className: "green",
  },
  {
    text: "Preventive whole-body insights",
    className: "lightBlue",
  },
];

export default function RevealSection() {
  return (
    <section className={styles.revealSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          What Whole-Body MRI Can Reveal
        </h2>

        <div className={styles.pillsGrid}>
          {items.map((item, index) => (
            <div
              key={index}
              className={`${styles.pill} ${
                styles[item.className as keyof typeof styles]
              }`}
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}