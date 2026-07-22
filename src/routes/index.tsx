import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Building2,
  Monitor,
  Hammer,
  CheckCircle2,
  Briefcase,
  Users,
  MapPinned,
  Award,
  Store,
  UtensilsCrossed,
  ShoppingBag,
  Hospital,
  Hotel,
  GraduationCap,
  Warehouse,
  Rocket,
  Factory,
  MessageSquare,
  ClipboardList,
  FileText,
  Cog,
  BadgeCheck,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import heroBuilding from "@/assets/hero-building.jpg";
import serviceBrokerage from "@/assets/service-brokerage.jpg";
import serviceIt from "@/assets/service-it.jpg";
import serviceConstruction from "@/assets/service-construction.jpg";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Services />
        <Stats />
        <WhyChoose />
        <Industries />
        <Process />
        <MissionVision />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      <div className="absolute inset-0">
        <img
          src={heroBuilding}
          alt="Modern commercial building at dusk"
          width={1600}
          height={1000}
          className="h-full w-full object-cover opacity-40"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(90deg, oklch(0.15 0.04 260 / 0.95) 0%, oklch(0.15 0.04 260 / 0.75) 55%, oklch(0.15 0.04 260 / 0.2) 100%)" }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:py-32 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            One Company · <span className="text-navy-foreground/70">Three Powerful Solutions</span>
          </p>
          <h1 className="font-display text-5xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">
            We Build <span className="text-primary">Spaces.</span>
            <br />
            We Create <span className="text-primary">Solutions.</span>
            <br />
            We Deliver <span className="text-primary">Growth.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-foreground/75 md:text-lg">
            Virtual Solution is your trusted partner for Commercial Brokerage, IT Solutions and
            Construction & Trading. Everything your business needs to grow — under one roof.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-[image:var(--gradient-brand)] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-brand)] transition-transform hover:-translate-y-0.5"
            >
              Get Free Consultation <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-md border border-navy-foreground/25 bg-navy-foreground/5 px-6 py-3.5 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-foreground/10"
            >
              Explore Our Services <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */

const services = [
  {
    icon: Building2,
    tag: "01 · Commercial Brokerage",
    title: "Find the Right Commercial Space",
    lead:
      "We specialize in Commercial Leasing, Sale & Purchase, Office Spaces, Retail Shops, Warehouses, Industrial Properties and Investment Consulting.",
    image: serviceBrokerage,
    items: [
      "Commercial Leasing",
      "Office Space",
      "Retail Shops",
      "Warehouses",
      "Sale & Purchase",
      "Rental Services",
      "Investment Advisory",
      "Property Documentation",
    ],
  },
  {
    icon: Monitor,
    tag: "02 · IT Solutions",
    title: "Digital Solutions for Modern Businesses",
    lead:
      "From startup websites to enterprise software, we help businesses establish and grow their digital presence.",
    image: serviceIt,
    items: [
      "Website Development",
      "Mobile App Development",
      "Software Development",
      "CRM & ERP Solutions",
      "Digital Marketing",
      "SEO Services",
      "Social Media",
      "Graphic Design",
      "Domain & Hosting",
      "IT Support & Maintenance",
    ],
  },
  {
    icon: Hammer,
    tag: "03 · Construction & Trading",
    title: "Building Commercial Spaces That Inspire",
    lead:
      "We design, develop and deliver modern commercial interiors and infrastructure with quality workmanship and timely execution.",
    image: serviceConstruction,
    items: [
      "Commercial Interior Design",
      "Office Fit-Out",
      "Restaurant & Cafe Setup",
      "Retail Shop Interior",
      "Civil Work",
      "Electrical Work",
      "Modular Furniture",
      "Project Management",
      "Building Material Supply",
    ],
  },
];

