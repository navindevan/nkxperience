import Layout from '../components/Layout';

// Achievements data
const achievements = [
  {
    title: 'Microsoft Certified Trainer (MCT)',
    description: 'Recognized for excellence in technical training and education',
    year: '2024'
  },
  {
    title: '14+ Years of IT Experience',
    description: 'Extensive experience in data engineering and cloud technologies',
    year: '2010-Present'
  },
  {
    title: 'Data Pipeline Modernization',
    description: 'Led successful migration to Azure Data Factory and Databricks',
    year: '2023'
  },
  {
    title: 'Community Contributor',
    description: 'Active speaker and mentor in the tech community',
    year: 'Ongoing'
  }
];

// Certifications data
const certifications = [
  {
    name: 'Microsoft Certified: Azure Data Engineer Associate',
    issuer: 'Microsoft',
    year: '2024',
    credentialId: 'AZ-104',
    link: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-data-engineer/'
  },
  {
    name: 'Microsoft Certified Trainer (MCT)',
    issuer: 'Microsoft',
    year: '2024',
    credentialId: 'MCT',
    link: 'https://learn.microsoft.com/en-us/credentials/certifications/mct-certification/'
  },
  {
    name: 'Databricks Certified Associate Developer for Apache Spark',
    issuer: 'Databricks',
    year: '2023',
    credentialId: 'Databricks',
    link: 'https://www.databricks.com/learn/certification/associate-developer-apache-spark'
  }
];

// Books data
const books = [
  {
    title: 'Mastering Azure Data Engineering',
    description: 'A comprehensive guide to building scalable data solutions on Azure',
    year: '2024',
    link: 'https://example.com/book1',
    publisher: 'Tech Publications'
  },
  {
    title: 'Data Pipeline Design Patterns',
    description: 'Best practices and patterns for modern data pipeline architecture',
    year: '2023',
    link: 'https://example.com/book2',
    publisher: 'Tech Publications'
  }
];

export default function PortfolioPage() {
  return (
    <Layout title="Portfolio">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Portfolio</h1>
          <p className="mt-2 text-gray-600 text-lg">
            A showcase of my achievements, certifications, and published works
          </p>
        </div>

        {/* Achievements Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 pb-2 border-b-2 border-gray-200">
            Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 bg-white"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {achievement.title}
                  </h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {achievement.year}
                  </span>
                </div>
                <p className="text-gray-600 mt-2">{achievement.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 pb-2 border-b-2 border-gray-200">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 bg-white flex flex-col"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    <span className="font-medium">Issuer:</span> {cert.issuer}
                  </p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs text-gray-500 bg-blue-50 px-2 py-1 rounded">
                      {cert.credentialId}
                    </span>
                    <span className="text-xs text-gray-500">{cert.year}</span>
                  </div>
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center mt-2"
                  >
                    Verify Certificate →
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Books Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 pb-2 border-b-2 border-gray-200">
            Books
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {books.map((book, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 bg-white"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 flex-1">
                    {book.title}
                  </h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded ml-3">
                    {book.year}
                  </span>
                </div>
                <p className="text-gray-600 mb-3">{book.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {book.publisher}
                  </span>
                  {book.link && (
                    <a
                      href={book.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center"
                    >
                      Learn More →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section (keeping existing) */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 pb-2 border-b-2 border-gray-200">
            Key Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 bg-white">
              <h3 className="font-semibold text-lg text-gray-900">
                Data Pipeline Modernization
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                Azure Data Factory, Databricks, Delta Lake
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 bg-white">
              <h3 className="font-semibold text-lg text-gray-900">
                Real-time Analytics Dashboard
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                Event Hubs, Stream Analytics, Power BI
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 bg-white">
              <h3 className="font-semibold text-lg text-gray-900">
                Cost Optimization Initiative
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                Storage tiering, partitioning, caching strategies
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}


