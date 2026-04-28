const timeline = [
  {
    year: "2011",
    event:
      "Flint, Michigan is placed under state-appointed emergency management, removing democratic control from residents.",
  },
  {
    year: "2014",
    event:
      "To save money, the emergency manager switches Flint's water supply from Detroit's system to the Flint River. Officials do not apply required corrosion controls.",
  },
  {
    year: "2014–2015",
    event:
      "Residents begin reporting discolored, foul-smelling water. State officials dismiss concerns. General Motors stops using Flint water at its plant because it corrodes engine parts.",
  },
  {
    year: "2015",
    event:
      "Pediatrician Dr. Mona Hanna-Attisha publishes data showing elevated blood lead levels in Flint children. State officials initially reject her findings.",
  },
  {
    year: "Jan 2016",
    event:
      "President Obama declares a federal emergency. National Guard distributes bottled water.",
  },
  {
    year: "2016",
    event:
      "The Michigan Civil Rights Commission begins an investigation and later concludes that the crisis was a product of 'systemic racism.'",
  },
  {
    year: "2021",
    event:
      "Michigan reaches a $626 million settlement with Flint residents — one of the largest in a water contamination case in U.S. history.",
  },
];

export default function CaseStudyPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-green-700 dark:text-green-400 uppercase tracking-widest text-sm font-semibold mb-3">
        Section 03
      </p>
      <h1 className="text-4xl font-bold text-green-900 dark:text-green-300 mb-4">
        Case Study: Flint Water Crisis
      </h1>
      <p className="text-stone-500 dark:text-stone-400 text-lg leading-relaxed mb-12">
        The Flint water crisis is one of the most well-documented examples of
        environmental racism in recent U.S. history. It shows how government
        decisions about infrastructure, cost-cutting, and accountability
        intersect with race in life-altering ways.
      </p>

      {/* Background */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-stone-900 dark:text-stone-100 mb-4">
          Background
        </h2>
        <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
          Flint, Michigan is a majority-Black city with a poverty rate nearly
          three times the national average. When the state appointed an
          emergency manager to reduce costs, the decision was made to switch
          the city's water supply — without implementing federally required
          corrosion controls. Lead from aging pipes leached into the water
          supply, poisoning residents for over a year before officials
          acknowledged the problem.{" "}
          <a
            href="https://doi.org/10.3390/ijerph13100951"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-stone-300 hover:decoration-stone-500"
          >
            (Campbell et al.)
          </a>
        </p>
        <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
          {/* TODO: Add additional context */}
          [Add your own analysis or additional background here.]
        </p>
      </section>

      {/* Timeline */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-stone-900 dark:text-stone-100 mb-6">
          Timeline of Major Events
        </h2>
        <ol className="relative border-l-2 border-green-300 dark:border-green-700 space-y-8 pl-6">
          {timeline.map(({ year, event }) => (
            <li key={year} className="relative">
              <span className="absolute -left-[1.65rem] top-1 w-4 h-4 rounded-full bg-green-600 border-2 border-white" />
              <p className="text-green-800 font-semibold text-sm mb-1">{year}</p>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                {year === "2016" ? (
                  <>
                    The{" "}
                    <a
                      href="https://www.michigan.gov/-/media/Project/Websites/mdcr/mcrc/reports/2017/flint-crisis-report-edited.pdf?rev=4601519b3af345cfb9d468ae6ece9141"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-stone-300 hover:decoration-stone-500"
                    >
                      Michigan Civil Rights Commission
                    </a>{" "}
                    begins an investigation and later concludes that the crisis
                    was a product of &ldquo;systemic racism.&rdquo;
                  </>
                ) : (
                  event
                )}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Why It's an EJ Issue */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-stone-900 dark:text-stone-100 mb-4">
          Why Flint Is an Environmental Justice Issue
        </h2>
        <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
          The Flint crisis is not simply a story of government incompetence. The
          Michigan Civil Rights Commission (2017) concluded that the crisis was
          the result of systemic racism — that a majority-Black, low-income city
          received a level of disregard that would not have been tolerated in a
          wealthier, whiter community.{" "}
          <a
            href="https://www.michigan.gov/-/media/Project/Websites/mdcr/mcrc/reports/2017/flint-crisis-report-edited.pdf?rev=4601519b3af345cfb9d468ae6ece9141"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-stone-300 hover:decoration-stone-500"
          >
            (Michigan Civil Rights Commission)
          </a>
        </p>
        <ul className="list-disc list-inside space-y-2 text-stone-600 dark:text-stone-300 leading-relaxed">
          <li>
            The decision to switch water sources was driven entirely by
            cost-cutting under emergency management — a system that stripped
            residents of their democratic voice.
          </li>
          <li>
            State officials actively dismissed and delayed acknowledging
            residents' complaints for over a year.
          </li>
          <li>
            The harm was permanent for many children: lead exposure causes
            irreversible cognitive and developmental damage.
          </li>
        </ul>
        <p className="text-stone-600 dark:text-stone-300 leading-relaxed mt-4">
          This pattern is supported by both peer-reviewed public health
          analysis and state civil-rights findings that document preventable
          harm, delayed response, and racialized policy impact in Flint.{" "}
          <a
            href="https://doi.org/10.3390/ijerph13100951"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-stone-300 hover:decoration-stone-500"
          >
            (Campbell et al.)
          </a>{" "}
          <a
            href="https://www.michigan.gov/-/media/Project/Websites/mdcr/mcrc/reports/2017/flint-crisis-report-edited.pdf?rev=4601519b3af345cfb9d468ae6ece9141"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-stone-300 hover:decoration-stone-500"
          >
            (Michigan Civil Rights Commission)
          </a>
        </p>
      </section>

      {/* Broader Patterns */}
      <section className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-amber-900 dark:text-amber-300 mb-3">
          Broader Patterns of Inequality
        </h2>
        <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
          Flint is not an outlier. It is a concentrated example of patterns
          documented nationally: Black and low-income communities receive
          inferior infrastructure, slower government response to environmental
          hazards, and less legal accountability when those hazards cause harm.
          The crisis reflects the same structural dynamics — unequal protection,
          state neglect, and racialized cost-cutting — seen across the country.{" "}
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
        <p className="text-stone-600 dark:text-stone-300 leading-relaxed mt-3">
          {/* TODO: Add your own comparative analysis */}
          [Add your own analysis here.]
        </p>
      </section>
    </article>
  );
}
