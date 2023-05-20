import React from 'react';
import cn from 'clsx';
import s from './PricingCard.module.css';
import Button from '../Button';
import { ChevronRight } from '@components/icons';
import Text from '../Text';
import { useUI } from '../context';

const PricingCard = ({ icon: Icon, title, price, qty, description, buttonLabel }) => {
    const { openModal, closeModal } = useUI();
    return (
        <div className={cn(s.pricingCard, "flex flex-col items-center justify-center bg-white shadow-lg border-blue border-[2px] rounded-lg p-10 space-y-5")}>
            <div className="flex justify-center items-center">
                <Icon className="w-20 h-20" />
            </div>
            <Text variant="sectionHeading" className={cn(s.title)}>{title}</Text>
            <div className="text-4xl font-bold flex flex-col">
                <span className=" text-accent-5 -ml-5 font-normal">From</span>
                <span className="text-6xl ml-5">{price}</span>
            </div>
            <div className="text-accent-5 text-2xl ml-20">{qty}</div>
            <div className="text-center space-y-2">
                {description.map((desc, index) => (
                    <React.Fragment key={index}>
                        <p>{desc}</p>
                        <hr />
                    </React.Fragment>
                ))}
            </div>
            <Button
                onClick={() => openModal()}
                variant={"slim"}
                className="rounded-full border-none bg-blue"
            >
                <span>{buttonLabel}</span><ChevronRight />
            </Button>
        </div>
    );
};

export default PricingCard;
