import Image from 'next/image';

import flash1 from 'src/assets/webp/flash-image-1.png';
import flash2 from 'src/assets/webp/flash-image-2.png';
import flash3 from 'src/assets/webp/flash-image-3.png';
import flash4 from 'src/assets/webp/flash-image-4.png';
import flash5 from 'src/assets/webp/flash-image-5.png';
import flash6 from 'src/assets/webp/flash-image-6.png';
import flash7 from 'src/assets/webp/flash-image-7.png';
import flash8 from 'src/assets/webp/flash-image-8.png';
import flash9 from 'src/assets/webp/flash-image-9.png';
import flash10 from 'src/assets/webp/flash-image-10.png';

const FlashSale = () => (
    <div className='mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16'>
        <div className='mb-12 md:mb-14 xl:mb-16 border border-gray-300 rounded-md pt-5 md:pt-6 lg:pt-7 pb-5 lg:pb-7 px-4 md:px-5 lg:px-7'>
            <div className='flex justify-between items-center flex-wrap mb-5 md:mb-6'>
                <div className='flex items-center justify-between -mt-2 mb-0'>
                    <h3 className='text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold text-heading'>
                        Flash Sale
                    </h3>
                </div>
                <div className='flex items-center space-s-1.5 md:space-s-2.5'>
                    <div className='text-heading text-10px md:text-xs text-center uppercase'>
                        <span className='bg-heading rounded-md text-white text-xs md:text-sm w-8 h-8 md:w-10 md:h-10 flex items-center justify-center mb-1'>105</span>days
                    </div>
                    <div className='text-heading text-10px md:text-xs text-center uppercase'>
                        <span className='bg-heading rounded-md text-white text-xs md:text-sm w-8 h-8 md:w-10 md:h-10 flex items-center justify-center mb-1'>105</span>Hours
                    </div>
                    <div className='text-heading text-10px md:text-xs text-center uppercase'>
                        <span className='bg-heading rounded-md text-white text-xs md:text-sm w-8 h-8 md:w-10 md:h-10 flex items-center justify-center mb-1'>105</span>Mins
                    </div>
                    <div className='text-heading text-10px md:text-xs text-center uppercase'>
                        <span className='bg-heading rounded-md text-white text-xs md:text-sm w-8 h-8 md:w-10 md:h-10 flex items-center justify-center mb-1'>105</span>Secs
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-5 grid-rows-2 gap-4'>
                <div className="group box-border overflow-hidden flex rounded-md cursor-pointer bg-white pe-0 md:pb-1 flex-col items-start">
                    <div className='flex mb-3 md:mb-3.5 pb-0'>
                        <a className="group relative flex h-50 overflow-hidden">
                            <Image className="bg-gray-300 object-cover rounded-s-md rounded-md transition duration-150 ease-linear transform group-hover:scale-105" src={flash1} />
                        </a>
                    </div>

                    <div className='w-full overflow-hidden p-2 ps-0'>
                        <h2 className='truncate mb-1 font-semibold md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg text-heading'>
                            Adidas Shoes Black
                        </h2>
                        <p className='text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate'>
                            Men Black top sleeveless gown
                        </p>
                        <div className='font-semibold text-sm sm:text-base mt-1.5 space-s-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3 text-heading'>
                            <span className='inline-block false'>$45.00</span>
                            <del className='sm:text-base font-normal text-gray-800 pl-3'>$99.99</del>
                        </div>
                    </div>
                </div>

                <div className="col-start-2 row-start-1">
                    <div className="group box-border overflow-hidden flex rounded-md cursor-pointer bg-white pe-0 md:pb-1 flex-col items-start">
                        <div className='flex mb-3 md:mb-3.5 pb-0'>
                            <a className="group relative flex h-50 overflow-hidden">
                                <Image className="bg-gray-300 object-cover rounded-s-md rounded-md transition duration-150 ease-linear transform group-hover:scale-105" src={flash2} />
                            </a>
                        </div>

                        <div className='w-full overflow-hidden p-2 ps-0'>
                            <h2 className='truncate mb-1 font-semibold md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg text-heading'>
                                Armani Wide-Leg Trousers
                            </h2>
                            <p className='text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate'>
                                Monochrome elegance.
                            </p>
                            <div className='font-semibold text-sm sm:text-base mt-1.5 space-s-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3 text-heading'>
                                <span className='inline-block false'>$12.00</span>
                                <del className='sm:text-base font-normal text-gray-800 pl-3'>$16.00</del>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-start-3 row-start-1">
                    <div className="group box-border overflow-hidden flex rounded-md cursor-pointer bg-white pe-0 md:pb-1 flex-col items-start">
                        <div className='flex mb-3 md:mb-3.5 pb-0'>
                            <a className="group relative flex h-50 overflow-hidden">
                                <Image className="bg-gray-300 object-cover rounded-s-md rounded-md transition duration-150 ease-linear transform group-hover:scale-105" src={flash3} />
                            </a>
                        </div>

                        <div className='w-full overflow-hidden p-2 ps-0'>
                            <h2 className='truncate mb-1 font-semibold md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg text-heading'>
                                Zara Shoes Green
                            </h2>
                            <p className='text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate'>
                                Footwear refers to garments worn
                            </p>
                            <div className='font-semibold text-sm sm:text-base mt-1.5 space-s-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3 text-heading'>
                                <span className='inline-block false'>$50.00</span>
                                {/* <del className='sm:text-base font-normal text-gray-800 pl-3'>$16.00</del> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-start-4 row-start-1">
                    <div className="group box-border overflow-hidden flex rounded-md cursor-pointer bg-white pe-0 md:pb-1 flex-col items-start">
                        <div className='flex mb-3 md:mb-3.5 pb-0'>
                            <a className="group relative flex h-50 overflow-hidden">
                                <Image className="bg-gray-300 object-cover rounded-s-md rounded-md transition duration-150 ease-linear transform group-hover:scale-105" src={flash4} />
                            </a>
                        </div>

                        <div className='w-full overflow-hidden p-2 ps-0'>
                            <h2 className='truncate mb-1 font-semibold md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg text-heading'>
                                Wayfarer Sunglasses
                            </h2>
                            <p className='text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate'>
                                Our optical engineers developed
                            </p>
                            <div className='font-semibold text-sm sm:text-base mt-1.5 space-s-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3 text-heading'>
                                <span className='inline-block false'>$15.00</span>
                                <del className='sm:text-base font-normal text-gray-800 pl-3'>$18.00</del>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-start-5 row-start-1">
                    <div className="group box-border overflow-hidden flex rounded-md cursor-pointer bg-white pe-0 md:pb-1 flex-col items-start">
                        <div className='flex mb-3 md:mb-3.5 pb-0'>
                            <a className="group relative flex h-50 overflow-hidden">
                                <Image className="bg-gray-300 object-cover rounded-s-md rounded-md transition duration-150 ease-linear transform group-hover:scale-105" src={flash5} />
                            </a>
                        </div>

                        <div className='w-full overflow-hidden p-2 ps-0'>
                            <h2 className='truncate mb-1 font-semibold md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg text-heading'>
                                Tissot Classic
                            </h2>
                            <p className='text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate'>
                                The new-model Submariner
                            </p>
                            <div className='font-semibold text-sm sm:text-base mt-1.5 space-s-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3 text-heading'>
                                <span className='inline-block false'>$600.00</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-start-1 row-start-2">
                    <div className="group box-border overflow-hidden flex rounded-md cursor-pointer bg-white pe-0 md:pb-1 flex-col items-start">
                        <div className='flex mb-3 md:mb-3.5 pb-0'>
                            <a className="group relative flex h-50 overflow-hidden">
                                <Image className="bg-gray-300 object-cover rounded-s-md rounded-md transition duration-150 ease-linear transform group-hover:scale-105" src={flash6} />
                            </a>
                        </div>

                        <div className='w-full overflow-hidden p-2 ps-0'>
                            <h2 className='truncate mb-1 font-semibold md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg text-heading'>
                                Hermes Carlton London
                            </h2>
                            <p className='text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate'>
                                Off-White self-striped knitted midi
                            </p>
                            <div className='font-semibold text-sm sm:text-base mt-1.5 space-s-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3 text-heading'>
                                <span className='inline-block false'>$15.00</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-start-2 row-start-2">
                    <div className="group box-border overflow-hidden flex rounded-md cursor-pointer bg-white pe-0 md:pb-1 flex-col items-start">
                        <div className='flex mb-3 md:mb-3.5 pb-0'>
                            <a className="group relative flex h-50 overflow-hidden">
                                <Image className="bg-gray-300 object-cover rounded-s-md rounded-md transition duration-150 ease-linear transform group-hover:scale-105" src={flash7} />
                            </a>
                        </div>

                        <div className='w-full overflow-hidden p-2 ps-0'>
                            <h2 className='truncate mb-1 font-semibold md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg text-heading'>
                                Polarised Wayfarer Sunglasses
                            </h2>
                            <p className='text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate'>
                                This item is only exchangeable
                            </p>
                            <div className='font-semibold text-sm sm:text-base mt-1.5 space-s-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3 text-heading'>
                                <span className='inline-block false'>$20.00</span>
                                <del className='sm:text-base font-normal text-gray-800 pl-3'>$35.00</del>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-start-3 row-start-2">
                    <div className="group box-border overflow-hidden flex rounded-md cursor-pointer bg-white pe-0 md:pb-1 flex-col items-start">
                        <div className='flex mb-3 md:mb-3.5 pb-0'>
                            <a className="group relative flex h-50 overflow-hidden">
                                <Image className="bg-gray-300 object-cover rounded-s-md rounded-md transition duration-150 ease-linear transform group-hover:scale-105" src={flash8} />
                            </a>
                        </div>

                        <div className='w-full overflow-hidden p-2 ps-0'>
                            <h2 className='truncate mb-1 font-semibold md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg text-heading'>
                                Gucci Carlton UK
                            </h2>
                            <p className='text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate'>
                                Knitted midi A-line dress
                            </p>
                            <div className='font-semibold text-sm sm:text-base mt-1.5 space-s-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3 text-heading'>
                                <span className='inline-block false'>$14.99</span>
                                <del className='sm:text-base font-normal text-gray-800 pl-3'>$19.99</del>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-start-4 row-start-2">
                    <div className="group box-border overflow-hidden flex rounded-md cursor-pointer bg-white pe-0 md:pb-1 flex-col items-start">
                        <div className='flex mb-3 md:mb-3.5 pb-0'>
                            <a className="group relative flex h-50 overflow-hidden">
                                <Image className="bg-gray-300 object-cover rounded-s-md rounded-md transition duration-150 ease-linear transform group-hover:scale-105" src={flash9} />
                            </a>
                        </div>

                        <div className='w-full overflow-hidden p-2 ps-0'>
                            <h2 className='truncate mb-1 font-semibold md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg text-heading'>
                                NIKE Shoes
                            </h2>
                            <p className='text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate'>
                                NIKE 2020 Black White
                            </p>
                            <div className='font-semibold text-sm sm:text-base mt-1.5 space-s-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3 text-heading'>
                                <span className='inline-block false'>$50.00</span>
                                <del className='sm:text-base font-normal text-gray-800 pl-3'>$80.00</del>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-start-5 row-start-2">
                    <div className="group box-border overflow-hidden flex rounded-md cursor-pointer bg-white pe-0 md:pb-1 flex-col items-start">
                        <div className='flex mb-3 md:mb-3.5 pb-0'>
                            <a className="group relative flex h-50 overflow-hidden">
                                <Image className="bg-gray-300 object-cover rounded-s-md rounded-md transition duration-150 ease-linear transform group-hover:scale-105" src={flash10} />
                            </a>
                        </div>

                        <div className='w-full overflow-hidden p-2 ps-0'>
                            <h2 className='truncate mb-1 font-semibold md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg text-heading'>
                                Wayfarer Sunglasses
                            </h2>
                            <p className='text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate'>
                                Our optical engineers developed
                            </p>
                            <div className='font-semibold text-sm sm:text-base mt-1.5 space-s-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3 text-heading'>
                                <span className='inline-block false'>$20.00</span>
                                <del className='sm:text-base font-normal text-gray-800 pl-3'>$25.00</del>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    </div>


)

export default FlashSale