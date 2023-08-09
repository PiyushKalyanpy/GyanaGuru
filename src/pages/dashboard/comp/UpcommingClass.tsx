const UpcommingClass = ({ time, title, progress, tasks }: any) => {
    return (
        <div>
            <div className="flex flex-col w-full h-fit bg-white rounded-2xl p-4 gap-4">
                <div className="flex justify-between items-center">
                    <div className="flex gap-4 items-center">
                        {/* adding a border with progress amount */}
                       
                        <div className=" flex w-12 h-12 bg-gray-100 rounded-full items-center justify-center">{progress}</div>
                        <div className="flex flex-col">
                            <div className="font-semibold">{time}</div>
                            <div className="">{title}</div>
                        </div></div>
                </div></div>

          
        </div>
    );
}

export default UpcommingClass;