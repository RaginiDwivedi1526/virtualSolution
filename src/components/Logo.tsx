export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <a href="/#top" className="flex items-center gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-md bg-[image:var(--gradient-brand)] font-display text-lg font-bold text-primary-foreground shadow-[var(--shadow-brand)]">
        VS
      </div>
      <div className="leading-tight">
        <div className={`font-display text-base font-bold tracking-tight ${dark ? "text-navy-foreground" : "text-navy"}`}>
          VIRTUAL SOLUTION
        </div>
        <div className={`text-[10px] uppercase tracking-[0.18em] ${dark ? "text-navy-foreground/60" : "text-muted-foreground"}`}>
          Real Estate · IT · Construction
        </div>
      </div>
    </a>
  );
}
