import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      {/* Cross-sell Banner */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-text-secondary">Looking for a long-term loan solution?</p>
            <a
              href="https://savemydscrloan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
            >
              DSCR Loans
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-text-secondary">
            &copy; {new Date().getFullYear()} Save My Hard Money Loan
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-text-secondary transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="/disclosures"
              className="text-sm text-text-secondary transition-colors hover:text-primary"
            >
              Disclosures
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
