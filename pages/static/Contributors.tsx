import React, { useEffect, useState } from 'react';
import ContCard from './ContCard';
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
             <div className="h-screen w-full">
            <PageHeader headingText=" Meet Our Contributors " onBackClick={onBackClick}/>
            <HeadingParagraph/>
            <div className='con_container ml-6 mr-6 flex flex-wrap justify-center items-center'>
                {contributors.map((contributor: { id: React.Key | null | undefined; avatar_url: any; login: any; contributions: any; html_url: any; }) => (
                   
                    <ContCard
                        key={contributor.id}
                        image={contributor.avatar_url}
                        title={contributor.login}
                        commits={contributor.contributions}
                        profile={contributor.html_url}
                        
                    />
                ))}
                
            </div>
            </div>
        </>
    );
};

export default Contributors;
