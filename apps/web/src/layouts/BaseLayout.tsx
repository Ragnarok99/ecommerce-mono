import React from 'react';
import Image from 'next/image';
import { Listbox, Transition } from '@headlessui/react';
import { useTranslation } from 'next-i18next';
import {
  SelectorIcon,
  SearchIcon,
  ShoppingBagIcon,
} from '@heroicons/react/solid';
import { Button } from 'ui';

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
      <header className="relative z-10 h-16 w-full px-10 sm:h-20 lg:h-24">
        <nav className="mx-auto flex h-full w-full max-w-[1920px] items-center justify-between gap-6 py-8">
          <div className="flex items-center gap-12">
            <Image src={logoSrc} alt="logo" width={95} height={30} />
            <ul className="flex gap-3 px-2 text-sm font-normal text-gray-600 xl:px-4 xl:text-base">
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
            <SearchIcon className="h-6 w-6 text-gray-400" />
            <Button>Sign in</Button>
            <div>
              <ShoppingBagIcon className="h-6 w-6 text-gray-400" />
            </div>
          </div>
        </nav>
      </header>
      <main className="relative flex-grow">{children}</main>
    </>
  );
};

export default BaseLayout;
