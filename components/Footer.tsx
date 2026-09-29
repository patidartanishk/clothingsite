"use client";

import React from "react";
import Link from "next/link";

import { STORE_INFO, getWhatsAppLink } from "@/data/products";

import {
  Phone,
  MapPin,
  Instagram,
} from "lucide-react";

import { SiWhatsapp } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="main-footer" role="contentinfo">
      <div className="container footer-inner">

        {/* Brand Column */}

        <div className="footer-col brand-col">
          <div className="footer-brand">
            <span className="footer-logo-title">
              {STORE_INFO.name}
            </span>

            <span className="footer-logo-sub">
              {STORE_INFO.subtitle}
            </span>
          </div>

          <p className="footer-mission">
            A premier fashion destination inBarabanki offering
            contemporary ready-made menswear, premium footwear,
            and modern lifestyle bags.
          </p>

          <div className="footer-socials">

            {/* Instagram */}

            <a
              href="https://www.instagram.com/akhileshcollection/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Akhilesh Collection on Instagram"
              className="social-icon-btn"
            >
              <Instagram size={18} />
            </a>

            {/* WhatsApp */}

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect on WhatsApp"
              className="social-icon-btn"
            >
              <SiWhatsapp size={18} />
            </a>

          </div>
        </div>

        {/* Quick Links Column */}

        <div className="footer-col">
          <h4 className="footer-heading">
            Quick Links
          </h4>

          <ul className="footer-nav-list">
            <li>
              <Link href="/">
                Home
              </Link>
            </li>

            <li>
              <Link href="/clothing">
                Clothing
              </Link>
            </li>

            <li>
              <Link href="/footwear">
                Footwear
              </Link>
            </li>

            <li>
              <Link href="/bags">
                Bags
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information Column */}

        <div className="footer-col">
          <h4 className="footer-heading">
            Contact Store
          </h4>

          <ul className="footer-contact-list">

            {/* Phone Numbers */}

            <li>
              <Phone
                size={16}
                className="contact-icon"
              />

              <div className="contact-lines">
                <a
                  href={`tel:+91${STORE_INFO.phonePrimary}`}
                >
                  +91 {STORE_INFO.phonePrimary}
                </a>

                <a
                  href={`tel:+91${STORE_INFO.phoneSecondary}`}
                >
                  +91 {STORE_INFO.phoneSecondary}
                </a>
              </div>
            </li>

            {/* WhatsApp */}

            <li>
              <SiWhatsapp
                size={16}
                className="contact-icon"
              />

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Inquiry Available
              </a>
            </li>

          </ul>
        </div>

        {/* Location Column */}

        <div className="footer-col">
          <h4 className="footer-heading">
            Store Location
          </h4>

          <div className="footer-location-box">
            <MapPin
              size={18}
              className="location-icon"
            />

            <address className="location-text">
              <strong>
                {STORE_INFO.name}
              </strong>

              <br />

              {STORE_INFO.location}
            </address>
          </div>

          <a
            href={STORE_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-map-link"
          >
            Open in Google Maps →
          </a>
        </div>

      </div>

      {/* Copyright Bar */}

      <div className="footer-bottom-bar">
        <div className="container bottom-bar-inner">

          <p className="copyright-text">
            © 2026 {STORE_INFO.name}. All Rights Reserved.
          </p>

          <p
            className="footer-tag-right"
            style={{
              color: "#A8A8A8",
              transform: "translateX(-25px)",
            }}
          >
            Designed &amp; developed by{" "}

            <a
              href="https://www.linkedin.com/in/tanishk-patidar-663b53378"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-credit-link"
            >
              Tanishk Patidar
            </a>

            {", "}

            <a
              href="https://www.linkedin.com/in/shivam-singh-52a739384"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-credit-link"
            >
              Shivam Singh
            </a>

            {", "}

            <a
              href="http://localhost:3000/YASH_SONI_LINKEDIN_URL"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-credit-link"
            >
              Yash Soni
            </a>

            {" & "}

            <a
              href="https://www.linkedin.com/in/yash-baswal-a48a953a9"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-credit-link"
            >
              Yash Baswal
            </a>
          </p>

        </div>
      </div>
    </footer>
  );
}