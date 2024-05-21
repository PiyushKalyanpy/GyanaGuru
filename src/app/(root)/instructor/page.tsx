"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Instructor = () => {
  const router = useRouter();
  return (
    <div className="flex w-full min-h-scree">
      <aside className="w-1/6 bg-black min-h-screen p-4 flex items-start">
        <Button
          className="bg-white text-black hover:bg-white/90 w-full text-start"
          onClick={() => router.push("/instructor/course")}
        >
          Create Course
        </Button>
      </aside>
    </div>
  );
};

export default Instructor;
