import { FlashSaleComponent } from 'src/components/FlashSale';

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

                <FlashSaleComponent
                    labelTitle='Adidas Shoes Black'
                    labelDescription='Men Black top sleeveless gown'
                    labelDiscount='$45.00'
                    labelPrice='$99.99'
                    className='col-start-1 row-start-1'
                    src={flash1}
                />


                <FlashSaleComponent
                    labelTitle=' Armani Wide-Leg Trousers'
                    labelDescription='Monochrome elegance.'
                    labelDiscount='$12.00'
                    labelPrice='$16.00'
                    className='col-start-2 row-start-1'
                    src={flash2}
                />


                <FlashSaleComponent
                    labelTitle='Zara Shoes Green'
                    labelDescription='Footwear refers to garments worn'
                    labelDiscount='$50.00'
                    className='col-start-3 row-start-1'
                    src={flash3}
                />


                <FlashSaleComponent
                    labelTitle='Wayfarer Sunglasses'
                    labelDescription='Our optical engineers developed'
                    labelDiscount='$15.00'
                    labelPrice='$18.00'
                    className='col-start-4 row-start-1'
                    src={flash4}
                />


                <FlashSaleComponent
                    labelTitle='Tissot Classic'
                    labelDescription='The new-model Submariner'
                    className='col-start-5 row-start-1'
                    src={flash5}
                />


                <FlashSaleComponent
                    labelTitle='Hermes Carlton London'
                    labelDescription='Off-White self-striped knitted midi'
                    labelDiscount='$15.00'
                    className='col-start-1 row-start-2'
                    src={flash6}
                />


                <FlashSaleComponent
                    labelTitle='Polarised Wayfarer Sunglasses'
                    labelDescription='This item is only exchangeable'
                    labelDiscount='$20.00'
                    labelPrice='$35.00'
                    className='col-start-2 row-start-2'
                    src={flash7}
                />


                <FlashSaleComponent
                    labelTitle='Gucci Carlton UK'
                    labelDescription='Knitted midi A-line dress'
                    labelDiscount='$14.00'
                    labelPrice='$19.00'
                    className='col-start-3 row-start-2'
                    src={flash8}
                />


                <FlashSaleComponent
                    labelTitle='NIKE Shoes'
                    labelDescription='NIKE 2020 Black White'
                    labelDiscount='$50.00'
                    labelPrice='$80.00'
                    className='col-start-4 row-start-2'
                    src={flash9}
                />


                <FlashSaleComponent
                    labelTitle='Wayfarer Sunglasses'
                    labelDescription='Our optical engineers developed'
                    labelDiscount='$20.00'
                    labelPrice='$25.00'
                    className='col-start-5 row-start-2'
                    src={flash10}
                />

            </div >
        </div>
    </div>


)

export default FlashSale