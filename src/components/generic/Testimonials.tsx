import Image from "next/image";

const Testimonials = (item: { item: string }) => {
  return (
    <div className="w-full p-4 border rounded-2xl ">
      <p>
        I think this is one of the best and most explanatory courses I have ever
        taken. I am not even halfway through and still learned tons of new
        things. Angela is a beautiful teacher, and I hope he will do more
        uploads like this one.
      </p>
      <div className="flex gap-2 ">
        <Image
          src=""
          alt="course"
          width={300}
          height={300}
          className="object-contain w-12 h-12 bg-gray-100 rounded-full"
        />
        <div className="flex flex-col ">
          <h3 className="">John</h3>
          <h4 className="">UI UX Designer</h4>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
