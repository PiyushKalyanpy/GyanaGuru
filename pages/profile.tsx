import { HomeSidebar } from "../Components/components";

const Profile = () => {
  return (
    <div className="grid w-full h-screen grid-cols-12 bg-white">
      <div className="col-span-2">
        <HomeSidebar pageNumber={3} />
      </div>
      <div className="col-span-10 bg-zinc-100">User profile</div>
    </div>
  );
};

export default Profile;
