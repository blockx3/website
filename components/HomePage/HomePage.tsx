'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
// import About from "./About";
import FAQs from './FAQs';
import { Button } from '../ui/button';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import { Vision } from './Vision';
export default function HomePage() {
  const SecondRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <div className="min-h-screen overflow-hidden bg-gradient-to-b from-white via-purple-300 to-pink-300 text-white">
        <main className="container relative mx-auto flex flex-col items-center justify-between px-4 lg:mt-28 lg:flex-row lg:py-16">
          <motion.div
            className="absolute left-0 top-0 h-48 w-48 rounded-full bg-purple-400 opacity-70 mix-blend-multiply blur-xl filter sm:h-64 sm:w-64"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ['20%', '20%', '50%', '50%', '20%'],
            }}
            transition={{
              duration: 20,
              ease: 'easeInOut',
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-green-300 opacity-70 mix-blend-multiply blur-xl filter sm:h-64 sm:w-64"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ['20%', '20%', '50%', '50%', '20%'],
            }}
            transition={{
              duration: 20,
              ease: 'easeInOut',
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
          <div className="z-10 mb-8 md:mt-10 lg:mb-0 lg:w-1/2">
            <motion.div
              className="relative z-20 mb-5 mt-5 font-sans font-medium tracking-tight text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative mx-auto inline-block w-max pb-6 text-6xl [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))] md:text-5xl xl:pb-10 xl:text-8xl">
                <div className="relative bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text bg-no-repeat text-transparent lg:py-4">
                  <span className="font-bold lg:tracking-[1rem]">BlockX3</span>
                </div>
              </div>
              <div className="font-sans text-2xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
                Turning Ideas into Reality
              </div>
            </motion.div>
            <motion.div
              className="relative z-20 mb-7 mt-5 font-sans text-lg font-medium tracking-tight text-gray-700 md:text-xl lg:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Open-Source Innovation Through Community Collaboration
            </motion.div>
            <motion.div
              className="mt-4 flex flex-col gap-5 space-y-1 sm:flex-row sm:space-x-4 sm:space-y-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Button
                onClick={() => {
                  SecondRef.current?.scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
                className="relative min-w-40 rounded-full bg-gradient-to-r from-blue-800 to-purple-600 p-5 text-white shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl focus:outline-none"
              >
                <motion.span
                  initial={{ y: 0 }}
                  animate={{ y: [-2, 0, -2] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  Learn More
                </motion.span>
              </Button>
              <Button
                onClick={() => {
                  window.open('https://linktr.ee/blockx3', '_blank');
                }}
                variant={'secondary'}
                className="relative min-w-40 rounded-full bg-white p-5 text-black shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl focus:outline-none"
              >
                Join the Community
              </Button>
            </motion.div>
          </div>
          <div className="z-10 h-64 sm:h-72 lg:h-96 lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="flex w-full justify-center"
            >
              <Image
                src="https://static.aaraz.me/blockx3/blockx3_nobg.png"
                alt="Turning Ideas into Reality"
                height={500}
                width={500}
                priority={true}
                className="h-[300px] w-[300px] rounded-lg p-4 drop-shadow-2xl sm:h-[400px] sm:w-[400px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
              />
            </motion.div>
          </div>
        </main>
      </div>
      <Vision />
      <ScrollAnimation RefForScroll={SecondRef} />
      <div id="second" className="min-h-screen w-full bg-gradient-to-b from-purple-200 to-pink-200">
        {/* <About /> */}
        <FAQs />
      </div>
    </>
  );
}
