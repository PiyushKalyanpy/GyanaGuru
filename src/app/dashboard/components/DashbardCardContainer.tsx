import dynamic from "next/dynamic";
const BecomeAnInstructor = dynamic(() => import("./BecomeAnInstructor"), { ssr: false });

const DashbardCardContainer = () => {
    return (
        <div>
            <BecomeAnInstructor/>
        </div>
    );
}

export default DashbardCardContainer;