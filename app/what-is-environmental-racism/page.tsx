export default function WhatIsEnvironmentalRacismPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-green-700 uppercase tracking-widest text-sm font-semibold mb-3">
        Section 01
      </p>
      <h1 className="text-4xl font-bold text-green-900 mb-6">
        What Is Environmental Racism?
      </h1>
      <p className="text-stone-500 text-lg leading-relaxed mb-12">
        Before we can understand the data, we need to understand the terms.
        This section introduces the core concepts that frame everything else on
        this site.
      </p>

      {/* Definition block */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-stone-900 mb-4">
          Defining Environmental Racism
        </h2>
        <blockquote className="border-l-4 border-amber-500 pl-5 text-stone-600 italic mb-6">
          &ldquo;Environmental racism refers to any policy, practice, or directive
          that differentially affects or disadvantages individuals, groups, or
          communities based on race or color in relation to the development,
          implementation, and enforcement of environmental laws, regulations,
          and policies.&rdquo;
          <span className="block mt-2 text-sm not-italic text-stone-400">
            — Dr. Robert Bullard, often called the &ldquo;Father of Environmental
            Justice&rdquo;
          </span>
        </blockquote>
        <p className="text-stone-600 leading-relaxed mb-4">
          {/* TODO: Expand with your own beginner-friendly explanation */}
          In plain terms, environmental racism is when communities of color —
          particularly Black communities — are more likely to live near
          polluting facilities, have less access to clean water and green space,
          and receive weaker environmental protection from the government. This
          is not accidental. It is the result of decades of deliberate policy
          choices rooted in racial segregation and structural inequality.
        </p>
        <p className="text-stone-600 leading-relaxed">
          {/* TODO: Add more detail here */}
          [Add additional explanation here.]
        </p>
      </section>

      {/* Key Concepts */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-stone-900 mb-6">
          Key Concepts
        </h2>
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
                "No single pollutant tells the full story. Cumulative impact analysis looks at the combined effect of multiple environmental stressors — air pollution, water contamination, heat, and more — that stack up in the same communities.",
            },
            {
              term: "Unequal Protection",
              definition:
                "Environmental laws and regulations are not enforced equally. Studies show that environmental violations in predominantly white communities are cleaned up faster and fined more heavily than the same violations in communities of color.",
            },
          ].map(({ term, definition }) => (
            <div
              key={term}
              className="bg-white border border-stone-200 rounded-xl p-5 shadow-sm"
            >
              <h3 className="font-semibold text-green-800 text-lg mb-2">
                {term}
              </h3>
              <p className="text-stone-600 leading-relaxed">{definition}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Connection to Africana Studies */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-stone-900 mb-4">
          Connection to Africana Studies
        </h2>
        <p className="text-stone-600 leading-relaxed mb-4">
          Environmental racism does not exist in a vacuum. It is deeply
          connected to broader Africana Studies themes:
        </p>
        <ul className="list-disc list-inside space-y-2 text-stone-600 leading-relaxed">
          <li>
            <strong>Racial Segregation:</strong> Redlining and exclusionary
            zoning forced Black communities into areas near industrial zones and
            away from green space and clean resources.
          </li>
          <li>
            <strong>Structural Inequality:</strong> Disparities in wealth,
            political power, and legal representation mean communities of color
            have fewer tools to fight back against environmental harm.
          </li>
          <li>
            <strong>State Power:</strong> Governments at local, state, and
            federal levels have historically failed — or actively refused — to
            protect Black communities from environmental harm.
          </li>
        </ul>
        <p className="text-stone-600 leading-relaxed mt-4">
          {/* TODO: Expand with analysis from course readings */}
          [Add your own analysis connecting these themes here.]
        </p>
      </section>

      {/* Historical Landmark */}
      <section className="bg-green-50 border border-green-200 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-green-900 mb-3">
          A Landmark Study
        </h2>
        <p className="text-stone-600 leading-relaxed">
          In 1987, the United Church of Christ Commission for Racial Justice
          published{" "}
          <em>Toxic Wastes and Race in the United States</em>, the first
          national study to systematically document the relationship between
          race and the location of hazardous waste facilities. It found that
          race was the most significant factor in determining where such
          facilities were sited. A follow-up study in 2007 confirmed these
          disparities had not improved.
        </p>
      </section>
    </article>
  );
}
