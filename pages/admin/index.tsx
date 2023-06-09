import {Sidebar } from "../../Components/Admin/allcomponents";

const Admin = () => {
    return (
        <div className="grid grid-cols-12 w-screen h-screen bg-zinc-100">
        {/* sidebar */}
        <div className="col-span-2 shadow-2xl shadow-zinc-200">
            <Sidebar />
            </div>
            {/* main content */}
            <div className="col-span-10 ">
                <div className="flex flex-col items-center justify-center w-full h-full">
                    <h1 className="text-3xl font-bold text-zinc-900">Admin</h1>
                    </div></div>
        </div>
    );
}

export default Admin;