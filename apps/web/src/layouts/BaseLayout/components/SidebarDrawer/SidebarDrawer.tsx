import Link from 'next/link';
import { Button, Drawer } from 'ui';
import { XIcon } from '@heroicons/react/outline';

import Logo from 'src/assets/svgs/logo.svg';
import FaceBookIcon from 'src/assets/svgs/FacebookIcon.svg';
import TwitterIcon from 'src/assets/svgs/TwitterIcon.svg';
import YoutubeIcon from 'src/assets/svgs/YoutubeIcon.svg';
import InstagramIcon from 'src/assets/svgs/InstagramIcon.svg';

interface SideBarDrawerProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const SideBarDrawer = ({ isOpen, onClose }: SideBarDrawerProps) => (
  <Drawer
    isOpen={isOpen}
    onClose={onClose}
    className="flex h-full w-full flex-col justify-between"
  >
    <header className="flex items-center justify-between border-b border-gray-200 px-4 py-6">
      <Link href="/" passHref>
        <a className="inline-flex w-auto focus:outline-none">
          <Logo />
        </a>
      </Link>
      <Button className="w-6" onClick={onClose}>
        <XIcon />
      </Button>
    </header>
    <footer className="flex items-center justify-center gap-2 border-t border-gray-200">
      <a
        className="text-heading p-5 opacity-60 transition duration-300 ease-in hover:opacity-100"
        href="https://www.facebook.com"
      >
        <FaceBookIcon />
      </a>
      <a
        href=""
        className="text-heading p-5 opacity-60 transition duration-300 ease-in hover:opacity-100"
      >
        <TwitterIcon />
      </a>
      <a
        href=""
        className="text-heading p-5 opacity-60 transition duration-300 ease-in hover:opacity-100"
      >
        <YoutubeIcon />
      </a>
      <a
        href=""
        className="text-heading p-5 opacity-60 transition duration-300 ease-in hover:opacity-100"
      >
        <InstagramIcon />
      </a>
    </footer>
  </Drawer>
);

export default SideBarDrawer;
