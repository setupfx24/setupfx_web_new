import { stats } from "@/content/shared";

export function Stats() {
  return (
    <section aria-label="SetupFX by the numbers" className="border-y border-border bg-surface">
      <dl className="shell grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <dt className="text-sm text-muted">{stat.label}</dt>
            <dd className="mt-1 font-display text-3xl font-bold tracking-tight">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
