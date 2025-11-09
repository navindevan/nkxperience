import Head from 'next/head';
import Navbar from './Navbar';
import React from 'react';

type LayoutProps = {
  title?: string;
  children: React.ReactNode;
};

export default function Layout({ title, children }: LayoutProps) {
  const pageTitle = title ? `${title} • Naveen Kumar` : 'Naveen Kumar • Data Engineer, MCT, Author, Speaker';
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Naveen Kumar • Data Engineer, MCT, Author, Speaker. Over 14 years of experience in data engineering and cloud technologies." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-gray-200 bg-gray-50 py-6 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Naveen Kumar. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}


