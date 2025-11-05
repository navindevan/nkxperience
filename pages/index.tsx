import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function HomePage() {
  return (
    <Layout>
      <section className="relative">
        <div className="absolute inset-0">
          {/* Using next/image with unoptimized true via next.config */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/hero.svg" alt="Hero" className="w-full h-96 object-cover" />
        </div>
        <div className="relative h-96 flex items-center">
          <div className="mx-auto max-w-6xl px-4">
            <div className="bg-white/70 backdrop-blur rounded-lg p-6 inline-block">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Hello</h1>
              <p className="mt-2 max-w-2xl text-gray-700">
                I’m an accomplished IT professional with over 14 years of experience in data engineering and cloud technologies. I enjoy building scalable data solutions and mentoring.
              </p>
              <div className="mt-4 flex gap-3">
                <Link href="/portfolio" className="inline-block rounded bg-gray-900 text-white px-4 py-2 text-sm">View Portfolio</Link>
                <a href="https://topmate.io/navindev" target="_blank" rel="noreferrer" className="inline-block rounded border border-gray-900 px-4 py-2 text-sm text-gray-900">Book Online</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold">A Bit About Me</h2>
        <p className="mt-2 text-gray-700 max-w-3xl">
          With expertise in database design, ETL development, and scalable data solutions, I’m passionate about sharing knowledge through writing, mentoring, and community engagements—continuously exploring emerging technologies to drive innovation and business success.
        </p>
      </section>
    </Layout>
  );
}


