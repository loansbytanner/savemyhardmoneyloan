import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclosures',
  description: 'Licensing and disclosures for Save My Hard Money Loan',
};

export default function DisclosuresPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-4xl font-bold text-slate-deep">Disclosures</h1>

      <div className="prose prose-slate max-w-none">
        <h2 className="mt-8 text-2xl font-semibold text-slate-deep">Company Information</h2>
        <p className="text-slate-medium">
          Save My Hard Money Loan is operated by the Cook Brothers Mortgage Team, powered by Cornerstone First Mortgage, LLC.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-slate-deep">NMLS Information</h2>
        <ul className="list-disc pl-6 text-slate-medium">
          <li><strong>Cornerstone First Mortgage, LLC:</strong> NMLS #173855</li>
          <li><strong>Tanner Cook:</strong> NMLS #2090424</li>
          <li><strong>Zac Cook:</strong> NMLS #2111496</li>
        </ul>
        <p className="text-slate-medium">
          You can verify our licenses at{' '}
          <a
            href="https://www.nmlsconsumeraccess.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-primary hover:underline"
          >
            NMLS Consumer Access
          </a>.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-slate-deep">Equal Housing Opportunity</h2>
        <p className="text-slate-medium">
          Cornerstone First Mortgage, LLC supports Equal Housing Opportunity. We are committed to ensuring that all individuals have equal access to housing and mortgage services, regardless of race, color, religion, sex, national origin, familial status, or disability.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-slate-deep">Loan Disclosures</h2>
        <p className="text-slate-medium">
          This website is for informational purposes only and is not an offer of credit or a commitment to lend. Interest rates, products, and loan terms are subject to change without notice and may not be available at the time of loan application or loan lock-in.
        </p>
        <p className="text-slate-medium">
          Contact Cornerstone First Mortgage, LLC to learn more about your eligibility for its mortgage products. Loans are subject to borrower, property, and deal qualification. Cash reserves may be required.
        </p>
        <p className="text-slate-medium">
          <strong>Hard money and bridge loans are for investment properties only, not primary residences.</strong>
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-slate-deep">Contact Information</h2>
        <p className="text-slate-medium">
          <strong>Tanner Cook</strong><br />
          Phone: 480-420-4918<br />
          Email: Tanner@cfmtg.com<br />
          NMLS #2090424
        </p>
        <p className="text-slate-medium">
          <strong>Zac Cook</strong><br />
          Phone: 480-406-2016<br />
          Email: Zac@cfmtg.com<br />
          NMLS #2111496
        </p>
      </div>
    </main>
  );
}
