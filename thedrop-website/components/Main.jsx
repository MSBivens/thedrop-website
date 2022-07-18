import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/assets/logo.png";

const Main = () => {
  return (
    <div id="home" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-1">
          <h2 className="py-4">What is TheDrop?</h2>
          <p className="py-2">
            TheDrop is a weekly newsletter bringing NFT collectors and retail
            traders the best tools, resources, news recaps, and events every
            week.
          </p>
          <p className="py-2">
            Don&#39;t miss another edition of TheDrop every Wednesday morning,
            sign up here!
          </p>
          <Link href="https://exceptional-trailblazer-5115.ck.page/dbb174c28c">
            <button className="w-full p-4 mt-4">Subscribe Now</button>
          </Link>
        </div>
        <div className="col-span-2 w-full h-auto m-auto rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src={Logo} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Main;
