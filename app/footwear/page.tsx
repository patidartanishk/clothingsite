"use client";

import React, { useState, useMemo } from "react";

import Image from "next/image";

import { motion } from "framer-motion";

import "@/styles/footwear.css";

import ProductFilters from "@/components/ProductFilters";

import ProductGrid from "@/components/ProductGrid";

import AboutStore from "@/components/AboutStore";

import MapSection from "@/components/MapSection";

import { FOOTWEAR_PRODUCTS } from "@/data/products";

const FILTERS = [
  "ALL",
  "SPORTS SHOES",
  "CASUAL SHOES",
  "FORMAL SHOES",
  "SANDALS",
  "SLIPPERS",
  "LOAFERS",
];

export default function FootwearPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredProducts = useMemo(() => {
    if (activeFilter === "ALL") {
      return FOOTWEAR_PRODUCTS;
    }

    const filterKey = activeFilter.toLowerCase();

    return FOOTWEAR_PRODUCTS.filter(
      (p) => p.subcategory.toLowerCase() === filterKey
    );
  }, [activeFilter]);

  return (
    <div className="footwear-page">

      {/* Footwear Hero */}

      <section className="footwear-page-hero">
        <div className="container">

          <div className="footwear-hero-grid">

            <motion.div
              className="footwear-hero-text"
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
                FOOTWEAR COLLECTION
              </span>

              <h1>
                FOOTWEAR
              </h1>

              <p>
                Step into style.
              </p>
            </motion.div>

            <motion.div
              className="footwear-hero-image-box"
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
                src="/assets/footwear/hero-footwear.jpg"
                alt="Premium Footwear Collection - Akhilesh Collection"
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

      {/* Footwear Filters */}

      <ProductFilters
        categories={FILTERS}
        activeCategory={activeFilter}
        onSelectCategory={setActiveFilter}
        totalCount={filteredProducts.length}
      />

      {/* Footwear Product Grid */}

      <section
        className="container catalog-section"
        aria-label="Footwear Products"
      >
        <div className="catalog-count-row">

          <span>
            Showing {filteredProducts.length}{" "}
            {filteredProducts.length === 1
              ? "Style"
              : "Styles"}
          </span>

          <span>
            Category: {activeFilter}
          </span>

        </div>

        <ProductGrid
          products={filteredProducts}
          gridClassName="footwear-catalog-grid"
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