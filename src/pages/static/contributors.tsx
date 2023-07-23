import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { BackNavButton } from '@/components/components';
const PAGE_SIZE = 17;

const Contributors = ({ contributorsData }: any) => {
  const router = useRouter();
  const [pageNumber, setPageNumber] = useState(1);
  const handlePreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(prevPageNumber => prevPageNumber - 1);
      router.push(`/static/contributors?page=${pageNumber - 1}`);
    }
  };
  const handleNextPage = () => {
    setPageNumber(prevPageNumber => prevPageNumber + 1);
    router.push(`/static/contributors?page=${Number(pageNumber) + 1}`);
  };

  const adminAndMentors = [
    {
      avatar_url: 'https://avatars.githubusercontent.com/u/79275157?v=4',
      login: 'Piyush Kalyan',
      userType: 'Project Admin',
    },
    {
      avatar_url: 'https://avatars.githubusercontent.com/u/10762218?v=4',
      login: 'Lalit Kumar',
      userType: 'Mentor',
    },
    {
      avatar_url: 'https://avatars.githubusercontent.com/u/89184872?v=4',
      login: 'Vaishnavi Mokadam',
      userType: 'Mentor',
    },
  ];

  return (
    <div className='w-screen h-screen p-8 py-8 space-y-4 overflow-y-scroll  bg-zinc-100'>
      <div className='flex flex-col md:flex-row md:items-center space-x-4 justify-between'>
        <div className='flex space-x-4'>
          <BackNavButton />
          <h1 className='mb-6 text-3xl font-bold'>Contributors</h1>
        </div>
        <div className='flex justify-between mt-4 space-x-4  flex-rowitems-center'>
          <button
            onClick={handlePreviousPage}
            disabled={pageNumber === 1}
            className='px-4 py-2 text-white bg-black rounded-full border-black '
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={contributorsData.length < PAGE_SIZE}
            className='px-4 py-2 text-white bg-black rounded-full border-black '
          >
            Next
          </button>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 w-fit self-center'>
      {adminAndMentors.map((contributor: any) => {
          return (
            <UserCard
              key={contributor.login}
              login={contributor.login}
              avatar_url={contributor.avatar_url}
              userType={contributor.userType}
            />
          );
        })}
      </div>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
        
        {contributorsData.map((contributor: any) => {
          return (
            <UserCard
              key={contributor.id}
              login={contributor.login}
              avatar_url={contributor.avatar_url}
              contributionsURL={contributor.contributions_url}
              numReposContributed={contributor.contributions}
            />
          );
        })}
      </div>
      </div>
    </div>
  );
};
const UserCard = ({
  login,
  avatar_url,
  userType,
  contributionsURL,
  numReposContributed,
}: any) => {
  const color =
    userType && userType === 'Project Admin'
      ? 'bg-cyan-100 text-cyan-800'
      : 'bg-violet-100 text-violet-800';

  return (
    login != 'PiyushKalyanpy' ? (
      <div className='relative p-4 transition bg-white rounded-2xl hover:scale-105'>
        {/* {userType && (
          <div className=' cursor-pointer absolute top-4 right-4  p-2 text-xs font-bold text-white bg-blue-100  rounded-full hover:scale-110 transition '>
            <div className='flex items-center'>
              <span className='material-symbols-outlined text-blue-600 m-auto -rotate-45'>
                link
              </span>
            </div>
          </div>
        )} */}
        <div className='flex space-y-2  flex-col  items-center'>
          <img
            src={avatar_url}
            alt={`Profile of ${login}`}
            className='w-16 h-16 mx-auto mb-4 rounded-full'
          />
          {
            // tag
            (userType && userType === 'Project Admin') ||
            userType === 'Mentor' ? (
              <div
                className={`px-2 text-violet-600 bg-violet-100  rounded-full ${color}`}
              >
                {userType}
              </div>
            ) : (
              <div className='px-2 text-zinc-900 bg-zinc-100  rounded-full'>
                Contributor
              </div>
            )
          }
          <h2 className='text-xl font-semibold text-center font-urbanist'>
            {login}
          </h2>
        </div>
      </div>
    ) : null
  );
};
export default Contributors;
export async function getServerSideProps (context: any) {
  const page = context.query.page || 1;
  try {
    const response = await axios.get(
      `https://api.github.com/repos/PiyushKalyanpy/GyanaGuru/contributors?page=${page}&per_page=${PAGE_SIZE}`,
      {
        headers: {
          Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_API_TOKEN}`,
        },
      },
    );
    const contributorsData = response.data;
    return {
      props: {
        contributorsData,
      },
    };
  } catch (error: any) {
    console.error('Error fetching data from GitHub API:', error.message);
    return {
      props: {
        contributorsData: [],
      },
    };
  }
}
