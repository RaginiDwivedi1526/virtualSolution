import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Logo } from "./Logo";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-[oklch(0.13_0.03_260)] text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo dark />
          <p className="mt-5 max-w-sm text-sm text-navy-foreground/70">
            We provide integrated solutions in Commercial Brokerage, IT Services and Construction &
            Trading to help businesses grow and succeed.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Linkedin, Youtube].map((I, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="grid h-9 w-9 place-items-center rounded-full border border-navy-foreground/15 text-navy-foreground/80 transition-colors hover:border-primary hover:text-primary"
              >
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-navy-foreground/60">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-navy-foreground/80">
            {[{label:"Home", href:"/"}, {label:"Services", href:"/services"}, {label:"Why Us", href:"/why-us"}, {label:"Contact", href:"/contact"}].map((l) => (
              <li key={l.label}>
                <Link to={l.href} className="hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-navy-foreground/60">
            Our Services
          </h4>
          <ul className="space-y-2 text-sm text-navy-foreground/80">
            {["Commercial Brokerage", "IT Solutions", "Construction & Trading"].map((l) => (
              <li key={l}>
                <Link to="/services" className="hover:text-primary">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-navy-foreground/60">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-navy-foreground/80">
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>+91 95557 22822</span>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href="mailto:pankajthakur@virtualclick.co.in" className="hover:text-primary">
                pankajthakur@virtualclick.co.in
              </a>
            </li>
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>Spaze IT Park, 9th Floor, Gurugram, Haryana - 122018</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-navy-foreground/60 md:flex-row">
          <p>© 2026 Virtual Solution. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms & Conditions</a>
            <a href="#" className="hover:text-primary">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
