'use client'
import React, { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TextParallaxContentProps {
    imgUrl: string;
    subheading: string;
    heading: string;
    children: ReactNode;
}

export const ScrollAnimation: React.FC = () => {
    return (
        <div className="bg-gray-300">
            <TextParallaxContent
                imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                subheading="Collaborate"
                heading="Built and deploy together."
            >
                <WhoAreWe />
            </TextParallaxContent>
            <TextParallaxContent
                imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                subheading="Quality"
                heading="Never compromise."
            >
                <WhatWeDo />
            </TextParallaxContent>
            <TextParallaxContent
                imgUrl="https://www.asaecenter.org/-/media/ASAE/Images/Resources/Articles/AN_Plus/2017/March/schmidt_zimmer_engaging_members_in_online_communities/schmidt_zimmer_engaging_members_in_online_communities_39x22.ashx?h=440&w=780&la=en&hash=9818F472ABEAA63452F80AFDDEB4B787994A4F0B"
                subheading="Modern"
                heading="Dress for the best."
            >
                <WhatWeDo />
            </TextParallaxContent>
        </div>
    );
};

const IMG_PADDING = 12;

const TextParallaxContent: React.FC<TextParallaxContentProps> = ({ imgUrl, subheading, heading, children }) => {
    return (
        <div
            style={{
                paddingLeft: IMG_PADDING,
                paddingRight: IMG_PADDING,
            }}
        >
            <div className="relative h-[150vh]">
                <StickyImage imgUrl={imgUrl} />
                <OverlayCopy heading={heading} subheading={subheading} />
            </div>
            {children}
        </div>
    );
};

interface StickyImageProps {
    imgUrl: string;
}

const StickyImage: React.FC<StickyImageProps> = ({ imgUrl }) => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <motion.div
            style={{
                backgroundImage: `url(${imgUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: `calc(100vh - ${IMG_PADDING * 2}px)`,
                top: IMG_PADDING,
                scale,
            }}
            ref={targetRef}
            className="sticky z-0 overflow-hidden rounded-3xl"
        >
            <motion.div
                className="absolute inset-0 bg-neutral-950/70"
                style={{
                    opacity,
                }}
            />
        </motion.div>
    );
};

interface OverlayCopyProps {
    subheading: string;
    heading: string;
}

const OverlayCopy: React.FC<OverlayCopyProps> = ({ subheading, heading }) => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

    return (
        <motion.div
            style={{
                y,
                opacity,
            }}
            ref={targetRef}
            className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
        >
            <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
                {subheading}
            </p>
            <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
        </motion.div>
    );
};

const WhatWeDo: React.FC = () => (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
        <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
            What we do?
        </h2>
        <div className="col-span-1 md:col-span-8">
            <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
                BlockX3 is a collaborative platform designed to facilitate teamwork on open-source projects. We focus on developing open-source software and invite individuals with innovative ideas to join us. Our community is dedicated to nurturing these projects, fostering an environment where everyone can thrive and achieve their goals. While some members aspire to create the next leading technology company, others seek to enhance their skills or share their expertise. Our collective enthusiasm for growth, learning, and exploration unites us as a community. The name &quot;BlockX3&quot; reflects our commitment to unity and our ambition to exceed our own expectations by three times.
            </p>
        </div>
    </div>
);

const WhoAreWe: React.FC = () => (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
        <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
            Who are we ?
        </h2>
        <div className="col-span-1 md:col-span-8">
            <p className="mb-4 text-xl text-neutral-600 md:text-2xl">

                We are a group of passionate people who create open-source projects, support new ideas, and help them grow. Our community is focused on working together to achieve progress and development.
            </p>
        </div>
    </div>
);

