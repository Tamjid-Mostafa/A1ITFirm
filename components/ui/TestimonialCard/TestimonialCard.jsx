import React from 'react'
import cn from 'clsx'
import s from './TestimonialCard.module.css'
import LeftQuote from '@components/icons/LeftQuote'
import { RightQuote } from '@components/icons'
import Image from 'next/image'
const TestimonialCard = ({ item }) => {

    return (
        <div className={cn(s.root)}>
            <div className={cn(s.content, '')}>
                <div className='m-5'>
                    <LeftQuote className=' float-left mr-5' />
                    <span className={cn(s.reviews, '')}>{item?.reviews}<RightQuote className='absolute -right-10 bottom-0' />
                    </span>
                    
                </div>

                <div className='py-4 flex flex-col space-y-3 mx-5'>
                    <hr />
                    <div className={cn(s.avatar, '')}>
                        <Image 
                        width={64}
                        height={64}
                        src={item?.avatar} alt={item?.name} />
                        <div>
                            <div className={cn(s.name, '')}>
                                {item?.name}
                            </div>
                            <div className={cn(s.title, '')}>
                                {item?.title}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TestimonialCard