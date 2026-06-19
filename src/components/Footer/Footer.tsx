"use client";

import Link from "next/link";
import styles from "./Footer.module.scss";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>
            Trusted, Top-Quality Imaging
            <br />
            For <span>Morris County And</span>
            <br />
            <span>Surrounding Communities</span>
          </h2>

          <p>
            Your trusted source for advanced imaging to patients in neighboring
            areas including
          </p>

          <div className={styles.locations}>
            <ul>
              <li>Denville NJ</li>
              <li>Chatham NJ</li>
              <li>Warren NJ</li>
              <li>Hanover NJ</li>
              <li>Florham Park NJ</li>
            </ul>

            <ul>
              <li>Morristown NJ</li>
              <li>Morris Plains NJ</li>
              <li>Bedminster NJ</li>
              <li>Chester NJ</li>
              <li>Cedar Knolls NJ</li>
            </ul>

            <ul>
              <li>Bernardsville NJ</li>
              <li>Randolph NJ</li>
              <li>Summit NJ</li>
              <li>Mendham NJ</li>
              <li>Berkeley Heights NJ</li>
            </ul>

            <ul>
              <li>Morris County NJ</li>
              <li>Parsippany NJ</li>
              <li>Bridgewater NJ</li>
              <li>Madison NJ</li>
            </ul>
          </div>
        </div>

        <div className={styles.right}>
          <h3>About Harding</h3>

          <div className={styles.links}>
            <div>
              <Link href="/about">About</Link>
              <Link href="/">Make Payment</Link>
              <Link href="/3d-breast-ultrasound">Women Imaging</Link>
            </div>

            <div>
              <Link href="/lung-screening">Preventive Screening Tests</Link>
              <Link href="/appointment">Appointment</Link>
              <Link href="/contact">Contact us</Link>
            </div>
          </div>

          <div className={styles.contact}>
            <p>Tel: 908-221-0603</p>
            <p>Email: Scheduling@hardingradiology.com</p>
          </div>

          <div className={styles.socials}>
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
            <a href="#">
              <FaPinterestP />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        &copy; 2026 Radiology Center At Harding. All Rights Reserved
      </div>

      <div className={styles.triangle}></div>
    </footer>
  );
}
