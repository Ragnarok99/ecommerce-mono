import React from 'react';
import { Transition } from '@headlessui/react';

import { ReactPortal } from '../Portal';

interface DrawerProps {
  isOpen: boolean;
  className?: string;
  children?: React.ReactNode;
  onClose?: () => void;
}

const Drawer = ({
  isOpen,
  className = '',
  children,
  onClose = () => {},
}: DrawerProps) => {
  const handleOverlayClick = () => {
    onClose();
  };
  return (
    <ReactPortal>
      <div tabIndex={-1} className="z-20">
        <Transition show={isOpen}>
          <Transition.Child
            enter="transition-opacity ease-in-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-in-out duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            onClick={handleOverlayClick}
          >
            <div
              role="presentation"
              className="absolute top-0 left-0 z-20 h-screen w-screen cursor-pointer bg-black opacity-30"
            />
          </Transition.Child>

          <Transition.Child
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
            className={`absolute left-0 top-0 z-30 h-screen w-full max-w-[450px] bg-white ${className}`}
          >
            <div>{children}</div>
          </Transition.Child>
        </Transition>
      </div>
    </ReactPortal>
  );
};

export default Drawer;
