'use client';
import React, { useRef } from 'react';
import FAQs from './FAQs';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import { VisionSection } from './Vision';
import ContactSection from './Contact';
import Footer from './Footer';
import FirstPage from './FirstPage';
export default function HomePage() {
  const SecondRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <FirstPage RefForScroll={SecondRef} />
      <VisionSection />
      <ScrollAnimation RefForScroll={SecondRef} />
      <FAQs />
      <ContactSection />
      <Footer />
    </>
  );
}
