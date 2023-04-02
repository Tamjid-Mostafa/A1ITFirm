import Container from '@components/ui/Container'
import Image from 'next/image'
import React from 'react'
import cn from 'clsx'
import s from './Newsletter.module.css'
import Text from '@components/ui/Text'
import Input from '@components/ui/Input'
import Button from '@components/ui/Button'
const Newsletter = () => {
    return (
        <Container className={cn(s.root)}>
            <div
                className={cn(s.container, '')}
            >
                <div className='sm:flex hidden items-center justify-center lg:justify-end w-[60%]'>
                    <Image
                        width={720}
                        height={720}
                        src={'/newslater.svg'}
                        alt={'Newsletter'}
                    />
                </div>
                <div className={cn(s.content, "w-[100%]")}>
                    <Text variant='newsletter' >Signup for our <span className='text-transparent bg-clip-text bg-gradient-to-b from-[#347DBA] to-[#5DB9A8]'>newsletter</span> to get latest updates</Text>
                    <div className=' flex flex-col space-y-5 sm:w-[60%] w-full'>
                        <Input
                            placeholder='Full Name'
                            className={'rounded-full'}
                        />
                        <Input
                            placeholder='Email Address'
                            className={'rounded-full'}
                        />
                        <Button className="sm:w-[40%] w-full rounded-full" variant={'slim'}>
                            <span className='text-lg font-thin leading-8 tracking-widest'>Subscribe</span>
                        </Button>
                    </div>
                </div>

            </div>
        </Container>
    )
}

export default Newsletter