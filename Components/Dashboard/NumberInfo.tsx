const NumberInfo = ({ title, number, icon }: any) => {
  return (
    <div className="flex flex-col space-y-6 bg-white p-4 w-full h-fit rounded-xl hover:scale-[1.05] transition">
      {/* icon */}
      <div className="flex p-2 bg-zinc-100 w-fit h-fit rounded-xl">
        <span className="material-icons-outlined ">{icon}</span>
      </div>
      <div className="flex flex-col space-y-2">
        {/* number */}
        <div>
          <h3 className="font-bold text-3xl font-inter">{number}</h3>
        </div>

        {/* title */}
        <div>
          <p className="font-inter text-zinc-500 ">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default NumberInfo;
