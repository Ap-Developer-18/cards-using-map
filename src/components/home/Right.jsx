import React from 'react'
import DATA_RIGHT_NOW from '@/utils/helper'
import Image from 'next/image'
import Button from '../common/Button'

const Right = () => {
    return (
        <div className='mt-10 lg:mt-[60px] p-4 sm:p-5 lg:p-[30px] pb-10 lg:pb-12 rounded-3xl bg-body relative'>
            <h2 className='text-4xl leading-120 font-bold text-pink'>
                <span className='underline text-white'>Most Popular</span>&nbsp;Right Now</h2>
            <div className='grid place-content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-6 w-full mt-7'>
                {DATA_RIGHT_NOW.map((obj, index) => (
                    <div className='w-full'>
                        <div className='p-3 xl:p-4 bg-dark rounded-2xl'>
                            <div key={index}>
                                <Image
                                    src={obj.imageUrl}
                                    alt={obj.mainHeading}
                                    width={186}
                                    height={143}
                                    className='w-full rounded-xl object-cover object-center max-lg:h-[180px] lg:h-[208px]'
                                />
                                <div className='flex items-center justify-between mt-4'>
                                    <div>
                                        <div className='text-base text-white leading-120 font-bold'>{obj.mainHeading}</div>
                                        <div className='text-base text-dark-light leading-120 mt-1'>{obj.subHeading}</div>
                                    </div>
                                    <div>
                                        <div className='flex items-center gap-1'>
                                            <div>{obj.ratingSvg}</div>
                                            <div className='text-sm leading-150 text-white'>{obj.ratingNumber}</div>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <div>{obj.downloadSvg}</div>
                                            <div className='text-sm leading-150 text-white'>{obj.downloadNumber}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Button whiteTextName='Discover Popular' className='absolute -bottom-6 left-1/2 -translate-x-1/2' />
        </div>
    )
}

export default Right