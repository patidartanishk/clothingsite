"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";
import { getWhatsAppLink } from "@/data/products";

export default function WhatsAppButton() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="floating-actions-desktop desktop-only">
      {/* Back to Top */}
      {showBackToTop && (
        <button
          type="button"
          className="floating-btn back-to-top-btn"
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>
      )}

      {/* Floating WhatsApp */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn whatsapp-floating-btn"
        aria-label="Chat with Akhilesh Collection on WhatsApp"
        title="Direct WhatsApp Chat"
      >
        <span className="wa-pulse-ring" />

        <MessageCircle size={24} />

        <span className="wa-tooltip">
          Inquire on WhatsApp
        </span>
      </a>
    </div>
  );
}