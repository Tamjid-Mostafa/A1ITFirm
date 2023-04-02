import Container from '@components/ui/Container'
import Input from '@components/ui/Input'
import Text from '@components/ui/Text'
import React from 'react'
import cn from 'clsx'
import Button from '@components/ui/Button'

const Help = () => {
    return (
        <Container className={cn('px-20 flex flex-col  justify-start w-[60%] space-y-[119px] fit')}>
            <div className='text-center mt-20'>
                <Text variant='heading'>
                    Help Center
                </Text>
            </div>
            <div className='flex flex-col  justify-start space-y-[46px]'>
                <Text variant='sectionHeading'>
                    Contact us
                </Text>
                <div className='grid grid-cols-2 gap-5'>
                    <div className=''>
                        <Text>
                            Name
                        </Text>
                        <Input />
                    </div>
                    <div className=''>
                        <Text>
                            Email
                        </Text>
                        <Input />
                    </div>
                    <div className='col-span-2'>
                        <Text className=''>
                            Your Message
                        </Text>
                        <Input className='' variant='textarea' />
                    </div>
                    <div className='col-span-2 text-center my-20'>
                        <Button className={cn('rounded-full')} variant='slim'>
                            Send Message
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Help