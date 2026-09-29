"use client";

import React from "react";

import Image from "next/image";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import { Product } from "@/data/products";

import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  onViewDetails?: (product: Product) => void;
  gridClassName?: string;
  imageOnly?: boolean;
}

export default function ProductGrid({
  products,
  onViewDetails,
  gridClassName = "catalog-grid",
  imageOnly = false,
}: ProductGridProps) {

  if (products.length === 0) {
    return (
      <div className="no-products-box">
        <p className="no-products-text">
          No items found in this category.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      layout
      className={`${gridClassName} ${
        imageOnly ? "catalog-grid-image-only" : ""
      }`}
    >
      <AnimatePresence mode="popLayout">

        {products.map((product) => (

          <React.Fragment key={product.id}>

            {imageOnly ? (

              /* Image-only product */

              <motion.div
                layout
                className="catalog-image-card"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="catalog-image-box">

                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    style={{
                      objectFit: "cover",
                    }}
                  />

                </div>
              </motion.div>

            ) : (

              /* Normal product card */

              onViewDetails && (
                <ProductCard
                  product={product}
                  onViewDetails={onViewDetails}
                />
              )

            )}

          </React.Fragment>

        ))}

      </AnimatePresence>
    </motion.div>
  );
}