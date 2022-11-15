import Image from 'next/image';

interface FlashSaleComponentProps {
    labelTitle?: string;
    labelDescription?: string;
    labelDiscount?: string;
    labelPrice?: string;
    className?: string;
    src?: StaticImageData;
}

const FlashSaleComponent = ({
    labelTitle,
    labelDescription,
    labelDiscount,
    labelPrice,
    className,
    src,
    ...props
}: FlashSaleComponentProps) => (
    <div className='' {...props}>
        <div className="group box-border overflow-hidden flex rounded-md cursor-pointer bg-white pe-0 md:pb-1 flex-col items-start">
            <div className='flex mb-3 md:mb-3.5 pb-0'>
                <a className="group relative flex h-50 overflow-hidden">
                    <Image className="bg-gray-300 object-cover rounded-s-md rounded-md transition duration-150 ease-linear transform group-hover:scale-105" src={src}  {...props} />
                </a>
            </div>

            <div className='w-full overflow-hidden p-2 ps-0'>
                <h2 className='truncate mb-1 font-semibold md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg text-heading'>
                    {labelTitle}
                </h2>
                <p className='text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate'>
                    {labelDescription}
                </p>
                <div className='font-semibold text-sm sm:text-base mt-1.5 space-s-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3 text-heading'>
                    <span className='inline-block false'>{labelDiscount}</span>
                    <del className='sm:text-base font-normal text-gray-800 pl-3'>{labelPrice}</del>
                </div>
            </div>
        </div>
    </div >
);

export default FlashSaleComponent