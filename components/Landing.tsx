"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-300 to-pink-300 text-white overflow-hidden">
      <main className="container mx-auto px-4 mt-8 md:mt-28 py-16 flex flex-col lg:flex-row items-center justify-between relative">
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70"
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
          className="absolute bottom-0 right-0 w-64 h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
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
        <div className="lg:w-1/2 mb-8 lg:mb-0 mt-1 md:mt-10 z-10">
          <motion.div
            className="relative z-20 md:ml-16 mt-5 mb-5 font-medium text-gray-700 font-sans tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="text-4xl md:text-5xl relative z-20 lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
              Turning Ideas into Reality🤝
              <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-blue-600 via-pink-500 to-green-500 py-4">
                  <span className="ml-2 font-bold">
                    BLOCKX3
                  </span>
                </div>
              </div>
            </div>
          </motion.div>


          <div className="md:ml-16">
            <motion.div
              className="text-lg md:text-3xl relative z-20 ml-16 mt-5 mb-5 font-medium text-gray-700 font-sans tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Open-Source Innovation Through Community Collaboration to, labore
              sit, impedit maiores dolorem vitae quis in? Veritatis nobis,
              necessitatibus
            </motion.div>
            <motion.div
              className="space-x-4 flex ml-12 gap-5 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Button className="relative p-7 bg-gradient-to-r from-blue-800 to-purple-600 text-white rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out focus:outline-none">
                <motion.span
                  initial={{ y: 0 }}
                  animate={{ y: [-2, 0, -2] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  Connect With Us
                </motion.span>
              </Button>
              <Button className="relative p-7 bg-gradient-to-r from-blue-800 to-purple-600 text-white rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out focus:outline-none">
                <motion.span
                  initial={{ y: 0 }}
                  animate={{ y: [-2, 0, -2] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  Join the community    </motion.span>
              </Button>
            </motion.div>
          </div>
        </div>
        <div className="lg:w-1/2 h-64 lg:h-96 z-10">
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
              height={600}
              width={600}
              priority={true}
              className="md:h-[500px] md:w-[500px] h-[300px] w-[300px] rounded-lg p-4 drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </main>
    </div>
  );
}
