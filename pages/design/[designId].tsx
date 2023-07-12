import React, { useContext, useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import designsData from '../../data/designs.json';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { CourseContext } from '@/context/CourseContext';
import { fetchIssueData } from '@/util/githubData';

const DesignShowcase = () => {
  const router = useRouter();
  const { designId } = router.query;
  const { fetchDesign, design } = useContext(CourseContext);

  useEffect(() => {
    fetchDesign();
  }, []);

  if (!design) {
    return (
      <div>
        <h3>
          Loading... Please wait a while
          {/* <Link href='/design' className='text-blue-600  underline px-1'>
            Back
          </Link>
          to the previous page */}
        </h3>
      </div>
    );
  }
  const designData = design[designId as string];

  const { id, iframeUrl, issueUrl, implementationUrl } = designData;

  return (
    <div className='flex space-y-8 w-screen overflow-y-scroll bg-zinc-100 min-h-screen border-10 border-black h-full flex-col p-8 items-center'>
      {/* <GitHubComponent issueNumber={issueUrl} /> */}
      <div className='w-3/4 h-screen'>
        <h2 className='text-6xl font-archivo font-bold  text-zinc-800 p-6'>
          Design
        </h2>
        <iframe
          className='border border-gray-300 rounded-lg shadow-md w-full h-3/4'
          src={iframeUrl}
          onLoad={e => console.log('🎉🎉')}
          allowFullScreen
        ></iframe>
      </div>
      <div id={`${id}/implemention`} className='w-3/4 h-screen'>
        <h2 className='text-6xl font-archivo font-bold  text-zinc-800 p-6'>
          Implementation Guide
        </h2>
        <iframe
          className='border border-gray-300 rounded-lg shadow-md w-full h-3/4'
          src={implementationUrl}
          onLoad={e => console.log('🎉🎉')}
          allowFullScreen
        ></iframe>
      </div>
      <div>{/* connected issue on github */}</div>
    </div>
  );
};

const GitHubComponent = (issueNumber: any) => {
  const [issue, setIssue] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchIssue = async () => {
      const issue = await fetchIssueData(issueNumber);
      setIssue(issue);
    };
    console.log('issue');
    console.log(issue?.assignee);
    fetchIssue();
  }, []);

  return (
    <div className='flex flex-col h-36 bg-white rounded-3xl p-4 shadow-xl shadow-zinc-200/30  w-3/4 '>
      {/* Assigned to  */}
      <div className='flex h-fit'>
        <h4>Assigned to</h4>
        <div className='flex items-center'>
          <img
            src={issue?.assignee?.avatar_url}
            className='w-12 h-12 rounded-full border border-zinc-400 '
          />
          <p className='ml-2'>{issue?.assignee?.login}</p>
        </div>
      </div>
      {/* Labels */}
      <div className='mb-4'>
        <span className='font-semibold'>Labels:</span>
        {issue?.labels &&
          issue.labels.map((label: any) => (
            <span
              key={label.id}
              className='inline-block bg-gray-200 text-gray-800 rounded-full px-2 py-1 text-sm mr-2'
              style={{
                backgroundColor: `rgba(${parseInt(
                  label.color.slice(0, 2),
                  16,
                )}, ${parseInt(label.color.slice(2, 4), 16)}, ${parseInt(
                  label.color.slice(4, 6),
                  16,
                )}, 0.5)`,
              }}
            >
              {label.name}
            </span>
          ))}
      </div>
    </div>
  );
};
export default DesignShowcase;
