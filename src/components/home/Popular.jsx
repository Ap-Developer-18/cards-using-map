import React from 'react'
import DATA_RIGHT_NOW from '@/utils/helper'
import Image from 'next/image'

const Popular = () => {
    return (
        <div>
            <div className='p-6 bg-main bg-cover bg-center bg-no-repeat rounded-3xl px-[60px] py-20'>
                <p className='text-2xl leading-120 text-white'>Welcome To Cyborg</p>
                <h2 className='leading-120 text-5xl font-bold text-white mt-5'>
                    <span className='text-pink'>BROWSE&nbsp;</span>OUR<br />POPULAR GAME HERE</h2>
            </div>
            <div className='mt-[60px] p-[30px] rounded-3xl bg-body'>
                <h2 className='text-4xl leading-120 font-bold text-pink'>
                    <span className='underline text-white'>Most Popular</span>&nbsp;Right Now</h2>
                <div>
                    {DATA_RIGHT_NOW.map((obj, index) => (
                        <div key={index}>
                            <Image
                                src={obj.imageUrl}
                                alt={obj.mainHeading}
                                width={186}
                                height={143}
                            />
                            <div className='flex items-center'>
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
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Popular