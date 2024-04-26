import Link from "next/link";

const HomeFooter = () => {
  return (
    <footer className="flex-col items-center justify-between px-40 py-8 text-gray-700 bg-gray-100 h-72">
      <div className="grid justify-between w-full h-full grid-cols-4 gap-8 ">
        {/* p1 */}
        <div className="flex flex-col gap-4 ">
          <p>
            Gyananguru is an Online Learning Management System where you can
            organise and track your learning.
          </p>
          <Link href="https://in.linkedin.com/in/piyush-kalyan">
            By Piyush Kalyan
          </Link>
        </div>
        {/* p2 */}
        <div className="flex flex-col "></div>
        {/* p3 */}
        <div className="flex flex-col "></div>
        {/* contact */}
        <div className="flex flex-col "></div>
      </div>
      <div className="flex items-center w-full place-content-center">
        &#169; Copyright Gyanaguru 2.0
      </div>
    </footer>
  );
};

export default HomeFooter;
