import { HomeSidebar } from "../Components/components";

const Profile = () => {
  return (
    <div className="grid grid-cols-12 w-full h-screen bg-white">
      <div className="col-span-2">
        <HomeSidebar pageNumber={3} />
      </div>
      <div className="bg-zinc-100 col-span-10" >

      User profile
      </div>
    </div>
  );
};

export default Profile;
