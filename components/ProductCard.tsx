"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, Eye } from "lucide-react";
import { Product, getWhatsAppLink } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export default function ProductCard({ product, onViewDetails }: ProductCardProps) {
  return (
    <motion.article
      layout
      className="product-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Image Container */}
      <div
        className="product-image-box"
        onClick={() => onViewDetails(product)}
        role="button"
        tabIndex={0}
        aria-label={`View details for ${product.name}`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onViewDetails(product);
          }
        }}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          style={{ objectFit: "cover" }}
        />

        {product.isNewArrival && (
          <span className="product-badge-new">NEW</span>
        )}

        <div className="product-overlay-quickview">
          <span className="quickview-btn">
            <Eye size={15} />
            <span>View Details</span>
          </span>
        </div>
      </div>

      {/* Info Container */}
      <div className="product-info-box">
        <span className="product-subcat">{product.subcategory}</span>
        <h3 className="product-title" title={product.name}>
          {product.name}
        </h3>

        {/* Action CTAs */}
        <div className="product-card-actions">
          <button
            type="button"
            className="btn-card-details"
            onClick={() => onViewDetails(product)}
          >
            Details
          </button>
          <a
            href={getWhatsAppLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-card-wa"
            title="Inquire on WhatsApp"
          >
            <MessageCircle size={14} />
            <span>Inquire</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
}
