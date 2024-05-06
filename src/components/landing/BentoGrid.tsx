import Image from "next/image";
const BentoGrid = () => {
  return (
    <section className="flex flex-col gap-8 ">
      <div className="flex gap-8">
        <div
          id="bento"
          className="flex flex-row items-center w-3/4 gap-4 overflow-hidden bg-gray-100 h-96 rounded-3xl place-content-center"
        >
          <div className="flex flex-col items-end w-1/2 h-full gap-4 p-8 ">
            <h5 className="text-3xl text-gray-800 ">
              All your learning resorces at one place
            </h5>
            <p className="text-gray-500">
              Organise and track your learning by importing data from different
              learning resources.
            </p>
          </div>
          <Image
            src="/images/all_content.svg"
            alt="12"
            width={300}
            height={300}
            className="w-1/2 p-10 -mr-10 "
          />
        </div>
        <div className="relative flex w-1/4 overflow-hidden bg-gray-100 h-96 rounded-3xl">
          <Image
            src="/images/smiling_girl.jpg"
            alt="12"
            width={500}
            height={500}
            className="object-cover w-full h-full "
          />
          <div className="absolute bottom-0 flex items-end object-cover w-full h-40 bg-gradient-to-t from-zinc-400 to-transparent">
            <div className="p-4 text-white ">
              <span className="text-2xl">
                Little progress <br /> each day
              </span>
            </div>
          </div>
          <div className="absolute flex flex-wrap w-12 gap-2 m-4 border h-fit ">
            <div className="w-4 h-4 bg-white rounded-full " />
            <div className="w-4 h-4 rounded-full bg-white/50" />
            <div className="w-4 h-4 rounded-full bg-white/60" />
          </div>
        </div>
      </div>
      <div className="flex gap-8 ">
        <div className="relative flex items-center w-1/2 overflow-hidden bg-gray-100 h-72 rounded-3xl place-content-center">
          <Image
            src="/images/connect_bento.svg"
            alt="12"
            width={1000}
            height={1000}
            className="absolute object-cover w-full h-full -z-1"
          />
          <h5 className="z-10 flex text-3xl text-gray-600">
            Connect and collaborate
          </h5>
        </div>
        <div className="relative flex flex-col w-1/2 gap-2 overflow-hidden bg-gray-100 h-72 rounded-3xl">
          <Image
            src="/images/github_bento.svg"
            alt="12"
            width={1000}
            height={1000}
            className="absolute object-cover w-full h-full -z-1"
          />
          <div className="flex flex-col gap-4 m-4">
            <div className="z-10 flex flex-col w-56 p-4 list-none cursor-pointer bg-white/50 backdrop-blur-sm rounded-2xl h-fit ">
              <h3 className="text-4xl font-medium">130+</h3>
              <span className="text-gray-500">forks</span>
            </div>
            <div className="z-10 flex flex-col w-56 p-4 list-none cursor-pointer bg-white/50 backdrop-blur-sm rounded-2xl h-fit ">
              <h3 className="text-4xl font-medium">60+</h3>
              <span className="text-gray-500">Stars</span>
            </div>
            <div className="z-10 flex flex-col w-56 px-4 py-2 list-none cursor-pointer backdrop-blur-sm rounded-2xl h-fit ">
              <span className="text-gray-600">How can i contribute?</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
