"use client";
import Image from "next/image";
import Footer from "./ui/Footer";
import { MotionDiv } from "./UseClient_UIs";
import { BgAnimateButton } from "./ui/CultUI/AnimatedButtons";
import { useRef } from "react";

function HomePage() {
  const myRef = useRef<HTMLDivElement | null>(null);
  return (
    <div>
      <div className="h-screen flex items-center">
        <div className="flex justify-between w-full">
          <div className="ml-24 space-y-3">
            <div className="text-8xl">
              Block
              <span className="text-9xl text-red-400">X3</span>
            </div>
            <div className="text-2xl max-w-[60rem] text-gray-500">
              <span className="uppercase">Turning Ideas Into Reality: </span>
              Open-Source Innovation Through Community Collaboration
            </div>
            <div className="pt-6 space-x-10 ">
              <BgAnimateButton
                gradient="candy"
                animation="spin-fast"
                className="w-52"
                onClick={() =>
                  myRef.current?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Learn More
              </BgAnimateButton>
              <a href="https://linktr.ee/blockx3" target="_blank">
                <BgAnimateButton className="w-52 hover:bg-blue-300 hover:shadow-lg">
                  Connect With Us
                </BgAnimateButton>
              </a>
            </div>
          </div>
          <MotionDiv
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className=""
          >
            <Image
              src={"https://static.aaraz.me/blockx3/blockx3_nobg.png"}
              alt=""
              height={600}
              width={600}
              priority={true}
              className="h-[600px] w-[600px] mr-24 rounded-lg p-4"
            />
          </MotionDiv>
        </div>
      </div>
      <div className="h-screen flex flex-col justify-between" id="about">
        <div ref={myRef}>head</div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
