const approaches = [
  {
    title: "Policy Reform",
    description:
      "Strengthening environmental laws to explicitly address cumulative impacts and racial disparities. This includes updating NEPA review processes, tightening permitting near residential areas, and writing environmental justice into federal and state agency mandates.",
  },
  {
    title: "Infrastructure Investment",
    description:
      "Directing public investment to repair aging infrastructure in communities that have been historically neglected. This means replacing lead pipes, upgrading water treatment facilities, and expanding access to green space.",
  },
  {
    title: "Enforcement",
    description:
      'Ensuring that environmental violations in communities of color are investigated and penalized at the same rate as violations in wealthier, whiter communities. The Justice40 Initiative directs "40 percent of the overall benefits of certain Federal investments" to "disadvantaged communities that are marginalized, underserved, and overburdened by pollution" (Council on Environmental Quality). The EPA\'s Environmental Justice office and tools like Justice40 represent critical steps in this direction.',
  },
  {
    title: "Community Decision Making",
    description:
      "Centering the voices of affected communities in decisions about land use, permitting, and environmental policy. Meaningful participation means more than public comment periods. It means community veto power and co governance.",
  },
];

export default function WhatJusticeLooksLikePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-green-700 dark:text-green-400 uppercase tracking-widest text-sm font-semibold mb-3">
        Section 04
      </p>
      <h1 className="text-4xl font-bold text-green-900 dark:text-green-300 mb-4">What Justice Looks Like</h1>
      <p className="text-stone-500 dark:text-stone-400 text-lg leading-relaxed mb-12">
        Understanding the problem is only the first step. This section explores what environmental justice actually
        requires in terms of policy, infrastructure, enforcement, and, drawing on Derecka Purnell, in our very
        definition of safety.
      </p>

      {/* EJ Approaches */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-stone-900 dark:text-stone-100 mb-6">
          Environmental Justice Approaches
        </h2>
        <div className="space-y-5">
          {approaches.map(({ title, description }) => (
            <div
              key={title}
              className="bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl p-5 shadow-sm"
            >
              <h3 className="font-semibold text-green-800 dark:text-green-400 text-lg mb-2">{title}</h3>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed">{description}</p>
              {title === "Policy Reform" && (
                <p className="text-stone-500 dark:text-stone-400 text-sm mt-2">
                  <a
                    href="https://www.epa.gov/sites/default/files/2015-02/documents/nejac-cum-risk-rpt-122104.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-stone-300 hover:decoration-stone-500"
                  >
                    (National Environmental Justice Advisory Council)
                  </a>
                </p>
              )}
              {title === "Enforcement" && (
                <p className="text-stone-500 dark:text-stone-400 text-sm mt-2">
                  <a
                    href="https://bidenwhitehouse.archives.gov/wp-content/uploads/2022/02/CEQ-CEJST-QandA.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-stone-300 hover:decoration-stone-500"
                  >
                    (Council on Environmental Quality)
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Purnell / Abolition connection */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-stone-900 dark:text-stone-100 mb-4">
          Redefining Safety: Purnell and the Abolitionist Vision
        </h2>
        <blockquote className="border-l-4 border-green-500 pl-5 text-stone-600 dark:text-stone-300 italic mb-6">
          &ldquo;Sometimes safety looks like clean water or preventing chemical explosions or demolishing
          abandoned buildings or ending exposure to lead paint.&rdquo;
          <span className="block mt-2 text-sm not-italic text-stone-400 dark:text-stone-500">
            Derecka Purnell, <em>Becoming Abolitionists</em> (Purnell, Introduction).
          </span>
        </blockquote>
        <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
          In <em>Becoming Abolitionists</em>, Derecka Purnell challenges the narrow, police-centered definition of
          safety that dominates American political life. True safety, she argues, requires the material conditions that
          allow people to thrive: clean air, clean water, safe housing, and healthy neighborhoods (Purnell).
        </p>
        <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
          This framing makes environmental justice inseparable from abolitionist politics. When the state poisons the
          water of a Black city and then responds slowly and dismissively, as it did in Flint, it is enacting the
          opposite of safety. Policing cannot solve lead in the water. Only investment, accountability, and
          redistributive policy can (Purnell).
        </p>
        <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
          Purnell&rsquo;s abolitionist framework does not stop at policing. It extends to reimagining what safe,
          healthy communities look like. In her vision for an abolitionist future, she writes that
          &ldquo;reducing our current use of cars would drastically cut pollution and save the lives of those
          suffering from asthma, diseases, and cancer because we live near highways and major roads&rdquo;
          (Purnell, ch. 8). These are not abstract concerns. Purnell grounds them in her own childhood,
          recalling that her mother &ldquo;had grown up in substandard housing where the pipes always broke
          and once the ceiling caved&rdquo; (Purnell, ch. 1). The crumbling pipes of St. Louis and the
          lead laced water of Flint are symptoms of the same disease: a system of racial capitalism and
          state neglect where infrastructure investment flows away from Black communities while
          environmental hazards flow toward them. When we invest in clean infrastructure, green
          transit, and community health instead of policing, we address the root causes of the
          unsafe conditions documented throughout this project.
        </p>
      </section>

      {/* Prevention over punishment */}
      <section className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-green-900 dark:text-green-300 mb-3">
          Prevention and Investment, Not Punishment
        </h2>
        <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-3">
          Environmental justice is not primarily about punishing polluters after the damage is done. It is about
          building systems that prevent harm from occurring in the first place. This means:
        </p>
        <ul className="list-disc list-inside space-y-2 text-stone-600 dark:text-stone-300 leading-relaxed">
          <li>Proactive infrastructure investment in historically neglected communities.</li>
          <li>Early warning systems and health monitoring in overburdened neighborhoods.</li>
          <li>Community ownership and governance over local environmental decisions.</li>
          <li>Reparative policies that acknowledge the compounding harm of decades of environmental neglect.</li>
        </ul>
      </section>
    </article>
  );
}
