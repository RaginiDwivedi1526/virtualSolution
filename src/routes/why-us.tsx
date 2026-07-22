import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/why-us")({
  component: WhyUsPage,
});

const reasons = [
  "Complete Business Solutions Under One Roof",
  "Experienced Professional Team",
  "Transparent Pricing",
  "Timely Project Delivery",
  "Dedicated Customer Support",
  "Customized Solutions",
  "PAN India Service Network",
];

function WhyUsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className="bg-navy py-24 text-navy-foreground text-center">
          <div className="mx-auto max-w-4xl px-6">
            <h1 className="font-display text-4xl font-bold md:text-5xl lg:text-6xl text-primary">
              Why Choose Us
            </h1>
            <p className="mt-4 text-lg text-navy-foreground/80">
              Your Success Is Our Priority. We provide end-to-end solutions that make scaling your business effortless.
            </p>
          </div>
        </section>

        <section className="bg-background py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">The Virtual Solution Advantage</p>
              <h2 className="mt-3 text-4xl font-bold md:text-5xl">What Sets Us Apart</h2>
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
      </main>
      <Footer />
    </div>
  );
}
