import Image from "next/image";
import Link from "next/link";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

const LandingFooter = () => {
  const hoverEffect =
    "group flex items-center transition ease-out duration-200 hover:text-black";

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-zinc-700">
      <div className="w-80vw mx-auto max-w-1200px">
        {/* <Image width={40} height={40} src="./logo.svg" alt="logo" /> */}
        <div role="navigation" className="flex justify-around flex-wrap">
          <div className="mb-6 mt-8">
            <div role="heading" aria-level={1} className="font-bold text-lg mb-3 text-black text-opacity-90 dark:text-zinc-50">
              Quick Links
            </div>
            <ul role="list" className="list-none m-0 p-0">
              <li role="listitem" className="leading-8 text-base text-black text-opacity-80 dark:text-zinc-50">
                <Link href="/" className={hoverEffect}>
                  Home
                </Link>
              </li>
              <li role="listitem" className="leading-8 text-base text-black text-opacity-80 dark:text-zinc-50">
                <Link href="/static/about-us" className={hoverEffect}>
                  About Us
                </Link>
              </li>
              <li role="listitem" className="leading-8 text-base text-black text-opacity-80 dark:text-zinc-50">
                <Link href="/OurServices" className={hoverEffect}>
                  Our Services
                </Link>
              </li>
              <li role="listitem" className="leading-8 text-base text-black text-opacity-80 dark:text-zinc-50">
                <Link href="/" className={hoverEffect}>
                  Benefits
                </Link>
              </li>
              <li role="listitem" className="leading-8 text-base text-black text-opacity-80 dark:text-zinc-50">
                <Link href="/faq" className={hoverEffect}>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-24 mt-8">
            <div className="font-bold text-lg mb-3 text-black text-opacity-90 dark:text-zinc-50">
              Community
            </div>
            <ul role="list" aria-label="List of Social Links">
              <li role="listitem" className="leading-8 text-base text-black text-opacity-80 dark:text-zinc-50">
                <a
                  href="https://github.com/PiyushKalyanpy/GyanaGuru"
                  aria-label="Follow me on Github"
                  target="_blank"
                  className={hoverEffect}
                  role="link"
                >
                  <AiFillGithub className="mr-1" />
                  Github
                </a>
              </li>
              <li role="listitem" className="leading-8 text-base text-black text-opacity-80 dark:text-zinc-50">
                <a
                  href="#"
                  aria-label="Follow me on Twitter"
                  className={hoverEffect}
                  role="link"
                >
                  <AiFillTwitterCircle className="mr-1 transition ease duration-200 group-hover:text-sky-500" />
                  Twitter
                </a>
              </li>
              <li role="listitem" className="leading-8 text-base text-black text-opacity-80 dark:text-zinc-50">
                <a
                  href="https://www.linkedin.com/in/piyush-kalyan/"
                  aria-label="Follow me on Linkedin"
                  className={hoverEffect}
                  role="link"
                >
                  <AiFillLinkedin className="mr-1 transition ease duration-200 group-hover:text-sky-600" />
                  Linkedin
                </a>
              </li>
              <li role="listitem" className="leading-8 text-base text-black text-opacity-80 dark:text-zinc-50">
                <a
                  href="#"
                  aria-label="Follow me on Instagram"
                  className={hoverEffect}
                  role="link"
                >
                  <AiFillInstagram className="mr-1 transition ease duration-200 group-hover:text-rose-500" />
                  Instagram
                </a>
              </li>
              <li role="listitem" className="leading-8 text-base text-black text-opacity-80 dark:text-zinc-50">
                <a
                  href="#"
                  aria-label="Follow me on Facebook"
                  className={hoverEffect}
                  role="link"
                >
                  <AiFillFacebook className="mr-1 transition ease duration-200 group-hover:text-blue-700" />
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-24 mt-8">
            <div role="heading" aria-level={1} className="font-bold text-lg mb-3 text-black text-opacity-90 dark:text-zinc-50">
              Help
            </div>
            <ul>
              <li className="leading-8 text-base text-black text-opacity-80 dark:text-zinc-50">
                <a
                  href="https://github.com/PiyushKalyanpy/GyanaGuru/issues"
                  target="_blank"
                  className={hoverEffect}
                  role="link"
                  aria-label="Navigation Link"
                >
                  Github Issues
                </a>
              </li>
              <li className="leading-8 text-base text-black text-opacity-80 dark:text-zinc-50">
                <a
                  href="https://github.com/PiyushKalyanpy/GyanaGuru/"
                  className={hoverEffect}
                  target="_blank"
                  role="link"
                  aria-label="Navigation Link"
                >
                  Contribution
                </a>
              </li>
              <li className="leading-8 text-base text-black text-opacity-80 dark:text-zinc-50">
                <a
                  href="https://github.com/PiyushKalyanpy/GyanaGuru/discussions"
                  className={hoverEffect}
                  target="_blank"
                  role="link"
                  aria-label="Navigation Link"
                >
                  Github Discussions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div role="article" className="flex flex-row justify-center w-full border-y-2 items-center gap-8 border-black  ">
        <div className="flex flex-row items-center">
          <Image
            width={40}
            height={40}
            src="./logo.svg"
            alt="logo"
            className="dark:hidden"
            role="img"
            aria-label="Light Logo"
          />
          <Image
            width={40}
            height={40}
            src="./logodark.svg"
            alt="logo"
            className="hidden dark:block"
            role="img"
            aria-label="Dark Logo"
          />
          <h1 className="font-archivo font-semibold text-lg ">
            <a role="link" href="#">GyanaGuru</a>
          </h1>
        </div>
        <p>© {currentYear} Gyana Guru. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default LandingFooter;
