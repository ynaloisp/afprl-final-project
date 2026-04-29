const sources = [
  {
    id: 1,
    citation: (
      <>
        United Church of Christ Commission for Racial Justice.{" "}
        <em>
          <a
            href="https://www.ucc.org/wp-content/uploads/2020/12/ToxicWastesRace.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-stone-300 hover:decoration-stone-500"
          >
            Toxic Wastes and Race in the United States: A National Report on the
            Racial and Socio-Economic Characteristics of Communities with
            Hazardous Waste Sites
          </a>
        </em>
        . United Church of Christ Commission for Racial Justice, 1987. Accessed
        27 Apr. 2026.
      </>
    ),
  },
  {
    id: 2,
    citation: (
      <>
        Bullard, Robert D., Paul Mohai, Robin Saha, and Beverly Wright.{" "}
        <em>
          <a
            href="https://www.ucc.org/wp-content/uploads/2021/03/toxic-wastes-and-race-at-twenty-1987-2007.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-stone-300 hover:decoration-stone-500"
          >
            Toxic Wastes and Race at Twenty: 1987-2007
          </a>
        </em>
        . United Church of Christ Justice and Witness Ministries, 2007. Accessed
        27 Apr. 2026.
      </>
    ),
  },
  {
    id: 3,
    citation: (
      <>
        Michigan Civil Rights Commission.{" "}
        <em>
          <a
            href="https://www.michigan.gov/-/media/Project/Websites/mdcr/mcrc/reports/2017/flint-crisis-report-edited.pdf?rev=4601519b3af345cfb9d468ae6ece9141"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-stone-300 hover:decoration-stone-500"
          >
            The Flint Water Crisis: Systemic Racism Through the Lens of Flint
          </a>
        </em>
        . Michigan Department of Civil Rights, 17 Feb. 2017. Accessed 27 Apr.
        2026.
      </>
    ),
  },
  {
    id: 4,
    citation: (
      <>
        Campbell, Carla, Rachael Greenberg, Deepa Mankikar, and Ronald D. Ross.
        "A Case Study of Environmental Injustice: The Failure in Flint."{" "}
        <em>
          International Journal of Environmental Research and Public Health
        </em>
        , vol. 13, no. 10, 2016, article 951,{" "}
        <a
          href="https://doi.org/10.3390/ijerph13100951"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-stone-300 hover:decoration-stone-500"
        >
          https://doi.org/10.3390/ijerph13100951
        </a>
        . Accessed 27 Apr. 2026.
      </>
    ),
  },
  {
    id: 5,
    citation: (
      <>
        National Environmental Justice Advisory Council.{" "}
        <em>
          <a
            href="https://www.epa.gov/sites/default/files/2015-02/documents/nejac-cum-risk-rpt-122104.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-stone-300 hover:decoration-stone-500"
          >
            Ensuring Risk Reduction in Communities with Multiple Stressors:
            Environmental Justice and Cumulative Risks/Impacts
          </a>
        </em>
        . U.S. Environmental Protection Agency, Dec. 2004. Accessed 27 Apr.
        2026.
      </>
    ),
  },
  {
    id: 6,
    citation: (
      <>
        Council on Environmental Quality.{" "}
        <em>
          <a
            href="https://bidenwhitehouse.archives.gov/wp-content/uploads/2022/02/CEQ-CEJST-QandA.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-stone-300 hover:decoration-stone-500"
          >
            Climate and Economic Justice Screening Tool: Questions and Answers
          </a>
        </em>
        . Executive Office of the President, Feb. 2022. Accessed 27 Apr. 2026.
      </>
    ),
  },
  {
    id: 7,
    citation: (
      <>
        Purnell, Derecka.{" "}
        <em>
          Becoming Abolitionists: Police, Protests, and the Pursuit of Freedom
        </em>
        . Astra House, 2021.
      </>
    ),
  },
];

export default function WorksCitedPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-green-700 dark:text-green-400 uppercase tracking-widest text-sm font-semibold mb-3">
        Section 05
      </p>
      <h1 className="text-4xl font-bold text-green-900 dark:text-green-300 mb-4">
        Works Cited
      </h1>
      <p className="text-stone-500 dark:text-stone-400 text-lg leading-relaxed mb-12">
        All sources used across this website. Citations follow MLA 9 format.
      </p>

      <ol className="space-y-8">
        {sources.map(({ id, citation }) => (
          <li
            key={id}
            className="bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl p-5 shadow-sm"
          >
            <div className="flex gap-4">
              <span className="text-green-300 dark:text-green-600 font-bold text-2xl leading-none mt-0.5 select-none">
                {id}.
              </span>
              <div>
                <p className="text-stone-700 dark:text-stone-200 leading-relaxed">
                  {citation}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </article>
  );
}
