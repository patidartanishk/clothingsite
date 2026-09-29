"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/data/products";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  onViewDetails: (product: Product) => void;
  gridClassName?: string;
}

export default function ProductGrid({
  products,
  onViewDetails,
  gridClassName = "catalog-grid"
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="no-products-box">
        <p className="no-products-text">No items found in this category.</p>
      </div>
    );
  }

  return (
    <motion.div layout className={gridClassName}>
      <AnimatePresence mode="popLayout">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onViewDetails={onViewDetails}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
