"use client";

import React, { useState } from "react";
import "@/styles/home.css";
import Hero from "@/components/Hero";
import CategoryStrip from "@/components/CategoryStrip";
import CategoryCard from "@/components/CategoryCard";
import NewArrivals from "@/components/NewArrivals";
import PromoBanner from "@/components/PromoBanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutStore from "@/components/AboutStore";
import MapSection from "@/components/MapSection";
import ProductModal from "@/components/ProductModal";
import { Product } from "@/data/products";

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="homepage-wrapper">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Category Feature Strip */}
      <CategoryStrip />

      {/* 3. Shop By Category */}
      <section id="categories" className="categories-section" aria-label="Explore Categories">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">CURATED DEPARTMENTS</span>
            <h2 className="section-title">SHOP BY CATEGORY</h2>
            <p className="section-subtitle">
              Explore our collections designed for modern lifestyle and enduring elegance.
            </p>
          </div>

          <div className="categories-grid">
            <CategoryCard
              title="MEN'S CLOTHING"
              subline="Shirts • T-Shirts • Jeans • Trousers"
              image="/assets/categories/cat-clothing.jpg"
              href="/clothing"
              delay={0.1}
            />

            <CategoryCard
              title="FOOTWEAR"
              subline="Sports • Casual • Formal • Sandals"
              image="/assets/categories/cat-footwear.jpg"
              href="/footwear"
              delay={0.2}
            />

            <CategoryCard
              title="BAGS"
              subline="Backpacks • Travel • Laptop • Casual"
              image="/assets/categories/cat-bags.jpg"
              href="/bags"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* 4. New Arrivals */}
      <NewArrivals onViewDetails={(product) => setSelectedProduct(product)} />

      {/* 5. Editorial Promotional Section */}
      <PromoBanner />

      {/* 6. Why Choose Us */}
      <WhyChooseUs />

      {/* 7. About / Store Information */}
      <AboutStore />

      {/* 8. Google Map */}
      <MapSection />

      {/* Product Quick-View Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
