import Link from 'next/link';
import { Phone, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-deep text-white">
      {/* Cross-sell Banner */}
      <div className="border-b border-white/10 bg-slate-dark/50">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-white/80">Looking for a different loan product?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://savemydscrloan.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-amber-primary/50 px-4 py-2 text-sm font-medium text-amber-light transition-colors hover:bg-amber-primary/10"
              >
                DSCR Loans
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://arizonadpa.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm font-medium text-white/70 transition-colors hover:border-white/50 hover:text-white"
              >
                Down Payment Assistance
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-amber-light">Save My Hard Money Loan</h3>
            <p className="mt-2 text-sm text-white/70">
              Cook Brothers Mortgage Team
            </p>
            <p className="mt-1 text-sm text-white/70">
              Powered by Cornerstone First Mortgage
            </p>
            <p className="mt-1 text-sm text-white/70">NMLS #173855</p>
          </div>

          {/* Tanner Contact */}
          <div>
            <h3 className="text-lg font-semibold">Tanner Cook</h3>
            <p className="mt-1 text-sm text-white/70">NMLS #2090424</p>
            <div className="mt-3 space-y-2">
              <a
                href="tel:480-420-4918"
                className="flex items-center gap-2 text-sm text-white/80 hover:text-white"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                480-420-4918
              </a>
              <a
                href="mailto:Tanner@cfmtg.com"
                className="flex items-center gap-2 text-sm text-white/80 hover:text-white"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Tanner@cfmtg.com
              </a>
            </div>
          </div>

          {/* Zac Contact */}
          <div>
            <h3 className="text-lg font-semibold">Zac Cook</h3>
            <p className="mt-1 text-sm text-white/70">NMLS #2111496</p>
            <div className="mt-3 space-y-2">
              <a
                href="tel:480-406-2016"
                className="flex items-center gap-2 text-sm text-white/80 hover:text-white"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                480-406-2016
              </a>
              <a
                href="mailto:Zac@cfmtg.com"
                className="flex items-center gap-2 text-sm text-white/80 hover:text-white"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Zac@cfmtg.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-white/80 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclosures" className="text-white/80 hover:text-white">
                  Disclosures
                </Link>
              </li>
              <li>
                <a
                  href="https://www.nmlsconsumeraccess.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white"
                >
                  NMLS Consumer Access
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Equal Housing Logo */}
        <div className="mt-8 flex items-center justify-center gap-4 border-t border-white/20 pt-8">
          <div className="flex h-10 w-10 items-center justify-center rounded border border-white/50 text-xs font-bold">
            <span aria-label="Equal Housing Opportunity">EHO</span>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-8 text-center text-xs text-white/60">
          <p>
            &copy;{new Date().getFullYear()} Cornerstone First Mortgage, LLC supports Equal Housing Opportunity.
            NMLS ID# 173855. This is informational only and is not an offer of credit
            or commitment to lend. Interest rates, products, and loan terms are subject
            to change without notice and may not be available at the time of loan
            application or loan lock-in. Contact Cornerstone First Mortgage, LLC to
            learn more about your eligibility for its mortgage products. Loans are
            subject to buyer, builder, and property qualification. Cash reserves may
            be required. Hard money and bridge loans are for investment properties only, not primary residences.
            (<a href="https://www.nmlsconsumeraccess.org/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">www.nmlsconsumeraccess.org</a>)
          </p>
        </div>
      </div>
    </footer>
  );
}
