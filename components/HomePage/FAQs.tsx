'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

function FAQs() {
  return (
    <div className="border-b-2 border-t-2 py-16 lg:px-20">
      <div className="px-4 text-2xl font-semibold lg:py-8 lg:text-5xl">FAQs:</div>
      <Accordion type="single" collapsible className="space-y-4">
        {faqData.map((faq, index) => (
          <AccordionItem key={index} value={faq.id} className="border-none">
            <AccordionTrigger className="px-4 text-lg font-semibold text-gray-600 transition-all duration-300 hover:bg-opacity-75 hover:text-purple-700 lg:text-2xl">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="rounded-lg bg-slate-100 p-4 text-black lg:mx-6 lg:text-lg">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

const faqData = [
  {
    id: 'item-1',
    question: 'Is BlockX3 a community or organization?',
    answer:
      'We are both! BlockX3 is a vibrant community of developers, designers, and creators who collaborate on exciting projects. Additionally, we run organizational projects to support our community and ensure its long-term sustainability.',
  },
  {
    id: 'item-2',
    question: 'Can BlockX3 help develop my idea into a product?',
    answer:
      'Absolutely! As a community, we are enthusiastic about growing together and helping each other. Whether you want to build the next big tech company, learn new skills, or share your expertise, we are here to support you in developing your idea into a tangible product.',
  },
  {
    id: 'item-3',
    question: 'What happens if a community project becomes successful?',
    answer:
      'If a project shows great potential and experiences significant growth, it remains the property of its creator(s). Our community encourages this growth while respecting creator ownership, allowing them full control over how they use and develop their project.',
  },
];

export default FAQs;
