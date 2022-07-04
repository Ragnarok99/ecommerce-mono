import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Listbox, Transition } from '@headlessui/react';
import { useTranslation } from 'next-i18next';
import { Button } from 'ui';
import {
  SelectorIcon,
  SearchIcon,
  ShoppingBagIcon,
  MenuAlt1Icon,
} from '@heroicons/react/solid';

import LoginModal from '../components/LoginModal';

import logoSrc from '../assets/svgs/logo.svg';

const counties = [
  { name: 'Español - ES', code: 'es' },
  { name: 'English - EN', code: 'us' },
];

const BaseLayout: React.FC = ({ children }) => {
  const { t } = useTranslation();

  const [selected, setSelected] = React.useState(counties[0]);

  return (
    <>
      <header className="relative z-10 h-16 w-full px-4 sm:h-20 lg:h-24 lg:px-10">
        <div className="mx-auto flex h-full w-full max-w-[1920px] items-center justify-between gap-6">
          <Button className="block h-12 w-12 lg:hidden">
            <MenuAlt1Icon />
          </Button>
          <Link href="/" passHref>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="inline-flex w-full focus:outline-none md:w-auto">
              <Image
                src={logoSrc}
                alt="logo"
                width={95}
                height={30}
                layout="fixed"
              />
            </a>
          </Link>
          <nav className="hidden w-full items-center gap-12 py-7 lg:flex">
            <ul className="flex h-full w-full items-center gap-3 px-2 text-sm font-normal text-gray-600 xl:px-4 xl:text-base">
              <li>{t('title')}</li>
              <li>text2</li>
              <li>text3</li>
              <li>text4</li>
              <li>text5</li>
              <li>text6</li>
            </ul>
          </nav>
          <Listbox value={selected} onChange={setSelected}>
            <div className="relative flex flex-shrink-0 md:mx-auto">
              <Listbox.Button className="relative cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <div className="flex items-center gap-2">
                  <Image
                    src={`https://countryflagsapi.com/png/${selected.code}`}
                    alt={selected.name}
                    width={22}
                    layout="fixed"
                    height={15}
                  />
                  <span className="block truncate">{selected.name}</span>
                </div>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <SelectorIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={React.Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {counties.map(country => (
                    <Listbox.Option
                      key={country.name}
                      className={({ active }) =>
                        `relative flex cursor-default select-none items-center gap-2 py-2 pl-4 pr-4 ${
                          active
                            ? 'bg-amber-100 text-amber-900'
                            : 'text-gray-900'
                        }`
                      }
                      value={country}
                    >
                      {({ selected: selectedValue }) => (
                        <>
                          <Image
                            src={`https://countryflagsapi.com/png/${country.code}`}
                            alt={country.name}
                            width={22}
                            layout="fixed"
                            height={15}
                          />
                          <span
                            className={`block truncate ${
                              selectedValue ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {country.name}
                          </span>
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
          <div className="space-s-6 lg:space-s-5 xl:space-s-8 2xl:space-s-10 ms-auto hidden flex-shrink-0 items-center justify-end md:flex">
            <SearchIcon className="h-6 w-6 text-gray-400" />
            <LoginModal />
            <div>
              <ShoppingBagIcon className="h-6 w-6 text-gray-400" />
            </div>
          </div>
        </div>
      </header>
      <main className="relative flex-grow">{children}</main>
    </>
  );
};

export default BaseLayout;
