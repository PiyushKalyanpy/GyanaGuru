// pages/profile.tsx
import { NextPage } from 'next';
import { NextPageWithLayout } from '@/util/page';
import {
  PrimaryLayoutWithSidebar,
  DashboardSidebar,
} from '@/components/layouts/exporter';
import { useAuth } from '@/context/AuthContext';
import ProfileCard from '@/components/cards/ProfileCard';

interface ProfileProps {
  name: string;
  imageSrc: string;
  email: string;
  role: string;
}

const Profile: NextPageWithLayout<ProfileProps> = ({

}) => {
  const { currentUser } = useAuth();
  console.log(currentUser);
  const {name , photoURL, role, email} = currentUser;
  return (
    <section className='p-4 w-screen h-screen  bg-zinc-100 flex'>
      <ProfileCard name={name} imageSrc={photoURL} email={email} role={role} />
    </section>
  );
};

Profile.getLayout = page => {
  return <PrimaryLayoutWithSidebar>{page}</PrimaryLayoutWithSidebar>;
};

export default Profile;