function Services() {
  return (
    <section id="services" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">What We Do</p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Three Solutions. One Commitment.</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[image:var(--gradient-brand)]" />
        </div>

        <div className="mt-16 space-y-24">
          {services.map((s, i) => (
            <article
              key={s.title}
              className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="relative">
                <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
                  <img
                    src={s.image}
                    alt={s.title}
                    width={900}
                    height={700}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-5 -left-5 hidden h-24 w-24 place-items-center rounded-2xl bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-brand)] md:grid">
                  <s.icon className="h-10 w-10" />
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">{s.tag}</p>
                <h3 className="mt-2 text-3xl font-bold md:text-4xl">{s.title}</h3>
                <p className="mt-4 text-muted-foreground">{s.lead}</p>
                <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-foreground/85">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Stats ---------- */

const stats = [
  { icon: Briefcase, value: "500+", label: "Projects Completed" },
  { icon: Users, value: "300+", label: "Happy Clients" },
  { icon: MapPinned, value: "25+", label: "Cities Served" },
  { icon: Award, value: "10+", label: "Years of Excellence" },
];

function Stats() {
  return (
    <section className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-14 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex items-center gap-4">
            <div className="grid h-14 w-14 place-items-center rounded-xl bg-navy-foreground/5 text-primary ring-1 ring-navy-foreground/10">
              <s.icon className="h-6 w-6" />
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-primary">{s.value}</div>
              <div className="text-sm text-navy-foreground/70">{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Why Choose ---------- */

const reasons = [
  "Complete Business Solutions Under One Roof",
  "Experienced Professional Team",
  "Transparent Pricing",
  "Timely Project Delivery",
  "Dedicated Customer Support",
  "Customized Solutions",
  "PAN India Service Network",
];

function WhyChoose() {
  return (
    <section id="why" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Why Choose Us</p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Your Success Is Our Priority</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[image:var(--gradient-brand)]" />
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <div
              key={r}
              className="group flex items-start gap-4 rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-brand)] font-display text-sm font-bold text-primary-foreground shadow-[var(--shadow-brand)]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="pt-1 font-medium text-foreground">{r}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Industries ---------- */

const industries = [
  { icon: Building2, label: "Corporate Offices" },
  { icon: UtensilsCrossed, label: "Restaurants & Cafes" },
  { icon: ShoppingBag, label: "Retail Stores" },
  { icon: Hospital, label: "Hospitals" },
  { icon: Hotel, label: "Hotels" },
  { icon: GraduationCap, label: "Educational Institutions" },
  { icon: Warehouse, label: "Warehouses" },
  { icon: Rocket, label: "Startups" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Store, label: "Franchises" },
];

function Industries() {
  return (
    <section id="industries" className="bg-muted/50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Industries We Serve</p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Empowering Every Business</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[image:var(--gradient-brand)]" />
        </div>
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {industries.map((i) => (
            <div
              key={i.label}
              className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card px-4 py-6 text-center transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-card)]"
            >
              <i.icon className="h-8 w-8 text-primary" />
              <div className="text-sm font-medium text-foreground">{i.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Process ---------- */

const steps = [
  { icon: MessageSquare, title: "Share Requirement", desc: "Tell us what you need and we'll listen carefully." },
  { icon: Users, title: "Free Consultation", desc: "We analyze your requirement and suggest the best solution." },
  { icon: ClipboardList, title: "Planning & Proposal", desc: "We prepare a detailed plan and transparent proposal." },
  { icon: Cog, title: "Execution", desc: "Our expert team starts working on your project." },
  { icon: BadgeCheck, title: "Successful Delivery", desc: "We deliver quality results beyond your expectations." },
];

function Process() {
  return (
    <section id="process" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Our Process</p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Simple Steps. Successful Results.</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[image:var(--gradient-brand)]" />
        </div>

        <div className="relative mt-16">
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block" />
          <div className="grid gap-10 lg:grid-cols-5">
            {steps.map((s, i) => (
              <div key={s.title} className="relative flex flex-col items-center text-center">
                <div className="relative grid h-16 w-16 place-items-center rounded-full bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-brand)]">
                  <s.icon className="h-7 w-7" />
                  <span className="absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-navy text-[11px] font-bold text-navy-foreground ring-2 ring-background">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Mission / Vision ---------- */

function MissionVision() {
  const cards = [
    {
      title: "Our Mission",
      body:
        "To simplify business growth by delivering reliable Real Estate, Technology and Infrastructure solutions through innovation, transparency and professionalism.",
    },
    {
      title: "Our Vision",
      body:
        "To become India's most trusted integrated business solutions company, helping entrepreneurs and organizations build, expand and succeed.",
    },
    {
      title: "Client Promise",
      body:
        "We don't just provide services — we build long-term business relationships based on trust, quality and commitment.",
    },
  ];
  return (
    <section className="bg-muted/50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]"
            >
              <div className="mb-4 h-1 w-10 rounded-full bg-[image:var(--gradient-brand)]" />
              <h3 className="text-xl font-bold">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */

function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy text-navy-foreground">
      <div
        className="absolute inset-0 opacity-40"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Ready to Start?</p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Let's Build Something <span className="text-primary">Great Together.</span>
          </h2>
          <p className="mt-4 max-w-xl text-navy-foreground/75">
            Whether you need office space, an IT partner or a commercial interior contractor —
            Virtual Solution is ready to help.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
          <a
            href="tel:+919555722822"
            className="group flex items-center gap-4 rounded-xl bg-[image:var(--gradient-brand)] px-6 py-5 shadow-[var(--shadow-brand)] transition-transform hover:-translate-y-0.5"
          >
            <Phone className="h-6 w-6 text-primary-foreground" />
            <div>
              <div className="text-xs uppercase tracking-widest text-primary-foreground/80">Call Us Now</div>
              <div className="font-display text-lg font-bold text-primary-foreground">+91 95557 22822</div>
            </div>
          </a>
          <a
            href="mailto:pankajthakur@virtualclick.co.in"
            className="inline-flex items-center justify-between gap-4 rounded-xl border border-navy-foreground/20 bg-navy-foreground/5 px-6 py-5 font-semibold text-navy-foreground transition-colors hover:bg-navy-foreground/10"
          >
            Request Free Consultation <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}


