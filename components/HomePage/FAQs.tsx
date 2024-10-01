'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQs = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.5 }}
      className="h-screen w-full bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 px-4 py-10 lg:px-20 lg:py-24"
    >
      <motion.h2
        className="mb-9 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text pb-8 text-3xl font-bold text-transparent lg:text-5xl"
        variants={fadeIn}
        transition={{ delay: 0.2 }}
      >
        Frequently Asked Questions :
      </motion.h2>
      <Accordion type="single" collapsible className="space-y-9">
        {faqData.map((faq, index) => (
          <motion.div key={faq.id} variants={fadeIn} transition={{ delay: 0.1 * (index + 1) }}>
            <AccordionItem value={faq.id} className="border-none">
              <AccordionTrigger className="rounded-xl bg-white bg-opacity-50 p-4 text-xl font-semibold text-gray-700 transition-all duration-300 hover:bg-opacity-75 hover:text-purple-700 lg:text-2xl">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="mt-2 rounded-xl bg-white bg-opacity-25 p-4 text-black lg:text-lg">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </motion.div>
  );
};

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
