import Image from 'next/image';

import banner1 from 'src/assets/webp/banner-1.png';
import banner2 from 'src/assets/webp/banner-2.png';
import banner3 from 'src/assets/webp/banner-3.png';
import banner4 from 'src/assets/webp/banner-4.png';
import banner5 from 'src/assets/webp/banner-5.png';
import banner6 from 'src/assets/webp/banner-6.png';

const HeaderGrids = () => (
  <div className="mx-auto mb-12 grid max-w-[1920px] grid-cols-2 gap-2 px-2.5 sm:grid-cols-9 md:mb-14 md:gap-2.5 xl:mb-16">
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
