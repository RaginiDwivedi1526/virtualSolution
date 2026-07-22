import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Link, useLocation } from "@tanstack/react-router";

const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Why Us", href: "/why-us" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header id="top" className="sticky top-0 z-40 border-b border-border/60 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.label}
              to={n.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary [&.active]:text-primary [&.active]:font-semibold"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden items-center gap-2 rounded-md bg-[image:var(--gradient-brand)] px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-brand)] transition-transform hover:-translate-y-0.5 lg:inline-flex"
        >
          <Phone className="h-4 w-4" /> Get Free Consultation
        </Link>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground transition-colors hover:bg-accent lg:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col border-t border-border/60 bg-background px-6 py-4 gap-1">
          {nav.map((n) => (
            <Link
              key={n.label}
              to={n.href}
              className="rounded-md px-3 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-primary [&.active]:bg-primary/10 [&.active]:text-primary [&.active]:font-semibold"
            >
              {n.label}
            </Link>
          ))}
          <div className="mt-3 pt-3 border-t border-border/60">
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 rounded-md bg-[image:var(--gradient-brand)] px-4 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-brand)]"
            >
              <Phone className="h-4 w-4" /> Get Free Consultation
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
