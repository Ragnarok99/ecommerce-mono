import React from 'react';
import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Image from 'next/image';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon, SearchIcon } from '@heroicons/react/solid';
import { ShoppingBagIcon } from '@heroicons/react/outline';

import { Button } from 'ui';

import logoSrc from '../assets/svgs/logo.svg';
import Swiper from '../components/Swiper';

const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
];

const Home: NextPage = () => {
  const { t } = useTranslation();

  const [selected, setSelected] = React.useState(people[0]);

  return (
    <div className="container mx-auto">
      <nav className="flex justify-between gap-6 py-8">
        <div className="flex items-center gap-12">
          <Image src={logoSrc} alt="logo" width={95} height={30} />
          <ul className="flex gap-3">
            <li>{t('title')}</li>
            <li>text2</li>
            <li>text3</li>
            <li>text4</li>
            <li>text5</li>
            <li>text6</li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <Listbox value={selected} onChange={setSelected}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">{selected.name}</span>
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
                  {people.map(person => (
                    <Listbox.Option
                      key={person.name}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active
                            ? 'bg-amber-100 text-amber-900'
                            : 'text-gray-900'
                        }`
                      }
                      value={person}
                    >
                      {({ selected: selectedValue }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selectedValue ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {person.name}
                          </span>
                          {selectedValue ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
          <SearchIcon className="h-6 w-6 text-gray-400" />
          <Button>Sign in</Button>
          <div>
            <ShoppingBagIcon className="h-6 w-6 text-gray-400" />
          </div>
        </div>
      </nav>

      <div className="h-[400px]">
        <Swiper />
      </div>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default Home;
