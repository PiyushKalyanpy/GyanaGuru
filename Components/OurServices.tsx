import Image from "next/image";

const OurServices = () => {
  return (
    <div className="relative pt-10 px-20">
      <Image
        className="absolute -top-20 right-0 w-full"
        src="/images/strings.svg"
        alt="Picture of the author"
        width={900}
        height={500}
      />

      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-4xl font-semibold font-archivo text-slate-900 p-4 my-20">{`Our Services`}</h1>

        <div className="grid grid-cols-6  gap-8 w-full items-center">
          <div className="col-span-2 flex items-center">
            <Image
              className="m-auto"
              src="/images/ourservices.png"
              alt="Picture of the author"
              width={400}
              height={400}
            />
          </div>
          <div className="col-span-4 flex flex-col p-10 space-y-8 mx-auto">
            <div>
              <h2 className="text-3xl  font-archivo text-slate-900 ">{`Sucess dosen't have to be hard`}</h2>
              <h2 className="text-3xl font-bold font-archivo text-slate-900 ">{`We make it easy.`}</h2>
            </div>
            <h2 className="text-xl font-archivo text-zinc-700 ">{`Get all types of courses`}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

const CourseCard = () => {
  
}

export default OurServices;
