"use client";

import React, { useState, useMemo } from "react";

import Image from "next/image";

import { motion } from "framer-motion";

import "@/styles/clothing.css";

import ProductFilters from "@/components/ProductFilters";

import ProductGrid from "@/components/ProductGrid";

import AboutStore from "@/components/AboutStore";

import MapSection from "@/components/MapSection";

import { CLOTHING_PRODUCTS } from "@/data/products";

const FILTERS = [
  "ALL",
  "SHIRTS",
  "T-SHIRTS",
  "JEANS",
  "TROUSERS",
  "HOODIES",
  "JACKETS",
];

export default function ClothingPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredProducts = useMemo(() => {
    if (activeFilter === "ALL") {
      return CLOTHING_PRODUCTS;
    }

    const filterKey = activeFilter.toLowerCase();

    return CLOTHING_PRODUCTS.filter(
      (p) => p.subcategory.toLowerCase() === filterKey
    );
  }, [activeFilter]);

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
                src="/assets/clothing/hero-clothing.jpg"
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

      {/* Category Filters */}

      <ProductFilters
        categories={FILTERS}
        activeCategory={activeFilter}
        onSelectCategory={setActiveFilter}
        totalCount={filteredProducts.length}
      />

      {/* Product Content */}

      <section
        className="container catalog-section"
        aria-label="Clothing Products"
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