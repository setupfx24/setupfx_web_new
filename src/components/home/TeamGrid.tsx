import { AssetImage } from "@/components/ui/AssetImage";
import { Reveal } from "@/components/ui/Reveal";
import { departments } from "@/content/team";

/** The delivery team, grouped by department, one portrait each. */
export function TeamGrid({ heading }: { heading?: string | null }) {
  return (
    <section className="shell py-16 sm:py-24">
      {heading ? (
        <Reveal>
          <h2 className="text-center text-[1.75rem] leading-tight font-medium text-balance sm:text-4xl">
            {heading}
          </h2>
        </Reveal>
      ) : null}

      <div className="mt-12 sm:mt-16">
        {departments.map((department, departmentIndex) => (
          <div
            key={department.name}
            /* A rule between departments, never above the first one. */
            className={
              departmentIndex > 0
                ? "mt-14 border-t border-border pt-14 sm:mt-20 sm:pt-20"
                : undefined
            }
          >
            <Reveal>
              <h3 className="text-xl font-medium sm:text-2xl">{department.name}</h3>
              <p className="mt-2.5 max-w-xl text-[15px] text-pretty text-muted">
                {department.description}
              </p>
            </Reveal>

            <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
              {department.members.map((member, index) => (
                <li key={member.src}>
                  <Reveal delay={(index % 4) * 0.06}>
                    <figure className="flex flex-col items-center text-center">
                      <AssetImage
                        src={member.src}
                        alt={`${member.name}, ${member.role}`}
                        sizes="(max-width: 640px) 40vw, 160px"
                        hideSlotLabel
                        className="size-28 rounded-full border border-border sm:size-32"
                        /* Studio portraits with the head high in the frame. */
                        imageClassName="object-top"
                      />
                      <figcaption className="mt-4">
                        <p className="text-[15px] font-medium">{member.name}</p>
                        <p className="mt-1 text-[13px] text-pretty text-muted">{member.role}</p>
                      </figcaption>
                    </figure>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
