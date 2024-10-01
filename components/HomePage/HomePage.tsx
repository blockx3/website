"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import About from "./About";
// import FAQs from "./FAQs";
import { Button } from "../ui/button";
import FAQs from "./FAQs";

export default function HomePage() {
  const SecondRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white via-purple-300 to-pink-300 text-white overflow-hidden">
        <main className="container mx-auto px-4 lg:mt-28 lg:py-16 flex flex-col lg:flex-row items-center justify-between relative">
          <motion.div
            className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            transition={{
              duration: 20,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            transition={{
              duration: 20,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <div className="lg:w-1/2 mb-8 lg:mb-0 md:mt-10 z-10">
            <motion.div
              className="relative z-20  mt-5 mb-5 font-medium text-gray-700 font-sans tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-6xl md:text-5xl xl:text-8xl xl:pb-10 pb-6 relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r to-blue-600 from-green-500 lg:py-4">
                  <span className="font-bold lg:tracking-[1rem]">BlockX3</span>
                </div>
              </div>
              <div className="md:text-5xl text-2xl font-bold text-black dark:text-white font-sans tracking-tight">
                Turning Ideas into Reality
              </div>
            </motion.div>
            <motion.div
              className="text-lg md:text-xl lg:text-xl relative z-20 mt-5 mb-7 font-medium text-gray-700 font-sans tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Open-Source Innovation Through Community Collaboration
            </motion.div>
            <motion.div
              className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-4 gap-5 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Button
                onClick={() => {
                  SecondRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="min-w-40 relative p-5 bg-gradient-to-r from-blue-800 to-purple-600 text-white rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out focus:outline-none"
              >
                <motion.span
                  initial={{ y: 0 }}
                  animate={{ y: [-2, 0, -2] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Learn More
                </motion.span>
              </Button>
              <Button
                onClick={() => {
                  window.open("https://linktr.ee/blockx3", "_blank");
                }}
                variant={"secondary"}
                className="min-w-40 relative p-5 bg-white text-black rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out focus:outline-none"
              >
                Join the Community
              </Button>
            </motion.div>
          </div>
          <div className="lg:w-1/2 h-64 sm:h-72 lg:h-96 z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="flex justify-center w-full"
            >
              <Image
                src="https://static.aaraz.me/blockx3/blockx3_nobg.png"
                alt="Turning Ideas into Reality"
                height={500}
                width={500}
                priority={true}
                className="h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px] rounded-lg p-4 drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </main>
      </div>
      <div
        id="second"
        ref={SecondRef}
        className="w-full min-h-screen bg-gradient-to-b from-purple-200 to-pink-200"
      >
        {/* <About /> */}
        
        <FAQs />
      </div>
    </>
  );
}
