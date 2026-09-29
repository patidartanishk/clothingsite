"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import "@/styles/bags.css";

import ProductGrid from "@/components/ProductGrid";
import AboutStore from "@/components/AboutStore";
import MapSection from "@/components/MapSection";

import { BAGS_PRODUCTS } from "@/data/products";

export default function BagsPage() {
  return (
    <div className="bags-page">
      {/* Bags Hero */}
      <section className="bags-page-hero">
        <div className="container">
          <div className="bags-hero-grid">
            <motion.div
              className="bags-hero-text"
              initial={{
                opacity: 0,
                x: -30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span className="eyebrow">
                LUGGAGE & ACCESSORIES
              </span>

              <h1>BAGS</h1>

              <p>Carry your style.</p>
            </motion.div>

            <motion.div
              className="bags-hero-image-box"
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Image
                src="/assets/categories/bags.png"
                alt="Contemporary Bags & Luggage Collection - Akhilesh Collection"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bags Product Grid */}
      <section
        className="container catalog-section"
        aria-label="Bags Products"
      >
        <div className="catalog-count-row">
          <span>
            Showing {BAGS_PRODUCTS.length}{" "}
            {BAGS_PRODUCTS.length === 1 ? "Style" : "Styles"}
          </span>

          <span>Bags Collection</span>
        </div>

        <ProductGrid
          products={BAGS_PRODUCTS}
          gridClassName="bags-catalog-grid"
          imageOnly={true}
        />
      </section>

      {/* About / Shop Information */}
      <AboutStore />

      {/* Google Map */}
      <MapSection />
    </div>
  );
}