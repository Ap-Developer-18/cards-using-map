import React from 'react'
import Button from '../common/Button'

const Popular = () => {
    return (
        <div className='relative p-4 sm:p-6 md:p-[30px] lg:p-6 rounded-3xl lg:px-[60px] lg:py-20 overflow-hidden bg-pink bg-opacity-5'>
                <video
                    className='absolute top-0 left-0 w-full h-full object-cover blur-sm opacity-[30%]'
                    src='/assets/images/png/main.mp4'
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className='relative z-30'>
                    <p className='text-xl md:text-2xl leading-120 text-white'>Welcome To Cyborg</p>
                    <h2 className='leading-120 text-4xl sm:text-[40px] lg:text-5xl font-bold text-white mt-2 sm:mt-5'>
                        <span className='text-pink'>BROWSE&nbsp;</span>OUR<br />POPULAR GAME HERE
                    </h2>
                    <Button whiteTextName='Browse Now' className='mt-6'/>
                </div>
            </div>
    )
}

export default Popular