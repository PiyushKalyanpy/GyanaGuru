import { Link } from "react-scroll";
import { useRouter } from "next/router";

const LandingNav = () => {
  const router = useRouter();
  const navLinkStyle =
    "font-archivo relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:rounded-full after:duration-500 after:origin-center";
  const handleGetStartedClick = () => {
    router.push("/login");
  };
  const handleClick = () => {
    router.push("/");
  };
  return (
    <div className="sticky top-0 z-20 w-full border-b-2 border-white bg-white/30 backdrop-blur-md">
      <div className="flex flex-row items-center justify-between w-full px-20 py-4 ">
        {/* Logo with Title */}
        <div
          className="flex flex-row items-center cursor-pointer"
          onClick={handleClick}
        >
          <img src="./logo.svg" alt="logo" />
          <h1 className="text-lg font-semibold font-archivo ">GyanaGuru</h1>
        </div>
        {/* Nav Links */}
        <div className="flex flex-row items-center gap-8">
          <Link
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={navLinkStyle}
            activeClass="active"
            to="home"
          >
            Home
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={navLinkStyle}
            activeClass="active"
            to="courses"
          >
            Courses
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={navLinkStyle}
            activeClass="active"
            to="ourservices"
          >
            Our Services
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={navLinkStyle}
            activeClass="active"
            to="whychooseus"
          >
            Benefits
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={navLinkStyle}
            activeClass="active"
            to="faq"
          >
            {/* adding badge on div for new */}
            <div>
              FAQ
              <span className="absolute px-1 py-1 ml-2 text-xs text-white bg-red-500 rounded-full -top-2">
                {/* on hover show popup - attention needed */}
                <div className="w-2 h-2 shadow-xl shadow-red-100"></div>
              </span>
            </div>
          </Link>
        </div>
        {/* Get Started Button */}
        <div
          onClick={handleGetStartedClick}
          className="flex flex-row items-center gap-4 p-1 border-2 border-black rounded-full cursor-pointer"
        >
          <h4 className="ml-2 font-medium">Get Started</h4>
          <span className="p-2 text-white bg-black rounded-full material-icons">
            arrow_outward
          </span>
        </div>
      </div>
    </div>
  );
};

export default LandingNav;
