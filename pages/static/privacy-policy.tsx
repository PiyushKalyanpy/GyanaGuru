import { PageHeader, HeadingParagraph } from "@/Components/components";
import PrivacyPolicy from "../../data/privacy_policy.json";
import { useRouter } from "next/router";

const PrivacyPolcy = () => {
  const router = useRouter();
  const onBackClick = () => {
    router.back();
  };

  return (
    <div className="h-screen w-full">
      <PageHeader headingText="Privacy Policy" onClick={() => onBackClick()} />
      <HeadingParagraph />
      <div className="flex flex-col space-y-8 m-6">
        {PrivacyPolicy.map((item: any, index: number) => {
          return <>{item && <HeadingParagraph key={index} data={item} />}</>;
        })}
      </div>
    </div>
  );
};

export default PrivacyPolcy;
