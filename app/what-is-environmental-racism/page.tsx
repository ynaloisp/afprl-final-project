export default function WhatIsEnvironmentalRacismPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-green-700 dark:text-green-400 uppercase tracking-widest text-sm font-semibold mb-3">
        Section 01
      </p>
      <h1 className="text-4xl font-bold text-green-900 dark:text-green-300 mb-6">What Is Environmental Racism?</h1>
      <p className="text-stone-500 dark:text-stone-400 text-lg leading-relaxed mb-12">
        Before we can make sense of the data, we need to understand the terms. This section introduces the core
        concepts that frame everything else on this site.
      </p>

      {/* Definition block */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-stone-900 dark:text-stone-100 mb-4">
          Defining Environmental Racism
        </h2>
        <blockquote className="border-l-4 border-amber-500 pl-5 text-stone-600 dark:text-stone-300 italic mb-6">
          &ldquo;Environmental racism refers to any policy, practice, or directive that differentially affects or
          disadvantages individuals, groups, or communities based on race or color in relation to the development,
          implementation, and enforcement of environmental laws, regulations, and policies.&rdquo;
          <span className="block mt-2 text-sm not-italic text-stone-400 dark:text-stone-500">
            Dr. Robert Bullard, often called the &ldquo;Father of Environmental Justice&rdquo; (Bullard et al.).
            <a
              href="https://www.ucc.org/wp-content/uploads/2021/03/toxic-wastes-and-race-at-twenty-1987-2007.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 underline decoration-stone-300 hover:decoration-stone-500"
            >
              Source
            </a>
          </span>
        </blockquote>
        <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
          {/* TODO: Expand with your own beginner-friendly explanation */}
          In simple terms, environmental racism is when communities of color, particularly Black communities, are
          more likely to live near polluting facilities, have less access to clean water and green space, and receive
          weaker environmental protection from the government. This is not accidental. It is the result of decades of
          deliberate policy choices rooted in racial segregation and structural inequality.
        </p>
        <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
          What makes this especially important is that research has shown race itself, not just income or class,
          is the determining factor in who bears the burden of environmental hazards. As Bullard et al. found
          in their twenty year follow up study, &ldquo;Race proved to be more significant than socioeconomic
          status in predicting the location of the nation&rsquo;s commercial hazardous waste
          facilities&rdquo; (Bullard et al. 73). This finding dismantles the common excuse that environmental
          disparities are simply a byproduct of poverty. They are not. Even when you control for income, Black
          communities are disproportionately located near polluting infrastructure. This pattern reflects
          deliberate racial targeting built into zoning laws, land use decisions, and regulatory neglect.
        </p>
      </section>

      {/* Key Concepts */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-stone-900 dark:text-stone-100 mb-6">Key Concepts</h2>
        <div className="space-y-6">
          {[
            {
              term: "Disproportionate Exposure",
              definition:
                "Black and low-income communities bear a higher share of pollution, toxic waste sites, and industrial facilities relative to their population. This unequal distribution is well-documented and persistent across decades.",
            },
            {
              term: "Cumulative Impacts",
              definition:
                "No single pollutant tells the full story. Cumulative impact analysis looks at the combined effect of multiple environmental stressors like air pollution, water contamination, and heat that stack up in the same communities over time.",
            },
            {
              term: "Unequal Protection",
              definition:
                "Environmental laws and regulations are not enforced equally. Studies show that environmental violations in predominantly white communities are cleaned up faster and fined more heavily than the same violations in communities of color.",
            },
          ].map(({ term, definition }) => (
            <div
              key={term}
              className="bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl p-5 shadow-sm"
            >
              <h3 className="font-semibold text-green-800 dark:text-green-400 text-lg mb-2">{term}</h3>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed">{definition}</p>
              {term === "Disproportionate Exposure" && (
                <p className="text-stone-500 dark:text-stone-400 text-sm mt-2">
                  <a
                    href="https://www.ucc.org/wp-content/uploads/2020/12/ToxicWastesRace.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-stone-300 hover:decoration-stone-500"
                  >
                    (United Church of Christ Commission for Racial Justice)
                  </a>
                </p>
              )}
              {term === "Cumulative Impacts" && (
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
              {term === "Unequal Protection" && (
                <p className="text-stone-500 dark:text-stone-400 text-sm mt-2">
                  <a
                    href="https://www.ucc.org/wp-content/uploads/2021/03/toxic-wastes-and-race-at-twenty-1987-2007.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-stone-300 hover:decoration-stone-500"
                  >
                    (Bullard et al.)
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Connection to Africana Studies */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-stone-900 dark:text-stone-100 mb-4">
          Connection to Africana Studies
        </h2>
        <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
          Environmental racism does not exist in a vacuum. It is deeply connected to broader Africana Studies themes:
        </p>
        <ul className="list-disc list-inside space-y-2 text-stone-600 dark:text-stone-300 leading-relaxed">
          <li>
            <strong>Racial Segregation:</strong> Redlining and exclusionary zoning forced Black communities into areas
            near industrial zones and away from green space and clean resources.
          </li>
          <li>
            <strong>Structural Inequality:</strong> Disparities in wealth, political power, and legal representation
            mean communities of color have fewer tools to fight back against environmental harm.
          </li>
          <li>
            <strong>State Power:</strong> Governments at local, state, and federal levels have historically failed,
            or actively refused, to protect Black communities from environmental harm.
          </li>
        </ul>
        <p className="text-stone-600 dark:text-stone-300 leading-relaxed mt-4">
          Environmental racism is a manifestation of the same racial capitalism that Africana Studies
          examines across institutions, from housing and education to policing and health care. In{" "}
          <em>Becoming Abolitionists</em>, Derecka Purnell names the environment as one of the domains
          where this system operates, writing that racial capitalism &ldquo;functions as a carceral babysitter
          for people exploited in the economy, education, health care, housing, the environment, and
          much more&rdquo; (Purnell, ch. 5). The inverse is equally telling. Purnell observes that at Harvard,
          wealth &ldquo;bought insurance, nannies, access to clean air, and more time to live&rdquo; (Purnell, ch. 2).
          Clean air and longevity are not universal goods in America. They are privileges allocated
          along lines of race and class. The environmental harms documented by Bullard et al. and the
          UCC are not isolated policy failures. They are products of a system where concentrated
          wealth accumulates at the direct expense of concentrated poverty, and where the most basic
          conditions for life, like breathable air and drinkable water, are distributed according to
          who holds economic and political power.
        </p>
      </section>

      {/* Historical Landmark */}
      <section className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-green-900 dark:text-green-300 mb-3">A Landmark Study</h2>
        <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
          In 1987, the United Church of Christ Commission for Racial Justice published{" "}
          <em>Toxic Wastes and Race in the United States</em>, the first national study to systematically document the
          relationship between race and the location of hazardous waste facilities. It found that race was the most
          significant factor in determining where such facilities were sited. A follow-up study in 2007 confirmed these
          disparities had not improved.{" "}
          <a
            href="https://www.ucc.org/wp-content/uploads/2020/12/ToxicWastesRace.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-stone-300 hover:decoration-stone-500"
          >
            (United Church of Christ Commission for Racial Justice)
          </a>{" "}
          <a
            href="https://www.ucc.org/wp-content/uploads/2021/03/toxic-wastes-and-race-at-twenty-1987-2007.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-stone-300 hover:decoration-stone-500"
          >
            (Bullard et al.)
          </a>
        </p>
      </section>
    </article>
  );
}
