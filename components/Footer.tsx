import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Twitter, Linkedin, Github, LucideIcon } from 'lucide-react';

interface SocialIconProps {
  href: string;
  icon: LucideIcon;
  hoverColor: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon: Icon, hoverColor }) => (
  <Link 
    href={href} 
    target="_blank" 
    className={`p-2 rounded-full transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 ${hoverColor}`}
  >
    <Icon className="w-5 h-5" />
  </Link>
);

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <Link 
    href={href} 
    className="block mb-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
  >
    {children}
  </Link>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900 text-gray-600 dark:text-gray-300 transition-colors duration-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <Image
                src="https://static.aaraz.me/blockx3/blockx3_nobg.png"
                alt="Logo"
                width={40}
                height={40}
                className="mr-3"
              />
              <span className="text-xl font-bold text-gray-900 dark:text-white">BLOCKX3</span>
            </div>
            <div className="flex space-x-4 mb-6">
              <SocialIcon href="https://github.com/nawinkumarsharma" icon={Github} hoverColor="hover:text-gray-900 dark:hover:text-white" />
              <SocialIcon href="https://www.linkedin.com/in/nawin-kumar-sharma-83009825a" icon={Linkedin} hoverColor="hover:text-blue-600" />
              <SocialIcon href="https://linktr.ee/Nawinsharma" icon={Instagram} hoverColor="hover:text-pink-600" />
              <SocialIcon href="https://twitter.com/NawinScript" icon={Twitter} hoverColor="hover:text-blue-400" />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {currentYear} <span className='font-bold'>BLOCKX3</span> Foundation. All rights reserved.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">BLOCKX3</h3>
            {['Grants', 'Break Solana', 'Media Kit', 'Careers', 'Disclaimer', 'Privacy Policy'].map((item) => (
              <FooterLink key={item} href="#">{item}</FooterLink>
            ))}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">GET CONNECTED</h3>
            {['Github', 'Organization'].map((item) => (
              <FooterLink key={item} href="https://github.com/blockx3/">{item}</FooterLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;