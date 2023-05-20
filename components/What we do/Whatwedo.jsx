import { EmailMarketing } from '@components/icons'
import Development from '@components/icons/Development'
import LeadGeneration from '@components/icons/Leadgeneration'
import SEO from '@components/icons/SEO'
import ServiceCard from '@components/ServiceCard'
import Container from '@components/ui/Container'
import Text from '@components/ui/Text'
import React from 'react'

const Whatwedo = () => {
    const services = [
        {
            Icon: LeadGeneration,
            title: "Lead Generation",
            description: "Through the implementation of a diverse range of strategic lead generation techniques, we harness the power to generate targeted leads for your business. This not only amplifies interest levels but also guarantees enhanced conversion rates across all channels, offering dual benefits to your organization"
        },
        {
            Icon: Development,
            title: "Web Development",
            description: "Our expertise lies in crafting and constructing dependable, advanced websites that surpass mere attention-grabbing. Our focus is on empowering your potential customers throughout their purchasing journey by providing them with the essential content to facilitate informed buying decisions."
        },
        {
            Icon: EmailMarketing,
            title: "Email Marketing",
            description: "Utilizing an assortment of strategic lead generation methods, we generate high-quality leads for your business. This has the dual benefit of increasing interest levels and ensuring better conversion rates across the board."
        },
        {
            Icon: SEO,
            title: "Search Engine Optimization",
            description: "Utilizing an assortment of strategic lead generation methods, we generate high-quality leads for your business. This has the dual benefit of increasing interest levels and ensuring better conversion rates across the board."
        }
    ]
    return (
        <Container className='my-10 z-10 fit'>
            <div className='mb-10'>
                <Text variant='heading'>WHAT WE DO</Text>
                <div className="w-[30%] h-1 rounded bg-blue my-5" />
                <Text variant='body'>
                    We are a hands-on agency, plugging in to your business and getting our hands dirty under the bonnet so we can best understand exactly what needs to be done within your business. We take this opportunity to get to know your business intimately so that we can deliver a positive and measurable impact on your digital activities.
                </Text>
            </div>


            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4 py-6'>
                {
                    services.map((item, i) => {
                        return (
                            <ServiceCard
                                key={i}
                                Icon={item.Icon}
                                title={item.title}
                                description={item.description}
                            />
                        )
                    })
                }
            </div>

        </Container>
    )
}

export default Whatwedo