import { SEO } from '@components/icons'
import Development from '@components/icons/Development'
import LeadGeneration from '@components/icons/Leadgeneration'
import Container from '@components/ui/Container'
import PricingCard from '@components/ui/PricingCard/PricingCard'
import Text from '@components/ui/Text'
import React from 'react'

function Pricing() {
    const pricing = [
        {
            icon: LeadGeneration,
            title: "Lead Generation",
            qty: "Per Lead",
            price: "$0.20",
            description: ["Speak with us direct.", "Tell us what you need.", "Start receiving leads 48 hours later."],
            buttonLabel: "Request Proposal"
        },
        {
            icon: SEO,
            title: "Search Engine Optimization",
            price: "$159",
            qty: "Per Month",
            description: ["One to one consultation.", "Strategise and plan.", "Let’s make it happen."],
            buttonLabel: "Request Proposal"
        },
        {
            icon: Development,
            title: "Web Development",
            price: "$199",
            qty: "Per Website",
            description: ["Show us your inspiration.", "We'll tell you how to achieve it.", "Get the website you've always wanted."],
            buttonLabel: "Request Proposal"
        },
    ]
    return (
        <Container className="fit">
            <Text variant='heading'>Our Pricing</Text>
            <div className="w-[30%] h-1 rounded bg-blue my-5" />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-5'>
                {pricing.map((item) => {
                    return (
                        <PricingCard
                            key={item.title}
                            icon={item.icon}
                            title={item.title}
                            price={item.price}
                            qty={item.qty}
                            description={item.description}
                            buttonLabel={item.buttonLabel}
                        />
                    )
                })}
            </div>
        </Container>
    )
}

export default Pricing