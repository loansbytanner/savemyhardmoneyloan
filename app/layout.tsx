import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Analytics from '@/components/Analytics';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://savemyhardmoneyloan.com'),
  title: {
    default: 'Hard Money Loan Rescue | Save My Hard Money Loan',
    template: '%s | Save My Hard Money Loan',
  },
  description:
    'Hard money loan coming due? Balloon payment threatening your deal? We rescue distressed hard money loans with bridge financing, extensions, and DSCR exits. Nationwide. Close in days.',
  keywords: [
    'hard money loan rescue',
    'hard money loan extension',
    'hard money balloon payment help',
    'refinance hard money loan',
    'hard money foreclosure help',
    'bridge loan hard money',
    'hard money loan modification',
    'hard money exit strategy',
    'hard money to dscr refinance',
    'hard money lender fell through',
    'rescue hard money deal',
    'hard money loan default',
    'hard money loan coming due',
    'private money loan rescue',
    'fix and flip rescue financing',
    'hard money loan alternative',
    'hard money loan refinance options',
    'stop hard money foreclosure',
    'hard money extension fees',
    'hard money maturity default',
  ],
  authors: [{ name: 'Cook Brothers Mortgage Team' }],
  creator: 'Cook Brothers Mortgage Team',
  publisher: 'Cornerstone First Mortgage',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://savemyhardmoneyloan.com',
    siteName: 'Save My Hard Money Loan',
    title: 'Hard Money Loan Rescue | Balloon Payment Coming Due?',
    description:
      'Hard money loan in trouble? We specialize in rescuing deals when balloon payments are due, lenders won\'t extend, or you need an exit strategy. Nationwide.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Hard Money Loan Rescue Specialists',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hard Money Loan Rescue | Save My Hard Money Loan',
    description:
      'Hard money loan coming due? We rescue distressed deals with bridge financing, extensions, and DSCR exits. Nationwide.',
    images: ['/opengraph-image'],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    other: {
      'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || '',
    },
  },
  alternates: {
    canonical: 'https://savemyhardmoneyloan.com',
  },
};

// Person Schema for E-E-A-T
const tannerPersonSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Tanner Cook',
  jobTitle: 'Mortgage Loan Originator',
  identifier: {
    '@type': 'PropertyValue',
    propertyID: 'NMLS',
    value: '2090424',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Cornerstone First Mortgage',
    url: 'https://www.nmlsconsumeraccess.org/',
  },
  email: 'Tanner@cfmtg.com',
  telephone: '+1-480-420-4918',
  knowsAbout: [
    'Hard Money Loans',
    'Bridge Financing',
    'Fix and Flip Financing',
    'DSCR Loans',
    'Rescue Closings',
  ],
};

const zacPersonSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Zac Cook',
  jobTitle: 'Mortgage Loan Originator',
  identifier: {
    '@type': 'PropertyValue',
    propertyID: 'NMLS',
    value: '2111496',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Cornerstone First Mortgage',
    url: 'https://www.nmlsconsumeraccess.org/',
  },
  email: 'Zac@cfmtg.com',
  telephone: '+1-480-406-2016',
  knowsAbout: [
    'Hard Money Loans',
    'Fix and Flip Financing',
    'Bridge Loans',
    'DSCR Exit Strategies',
    'Renovation Financing',
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://savemyhardmoneyloan.com',
    },
  ],
};

// JSON-LD Schema - FinancialService
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'Save My Hard Money Loan - Cook Brothers Mortgage Team',
  description:
    'Hard money loan rescue specialists. We help investors when balloon payments are due, lenders won\'t extend, or deals need saving. Bridge financing, extensions, and DSCR exits.',
  url: 'https://savemyhardmoneyloan.com',
  telephone: '+1-480-420-4918',
  email: 'Tanner@cfmtg.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Phoenix',
    addressRegion: 'AZ',
    addressCountry: 'US',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  priceRange: '$$',
  openingHours: 'Mo-Fr 08:00-18:00',
  sameAs: [],
  parentOrganization: {
    '@type': 'Organization',
    name: 'Cornerstone First Mortgage',
    url: 'https://www.nmlsconsumeraccess.org/',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Hard Money Rescue Products',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'FinancialProduct',
          name: 'Hard Money Loan Rescue',
          description: 'Refinance out of a distressed hard money loan into better terms',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'FinancialProduct',
          name: 'Bridge-to-DSCR Exit',
          description: 'Exit hard money into a long-term DSCR loan with no seasoning requirements',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'FinancialProduct',
          name: 'Additional Renovation Capital',
          description: 'Get more funding to finish your project before your loan matures',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'FinancialProduct',
          name: 'Hard Money Extension Alternative',
          description: 'Better option than paying predatory extension fees',
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(tannerPersonSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(zacPersonSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
