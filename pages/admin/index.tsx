import {
  Sidebar,
  AddCourse,
  UpdateCourse,
  StudentReport,
  ManageSite,
  DeleteCourse,
} from "../../Components/Admin/allcomponents";
import { useState } from "react";

const Admin = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="grid w-screen h-screen grid-cols-12 bg-zinc-100">
      {/* sidebar */}
      <div className="col-span-2 shadow-2xl shadow-zinc-200">
        <Sidebar pageNumber={1} active={active} setActive={setActive} />
      </div>

      {/* main content */}
      <div className="col-span-10 ">
        {(() => {
          if (active == 1) return <AddCourse />;
          if (active == 2) return <UpdateCourse />;
          if (active == 3) return <DeleteCourse />;
          if (active == 4) return <StudentReport />;
          if (active == 5) return <ManageSite />;
        })()}
      </div>
    </div>
  );
};

export default Admin;
