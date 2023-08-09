import {LandingFooter, LandingNav} from '@/components/components'
import faqData from '@/data/faq.json'
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
} from '@chakra-ui/accordion'
import Image from 'next/image'
import Link from 'next/link'

export default function FAQ(): JSX.Element {
	return (
		<main className="w-screen overflow-hidden lg:block h-fit gap-y-10 dark:bg-neutral-950">
			<div className="fixed z-40 w-full transition">
				<LandingNav />
			</div>
			<main className="px-6 py-12 md:px-12 max-w-7xl mx-auto grid gap-24">
				<section className="mt-24 text-center grid gap-5 place-items-center text-zinc-900">
					<h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold max-w-4xl">
						Gyanaguru’s Frequently Asked Question
					</h1>
					<p className="text-lg font-medium">
						Have a question in mind? We&apos; ve got the answers!
					</p>
				</section>
				<FaqSection />
				<StillHaveQuestions />
			</main>
			<LandingFooter />
		</main>
	)
}

function FaqSection(): JSX.Element {
	return (
		<div className="space-y-24">
			<form className="grid gap-4 max-w-xs mx-auto border-b border-zinc-300">
				<div className="flex items-center gap-2 rounded p-1 cursor-pointer">
					<span className="material-symbols-outlined">search</span>
					<input
						type="text"
						className="h-8 outline-none w-full cursor-pointer"
						placeholder="Search"
					/>
				</div>
			</form>
			<Accordion allowToggle className="grid gap-4 max-w-xl mx-auto">
				{faqData.map((faq, index) => (
					<AccordionItem key={index} className="py-4 border-t border-zinc-300">
						{({isExpanded}) => (
							<>
								<AccordionButton className="text-lg font-semibold flex justify-between gap-2">
									<h3 className="text-left">{faq.question}</h3>
									<span
										className={`material-symbols-outlined text-zinc-500 transition ${
											isExpanded ? 'rotate-90' : ''
										}`}>
										{isExpanded
											? 'add_circle_outline'
											: 'remove_circle_outline'}
									</span>
								</AccordionButton>
								<AccordionPanel>
									<p className="pt-4 text-zinc-700">{faq.answer}</p>
								</AccordionPanel>
							</>
						)}
					</AccordionItem>
				))}
			</Accordion>
		</div>
	)
}

function StillHaveQuestions(): JSX.Element {
	return (
		<section className="bg-zinc-900 text-zinc-200 px-8 lg:px-16 pt-10 rounded-3xl flex flex-wrap lg:flex-nowrap justify-between">
			<div className="pb-8 w-full lg:w-1/2">
				<h3 className="text-zinc-100 text-3xl font-semibold">
					Still have questions?
				</h3>
				<p className="text-zinc-200 mt-1">
					We&apos; re here to help! Reach out to us for any further inquiries or
					assistance.
				</p>
				<div className="flex gap-4 mt-6 text-center">
					<Link
						href="/about-us"
						className="bg-zinc-800 px-4 py-2 rounded-xl hover:bg-zinc-950 duration-300">
						Learn More
					</Link>
					<Link
						href="/#contact"
						className="border px-4 py-2 rounded-xl hover:bg-zinc-950 duration-300">
						Contact Us
					</Link>
				</div>
			</div>
			<div className="w-full lg:w-1/2 self-end mt-4 lg:mt-0 flex justify-end">
				<Image
					className="max-h-full max-lg:w-full h-auto lg:max-w-sm"
					src="/images/faqsection.png"
					width={800}
					height={600}
					alt="screenshot of gyanaguru website"
				/>
			</div>
		</section>
	)
}
