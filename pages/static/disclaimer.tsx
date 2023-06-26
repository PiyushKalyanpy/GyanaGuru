import { PageHeader, HeadingParagraph } from '@/components/components';
import DisclaimerData from '../../data/disclaimer.json';
import { useRouter } from 'next/router';

const Disclaimer = () => {
  const router = useRouter();
  const onBackClick = () => {
    router.back();
  };

  return (
    <div className="h-screen w-full">
      <PageHeader headingText="Disclaimer" onClick={() => onBackClick()} />
      <HeadingParagraph />
      <div className="flex flex-col space-y-8 m-6">
        {DisclaimerData.map((item: any, index: number) => {
          return <>{item && <HeadingParagraph key={index} data={item} />}</>;
        })}
      </div>
    </div>
  );
};

export default Disclaimer;
