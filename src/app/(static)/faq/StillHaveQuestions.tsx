import Image from 'next/image';
import Link from 'next/link';

export default function StillHaveQuestions() {
  return (
    <section className="bg-zinc-900 text-zinc-200 px-8 lg:px-16 pt-10 rounded-3xl flex flex-wrap lg:flex-nowrap justify-between">
      <div className="pb-8 w-full lg:w-1/2">
        <h3 className="text-zinc-100 text-3xl font-semibold">
          Still have questions?
        </h3>
        <p className="text-zinc-200 mt-1">
          We’re here to help! Reach out to us for any further inquiries or
          assistance.
        </p>
        <div className="flex gap-4 mt-6 text-center">
          <Link
            href="/about-us"
            className="bg-zinc-800 px-4 py-2 rounded-xl hover:bg-zinc-950 duration-300"
          >
            Learn More
          </Link>
          <Link
            href="/#contact"
            className="border px-4 py-2 rounded-xl hover:bg-zinc-950 duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-1/2 self-end mt-4 lg:mt-0 flex justify-end">
        <Image
          className="max-h-full max-lg:w-full h-auto lg:max-w-sm"
          src="/assets/faqsection.png"
          width={800}
          height={600}
          alt="screenshot of gyanaguru website"
        />
      </div>
    </section>
  );
}