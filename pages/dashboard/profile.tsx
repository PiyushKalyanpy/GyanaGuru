import ProfileCard from '@/components/cards/ProfileCard';
import { PrimaryLayoutWithSidebar } from '@/components/layouts/exporter';
import { NextPageWithLayout } from '@/util/page';

const Profile: NextPageWithLayout = () => {
  return (
    <section className='p-4'>
      <ProfileCard />
    </section>
  );
};

export default Profile;

Profile.getLayout = page => {
  return <PrimaryLayoutWithSidebar>{page}</PrimaryLayoutWithSidebar>;
};
