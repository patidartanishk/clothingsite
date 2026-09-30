"use client";

import React from "react";
import { motion } from "framer-motion";

import {
  MapPin,
  ExternalLink,
  Navigation,
  Phone,
} from "lucide-react";

import { SiWhatsapp } from "react-icons/si";

import {
  STORE_INFO,
  getWhatsAppLink,
} from "@/data/products";

export default function MapSection() {
  return (
    <section
      className="map-section"
      aria-label="Store Location & Map"
    >
      <div className="container">
        <motion.div
          className="map-container-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {/* Left Column: Store Information Card */}

          <div className="map-store-info-col">
            <span className="eyebrow">
              FIND US ON THE MAP
            </span>

            <h3 className="map-info-heading">
              VISIT OUR SHOWROOM
            </h3>

            <p className="map-info-intro">
              Step into Akhilesh Collection to explore fabric
              textures, try on sizes, and receive personal
              assistance.
            </p>

            <div className="map-address-box">
              <div className="address-header">
                <MapPin
                  size={22}
                  className="map-pin-icon"
                />

                <div>
                  <h4>{STORE_INFO.name}</h4>

                  <p className="map-subhead">
                    {STORE_INFO.subtitle}
                  </p>
                </div>
              </div>

              <address className="map-full-address">
                {STORE_INFO.location}
              </address>
            </div>

            <div className="map-contact-chips">
              <div className="contact-chip">
                <Phone size={15} />
                <span>
                  +91 {STORE_INFO.phonePrimary}
                </span>
              </div>

              <div className="contact-chip">
                <Phone size={15} />
                <span>
                  +91 {STORE_INFO.phoneSecondary}
                </span>
              </div>
            </div>

            <div className="map-actions-row">
              <a
                href={STORE_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary map-btn-open"
              >
                <span>OPEN IN GOOGLE MAPS</span>
                <ExternalLink size={16} />
              </a>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                aria-label="Ask directions on WhatsApp"
              >
                <SiWhatsapp size={16} />
                <span>Ask Directions</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Map Embed / Canvas */}

          <div className="map-embed-wrapper">
            <iframe
              title="Akhilesh Collection Google Maps Location"
              src="https://maps.google.com/maps?q=Main+Market+Subeha+Barabanki&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{
                border: 0,
                minHeight: "420px",
                display: "block",
              }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <a
              href={STORE_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="map-floating-overlay-btn"
            >
              <Navigation size={15} />
              <span>Get Live Directions</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}