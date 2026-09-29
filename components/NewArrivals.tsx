"use client";

import React, { useRef } from "react";

import Image from "next/image";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { NEW_ARRIVALS } from "@/data/products";

export default function NewArrivals() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (trackRef.current) {
      const scrollAmount = trackRef.current.clientWidth * 0.75;

      trackRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="new-arrivals-section"
      aria-label="New Arrivals Showcase"
    >
      <div className="container">

        {/* Header */}

        <div className="arrivals-header-row">
          <div
            className="section-header"
            style={{ marginBottom: 0 }}
          >
            <span className="eyebrow">
              SPRING / SUMMER 2026
            </span>

            <h2 className="section-title">
              NEW ARRIVALS
            </h2>

            <p className="section-subtitle">
              Fresh styles. New season.
            </p>
          </div>

          {/* Carousel Navigation */}

          <div className="carousel-nav-buttons desktop-only">
            <button
              type="button"
              className="carousel-btn"
              onClick={() => scroll("left")}
              aria-label="Previous arrivals"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              className="carousel-btn"
              onClick={() => scroll("right")}
              aria-label="Next arrivals"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Image-only Carousel */}

        <div
          ref={trackRef}
          className="arrivals-track"
        >
          {NEW_ARRIVALS.map((product) => (
            <div
              key={product.id}
              className="arrivals-item-card"
            >
              <div className="arrivals-image-only">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 25vw"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}