/* eslint-disable import/no-duplicates */
import Image from 'next/image';

import banner1 from '../../../assets/images/nelson.png';
import banner2 from '../../../assets/images/nelson.png';
import banner3 from '../../../assets/images/nelson.png';
import banner4 from '../../../assets/images/nelson.png';
import banner5 from '../../../assets/images/nelson.png';
import banner6 from '../../../assets/images/nelson.png';

const HeaderGrids = () => (
  <div className="mx-auto mb-12 grid max-w-[1920px] grid-cols-2 gap-2 sm:grid-cols-9 md:mb-14 md:gap-2.5 xl:mb-16">
    <div className="col-span-full sm:col-span-5">
      <a className="group relative flex h-full overflow-hidden" href="/">
        <Image
          layout="fill"
          className="w-full bg-gray-300 object-cover"
          src={banner1}
        />
      </a>
    </div>
    <div className="col-span-1 mx-auto sm:col-span-2">
      <a className="group relative flex h-full overflow-hidden" href="/">
        <Image className="w-full bg-gray-300 object-cover" src={banner2} />
      </a>
    </div>
    <div className="col-span-1 mx-auto sm:col-span-2">
      <a className="group relative flex h-full overflow-hidden" href="/">
        <Image className="w-full bg-gray-300 object-cover" src={banner3} />
      </a>
    </div>
    <div className="col-span-1 mx-auto sm:col-span-2">
      <a className="group relative flex h-full overflow-hidden" href="/">
        <Image className="w-full bg-gray-300 object-cover" src={banner4} />
      </a>
    </div>
    <div className="col-span-1 mx-auto sm:col-span-2">
      <a className="group relative flex h-full overflow-hidden" href="/">
        <Image className="w-full bg-gray-300 object-cover" src={banner5} />
      </a>
    </div>
    <div className="col-span-full sm:col-span-5">
      <a className="group relative flex h-full overflow-hidden" href="/">
        <Image
          layout="fill"
          className="w-full bg-gray-300 object-cover"
          src={banner6}
        />
      </a>
    </div>
  </div>
);

export default HeaderGrids;
