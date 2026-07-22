import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Building2, Monitor, Hammer, CheckCircle2 } from "lucide-react";
import serviceBrokerage from "@/assets/service-brokerage.jpg";
import serviceIt from "@/assets/service-it.jpg";
import serviceConstruction from "@/assets/service-construction.jpg";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

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

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className="bg-navy py-24 text-navy-foreground text-center">
          <div className="mx-auto max-w-4xl px-6">
            <h1 className="font-display text-4xl font-bold md:text-5xl lg:text-6xl text-primary">
              Our Services
            </h1>
            <p className="mt-4 text-lg text-navy-foreground/80">
              Comprehensive solutions tailored for your business growth. Explore our expertise in Commercial Brokerage, IT Solutions, and Construction.
            </p>
          </div>
        </section>
        
        <section className="bg-background py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="space-y-24">
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
      </main>
      <Footer />
    </div>
  );
}
