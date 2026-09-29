"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, MessageCircle, MapPin, Tag } from "lucide-react";
import { Product, STORE_INFO, getWhatsAppLink } from "@/data/products";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (product) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-card"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Close Button */}
            <button
              type="button"
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close product details modal"
            >
              <X size={20} />
            </button>

            <div className="modal-content-grid">
              {/* Product Image */}
              <div className="modal-image-box">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 480px"
                  style={{ objectFit: "cover" }}
                />
                {product.isNewArrival && (
                  <span className="modal-badge-new">NEW ARRIVAL</span>
                )}
              </div>

              {/* Product Information */}
              <div className="modal-info-panel">
                <div className="modal-header-meta">
                  <span className="modal-cat-tag">{product.category} • {product.subcategory}</span>
                  <h2 id="modal-title" className="modal-product-title">{product.name}</h2>
                </div>

                {product.description && (
                  <p className="modal-description">{product.description}</p>
                )}

                {product.tags && product.tags.length > 0 && (
                  <div className="modal-tags-row">
                    {product.tags.map((t) => (
                      <span key={t} className="modal-pill-tag">
                        <Tag size={12} />
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                <div className="modal-store-assurance">
                  <div className="assurance-item">
                    <MapPin size={16} />
                    <span>Available at <strong>Main Market, Barwahi</strong></span>
                  </div>
                </div>

                {/* Direct Connect Actions */}
                <div className="modal-actions-area">
                  <a
                    href={getWhatsAppLink(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-btn-wa"
                  >
                    <MessageCircle size={18} />
                    <span>Inquire on WhatsApp</span>
                  </a>

                  <a
                    href={`tel:+91${STORE_INFO.phonePrimary}`}
                    className="modal-btn-call"
                  >
                    <Phone size={18} />
                    <span>Call Store (+91 {STORE_INFO.phonePrimary})</span>
                  </a>
                </div>

                <p className="modal-inquiry-note">
                  {STORE_INFO.openingNote}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
