import Image from 'next/image';
import React from 'react'
import SS from '../../../../public/assets/images/arraySS.bmp'
const page = () => {
    const fruits = ["apple", "banana", "orange"];
    return (
        <div className='container max-w-[800px] mx-auto pt-20'>
            <ul className='flex gap-5'>
                {fruits.map((fruit) => (
                    <li key={fruit}>{fruit}</li>
                ))}
            </ul>
            <Image className='pt-10' src={SS} alt='Screenshot' width={400} height={400} />
        </div>
    )
}

export default page
