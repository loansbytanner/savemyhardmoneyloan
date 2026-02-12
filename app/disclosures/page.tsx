import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclosures',
  description: 'Disclosures for Save My Hard Money Loan',
};

export default function DisclosuresPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-8 inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark"
        >
          &larr; Back to Home
        </Link>

        <h1 className="mb-8 text-4xl font-bold text-text-primary">Disclosures</h1>

        <div className="prose max-w-none">
          <h2 className="mt-8 text-2xl font-semibold text-text-primary">About Us</h2>
          <p className="text-text-secondary">
            Save My Hard Money Loan connects real estate investors with private lenders who specialize in hard money rescue and bridge financing. We work with a network of 20+ lenders to find solutions for investors facing balloon payments, extension needs, or foreclosure situations.
          </p>

          <h2 className="mt-8 text-2xl font-semibold text-text-primary">Loan Information</h2>
          <p className="text-text-secondary">
            This website is for informational purposes only and is not an offer of credit or a commitment to lend. Interest rates, products, and loan terms are subject to change without notice and may not be available at the time of loan application or loan lock-in.
          </p>
          <p className="text-text-secondary">
            Loans are subject to borrower, property, and deal qualification. Cash reserves may be required.
          </p>
          <p className="font-medium text-text-primary">
            Hard money and bridge loans are for investment properties only, not primary residences.
          </p>

          <h2 className="mt-8 text-2xl font-semibold text-text-primary">No Upfront Fees</h2>
          <p className="text-text-secondary">
            We do not charge application fees, upfront costs, or junk fees. You only pay when we successfully close your loan.
          </p>

          <h2 className="mt-8 text-2xl font-semibold text-text-primary">Contact</h2>
          <p className="text-text-secondary">
            For questions about our services, please use our{' '}
            <Link href="/" className="text-primary hover:text-primary-dark">
              contact form
            </Link>{' '}
            on the main page.
          </p>
        </div>
      </div>
    </main>
  );
}
