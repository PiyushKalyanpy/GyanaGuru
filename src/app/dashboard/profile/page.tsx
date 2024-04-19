import Image from "next/image";

const ProfilePage = () => {
  const skills = [
    "UI UX designing ",
    "Web development",
    "Development",
    "Leadership",
  ];
  return (
    <div className="flex w-full h-screen p-4 overflow-y-scroll bg-zinc-100 place-content-center ">
      <div className="flex flex-col w-3/4 h-full gap-6 ">
        {/* profile header image */}
        <div className="flex flex-col w-full h-64 overflow-hidden bg-white rounded-2xl ">
          <div className="flex items-center gap-2 overflow-hidden h-1/2">
            <Image
              src="/new/profile-header.svg"
              width={500}
              height={500}
              alt="profile photo"
              quality={100}
              className="object-cover w-full h-full "
            />
          </div>
          <div className="flex items-start gap-2 h-1/2 ">
            <div className="flex p-4 ">
              <div className="flex p-1 -mt-20 border-8 border-white rounded-full ">
                <Image
                  src="/new/avatar.png"
                  width={500}
                  height={500}
                  alt="profile photo"
                  quality={100}
                  className="w-40 h-40 rounded-full "
                />
              </div>
            </div>
            <div className="flex items-center gap-2 py-2">
              <h2 className="text-3xl font-semibold">Piyush Kalyan</h2>
            </div>
          </div>
        </div>
        {/* skills */}
        <div className="flex flex-col w-full gap-4 p-4 bg-white h-fit rounded-2xl ">
          <h4 className="text-lg font-medium">Skills</h4>
          <div className="flex gap-4">
            {skills &&
              skills.map((skill) => {
                return (
                  <div key={skill}>
                    <SkillsTag key={skill} skill={skill} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillsTag = ({ skill }: any) => (
  <div>
    <p className="px-4 py-2 rounded-lg text-zinc-600 bg-zinc-100 ">{skill}</p>
  </div>
);

export default ProfilePage;
