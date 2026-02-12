import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Save My Hard Money Loan',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-8 inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark"
        >
          &larr; Back to Home
        </Link>

        <h1 className="mb-8 text-4xl font-bold text-text-primary">Privacy Policy</h1>

        <div className="prose max-w-none">
          <p className="text-lg text-text-secondary">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <h2 className="mt-8 text-2xl font-semibold text-text-primary">Information We Collect</h2>
          <p className="text-text-secondary">
            When you use our website and services, we may collect the following information:
          </p>
          <ul className="list-disc pl-6 text-text-secondary">
            <li>Contact information (name, email, phone number)</li>
            <li>Property and loan information you provide through our forms</li>
            <li>Usage data and analytics</li>
          </ul>

          <h2 className="mt-8 text-2xl font-semibold text-text-primary">How We Use Your Information</h2>
          <p className="text-text-secondary">
            We use your information to:
          </p>
          <ul className="list-disc pl-6 text-text-secondary">
            <li>Respond to your inquiries and provide loan quotes</li>
            <li>Connect you with appropriate lending partners</li>
            <li>Improve our services and website</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="mt-8 text-2xl font-semibold text-text-primary">Information Sharing</h2>
          <p className="text-text-secondary">
            We may share your information with:
          </p>
          <ul className="list-disc pl-6 text-text-secondary">
            <li>Lending partners to process your loan inquiry</li>
            <li>Service providers who assist our operations</li>
            <li>As required by law or to protect our rights</li>
          </ul>

          <h2 className="mt-8 text-2xl font-semibold text-text-primary">Your Rights</h2>
          <p className="text-text-secondary">
            You have the right to access, correct, or delete your personal information. Your information is secure and will never be sold to third parties.
          </p>

          <h2 className="mt-8 text-2xl font-semibold text-text-primary">Contact Us</h2>
          <p className="text-text-secondary">
            If you have questions about this Privacy Policy, please reach out through our{' '}
            <Link href="/" className="text-primary hover:text-primary-dark">
              contact form
            </Link>.
          </p>
        </div>
      </div>
    </main>
  );
}
