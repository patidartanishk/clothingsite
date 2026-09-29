"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Sparkles, Footprints, Briefcase, ShieldCheck } from "lucide-react";

const FEATURES = [
  {
    icon: Sparkles,
    title: "NEW FASHION",
    subtitle: "Trendy Collection"
  },
  {
    icon: Footprints,
    title: "FOOTWEAR",
    subtitle: "For Every Style"
  },
  {
    icon: Briefcase,
    title: "BAGS",
    subtitle: "Wide Range"
  },
  {
    icon: ShieldCheck,
    title: "QUALITY",
    subtitle: "Reasonable Prices"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function CategoryStrip() {
  return (
    <section className="feature-strip-section" aria-label="Store Highlights">
      <div className="container">
        <motion.div
          className="feature-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {FEATURES.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div key={index} className="feature-item" variants={itemVariants}>
                <div className="feature-icon-box">
                  <Icon size={22} />
                </div>
                <div className="feature-info">
                  <h4>{item.title}</h4>
                  <p>{item.subtitle}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
