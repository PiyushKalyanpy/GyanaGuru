import AiBanner from "./components/AiBanner";
import TopBar from "./components/TopBar";

const Course = () => {
    return (
        <div className="flex flex-col w-full bg-zinc-100 p-4 min-h-screen gap-8">
            <TopBar/>
            <AiBanner/>
        </div>
    );
}

export default Course;