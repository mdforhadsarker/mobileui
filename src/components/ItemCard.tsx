import React from 'react';
import { Card, Image, Title, Text, Button } from '@mantine/core';
import { FiPlus } from "react-icons/fi";

interface ItemCardProps {
    image: string;
    title: string;
    subtitle: string;
    price: string;
    onAddToCart: () => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ image, title, subtitle, price, onAddToCart }) => {
    return (
        <Card shadow="sm" style={{ width: '300px' }}>
            <Image src={image} alt={title} height={200} fit="cover" />
            <div style={{ padding: '16px' }}>
                <Title order={2} style={{ marginBottom: '8px' }}>
                    {title}
                </Title>
                <Text style={{ marginBottom: '8px' }}>{subtitle}</Text>
                <Text style={{ marginBottom: '8px', fontWeight: 'bold', fontSize: 24 }} >
                    {price}
                </Text>
                <Button
                    style={{
                        width: '30px',
                        height: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#006d75',
                        color: 'white',
                        borderRadius: '10%',
                    }}
                    onClick={onAddToCart}
                >
                    <FiPlus />
                </Button>
            </div>
        </Card>
    );
};

export default ItemCard;

