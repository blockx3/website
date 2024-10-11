import React from 'react';
import { Timeline } from '@/components/ui/timeline';

export function VisionSection() {
  const data = [
    {
      title: 'Trust',
      content: [
        'Promote transparency and trust in software through open-source solutions.',
        'We develop opensource products as an organization to promote trust',
      ],
      image: 'https://static.aaraz.me/blockx3/website/i1.jpeg',
    },
    {
      title: 'Innovation',
      content: [
        'Innovation by welcoming new ideas from everyone.',
        ' We provide help and contribution to any one with novel idea and willing to build it to bring innovation.',
      ],
      image: 'https://static.aaraz.me/blockx3/website/i3.jpeg',
    },
    {
      title: 'Collaborative',
      content: [
        'Support collaborative development for faster and improved results.',
        'We are a community where people love to work together and produce best result.',
      ],
      image: 'https://static.aaraz.me/blockx3/website/i4.jpeg',
    },
    {
      title: 'Development',
      content: [
        'We advocate for starting product development as early as possible in our development career.',
        'we conduct workshop to teach and encourage opensource development.',
      ],
      image: 'https://static.aaraz.me/blockx3/website/i2.jpeg',
    },
  ];
  return (
    <div className="">
      <Timeline data={data} />
    </div>
  );
}
