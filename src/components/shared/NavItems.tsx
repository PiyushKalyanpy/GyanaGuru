import Link from "next/link";
import { NavLinks } from "@/constants";

const NavItems = () => {
  return (
    <ul className="flex-col md:flex-row flex gap-8 ">
      {NavLinks &&
        NavLinks.map((navLink, index) => (
         <li key={index}>
           <Link href={navLink.path} key={index}>
            {navLink.label}
          </Link>
         </li>
        ))}
    </ul>
  );
};

export default NavItems;
