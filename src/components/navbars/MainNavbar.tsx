import Link from "next/link";

const MainNavbar = () => {
    return (
        <div>
            
        </div>
    );
}

const NavLinks = ({ navLinkStyle, handleNavLinkClick }: any) => {
    return (
        <div className='flex flex-col items-center gap-8  lg:flex-row transiton '>
            <Link
                className={navLinkStyle}
                href='/'
                onClick={() => handleNavLinkClick('')}
            >
                Home
            </Link>
        </div>
    )
}

export default MainNavbar;