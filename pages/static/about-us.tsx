import { PageHeader, HeadingParagraph } from "@/components/components";
import AboutUsData from "../../data/about_us.json";
import { useRouter } from "next/router";

const AboutUs = () => {
  const router = useRouter();
  const onBackClick = () => {
    router.back();
  };

  return (
    <div className="h-screen w-full">
      <PageHeader headingText="About Us" onClick={() => onBackClick()} />
      <HeadingParagraph />
      <div className="flex flex-col space-y-8 m-6">
        {AboutUsData.map((item: any, index: number) => {
          return <>{item && <HeadingParagraph key={index} data={item} />}</>;
        })}
      </div>
    </div>
  );
};

export default AboutUs;
