import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Twitter, Linkedin, Github, LucideIcon } from 'lucide-react';

interface SocialIconProps {
  href: string;
  icon: LucideIcon;
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

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <Link
    href={href}
    target="_blank"
    className="mb-2 block text-sm text-gray-600 transition-colors duration-300 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
  >
    {children}
  </Link>
);

const Footer: React.FC = () => {
  // const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gradient-to-br from-blue-100 to-purple-300 px-4 py-12 text-gray-600 transition-colors duration-300 dark:from-gray-800 dark:to-gray-900 dark:text-gray-300 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6 flex items-center">
              <Image
                src="https://static.aaraz.me/blockx3/blockx3_nobg.png"
                alt="Logo"
                width={40}
                height={40}
                className="mr-3"
              />
              <span className="text-xl font-bold text-gray-900 dark:text-white">BLOCKX3</span>
            </div>
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
                href="https://x.com/block_x3"
                icon={Twitter}
                hoverColor="hover:text-blue-400"
              />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Driving <span className="font-bold">Innovation</span> into{' '}
              <span className="font-bold">Reality</span>
            </p>
            {/* <p className="text-sm text-gray-500 dark:text-gray-400">
              © {currentYear} <span className="font-bold">BLOCKX3</span>{" "}
              Foundation. All rights reserved.
            </p> */}
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">BLOCKX3</h3>
            <FooterLink href="https://github.com/orgs/blockx3/repositories">Projects</FooterLink>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              GET CONNECTED
            </h3>
            <FooterLink href="https://github.com/blockx3/">Telegram</FooterLink>
            <FooterLink href="https://github.com/blockx3/">Discord</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
