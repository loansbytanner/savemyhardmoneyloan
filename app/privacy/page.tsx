import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Save My Hard Money Loan',
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-4xl font-bold text-slate-deep">Privacy Policy</h1>

      <div className="prose prose-slate max-w-none">
        <p className="text-lg text-slate-medium">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-slate-deep">Information We Collect</h2>
        <p className="text-slate-medium">
          When you use our website and services, we may collect the following information:
        </p>
        <ul className="list-disc pl-6 text-slate-medium">
          <li>Contact information (name, email, phone number)</li>
          <li>Property and loan information you provide through our forms</li>
          <li>Usage data and analytics</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold text-slate-deep">How We Use Your Information</h2>
        <p className="text-slate-medium">
          We use your information to:
        </p>
        <ul className="list-disc pl-6 text-slate-medium">
          <li>Respond to your inquiries and provide loan quotes</li>
          <li>Connect you with appropriate lending partners</li>
          <li>Improve our services and website</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold text-slate-deep">Information Sharing</h2>
        <p className="text-slate-medium">
          We may share your information with:
        </p>
        <ul className="list-disc pl-6 text-slate-medium">
          <li>Lending partners to process your loan inquiry</li>
          <li>Service providers who assist our operations</li>
          <li>As required by law or to protect our rights</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold text-slate-deep">Contact Us</h2>
        <p className="text-slate-medium">
          If you have questions about this Privacy Policy, please contact us at:
        </p>
        <p className="text-slate-medium">
          Email: Tanner@cfmtg.com<br />
          Phone: 480-420-4918
        </p>
      </div>
    </main>
  );
}
