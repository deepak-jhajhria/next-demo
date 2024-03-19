import React from 'react'
import SS from '../../../../public/assets/images/mapSS.bmp'
import Image from 'next/image'

const page = () => {
    const profileData = [
        {
            id: 1, name: "sanju", city: "hisar",
        },
        {
            id: 2, name: "Deepak", city: "hisar"
        },
        {
            id: 3, name: "Prince", city: "hisar"
        },
        {
            id: 4, name: "Deepak", city: "hisar"
        },
    ]
    return (
        <div className='container max-w-[800px] mx-auto pt-20'>
            <div>
                {
                    profileData.map((item, index) => {
                        return (
                            <div className='flex items-center max-w-[400px] justify-between' key={index}>
                                <h1 className='text-xl font-bold capitalize text-start'>name :- {item.name}</h1>
                                <p className='font-sm bold'>city:- {item.city}</p>
                            </div>
                        )
                    })
                }
            </div>
            <Image className='pt-10' src={SS} alt='Screenshot' width={800} height={700} />
        </div>
    )
}

export default page
