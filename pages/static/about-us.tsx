import { PageHeader, HeadingParagraph } from "@/components/components";
import AboutUsData from "../../data/about_us.json";
import { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";
import styles from "./style.module.css";
const AboutUs = () => {
    const router = useRouter();
    const onBackClick = () => {
      router.back();
    };
  
    return (
      <div className=" w-full relative" style={{backgroundColor:""}}>
        <div className="h-28 w-full bg-slate-300 text-7xl text-center py-4 font-medium tracking-wide " style={{fontFamily:"fantasy"}}>
            About Us
        </div>
        <div className="absolute top-8 left-3.5" onClick={() => onBackClick()} >
            <BiArrowBack className="text-4xl font-bold"/>
        </div>
          {/* below area */}

        <div className={` w-full justify-around ${styles.flexrow}`}>
          <div className={`mx-6 mt-8 bg-amber-60 py-6 px-6 rounded-lg text-justify text-xl ${styles.shadow2} ${styles.res2}`}>
            <div className="text-5xl pb-4 font-semibold  ">
            {AboutUsData[0].heading}
            </div>
              {AboutUsData[0].paragraph}
          </div>
          <div className={` mx-6 mt-8  bg-amber-60 py-6 px-6 rounded-lg text-justify text-xl ${styles.shadow2} ${styles.res2}`}>
            <div className="text-5xl pb-4 font-semibold  ">
            {AboutUsData[1].heading}
            </div>
              {AboutUsData[1].paragraph}
          </div>
        </div>

        <div className={`px-6 mx-6 py-4 my-8 text-5xl font-semibold  bg-amber-20 rounded-lg ${styles.shadow2} ${styles.flexrow} border-2  `}>
            {AboutUsData[2].heading}
          <div className="py-3 text-xl font-semibold px-1">
          {AboutUsData[2].paragraph}
          </div>
          <div className={`flex justify-between ${styles.flexrow} p-0`}>
          {
            AboutUsData[2].subheading?.map((elem,index)=>{
              return <div className={`text-3xl rounded-2xl pt-3 pb-4 my-2  ${styles.w30} ${styles.p1} ${styles.shadow2}`}>
                <div className="pb-2">
                {elem.heading}
                </div>
                <div className="text-base font-normal mt-2">
                  {elem.paragraph}
                </div>
              </div>
            })
          }
          </div>
        </div>

      </div>
    );
}

export default AboutUs;