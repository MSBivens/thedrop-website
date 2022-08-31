import React from "react";
import Link from "next/link";
import Image from "next/image";
import RoadmapImg from "../public/assets/roadmap.png";

const Roadmap = () => {
  return (
    <div className="max-w-[1240px] m-auto gap-8 py-8">
      <div className="m-auto col-span-1 pb-8 w-1/2">
        <p>
          TheDrop is under active development and is frequently updating and
          testing features for the platforms tools. It is possible you will
          encounter bugs and some information may not display properly. You can
          submit feedback and report issues using this{" "}
          <Link href="https://ra36hy95app.typeform.com/to/gvl7paQS">form</Link>.
        </p>
      </div>
      <div className="col-span-2 w-full h-auto m-auto rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
        <Image className="rounded-xl" src={RoadmapImg} alt="/" />
      </div>
    </div>
  );
};

export default Roadmap;
