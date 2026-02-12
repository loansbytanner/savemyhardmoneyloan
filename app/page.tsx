import Hero from '@/components/Hero';
import QualifierQuiz from '@/components/QualifierQuiz';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <QualifierQuiz />
      </main>
      <Footer />
    </>
  );
}
