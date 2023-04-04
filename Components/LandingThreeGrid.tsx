const LandingThreeGrid = () => {
  return (
    <div className="grid grid-cols-11 h-96 mx-20  gap-4 mb-20">
      {/* Showcase 1 */}
      <div className="flex  col-span-4 bg-[url('/images/landing0101.jpg')] bg-orange-50 rounded-3xl">
        <div className="flex flex-col justify-end items-end">
          <h1 className="text-2xl font-archivo bg-white rounded-3xl p-4 m-8  text-slate-900">{`Innovative platform  for modern education`}</h1>
        </div>
      </div>
      {/* Showcase 4 */}
      <div className=" flex col-span-4 bg-[url('/images/landing0102.jpg')] object-cover overflow-hidden bg-orange-100 rounded-3xl">
        <div className="flex flex-col justify-end items-end w-full">
          <h1 className="text-lg  font-archivo bg-orange-700/20 backdrop-blur-lg h-20 w-full text-white p-4">{`With our platform, you can learn anytime, anywhere, and at your own pace.`}</h1>
        </div>
      </div>
      {/* Showcase 3 */}
      <div className="col-span-3  bg-slate-200 rounded-3xl">
      <div className="flex flex-col justify-end items-end w-full">
          <h1 className="text-3xl font-archivo  text-slate-700 p-4 m-4">{`We provides accessible and affordable education for all with a wide range of courses and expert instructors.`}</h1>
        </div>
      </div>
    </div>
  );
};

export default LandingThreeGrid;
