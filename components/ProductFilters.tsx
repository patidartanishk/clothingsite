"use client";

import React from "react";
import { motion } from "framer-motion";

interface ProductFiltersProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
  totalCount: number;
}

export default function ProductFilters({
  categories,
  activeCategory,
  onSelectCategory,
  totalCount
}: ProductFiltersProps) {
  return (
    <div className="filter-bar-sticky">
      <div className="container">
        <div className="filter-pills-row" role="tablist" aria-label="Filter products by category">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`filter-pill ${isActive ? "active" : ""}`}
                onClick={() => onSelectCategory(cat)}
              >
                <span>{cat}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeFilterHighlight"
                    className="filter-pill-bg"
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
