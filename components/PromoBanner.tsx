"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function PromoBanner() {
  const bannerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start end", "end start"]
  });

  const bannerScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.12]);
  const bannerY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section ref={bannerRef} className="editorial-promo-section">
      {/* Background Image Parallax */}
      <motion.div
        className="editorial-promo-bg"
        style={{ scale: bannerScale, y: bannerY }}
      >
        <Image
          src="/assets/editorial/editorial-1.jpg"
          alt="Style for every occasion - Akhilesh Collection"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </motion.div>

      <div className="editorial-promo-overlay" />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <motion.div
          className="editorial-promo-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow" style={{ color: "#E0B77D" }}>
            MODERN WARDROBE ESSENTIALS
          </span>
          <h2 className="editorial-promo-title">STYLE FOR EVERY OCCASION</h2>
          <p className="editorial-promo-sub">Clothing • Footwear • Bags</p>
          <Link href="/clothing" className="btn-primary" style={{ backgroundColor: "#FFFFFF", color: "#111111" }}>
            <span>EXPLORE COLLECTION</span>
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
