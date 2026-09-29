"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Subtle image movement while scrolling
  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.06]
  );

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 25]
  );

  // Subtle content movement while scrolling
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 45]
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.75],
    [1, 0]
  );

  return (
    <section
      ref={containerRef}
      className="hero-section"
      aria-label="Akhilesh Collection introduction"
    >
      {/* =====================================================
          HERO BACKGROUND IMAGE
      ===================================================== */}
      <motion.div
        className="hero-background"
        style={{
          scale: imageScale,
          y: imageY,
        }}
      >
        <Image
          src="/assets/hero/hero-fullscreen.png"
          alt="Akhilesh Collection men's fashion"
          fill
          priority
          sizes="100vw"
          className="hero-background-image"
        />
      </motion.div>

      {/* =====================================================
          OVERLAYS
      ===================================================== */}
      <div className="hero-overlay" />
      <div className="hero-bottom-gradient" />

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}
      <motion.div
        className="hero-content"
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
      >
        {/* Eyebrow */}
        <motion.div
          className="hero-eyebrow"
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          AKHILESH COLLECTION
        </motion.div>

        {/* =================================================
            MAIN HEADING
        ================================================= */}
        <h1 className="hero-title">
          <span className="hero-title-line">
            <motion.span
              initial={{
                y: "110%",
              }}
              animate={{
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              YOUR STYLE
            </motion.span>
          </span>

          <span className="hero-title-line hero-title-second">
            <motion.span
              initial={{
                y: "110%",
              }}
              animate={{
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.38,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              YOUR EVERYDAY
            </motion.span>
          </span>
        </h1>

        {/* =================================================
            CATEGORY LINE
        ================================================= */}
        <motion.p
          className="hero-location"
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.55,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          MEN'S CLOTHING
          &nbsp;&nbsp;•&nbsp;&nbsp;
          FOOTWEAR
          &nbsp;&nbsp;•&nbsp;&nbsp;
          BAGS
        </motion.p>

        {/* =================================================
            HERO BUTTONS
        ================================================= */}
        <motion.div
          className="hero-buttons"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.65,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <a
            href="#categories"
            className="hero-primary-button"
          >
            <span>EXPLORE COLLECTION</span>
            <ArrowRight size={16} />
          </a>

          <Link
            href="/clothing"
            className="hero-secondary-button"
          >
            SHOP NOW
          </Link>
        </motion.div>
      </motion.div>

      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}
      <motion.a
        href="#categories"
        className="hero-scroll-indicator"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 1.05,
        }}
        aria-label="Scroll to explore collections"
      >
        <span>SCROLL TO EXPLORE</span>

        <motion.span
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown size={18} />
        </motion.span>
      </motion.a>
    </section>
  );
}