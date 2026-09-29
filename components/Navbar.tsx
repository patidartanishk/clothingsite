"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Menu, X, ArrowUpRight } from "lucide-react";
import { STORE_INFO, getWhatsAppLink } from "@/data/products";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Clothing", href: "/clothing" },
  { name: "Footwear", href: "/footwear" },
  { name: "Bags", href: "/bags" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const isHomePage = pathname === "/";

  return (
    <>
      <header
        className={`main-navbar ${
          isScrolled || !isHomePage
            ? "navbar-scrolled"
            : "navbar-transparent"
        }`}
      >
        <div className="container navbar-inner">

          {/* BRAND */}
          <Link
            href="/"
            className="navbar-brand"
            aria-label="Akhilesh Collection Home"
          >
            <div className="brand-logo-wrap">
              <div className="monogram-badge" aria-hidden="true">
                AC
              </div>

              <div className="brand-text">
                <span className="brand-title">AKHILESH</span>
                <span className="brand-subtitle">COLLECTION</span>
              </div>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav
            className="navbar-nav desktop-only"
            aria-label="Main Navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`nav-link ${
                    isActive ? "active" : ""
                  }`}
                >
                  <span>{link.name}</span>

                  {isActive && (
                    <motion.span
                      layoutId="activeNavUnderline"
                      className="nav-active-indicator"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* DESKTOP ACTIONS */}
          <div className="navbar-actions desktop-only">

            <a
              href={`tel:+91${STORE_INFO.phonePrimary}`}
              className="nav-btn-call"
              aria-label={`Call Akhilesh Collection at ${STORE_INFO.phonePrimary}`}
            >
              <Phone size={15} strokeWidth={1.8} />
              <span>Call</span>
            </a>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-btn-whatsapp"
              aria-label="Chat with Akhilesh Collection on WhatsApp"
            >
              <MessageCircle size={15} strokeWidth={1.8} />
              <span>WhatsApp</span>
            </a>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className="mobile-toggle-btn mobile-only"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={
              mobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileMenuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={23} strokeWidth={1.8} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={23} strokeWidth={1.8} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-drawer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.aside
              className="mobile-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              onClick={(event) => event.stopPropagation()}
              aria-label="Mobile navigation"
            >

              {/* DRAWER HEADER */}
              <div className="drawer-header">

                <Link
                  href="/"
                  className="navbar-brand"
                  aria-label="Akhilesh Collection Home"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="brand-logo-wrap">
                    <div className="monogram-badge">
                      AC
                    </div>

                    <div className="brand-text">
                      <span className="brand-title">
                        AKHILESH
                      </span>

                      <span className="brand-subtitle">
                        COLLECTION
                      </span>
                    </div>
                  </div>
                </Link>

                <button
                  type="button"
                  className="drawer-close"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close navigation menu"
                >
                  <X size={22} strokeWidth={1.8} />
                </button>

              </div>

              {/* DRAWER CONTENT */}
              <div className="drawer-content">

                <div className="drawer-heading">
                  <span>EXPLORE</span>
                  <p>Discover our collections.</p>
                </div>

                <nav
                  className="drawer-links"
                  aria-label="Mobile Navigation"
                >
                  {NAV_LINKS.map((link, index) => {
                    const isActive = pathname === link.href;

                    return (
                      <motion.div
                        key={link.name}
                        initial={{
                          opacity: 0,
                          x: 20,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: 0.08 + index * 0.05,
                          duration: 0.35,
                        }}
                      >
                        <Link
                          href={link.href}
                          className={`drawer-link ${
                            isActive ? "active" : ""
                          }`}
                          onClick={() =>
                            setMobileMenuOpen(false)
                          }
                        >
                          <span className="drawer-link-number">
                            0{index + 1}
                          </span>

                          <span className="drawer-link-name">
                            {link.name}
                          </span>

                          <ArrowUpRight
                            size={18}
                            strokeWidth={1.6}
                            className="drawer-link-arrow"
                          />

                          {isActive && (
                            <span className="drawer-active-dot" />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* STORE INFORMATION */}
                <div className="drawer-contact-box">

                  <div className="drawer-store-heading">
                    <span>VISIT THE STORE</span>
                  </div>

                  <span className="drawer-store-title">
                    {STORE_INFO.name}
                  </span>

                  <p className="drawer-store-loc">
                    {STORE_INFO.location}
                  </p>

                  <div className="drawer-buttons">

                    <a
                      href={`tel:+91${STORE_INFO.phonePrimary}`}
                      className="drawer-call-btn"
                    >
                      <Phone
                        size={16}
                        strokeWidth={1.8}
                      />
                      <span>Call Store</span>
                    </a>

                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="drawer-wa-btn"
                    >
                      <MessageCircle
                        size={16}
                        strokeWidth={1.8}
                      />
                      <span>WhatsApp</span>
                    </a>

                  </div>
                </div>

                {/* SECONDARY PHONE */}
                {STORE_INFO.phoneSecondary && (
                  <a
                    href={`tel:+91${STORE_INFO.phoneSecondary}`}
                    className="drawer-secondary-phone"
                  >
                    <Phone size={14} />
                    <span>{STORE_INFO.phoneSecondary}</span>
                  </a>
                )}

              </div>

              {/* DRAWER FOOTER */}
              <div className="drawer-footer">
                <span>Akhilesh Collection</span>
                <span>Est. 2026</span>
              </div>

            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}