import Image from "next/image";
import Link from "next/link";

const Extra = () => {
    return (
        <div>
            


<section className="flex flex-row w-full my-10 h-fit">
{/* left  */}
<div className="flex flex-col w-1/2 gap-4 ">
  <div className="flex flex-col gap-4 ">
    <h6 className="px-4 py-1 text-green-400 border border-green-400 rounded-full bg-green-500/20 w-fit ">
      Everything is
    </h6>
    <h4 className="text-4xl font-semibold">Built for you</h4>
  </div>
  {/* list of items */}
  <ul className="flex flex-col gap-2 ">
    <li className="flex flex-col gap-2 p-4 bg-gray-500/10 rounded-xl">
      <h6>Explore Diverse Learning Paths</h6>
      <p>
        Explore expert-curated courses to kickstart your learning
        journey
      </p>
    </li>
    <li className="flex flex-col gap-2 p-4 bg-gray-500/10 rounded-xl">
      <h6>Explore Diverse Learning Paths</h6>
      <p>
        Create customized courses tailored to your interests and
        goals.
      </p>
    </li>
    <li className="flex flex-col gap-2 p-4 bg-gray-500/10 rounded-xl">
      <h6>Explore Diverse Learning Paths</h6>
      <p>
        Engage in brain games for enhanced skills and cognitive
        abilities.
      </p>
    </li>
  </ul>
</div>
{/* right */}
<div className="flex w-1/2">The right side</div>
</section>
        </div>
    );
}


export default Extra;

