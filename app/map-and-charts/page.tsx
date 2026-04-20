import ChartsSection from "./ChartsSection";
import MapSection from "./MapSection";

export default function MapAndChartsPage() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-16">
      <p className="text-green-700 uppercase tracking-widest text-sm font-semibold mb-3">
        Section 02
      </p>
      <h1 className="text-4xl font-bold text-green-900 mb-4">
        Interactive Map &amp; Charts
      </h1>
      <p className="text-stone-500 text-lg leading-relaxed mb-12">
        Data visualizations showing environmental burdens and demographic
        disparities. Data sourced from OpenData NYC and federal environmental
        justice tools.
      </p>

      <MapSection />
      <ChartsSection />
    </article>
  );
}
