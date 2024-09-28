"use client";
import Image from "next/image";
import Footer from "./ui/Footer";
import { MotionDiv } from "./UseClient_UIs";
import { BgAnimateButton } from "./ui/CultUI/AnimatedButtons";
import { useRef } from "react";
import FAQ from "./FAQ";
import About from "./About";

function HomePage() {
  const myRef = useRef<HTMLDivElement | null>(null);
  return (
    <div>
      <div className="h-screen flex items-center">
        <div className="flex md:flex-row flex-col justify-between w-full">
          <div className="flex md:order-last pt-7 md:pt-0 justify-center w-full">
            <MotionDiv
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className="flex justify-center w-full"
              >
                <Image
                  src={"https://static.aaraz.me/blockx3/blockx3_nobg.png"}
                  alt=""
                  height={600}
                  width={600}
                  priority={true}
                  className="md:h-[500px] md:w-[500px] h-[300px] w-[300px] rounded-lg p-4"
                />
              </MotionDiv>
          </div>
          <div className="md:ml-24 p-9 space-y-3 md:pt-24">
            <div className="md:text-8xl text-6xl">
              Block
              <span className="md:text-9xl text-7xl text-red-400">X3</span>
            </div>
            <div className="text-2xl max-w-[60rem] text-gray-500">
              <span className="uppercase">Turning Ideas Into Reality: </span>
              Open-Source Innovation Through Community Collaboration
            </div>
            <div className="pt-6 md:space-x-10 space-y-5">
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

        </div>
      </div>

      {/* Footer */}
      <div className="h-screen flex flex-col justify-between" id="about">
        <div ref={myRef} className="flex flex-col md:flex-row justify-center">
          <div className="md:w-1/2">
            <About />
          </div>
          <div>
            <FAQ />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
