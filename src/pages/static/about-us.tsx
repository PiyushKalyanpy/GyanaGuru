import {LandingNav, LandingFooter} from '@/components/components'
import AboutUsData from '@/data/local/about_us.json'
import WhyChooseGyanGuru from '@/components/cards/WhyChooseGyanGuruCard'
import WhyChooseData from '@/data/local/about_why_choose.json'

const AboutUs = () => {
	return (
		<main className="w-screen overflow-hidden lg:block h-fit gap-y-10 dark:bg-neutral-950">
			<div className="fixed z-40 w-full transition">
				<LandingNav />
			</div>
			<main className="px-6 py-12 max-w-6xl mx-auto grid gap-20">
				<section className="mt-20 text-center grid gap-3">
					<h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
						ABOUT US
					</h1>
					<p className="">
						Welcome to GyanaGuru - your gateway to knowledge and continuous
						learning!
					</p>
				</section>
				<section className="flex flex-col space-y-14 text-center">
					{AboutUsData.map((data, index) => (
						<div key={index}>
							<h2 className="text-2xl sm:text-3xl font-bold text-zinc-800">
								{data.heading}
							</h2>
							<p className="text-zinc-700">{data.paragraph}</p>
						</div>
					))}
				</section>
				<section className="space-y-12 grid place-items-center">
					<h3 className="text-center font-semibold text-xl text-zinc-800">
						Why Choose GyanGuru?
					</h3>
					<div className="flex gap-9 flex-wrap justify-center">
						{WhyChooseData.map((data, index) => (
							<WhyChooseGyanGuru key={index} data={data} />
						))}
					</div>
				</section>
			</main>
			<LandingFooter />
		</main>
	)
}

export default AboutUs
