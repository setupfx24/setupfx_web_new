import { AvatarCloud } from "@/components/home/visuals/AvatarCloud";
import { DiscoveryChecklist } from "@/components/home/visuals/DiscoveryChecklist";
import { AssetImage } from "@/components/ui/AssetImage";
import { Reveal } from "@/components/ui/Reveal";
import { system } from "@/content/home";
import { hasAsset } from "@/lib/assets";

const { discovery, team, support } = system.cards;

export function System() {
  // A roster entry with no portrait on disk is skipped rather than drawn as an empty disc.
  const avatars = team.members.filter((member) => hasAsset(member.src));

  return (
    <section id="process" className="shell scroll-mt-28 py-20 sm:py-28">
      <Reveal>
        <h2 className="mx-auto max-w-2xl text-center text-[1.75rem] leading-tight font-medium text-balance sm:text-4xl">
          {system.heading}
        </h2>
      </Reveal>

      <ul className="mt-12 grid gap-5 sm:mt-16 lg:grid-cols-3">
        {[
          { key: "discovery", card: discovery, visual: <DiscoveryChecklist /> },
          { key: "team", card: team, visual: <AvatarCloud avatars={avatars} /> },
          {
            key: "support",
            card: support,
            visual: (
              <AssetImage
                src={support.image.src}
                alt={support.image.alt}
                sizes="(max-width: 1024px) 100vw, 420px"
                className="h-60 w-full rounded-xl border border-border transition-[transform,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-border-strong"
                imageClassName="object-cover"
              />
            ),
          },
        ].map(({ key, card, visual }, index) => (
          <li key={key}>
            <Reveal delay={index * 0.08} className="h-full">
              <article className="flex h-full flex-col rounded-[28px] border border-border card-surface p-6 sm:p-7">
                <p className="text-[11px] font-medium tracking-[0.16em] text-muted uppercase">
                  {card.label}
                </p>
                <h3 className="mt-4 text-xl font-medium sm:text-[1.375rem]">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{card.body}</p>

                <div className="mt-8 pt-2">{visual}</div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
