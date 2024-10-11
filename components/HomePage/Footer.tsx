'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Twitter, Linkedin, Github, Youtube } from 'lucide-react';
import { FaDiscord, FaTelegram } from 'react-icons/fa6';

interface SocialIconProps {
  href: string;
  icon: any;
  hoverColor: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon: Icon, hoverColor }) => (
  <Link
    href={href}
    target="_blank"
    className={`rounded-full p-2 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 ${hoverColor}`}
  >
    <Icon className="h-5 w-5" />
  </Link>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-indigo-100/50 px-4 py-12 text-gray-600 transition-colors duration-300 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between space-y-16 md:flex-row md:space-y-0">
          <div className="flex flex-col">
            <div className="mb-6 flex items-center">
              <Image
                src="https://static.aaraz.me/blockx3/blockx3_nobg.png"
                alt="Logo"
                width={40}
                height={40}
                className="mr-3"
              />
              <span className="text-xl font-bold text-gray-900 dark:text-white">BlockX3</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Driving <span className="font-bold">Innovation</span> into{' '}
              <span className="font-bold">Reality</span>
            </p>
          </div>
          <div className="flex flex-col justify-start md:items-center md:justify-center">
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              GET CONNECTED
            </h3>
            <div className="mb-6 flex space-x-4">
              <SocialIcon
                href="https://github.com/blockx3/"
                icon={Github}
                hoverColor="hover:text-gray-900 dark:hover:text-white"
              />
              <SocialIcon
                href="https://www.linkedin.com/company/blockx3/"
                icon={Linkedin}
                hoverColor="hover:text-blue-600"
              />
              <SocialIcon
                href="https://t.me/blockx3/458"
                icon={FaTelegram}
                hoverColor="hover:text-blue-400"
              />
              <SocialIcon
                href="https://www.youtube.com/@blockx3"
                icon={Youtube}
                hoverColor="hover:text-red-600"
              />
              <SocialIcon
                href="https://discord.com/invite/p7NQXeDqwD"
                icon={FaDiscord}
                hoverColor="hover:text-indigo-600"
              />
              <SocialIcon
                href="https://x.com/block_x3"
                icon={Twitter}
                hoverColor="hover:text-blue-400"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
