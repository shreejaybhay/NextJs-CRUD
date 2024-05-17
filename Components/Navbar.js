import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='bg-gray-800 flex items-center justify-between h-16 px-5'>
            <Link href={"/"} className='text-white font-bold text-xl'>SJCoding</Link>
            <Link href={"/addTopic"} className='bg-white text-lg font-medium py-2 px-3 rounded-lg text-black'>Add Topic</Link>
        </div>
    )
}

export default Navbar