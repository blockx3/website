"use client";
import { useInView } from "framer-motion";
import ShineBorder from "../ui/shine-border";
import { MotionDiv } from "../UseClient_UIs";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null); // Create a reference for the element
  const isInView = useInView(ref); // Trigger animation every time in view
  return (
    <div className="h-screen flex flex-col justify-around">
      <div
        className="space-y-10"
        style={{
          fontFamily: "monospace",
        }}
      >
        <MotionDiv
          ref={ref}
          initial={{ y: 100, opacity: 0 }} // Start off-screen (y: 300) and invisible
          animate={isInView ? { y: 0, opacity: 1 } : {}} // Animate to on-screen and visible
          exit={{ y: 100, opacity: 0 }} // Animate back to off-screen and invisible
          transition={{ duration: 0.5, ease: "easeInOut" }} // Customize the transition
        >
          <ShineBorder
            className="lg:mx-10 mx-2 lg:px-8 lg:py-10 overflow-hidden rounded-lg bg-background md:shadow-xl"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            borderWidth={3}
          >
            <div>
              <div className="lg:text-4xl text-lg lg:pb-6 pb-2 text-slate-800 underline underline-offset-4">
                Who are we ?
              </div>
              <div className="lg:text-2xl text-slate-500">
                We are a group of passionate people who create open-source
                projects, support new ideas, and help them grow. Our community
                focuses on developing innovative software and supporting
                individual developers by contributing to their projects.
              </div>
            </div>
          </ShineBorder>
        </MotionDiv>
        <MotionDiv
          ref={ref}
          initial={{ y: 300, opacity: 0 }} // Start off-screen (y: 300) and invisible
          animate={isInView ? { y: 0, opacity: 1 } : {}} // Animate to on-screen and visible
          exit={{ y: 300, opacity: 0 }} // Animate back to off-screen and invisible
          transition={{ duration: 0.5, ease: "easeInOut" }} // Customize the transition
        >
          <ShineBorder
            className="lg:mx-10 mx-2 lg:px-8 lg:py-10 overflow-hidden rounded-lg bg-background md:shadow-xl"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            borderWidth={3}
          >
            <div>
              <div>
                <div className="lg:text-4xl text-lg lg:pb-6 pb-2 underline underline-offset-4">
                  What we do ?
                </div>
                <div className="lg:text-2xl text-slate-500">
                  BlockX3 is a platform that helps people work together on
                  open-source projects. We create open-source software and
                  welcome anyone with a novel idea. We support the development
                  of these projects, working as a community to help everyone
                  grow and succeed. Some of us want to build the next big tech
                  company, some want to learn, and others want to share their
                  skills. We all share a passion for growth, learning, and
                  trying new things, which brings us together as a group. We
                  chose the name &quot;BlockX3&quot; to show that we are united
                  as one & we aim to surpass our own expectations by threefold.
                </div>
              </div>
            </div>
          </ShineBorder>
        </MotionDiv>
      </div>
    </div>
  );
}
