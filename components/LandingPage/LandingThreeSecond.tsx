import CourseData from '../../data/course_categories.json';
import ContributorsData from '../../data/contributors.json';
import Image from 'next/image';
// import Router from "next/router";
import Link from 'next/link';

const LandingThreeSecond = () => {
  return (
    <div className="grid grid-cols-10 w-full h-[580px] gap-4 mb-20 mt-40 dark:bg-neutral-950">
      {/* Showcase 01 */}
      <div className="flex  items-center col-span-3  bg-cover bg-[url('/images/landing0201.png')]">
        <Card01 />
      </div>
      {/* Showcase 02 */}
      <div className="flex items-end col-span-3 bg-cover bg-[url('/images/landing0202.png')]">
        <div className="flex w-full flex-col space-y-4 p-4 backdrop-blur-md bg-pink-500/10 ">
          {CourseData.slice(0, 4).map((item, index) => {
            return <LinkItem key={index} title={item.categoryName} />;
          })}
        </div>
      </div>
      {/* Showcase 03 */}
      <div className="flex col-span-4 bg-cover items-end bg-[url('/images/landing0203.png')]">
        <div className="flex w-full flex-col space-y-4 p-4   ">
          <Contributors />
        </div>
      </div>
    </div>
  );
};

const Card01 = () => {
  return (
    <div className="flex top-0 bg-pink-900/30 w-full h-fit items-center backdrop-blur-sm">
      <p className="m-auto text-white gap-4  ">
        <span className="felx font-archivo text-3xl text-white/80">
          Empowering{' '}
        </span>
        <span className="felx font-archivo text-6xl font-bold ">India </span>
        <br />
        <span className="felx font-archivo text-3xl text-white/80">
          through accessible
        </span>
        <br />
        <span className="felx font-archivo  text-4xl font-bold float-right ">
          education
        </span>
      </p>
    </div>
  );
};

const LinkItem = ({ title }: any) => {
  const handleClick = () => {};

  return (
    <div className="w-full border-b p-4 hover:bg-white/20 border-white">
      <a
        href="#"
        target="_blank"
        rel="noopener"
        className="flex justify-between"
      >
        <p className="text-white text-2xl font-archivo">{title}</p>
        <span className="material-icons text-white ">arrow_outward</span>
      </a>
    </div>
  );
};

const Contributors = () => {
  return (
    <div>
      <div>
        {/* <div className="flex flex-row -space-x-4 mb-4">
          {ContributorsData.contributors.map((item, index) => {
            return (
              <Image
                className="rounded-full border-2 border-white "
                src={item.imageUrl}
                width={60}
                height={60}
                alt={item.name}
                key={index}
              />
            )
          })}
        </div> */}
        <a
          href="https://github.com/PiyushKalyanpy/GyanaGuru/graphs/contributors"
          target="_blank"
          rel="noopener"
        >
          <img
            alt="Profile pictures of the contributers"
            src="https://contrib.rocks/image?repo=PiyushKalyanpy/GyanaGuru"
          />
        </a>
      </div>
      <LinkItem title="Our Contributors" />
    </div>
  );
};

export default LandingThreeSecond;
