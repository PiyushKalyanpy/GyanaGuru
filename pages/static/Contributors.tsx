import React, { useEffect, useState } from 'react';

import { useRouter } from "next/router";
import { PageHeader, HeadingParagraph } from "@/components/components";
const Contributors = () => {
    
    const router = useRouter();

  const onBackClick = () => {
    router.back();
  };
  const [contributors, setContributors] = useState([]);

    const fetchContributors = async () => {
        const url = 'https://api.github.com/repos/PiyushKalyanpy/GyanaGuru/contributors';

        try {
            const response = await fetch(url);
            if (response.ok) {
                const contributorsData = await response.json();
                const contributorsDataFiltered = contributorsData.filter(
                    (contributor: { login: string | string[]; }) => !contributor.login.includes('dependabot[bot]')
                );
                setContributors(contributorsDataFiltered);
            } else {
                console.error('Failed to fetch contributors:', response.status);
            }
        } catch (error) {
            console.error('Error fetching contributors:', error);
        }
    };

    useEffect(() => {
        fetchContributors();
    }, []);

       return (
        <>
             <div className="  text-center">
            <PageHeader  headingText=" Meet Our Contributors " onBackClick={onBackClick} />
            <HeadingParagraph/>
            </div>
            <div className='con_container ml-6 mr-6 flex flex-wrap justify-center items-center'>
          {contributors.map((contributor) => (
          
          
              <img src={contributor.avatar_url} alt={contributor.login} className='profile rounded-full ml-2 mt-4  hover:scale-110 drop-shadow-xl ' width="100" height="100" />
             
          
          ))}
        </div>
        
        </>
    );
};


export default Contributors;
