"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  subline: string;
  image: string;
  href: string;
  delay?: number;
}

export default function CategoryCard({
  title,
  subline,
  image,
  href,
  delay = 0
}: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={href} className="category-card" aria-label={`Explore ${title}`}>
        <div className="category-card-image">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="category-card-overlay">
          <h3 className="category-card-title">{title}</h3>
          <p className="category-card-sub">{subline}</p>
          <span className="category-card-cta">
            <span>EXPLORE</span>
            <ArrowUpRight size={18} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
