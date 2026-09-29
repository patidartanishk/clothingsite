"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Award, Layers, DollarSign } from "lucide-react";

const REASONS = [
  {
    icon: TrendingUp,
    title: "TRENDY COLLECTION",
    desc: "Curated seasonal designs aligned with contemporary fashion."
  },
  {
    icon: Award,
    title: "QUALITY PRODUCTS",
    desc: "Rigorous attention to fabric, stitching, and finishing."
  },
  {
    icon: Layers,
    title: "WIDE RANGE",
    desc: "Complete wardrobe solutions under one physical roof."
  },
  {
    icon: DollarSign,
    title: "REASONABLE PRICES",
    desc: "Exceptional style paired with accessible pricing."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-section" aria-label="Why Choose Akhilesh Collection">
      <div className="container">
        <div className="section-header" style={{ alignItems: "center", textAlign: "center" }}>
          <span className="eyebrow">OUR COMMITMENT</span>
          <h2 className="section-title">WHY CHOOSE US</h2>
          <p className="section-subtitle" style={{ textAlign: "center" }}>
            Delivering authentic style and unmatched value to Barwahi.
          </p>
        </div>

        <div className="why-grid">
          {REASONS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="why-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="why-icon-wrap">
                  <Icon size={24} />
                </div>
                <h3 className="why-title">{item.title}</h3>
                <p className="why-desc">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
