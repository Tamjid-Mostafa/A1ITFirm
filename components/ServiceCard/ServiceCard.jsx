import Text from '@components/ui/Text';
import React from 'react';

const ServiceCard = ({title, description, Icon}) => {
    return (
        <div className="p-4 shadow-lg rounded transition-all duration-500 hover:scale-105">
            <Icon className="w-24 h-24 mb-2" />
            <Text variant='sectionHeading'>{title}</Text>
            <Text>{description}</Text>
        </div>
    )
}

export default ServiceCard;
