"use client";
import Image from "next/image";
import Link from "next/link";
import Background from "@/components/Background";
import HomeNav from "@/components/navbar/HomeNav";
import HeroSection from "@/components/landing/HeroSection";

export default function Home() {
  return (
    <main className="flex text-white flex-col  bg-[#050415] w-full h-full min-h-screen gap-8 ">
      {/* background */}
      <Image
        src="/images/hero_bg.png"
        alt="12"
        width={1000}
        height={1000}
        className="absolute object-cover w-full h-full -z-1"
      />
      <HomeNav />
      <main className="z-10 px-40 flex flex-col ">
        <HeroSection />

        {/* pre moulded courses */}
        <section className="  flex flex-col gap-8 bg-[url('D:\gyanaguru\public\images\blur_bg.svg')] ">
          <div className="flex gap-8">
            <div
              id="bento"
              className=" bg-gradient-to-br from-gray-100/10 to-transparent h-96 overflow-hidden rounded-3xl flex items-center place-content-center w-3/4 flex-row gap-4 "
            >
              <div className="flex w-1/2 items-end h-full ">
                <h5 className="text-3xl   font-semibold">
                  All your learning resorces at one place
                </h5>
              </div>
              <Image
                src="/images/all_content.svg"
                alt="12"
                width={300}
                height={300}
                className="  -mr-10 p-10 w-1/2"
              />{" "}
            </div>
            <div className=" h-80 bg-gradient-to-b from-gray-400/10 to-transparent rounded-3xl p-4   flex w-1/4">
              whats new in 2.0
              <svg viewBox="0 0 557 557" width="557" height="557" fill="none">
                <g
                  stroke-width="18"
                  filter="url(#filter0_f_1706_102555)"
                  opacity="0.4"
                >
                  <path
                    stroke="url(#paint0_linear_1706_102555)"
                    d="M113.68 319.368c-.932-3.783 3.561-6.164 6.316-3.409l121.045 121.045c2.755 2.755.374 7.248-3.409 6.316-60.948-15.028-108.924-63.004-123.952-123.952z"
                  ></path>
                  <path
                    stroke="url(#paint1_linear_1706_102555)"
                    d="M109.104 267.645a3.947 3.947 0 001.157 3.041l176.053 176.053a3.947 3.947 0 003.041 1.157 169.91 169.91 0 0022.262-2.906c3.061-.608 4.124-4.362 1.917-6.569L118.579 243.466c-2.207-2.207-5.961-1.144-6.569 1.917a169.91 169.91 0 00-2.906 22.262z"
                  ></path>
                  <path
                    stroke="url(#paint2_linear_1706_102555)"
                    d="M123.521 209.3a3.94 3.94 0 00.828 4.397l218.954 218.955a3.942 3.942 0 004.397.827 168.862 168.862 0 0016.539-8.539c2.214-1.302 2.554-4.336.738-6.152L138.212 192.023c-1.816-1.816-4.85-1.476-6.152.738a169.081 169.081 0 00-8.539 16.539z"
                  ></path>
                  <path
                    stroke="url(#paint3_linear_1706_102555)"
                    d="M152.384 170.657c-1.48-1.48-1.572-3.855-.173-5.412C183.262 130.715 228.284 109 278.377 109 372.057 109 448 184.943 448 278.623c0 50.093-21.715 95.115-56.245 126.166-1.557 1.399-3.931 1.307-5.412-.173L152.384 170.657z"
                  ></path>
                </g>
                <g stroke-opacity="0.2" stroke-width="2" opacity="0.4">
                  <path
                    stroke="url(#paint4_linear_1706_102555)"
                    d="M113.68 319.368c-.932-3.783 3.561-6.164 6.316-3.409l121.045 121.045c2.755 2.755.374 7.248-3.409 6.316-60.948-15.028-108.924-63.004-123.952-123.952z"
                  ></path>
                  <path
                    stroke="url(#paint5_linear_1706_102555)"
                    d="M109.104 267.645a3.947 3.947 0 001.157 3.041l176.053 176.053a3.947 3.947 0 003.041 1.157 169.91 169.91 0 0022.262-2.906c3.061-.608 4.124-4.362 1.917-6.569L118.579 243.466c-2.207-2.207-5.961-1.144-6.569 1.917a169.91 169.91 0 00-2.906 22.262z"
                  ></path>
                  <path
                    stroke="url(#paint6_linear_1706_102555)"
                    d="M123.521 209.3a3.94 3.94 0 00.828 4.397l218.954 218.955a3.942 3.942 0 004.397.827 168.862 168.862 0 0016.539-8.539c2.214-1.302 2.554-4.336.738-6.152L138.212 192.023c-1.816-1.816-4.85-1.476-6.152.738a169.081 169.081 0 00-8.539 16.539z"
                  ></path>
                  <path
                    stroke="url(#paint7_linear_1706_102555)"
                    d="M152.384 170.657c-1.48-1.48-1.572-3.855-.173-5.412C183.262 130.715 228.284 109 278.377 109 372.057 109 448 184.943 448 278.623c0 50.093-21.715 95.115-56.245 126.166-1.557 1.399-3.931 1.307-5.412-.173L152.384 170.657z"
                  ></path>
                </g>
                <path
                  stroke="url(#paint8_linear_1706_102555)"
                  stroke-opacity="0.2"
                  stroke-width="8"
                  d="M113.68 319.368c-.932-3.783 3.561-6.164 6.316-3.409l121.045 121.045c2.755 2.755.374 7.248-3.409 6.316-60.948-15.028-108.924-63.004-123.952-123.952z"
                ></path>
                <path
                  stroke="url(#paint9_linear_1706_102555)"
                  stroke-opacity="0.2"
                  stroke-width="8"
                  d="M109.104 267.645a3.947 3.947 0 001.157 3.041l176.053 176.053a3.947 3.947 0 003.041 1.157 169.91 169.91 0 0022.262-2.906c3.061-.608 4.124-4.362 1.917-6.569L118.579 243.466c-2.207-2.207-5.961-1.144-6.569 1.917a169.91 169.91 0 00-2.906 22.262z"
                ></path>
                <path
                  stroke="url(#paint10_linear_1706_102555)"
                  stroke-opacity="0.2"
                  stroke-width="8"
                  d="M123.521 209.3a3.94 3.94 0 00.828 4.397l218.954 218.955a3.942 3.942 0 004.397.827 168.862 168.862 0 0016.539-8.539c2.214-1.302 2.554-4.336.738-6.152L138.212 192.023c-1.816-1.816-4.85-1.476-6.152.738a169.081 169.081 0 00-8.539 16.539z"
                ></path>
                <path
                  stroke="url(#paint11_linear_1706_102555)"
                  stroke-opacity="0.2"
                  stroke-width="8"
                  d="M152.384 170.657c-1.48-1.48-1.572-3.855-.173-5.412C183.262 130.715 228.284 109 278.377 109 372.057 109 448 184.943 448 278.623c0 50.093-21.715 95.115-56.245 126.166-1.557 1.399-3.931 1.307-5.412-.173L152.384 170.657z"
                ></path>
                <path
                  stroke="url(#paint12_radial_1706_102555)"
                  d="M113.68 319.368c-.932-3.783 3.561-6.164 6.316-3.409l121.045 121.045c2.755 2.755.374 7.248-3.409 6.316-60.948-15.028-108.924-63.004-123.952-123.952z"
                ></path>
                <path
                  stroke="url(#paint13_radial_1706_102555)"
                  d="M109.104 267.645a3.947 3.947 0 001.157 3.041l176.053 176.053a3.947 3.947 0 003.041 1.157 169.91 169.91 0 0022.262-2.906c3.061-.608 4.124-4.362 1.917-6.569L118.579 243.466c-2.207-2.207-5.961-1.144-6.569 1.917a169.91 169.91 0 00-2.906 22.262z"
                ></path>
                <path
                  stroke="url(#paint14_radial_1706_102555)"
                  d="M123.521 209.3a3.94 3.94 0 00.828 4.397l218.954 218.955a3.942 3.942 0 004.397.827 168.862 168.862 0 0016.539-8.539c2.214-1.302 2.554-4.336.738-6.152L138.212 192.023c-1.816-1.816-4.85-1.476-6.152.738a169.081 169.081 0 00-8.539 16.539z"
                ></path>
                <path
                  stroke="url(#paint15_radial_1706_102555)"
                  d="M152.384 170.657c-1.48-1.48-1.572-3.855-.173-5.412C183.262 130.715 228.284 109 278.377 109 372.057 109 448 184.943 448 278.623c0 50.093-21.715 95.115-56.245 126.166-1.557 1.399-3.931 1.307-5.412-.173L152.384 170.657z"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_1706_102555"
                    x1="278.5"
                    x2="278.5"
                    y1="109"
                    y2="340"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#6663F6"></stop>
                    <stop
                      offset="1"
                      stop-color="#6663F6"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1706_102555"
                    x1="278.5"
                    x2="278.5"
                    y1="109"
                    y2="340"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#6663F6"></stop>
                    <stop
                      offset="1"
                      stop-color="#6663F6"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_1706_102555"
                    x1="278.5"
                    x2="278.5"
                    y1="109"
                    y2="340"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#6663F6"></stop>
                    <stop
                      offset="1"
                      stop-color="#6663F6"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_1706_102555"
                    x1="278.5"
                    x2="278.5"
                    y1="109"
                    y2="340"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#6663F6"></stop>
                    <stop
                      offset="1"
                      stop-color="#6663F6"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_1706_102555"
                    x1="278.5"
                    x2="278.5"
                    y1="109"
                    y2="299"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#6663F6"></stop>
                    <stop
                      offset="1"
                      stop-color="#6663F6"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_1706_102555"
                    x1="278.5"
                    x2="278.5"
                    y1="109"
                    y2="299"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#6663F6"></stop>
                    <stop
                      offset="1"
                      stop-color="#6663F6"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint6_linear_1706_102555"
                    x1="278.5"
                    x2="278.5"
                    y1="109"
                    y2="299"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#6663F6"></stop>
                    <stop
                      offset="1"
                      stop-color="#6663F6"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint7_linear_1706_102555"
                    x1="278.5"
                    x2="278.5"
                    y1="109"
                    y2="299"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#6663F6"></stop>
                    <stop
                      offset="1"
                      stop-color="#6663F6"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint8_linear_1706_102555"
                    x1="278.5"
                    x2="278.5"
                    y1="109"
                    y2="350.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#7877C6"></stop>
                    <stop
                      offset="1"
                      stop-color="#7877C6"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint9_linear_1706_102555"
                    x1="278.5"
                    x2="278.5"
                    y1="109"
                    y2="350.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#7877C6"></stop>
                    <stop
                      offset="1"
                      stop-color="#7877C6"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint10_linear_1706_102555"
                    x1="278.5"
                    x2="278.5"
                    y1="109"
                    y2="350.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#7877C6"></stop>
                    <stop
                      offset="1"
                      stop-color="#7877C6"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint11_linear_1706_102555"
                    x1="278.5"
                    x2="278.5"
                    y1="109"
                    y2="350.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#7877C6"></stop>
                    <stop
                      offset="1"
                      stop-color="#7877C6"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <radialGradient
                    id="paint12_radial_1706_102555"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(90 67.03 211.47) scale(233.062)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#fff"></stop>
                    <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                  </radialGradient>
                  <radialGradient
                    id="paint13_radial_1706_102555"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(90 67.03 211.47) scale(233.062)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#fff"></stop>
                    <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                  </radialGradient>
                  <radialGradient
                    id="paint14_radial_1706_102555"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(90 67.03 211.47) scale(233.062)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#fff"></stop>
                    <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                  </radialGradient>
                  <radialGradient
                    id="paint15_radial_1706_102555"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(90 67.03 211.47) scale(233.062)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#fff"></stop>
                    <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                  </radialGradient>
                  <filter
                    id="filter0_f_1706_102555"
                    width="556.906"
                    height="556.904"
                    x="0.094"
                    y="0"
                    color-interpolation-filters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feGaussianBlur
                      result="effect1_foregroundBlur_1706_102555"
                      stdDeviation="50"
                    ></feGaussianBlur>
                  </filter>
                </defs>
              </svg>
              <li className="px-3 py-1 border border-white cursor-pointer  rounded-2xl h-fit list-none">
                Security
              </li>
            </div>
          </div>
          <div className="  flex gap-8">
            <div className="bg-gradient-to-br from-gray-200/10 to-transparent h-72 rounded-3xl p-4  flex w-1/2">
              github information
            </div>
            <div className="relative bg-gradient-to-br from-gray-200/10 to-transparent h-72 rounded-3xl overflow-hidden  flex w-1/2">
              <Image
                src="/images/bento_education.jpg"
                alt="12"
                width={1000}
                height={1000}
                className=" object-cover w-full h-full -z-1 "
              />
              <div className="p-4 backdrop-blur-md absolute bottom-0 h-20 w-full bg-black/40 tracking-wide">
                <span className="font-semibold">All-in-One Learning · </span>{" "}
                Now you can organise all your learning materials on one place
                and track your learning progress.
              </div>
            </div>
          </div>
        </section>

        <section className="h-fit my-10 flex items-start place-content-start ">
          <div className="flex gap-10 flex-col items-start place-content-start">
            <h4 className="text-4xl leading-normal text-left">
              Start learning for free with our <br /> best curated courses.
            </h4>
            <p className="text-lg w-3/4">
              Explore our expertly curated selection of free courses, designed
              by combining the best elements from various sources for an
              unbeatable learning experience.
            </p>
            <div className="flex flex-wrap gap-8 list-none px-20 lg:px-40">
              <TagItem item="Data Structures" />
              <TagItem item="Algorithms" />
              <TagItem item="Web Development" />
              <TagItem item="Machine Learning" />
              <TagItem item="Blockchain" />
              <TagItem item="Cloud Computing" />
              <TagItem item="UI UX Designing" />
              <TagItem item="Artificial Intelligence" />
              <TagItem item="more" />
            </div>
          </div>
        </section>

        <section className="h-fit  my-10  w-full  flex flex-row">
          {/* left  */}
          <div className=" flex flex-col gap-4  w-1/2">
            <div className=" flex flex-col gap-4">
              <h6
                className="bg-green-500/20 border border-green-400 px-4 py-1 rounded-full w-fit text-green-400
               "
              >
                Everything is
              </h6>
              <h4 className="text-4xl font-semibold">Built for you</h4>
            </div>
            {/* list of items */}
            <ul className="flex flex-col gap-2 ">
              <li className=" flex p-4 flex-col gap-2 bg-gray-500/10 rounded-xl">
                <h6>Explore Diverse Learning Paths</h6>
                <p>
                  Explore expert-curated courses to kickstart your learning
                  journey
                </p>
              </li>
              <li className=" flex p-4 flex-col gap-2 bg-gray-500/10 rounded-xl">
                <h6>Explore Diverse Learning Paths</h6>
                <p>
                  Create customized courses tailored to your interests and
                  goals.
                </p>
              </li>
              <li className=" flex p-4 flex-col gap-2 bg-gray-500/10 rounded-xl">
                <h6>Explore Diverse Learning Paths</h6>
                <p>
                  Engage in brain games for enhanced skills and cognitive
                  abilities.
                </p>
              </li>
            </ul>
          </div>
          {/* right */}
          <div className="flex w-1/2">hello</div>
        </section>
      </main>
    </main>
  );
}

const TagItem = ({ item }: any) => {
  return (
    <li className="hover:scale-105  transition-all ">
      <Link
        href={`/tags/`}
        className=" px-4 py-2 border border-white cursor-pointer rounded-2xl h-fit"
      >
        {item}
      </Link>
    </li>
  );
};
