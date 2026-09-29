"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Phone, MapPin, Navigation } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

import { STORE_INFO, getWhatsAppLink } from "@/data/products";

export default function AboutStore() {
  return (
    <section
      className="about-store-section"
      aria-label="About Akhilesh Collection"
    >
      <div className="container">
        <motion.div
          className="about-store-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="about-store-grid">

            {/* Store Information Content */}

            <div className="about-store-content">
              <span className="eyebrow">
                STORE SHOWROOM
              </span>

              <h2 className="section-title">
                ABOUT {STORE_INFO.name}
              </h2>

              <p className="about-lead">
                &ldquo;Your local destination for men&apos;s fashion,
                footwear and bags.&rdquo;
              </p>

              <div className="store-details-card">

                <div className="store-name-badge">
                  <h3>{STORE_INFO.name}</h3>
                  <span className="store-subtitle">
                    {STORE_INFO.subtitle}
                  </span>
                </div>

                <div className="store-info-row">
                  <MapPin
                    size={20}
                    className="info-icon"
                  />

                  <p className="info-text">
                    {STORE_INFO.location}
                  </p>
                </div>

                <div className="store-info-row">
                  <Phone
                    size={20}
                    className="info-icon"
                  />

                  <div className="info-phones">
                    <a
                      href={`tel:+91${STORE_INFO.phonePrimary}`}
                    >
                      +91 {STORE_INFO.phonePrimary}
                    </a>

                    <span className="divider">
                      •
                    </span>

                    <a
                      href={`tel:+91${STORE_INFO.phoneSecondary}`}
                    >
                      +91 {STORE_INFO.phoneSecondary}
                    </a>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}

              <div className="store-cta-buttons">

                <a
                  href={`tel:+91${STORE_INFO.phonePrimary}`}
                  className="btn-primary"
                >
                  <Phone size={16} />
                  <span>CALL NOW</span>
                </a>

                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  aria-label="Contact Akhilesh Collection on WhatsApp"
                >
                  <SiWhatsapp size={16} />
                  <span>WHATSAPP</span>
                </a>

                <a
                  href={STORE_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  <Navigation size={16} />
                  <span>GET DIRECTIONS</span>
                </a>

              </div>
            </div>

            {/* Store Visual Showcase */}

            <div className="about-store-visual">
              <div className="store-photo-frame">
                <Image
                  src="/assets/store/store-1.jpeg"
                  alt="Akhilesh Collection Showroom Atmosphere"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}