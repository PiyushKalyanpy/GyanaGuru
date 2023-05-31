import { HomeSidebar } from "../Components/components";

const Profile = () => {
  return (
    <div className="grid grid-cols-12 w-full h-screen bg-white">
      <div className="col-span-2">
        <HomeSidebar pageNumber={3} />
      </div>
      User profile
    </div>
  );
};

export default Profile;
