import Head from 'next/head';
import Navbar from './Navbar';
import React from 'react';

type LayoutProps = {
  title?: string;
  children: React.ReactNode;
};

export default function Layout({ title, children }: LayoutProps) {
  const pageTitle = title ? `${title} • Naveen Kumar` : 'Naveen Kumar';
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Naveen Kumar • Data Engineer, MCT, Author, Speaker" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Naveen Kumar
        </footer>
      </div>
    </>
  );
}


