import { ArrowDown, ArrowUp } from "lucide-react";
import styles from "./Features.module.scss";

const features = [
  {
    title: "Open MRI",
    body:
      "Our Hitachi Altaire high-field open MRI produces clinical-grade images in a fully open, non-claustrophobic environment - suitable for patients of all sizes, including those with anxiety or mobility limitations.",
    color: "#942461",
  },
  {
    title: "3D Breast Imaging",
    body:
      "The only facility in NJ offering 3D Mammography plus Automated 3D Breast Ultrasound together. 30 seconds per breast. Clinically validated for superior detection, especially in dense breast tissue.",
    color: "#d9fbfb",
  },
  {
    title: "CT Scans",
    body:
      "GE Optima CT Scanner with full diagnostic capability. Lung cancer screening, cardiac calcium scoring, and total body CT - with STAT reporting available for urgent referrals.",
    color: "#43ccc7",
  },
];

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.inner}>
        {features.map((feature, index) => (
          <article className={styles.item} key={feature.title}>
            <span
              className={styles.marker}
              style={{ backgroundColor: feature.color }}
              aria-hidden="true"
            />

            <div className={styles.copy}>
              <h2>{feature.title}</h2>
              <p>{feature.body}</p>
            </div>

            {index < features.length - 1 && (
              <div className={styles.divider} aria-hidden="true">
                <ArrowUp size={20} strokeWidth={2.1} />
                <span />
                <ArrowDown size={20} strokeWidth={2.1} />
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
