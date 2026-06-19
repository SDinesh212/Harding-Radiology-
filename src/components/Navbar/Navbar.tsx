"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Menu,
  Phone,
  X,
} from "lucide-react";

import styles from "./Navbar.module.scss";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [servicesOpen, setServicesOpen] =
    useState(false);

  const [screeningOpen, setScreeningOpen] =
    useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        {/* Mobile Hamburger */}
        <button
          className={styles.mobileToggle}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Logo */}
        <div className={styles.logo}>
          <Image
            src="/logo.png"
            alt="Radiology Center at Harding"
            width={1260}
            height={541}
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.navMenu}>
         <Link href="/about">About</Link>

          {/* Services Dropdown */}
          <div className={styles.dropdown}>
            <button
              type="button"
              className={styles.dropdownTrigger}
            >
              Services
              <ChevronDown size={14} />
            </button>

            <div className={styles.dropdownMenu}>
              <Link href="/x-ray">X-Ray</Link>
              <Link href="/ultrasound">ULTRASOUND</Link>
              <Link href="/3d-mammography">3D Mammogram</Link>
              <Link href="/dexa">DEXA</Link>
              <Link href="/open-mri">Open MRI</Link>
              <Link href="/ct-scan">CT Scans</Link>
              <Link href="/3d-breast-ultrasound">
                3D Breast Ultrasound
              </Link>
            </div>
          </div>

          {/* Screening Dropdown */}
          <div className={styles.dropdown}>
            <button
              type="button"
              className={styles.dropdownTrigger}
            >
              Preventive Screening Tests
              <ChevronDown size={14} />
            </button>

            <div className={styles.dropdownMenu}>
              <Link href="/lung-screening">
                Lung Cancer Screening
              </Link>

              <Link href="/cardiac-scoring">
                Cardiac Scoring
              </Link>
            </div>
          </div>

          <Link href="/whole-body-mri">Whole body MRI</Link>

          <Link href="/appointment">Appointment</Link>

          <a href="#">Make payment</a>

          <Link href="/contact">Contact Us</Link>
        </nav>

        {/* Desktop Button */}
        <Link href="/appointment" className={styles.bookBtn}>
          Book a Scan
        </Link>

        {/* Mobile Call Icon */}
        <a
          href="tel:9082210603"
          className={styles.callBtn}
          aria-label="Call Us"
        >
          <Phone size={22} />
        </a>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${
          isOpen ? styles.active : ""
        }`}
      >
        <Link href="/about">About</Link>

        {/* Mobile Services */}
        <button
          type="button"
          className={styles.mobileDropdownBtn}
          onClick={() =>
            setServicesOpen(!servicesOpen)
          }
        >
          Services

          <ChevronDown
            size={18}
            className={
              servicesOpen ? styles.rotate : ""
            }
          />
        </button>

        <div
          className={`${styles.mobileDropdown} ${
            servicesOpen
              ? styles.showDropdown
              : ""
          }`}
        >
          <Link href="/x-ray">X-Ray</Link>
          <Link href="/ultrasound">ULTRASOUND</Link>
          <Link href="/3d-mammography">3D Mammogram</Link>
          <Link href="/dexa">DEXA</Link>
          <Link href="/open-mri">Open MRI</Link>
          <Link href="/ct-scan">CT Scans</Link>
          <Link href="/3d-breast-ultrasound">
            3D Breast Ultrasound
          </Link>
        </div>

        {/* Mobile Screening */}
        <button
          type="button"
          className={styles.mobileDropdownBtn}
          onClick={() =>
            setScreeningOpen(!screeningOpen)
          }
        >
          Preventive Screening Tests

          <ChevronDown
            size={18}
            className={
              screeningOpen
                ? styles.rotate
                : ""
            }
          />
        </button>

        <div
          className={`${styles.mobileDropdown} ${
            screeningOpen
              ? styles.showDropdown
              : ""
          }`}
        >
          <Link href="/lung-screening">
            Lung Cancer Screening
          </Link>

          <Link href="/cardiac-scoring">
            Cardiac Scoring
          </Link>
        </div>

        <Link href="/whole-body-mri">Whole body MRI</Link>

        <Link href="/appointment">Appointment</Link>

        <a href="#">Make payment</a>

        <Link href="/contact">Contact Us</Link>

        <Link href="/appointment" className={styles.mobileBookBtn}>
          Book a Scan
        </Link>
      </div>
    </header>
  );
}
