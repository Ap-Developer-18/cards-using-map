import React from 'react'
import Popular from './Popular'
import Right from './Right'

const Main = () => {
    return (
        <div className='container max-w-[1320px]'>
            <div className="p-3 sm:p-6 lg:p-14 rounded-3xl bg-dark mt-3">
                <Popular />
                <Right />
            </div>
        </div>
    )
}

export default Main