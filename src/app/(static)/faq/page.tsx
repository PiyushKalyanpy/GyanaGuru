import FaqSection from './FaqSection';
import StillHaveQuestions from './StillHaveQuestions';

export default function FAQ () {
  return (
    <main className="px-6 py-12 md:px-12 max-w-7xl mx-auto grid gap-24 mt-24">
      <section className="text-center grid gap-5 place-items-center text-zinc-900">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold max-w-4xl">
          Gyanaguru’s Frequently Asked Question
        </h1>
        <p className="text-lg font-medium">
          Have a question in mind? We’ve got the answers!
        </p>
      </section>
      <FaqSection />
      <StillHaveQuestions />
    </main>
  );
}