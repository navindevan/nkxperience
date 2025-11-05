import Layout from '../components/Layout';

const items = [
  { title: 'Data Pipeline Modernization', summary: 'Azure Data Factory, Databricks, Delta Lake' },
  { title: 'Real-time Analytics Dashboard', summary: 'Event Hubs, Stream Analytics, Power BI' },
  { title: 'Cost Optimization Initiative', summary: 'Storage tiering, partitioning, caching strategies' }
];

export default function PortfolioPage() {
  return (
    <Layout title="Portfolio">
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-3xl font-bold">Portfolio</h1>
        <p className="mt-2 text-gray-700">Selected work and initiatives.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="border rounded-lg p-6 hover:shadow-sm transition">
              <h3 className="font-semibold text-lg">{it.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{it.summary}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}


