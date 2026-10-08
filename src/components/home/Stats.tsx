import { CountUp } from "@/components/home/CountUp";
import { AssetImage } from "@/components/ui/AssetImage";
import { Reveal } from "@/components/ui/Reveal";
import { stats } from "@/content/home";

const numberClasses = "text-5xl font-medium tracking-tight sm:text-7xl lg:text-[5.5rem]";

export function Stats() {
  return (
    <section
      aria-label={stats.ariaLabel}
      className="relative isolate overflow-hidden py-24 sm:py-36"
    >
      <AssetImage
        src={stats.images.left.src}
        alt={stats.images.left.alt}
        sizes="(max-width: 640px) 25vw, 320px"
        className="pointer-events-none absolute top-0 -left-6 -z-10 h-full w-24 [mask-image:linear-gradient(to_bottom,transparent_0%,black_22%,black_78%,transparent_100%)] opacity-70 sm:left-0 sm:w-56 lg:w-72"
        imageClassName="object-cover object-left"
      />
      <AssetImage
        src={stats.images.right.src}
        alt={stats.images.right.alt}
        sizes="(max-width: 640px) 25vw, 320px"
        className="pointer-events-none absolute top-0 -right-6 -z-10 h-full w-24 [mask-image:linear-gradient(to_bottom,transparent_0%,black_22%,black_78%,transparent_100%)] opacity-70 sm:right-0 sm:w-56 lg:w-72"
        imageClassName="object-cover object-left -scale-x-100"
      />

      <dl className="shell flex flex-col items-center gap-20 text-center sm:gap-28">
        {stats.items.map((item) => (
          <Reveal key={item.label}>
            <dt className="sr-only">{item.label}</dt>
            <dd>
              {"display" in item ? (
                <div className={numberClasses}>{item.display}</div>
              ) : (
                <CountUp value={item.value} suffix={item.suffix} className={numberClasses} />
              )}
              <div aria-hidden="true" className="mt-3 text-sm text-muted sm:text-base">
                {item.label}
              </div>
            </dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
