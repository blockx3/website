import Image from 'next/image';
import React from 'react';
import { Timeline } from '@/components/ui/timeline';

export function Vision() {
  const data = [
    {
      title: 'Trust',
      content: (
        <div className="text-xl text-neutral-700 md:text-2xl">
          <p className="mb-8">
            Promote transparency and trust in software through open-source solutions.
          </p>
          <p className="mb-8">We develop opensource products as an organisation.</p>
          <div>
            <Image
              src="https://static.aaraz.me/blockx3/website/i1.jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="h-32 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-72"
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Innovation',
      content: (
        <div className="text-xl text-neutral-700 md:text-2xl">
          <p className="mb-8">Innovation by welcoming new ideas from everyone.</p>
          <p className="mb-8">
            We provide help and contribution to any one with noval idea and willing to build it.
          </p>
          <div>
            <Image
              src="https://static.aaraz.me/blockx3/website/i2.jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="h-32 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-72"
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Collaborative',
      content: (
        <div className="text-xl text-neutral-700 md:text-2xl">
          <p className="mb-8">Support collaborative development for faster and improved results.</p>
          <p className="mb-8">
            We are a community where people love to work together and produce best result.
          </p>
          <div>
            <Image
              src="https://static.aaraz.me/blockx3/website/i3.jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="h-32 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-72"
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Development',
      content: (
        <div className="text-xl text-neutral-700 md:text-2xl">
          <p className="mb-8">
            We advocate for starting product development as early as possible in your development
            career.
          </p>
          <p className="mb-8">we conduct workshop to teach and encourage development.</p>
          <div>
            <Image
              src="https://static.aaraz.me/blockx3/website/i4.jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="h-32 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-72"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
