const approaches = [
  {
    title: "Policy Reform",
    description:
      "Strengthening environmental laws to explicitly address cumulative impacts and racial disparities. This includes updating NEPA review processes, tightening permitting near residential areas, and codifying environmental justice into federal and state agency mandates.",
  },
  {
    title: "Infrastructure Investment",
    description:
      "Directing public investment to repair aging infrastructure in communities that have been historically under-resourced — replacing lead pipes, upgrading water treatment facilities, and expanding access to green space.",
  },
  {
    title: "Enforcement",
    description:
      "Ensuring that environmental violations in communities of color are investigated and penalized at the same rate as violations in wealthier, whiter communities. The EPA's Environmental Justice office and the Justice40 initiative represent steps in this direction.",
  },
  {
    title: "Community Decision-Making",
    description:
      "Centering the voices of affected communities in decisions about land use, permitting, and environmental policy. Meaningful participation means more than public comment periods — it means community veto power and co-governance.",
  },
];

export default function WhatJusticeLooksLikePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-green-700 uppercase tracking-widest text-sm font-semibold mb-3">
        Section 04
      </p>
      <h1 className="text-4xl font-bold text-green-900 mb-4">
        What Justice Looks Like
      </h1>
      <p className="text-stone-500 text-lg leading-relaxed mb-12">
        Understanding the problem is only the first step. This section explores
        what environmental justice actually requires — in policy, infrastructure,
        enforcement, and, drawing on Derecka Purnell, in our very definition of
        safety.
      </p>

      {/* EJ Approaches */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-stone-900 mb-6">
          Environmental Justice Approaches
        </h2>
        <div className="space-y-5">
          {approaches.map(({ title, description }) => (
            <div
              key={title}
              className="bg-white border border-stone-200 rounded-xl p-5 shadow-sm"
            >
              <h3 className="font-semibold text-green-800 text-lg mb-2">
                {title}
              </h3>
              <p className="text-stone-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Purnell / Abolition connection */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-stone-900 mb-4">
          Redefining Safety: Purnell and the Abolitionist Vision
        </h2>
        <blockquote className="border-l-4 border-green-500 pl-5 text-stone-600 italic mb-6">
          &ldquo;Safety looks like clean water, healthy housing, and environmental
          protection. It is not only the absence of violence — it is the
          presence of the conditions for life.&rdquo;
          <span className="block mt-2 text-sm not-italic text-stone-400">
            — paraphrasing Derecka Purnell,{" "}
            <em>Becoming Abolitionists</em> (2021)
          </span>
        </blockquote>
        <p className="text-stone-600 leading-relaxed mb-4">
          In <em>Becoming Abolitionists</em>, Derecka Purnell challenges the
          narrow, police-centered definition of safety that dominates American
          political life. True safety, she argues, requires the material
          conditions that allow people to thrive: clean air, clean water, safe
          housing, and healthy neighborhoods.
        </p>
        <p className="text-stone-600 leading-relaxed mb-4">
          This framing makes environmental justice inseparable from abolitionist
          politics. When the state poisons the water of a Black city and then
          responds slowly and dismissively — as in Flint — it is enacting the
          opposite of safety. Policing cannot solve lead in the water. Only
          investment, accountability, and redistributive policy can.
        </p>
        <p className="text-stone-600 leading-relaxed">
          {/* TODO: Expand with your own close reading of Purnell */}
          [Add your own analysis drawing on specific passages from{" "}
          <em>Becoming Abolitionists</em> here.]
        </p>
      </section>

      {/* Prevention over punishment */}
      <section className="bg-green-50 border border-green-200 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-green-900 mb-3">
          Prevention and Investment, Not Punishment
        </h2>
        <p className="text-stone-600 leading-relaxed mb-3">
          Environmental justice is not primarily about punishing polluters after
          the damage is done. It is about building systems that prevent harm
          from occurring in the first place. This means:
        </p>
        <ul className="list-disc list-inside space-y-2 text-stone-600 leading-relaxed">
          <li>
            Proactive infrastructure investment in historically neglected
            communities.
          </li>
          <li>
            Early warning systems and health monitoring in overburdened
            neighborhoods.
          </li>
          <li>
            Community ownership and governance over local environmental
            decisions.
          </li>
          <li>
            Reparative policies that acknowledge the compounding harm of decades
            of environmental neglect.
          </li>
        </ul>
      </section>
    </article>
  );
}
