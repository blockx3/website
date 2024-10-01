'use client';
import { useInView } from 'framer-motion';
import ShineBorder from '../ui/shine-border';
import { MotionDiv } from '../UseClient_UIs';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null); // Create a reference for the element
  const isInView = useInView(ref); // Trigger animation every time in view
  return (
    <div className="flex h-screen flex-col justify-around">
      <div
        className="space-y-10"
        style={{
          fontFamily: 'monospace',
        }}
      >
        <MotionDiv
          ref={ref}
          initial={{ y: 100, opacity: 0 }} // Start off-screen (y: 300) and invisible
          animate={isInView ? { y: 0, opacity: 1 } : {}} // Animate to on-screen and visible
          exit={{ y: 100, opacity: 0 }} // Animate back to off-screen and invisible
          transition={{ duration: 0.5, ease: 'easeInOut' }} // Customize the transition
        >
          <ShineBorder
            className="mx-2 overflow-hidden rounded-lg bg-background md:shadow-xl lg:mx-10 lg:px-8 lg:py-10"
            color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
            borderWidth={3}
          >
            <div>
              <div className="pb-2 text-lg text-slate-800 underline underline-offset-4 lg:pb-6 lg:text-4xl">
                Who are we ?
              </div>
              <div className="text-slate-500 lg:text-2xl">
                We are a group of passionate people who create open-source projects, support new
                ideas, and help them grow. Our community is focused on working together to achieve
                progress and development.
              </div>
            </div>
          </ShineBorder>
        </MotionDiv>
        <MotionDiv
          ref={ref}
          initial={{ y: 300, opacity: 0 }} // Start off-screen (y: 300) and invisible
          animate={isInView ? { y: 0, opacity: 1 } : {}} // Animate to on-screen and visible
          exit={{ y: 300, opacity: 0 }} // Animate back to off-screen and invisible
          transition={{ duration: 0.5, ease: 'easeInOut' }} // Customize the transition
        >
          <ShineBorder
            className="mx-2 overflow-hidden rounded-lg bg-background md:shadow-xl lg:mx-10 lg:px-8 lg:py-10"
            color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
            borderWidth={3}
          >
            <div>
              <div>
                <div className="pb-2 text-lg underline underline-offset-4 lg:pb-6 lg:text-4xl">
                  What we do ?
                </div>
                <div className="text-slate-500 lg:text-2xl">
                  BlockX3 is a platform that helps people work together on open-source projects. We
                  create open-source software and welcome anyone with a new idea. We support the
                  development of these projects, working as a community to help everyone grow and
                  succeed. Some of us want to build the next big tech company, some want to learn,
                  and others want to share their skills. We all share a passion for growth,
                  learning, and trying new things, which brings us together as a group. We chose the
                  name &quot;BlockX3&quot; to show that we are united as one & we aim to surpass our
                  own expectations by threefold.
                </div>
              </div>
            </div>
          </ShineBorder>
        </MotionDiv>
      </div>
    </div>
  );
}
