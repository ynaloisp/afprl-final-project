import Link from "next/link";

const sections = [
  {
    href: "/what-is-environmental-racism",
    title: "What Is Environmental Racism?",
    description:
      "Learn the definitions, key concepts, and historical roots of environmental racism and how it connects to structural inequality.",
    number: "01",
  },
  {
    href: "/map-and-charts",
    title: "Interactive Map & Charts",
    description:
      "Explore data visualizations showing environmental burdens — pollution, heat risk, and water issues — alongside demographic data.",
    number: "02",
  },
  {
    href: "/case-study",
    title: "Case Study: Flint Water Crisis",
    description:
      "A focused look at the Flint, Michigan water crisis as a concrete example of how structural racism shapes environmental outcomes.",
    number: "03",
  },
  {
    href: "/what-justice-looks-like",
    title: "What Justice Looks Like",
    description:
      "Explore environmental justice approaches — from policy reform to community decision-making — and Derecka Purnell's abolitionist vision of safety.",
    number: "04",
  },
  {
    href: "/works-cited",
    title: "Works Cited",
    description:
      "All sources cited throughout this project, including academic reports, government documents, and course texts.",
    number: "05",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-green-900 text-white py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-green-300 uppercase tracking-widest text-sm font-semibold mb-4">
            AFPRL 10100 · Final Project
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Environmental Racism &amp; Justice
          </h1>
          <p className="text-green-100 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
            How environmental burdens disproportionately fall on Black
            communities, and what justice-centered solutions look like.
          </p>
          <Link
            href="/what-is-environmental-racism"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Start Reading →
          </Link>
        </div>
      </section>

      {/* Intro blurb */}
      <section className="max-w-3xl mx-auto px-4 py-14 text-center">
        <h2 className="text-2xl font-semibold text-green-900 dark:text-green-300 mb-4">
          About This Project
        </h2>
        <p className="text-stone-600 dark:text-stone-300 text-lg leading-relaxed">
          This website was built by Ynalois Pangilinan and Shohruz Ernazarov for
          AFPRL 10100. Our goal is to teach someone with no prior knowledge what
          environmental racism is, how it operates, and what a just future could
          look like - combining clear writing, data visualizations, and a real
          case study.
        </p>
      </section>

      {/* Section cards */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map(({ href, title, description, number }) => (
            <Link
              key={href}
              href={href}
              className="group bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 p-6 shadow-sm hover:shadow-md hover:border-green-400 dark:hover:border-green-500 transition-all"
            >
              <span className="text-3xl font-bold text-green-200 group-hover:text-green-400 transition-colors">
                {number}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-stone-900 dark:text-stone-100 group-hover:text-green-900 dark:group-hover:text-green-300 transition-colors">
                {title}
              </h3>
              <p className="mt-2 text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
                {description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
