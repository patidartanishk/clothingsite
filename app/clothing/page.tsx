"use client";

import React from "react";

import Image from "next/image";

import { motion } from "framer-motion";

import "@/styles/clothing.css";

import ProductGrid from "@/components/ProductGrid";

import AboutStore from "@/components/AboutStore";

import MapSection from "@/components/MapSection";

import { CLOTHING_PRODUCTS } from "@/data/products";

export default function ClothingPage() {
  return (
    <div className="clothing-page">
      {/* Clothing Hero */}
      <section className="category-page-hero">
        <div className="container">
          <div className="category-hero-grid">
            <motion.div
              className="category-hero-text"
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
                READY-MADE MENSWEAR
              </span>

              <h1>
                MEN&apos;S CLOTHING
              </h1>

              <p>
                Everyday essentials. Timeless style.
              </p>
            </motion.div>

            <motion.div
              className="category-hero-image-box"
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
                src="/assets/categories/clothings.png"
                alt="Men's Clothing Collection - Akhilesh Collection"
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

      {/* Clothing Product Grid */}
      <section
        className="container catalog-section"
        aria-label="Clothing Products"
      >
        <div className="catalog-count-row">
          <span>
            Showing {CLOTHING_PRODUCTS.length}{" "}
            {CLOTHING_PRODUCTS.length === 1
              ? "Style"
              : "Styles"}
          </span>

          <span>
            Clothing Collection
          </span>
        </div>

        <ProductGrid
          products={CLOTHING_PRODUCTS}
          gridClassName="catalog-grid"
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