import Link from "next/link";
import { useRouter } from "next/router";
import { DarkModeToggle } from "../components";

const LandingNav = () => {
  const router = useRouter();
  const navLinkStyle =
    "font-archivo relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black dark:after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:rounded-full after:duration-500 after:origin-center";

  const handleGetStartedClick = () => {
    router.push("/login");
  };

  const handleClick = () => {
    router.push("/");
  };

  const handleCoursesClick = () => {
    const courseSection = document.getElementById("courses");
    if (courseSection) {
      courseSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOurServicesClick = () => {
    const ourservicesSection = document.getElementById("ourservices");
    if (ourservicesSection) {
      ourservicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBenefitsClick = () => {
    const benefitsSection = document.getElementById("whychooseus");
    if (benefitsSection) {
      benefitsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handlecontactusclick = () => {
    const contactsection = document.getElementById("contactUs");
    if (contactsection) {
      contactsection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-0 z-20 w-full border-b-2 border-white bg-white/30 backdrop-blur-md dark:bg-neutral-950/50 dark:border-zinc-700">
      <div className="flex flex-row items-center justify-between w-full px-20 py-4 ">
        {/* Logo with Title */}
        <div
          className="flex flex-row items-center cursor-pointer"
          onClick={handleClick}
        >
          <img src="./logo.svg" alt="logo" className="dark:hidden" />
          <img
            src="./logodark.svg"
            alt="dark mode logo"
            className="hidden dark:block"
          />
          <h1 className="text-lg font-semibold font-archivo ">GyanaGuru</h1>
        </div>
        {/* Nav Links */}
        <div className="flex flex-row items-center gap-8">
          <Link className={navLinkStyle} href="#">
            Home
          </Link>
          <Link
            className={navLinkStyle}
            href="about-us"
            onClick={handleCoursesClick}
          >
            About Us
          </Link>
          <Link
            className={navLinkStyle}
            href="#ourservices"
            onClick={handleOurServicesClick}
          >
            Our Services
          </Link>
          <Link
            className={navLinkStyle}
            href="#benefits"
            onClick={handleBenefitsClick}
          >
            Benefits
          </Link>
          <Link
            className={navLinkStyle}
            href="#contactUs"
            onClick={handlecontactusclick}
          >
            Contact Us
          </Link>
          <Link className={navLinkStyle} href="/static/faq">
            {/* adding badge on div for new */}
            <div>FAQ</div>
          </Link>
        </div>
        {/* Get Started Button and Dark Mode Button*/}
        <div className="flex flex-row gap-4 items-center">
          <div
            onClick={handleGetStartedClick}
            className="flex flex-row items-center gap-4 p-1 border-2 border-black rounded-full cursor-pointer dark:border-zinc-50"
          >
            <h4 className="ml-2 font-medium ">Get Started</h4>
            <span className="p-2 text-white bg-black dark:text-zinc-800 dark:bg-zinc-50  rounded-full material-icons">
              arrow_outward
            </span>
          </div>
          <div className="mt-1">
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};



export default LandingNav;
