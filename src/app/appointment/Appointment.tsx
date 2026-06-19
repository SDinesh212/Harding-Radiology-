import styles from "./Appointment.module.scss";

export default function Appointment() {
  return (
    <main className={styles.appointmentPage}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>
            Request to make an
            <br />
            <span>Appointment</span>
          </h1>

          <p>
            Welcome to the Radiology Center at Harding’s online appointment
            request and scheduling system! Use this secure form to schedule
            non-urgent & routine appointments only.
          </p>

          <h3>Phone consultations: 908-221-0603</h3>

          <p>
            If you have already scheduled an appointment, you may call us to
            confirm that appointment at <a href="tel:9082210603">908-221-0603</a>.
          </p>

          <h4>
            For urgent medical concerns within 24 hours, please contact us
            directly by phone.
          </h4>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className={styles.formOuter}>
          <h2>
            For routine and non-urgent appointment requests,
            <br />
            please complete this secure form.
          </h2>

          <form className={styles.formCard}>
            <div className={styles.formGroupTitle}>
              <h3>Patient Information</h3>
            </div>

            <div className={styles.grid}>
              <label>
                Full Name *
                <input type="text" placeholder="eg: John Doe" />
              </label>

              <label>
                Gender *
                <select defaultValue="">
                  <option value="" disabled>
                    Select
                  </option>
                  <option>Female</option>
                  <option>Male</option>
                  <option>Other</option>
                </select>
              </label>

              <label>
                Date of Birth (MM/DD/YYYY) *
                <input type="text" placeholder="eg: 12/01/2004" />
              </label>

              <label>
                Preferred Contact Number *
                <input type="tel" placeholder="543210987" />
              </label>
            </div>

            <div className={styles.formGroupTitle}>
              <h3>Appointment Details</h3>
            </div>

            <div className={styles.grid}>
              <label>
                Referring Physician’s Name *
                <input type="text" placeholder="eg: dr John Doe" />
              </label>

              <label>
                Type of Exam *
                <select defaultValue="">
                  <option value="" disabled>
                    Select
                  </option>
                  <option>CT Scan</option>
                  <option>MRI</option>
                  <option>X-Ray</option>
                  <option>Ultrasound</option>
                  <option>3D Mammography</option>
                  <option>DEXA Scan</option>
                </select>
              </label>

              <label>
                Referring Physician’s Phone no *
                <input type="tel" placeholder="543210987" />
              </label>

              <label>
                Patient Status *
                <select defaultValue="">
                  <option value="" disabled>
                    Select
                  </option>
                  <option>New Patient</option>
                  <option>Existing Patient</option>
                </select>
              </label>
            </div>

            <div className={styles.formGroupTitle}>
              <h3>Health Insurance information</h3>
            </div>

            <div className={styles.grid}>
              <label>
                Insurance Company *
                <input type="text" placeholder="eg: lic pvt ltd" />
              </label>

              <label>
                Policy Number *
                <input type="text" />
              </label>
            </div>

            <label className={styles.full}>
              Comments
              <textarea placeholder="Message" />
            </label>

            <div className={styles.recaptcha}>
              <span />
              <p>I&apos;m not a robot</p>
              <small>reCAPTCHA</small>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </main>
  );
}