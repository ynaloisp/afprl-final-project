const sources = [
  {
    id: 1,
    citation:
      "United Church of Christ Commission for Racial Justice. (1987). Toxic Wastes and Race in the United States: A National Report on the Racial and Socio-Economic Characteristics of Communities with Hazardous Waste Sites. United Church of Christ.",
    note: "Landmark study establishing disproportionate exposure patterns by race.",
  },
  {
    id: 2,
    citation:
      "Bullard, R. D., Mohai, P., Saha, R., & Wright, B. (2007). Toxic Wastes and Race at Twenty: 1987–2007. United Church of Christ Justice and Witness Ministries.",
    note: "20-year follow-up confirming continued racial disparities in environmental burdens.",
  },
  {
    id: 3,
    citation:
      "Michigan Civil Rights Commission. (2017). The Flint Water Crisis: Systemic Racism Through the Lens of Flint. Michigan Department of Civil Rights.",
    note: "Analyzes the Flint water crisis as a product of structural racism.",
  },
  {
    id: 4,
    citation:
      "Campbell, C., Greenberg, R., Mankikar, D., & Ross, R. D. (2016). A Case Study of Environmental Injustice: The Failure in Flint. International Journal of Environmental Research and Public Health, 13(10), 951.",
    note: "Open-access peer-reviewed article examining Flint through an environmental justice framework.",
  },
  {
    id: 5,
    citation:
      "EPA National Environmental Justice Advisory Council. (2004). Ensuring Risk Reduction in Communities with Multiple Stressors: Environmental Justice and Cumulative Risks/Impacts. U.S. Environmental Protection Agency.",
    note: "Report on cumulative impacts and environmental justice policy recommendations.",
  },
  {
    id: 6,
    citation:
      "White House Council on Environmental Quality. (2022). Climate and Economic Justice Screening Tool (CEJST): Technical Support Document. Executive Office of the President.",
    note: "Technical documentation for the federal Justice40 screening tool.",
  },
  {
    id: 7,
    citation:
      "Purnell, D. (2021). Becoming Abolitionists: Police, Protests, and the Pursuit of Freedom. Astra House.",
    note: "Required course text. Provides the abolitionist framework connecting environmental justice to safety and state power.",
  },
];

export default function WorksCitedPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-green-700 dark:text-green-400 uppercase tracking-widest text-sm font-semibold mb-3">
        Section 05
      </p>
      <h1 className="text-4xl font-bold text-green-900 dark:text-green-300 mb-4">Works Cited</h1>
      <p className="text-stone-500 dark:text-stone-400 text-lg leading-relaxed mb-12">
        All sources used across this website. Citations follow Chicago/MLA
        format where applicable.
      </p>

      <ol className="space-y-8">
        {sources.map(({ id, citation, note }) => (
          <li
            key={id}
            className="bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl p-5 shadow-sm"
          >
            <div className="flex gap-4">
              <span className="text-green-300 dark:text-green-600 font-bold text-2xl leading-none mt-0.5 select-none">
                {id}.
              </span>
              <div>
                <p className="text-stone-700 dark:text-stone-200 leading-relaxed">{citation}</p>
                <p className="mt-2 text-sm text-stone-400 dark:text-stone-500 italic">{note}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-12 text-stone-400 dark:text-stone-500 text-sm">
        {/* TODO: Add any additional sources you use as you build out the site */}
        Additional sources should be added here as content is developed.
      </p>
    </article>
  );
}
