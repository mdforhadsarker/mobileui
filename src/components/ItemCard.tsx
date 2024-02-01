import React from 'react';
import { Card, Image, Title, Text, Button, Group } from '@mantine/core';
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
        <Card shadow="sm" padding="xs" radius="md" withBorder style={{ width: '80px' }}>
            <Card.Section style={{ width: '60px', marginLeft: '10px' }}>
                <Image src={image} alt={title}  width={20} fit="cover" radius="md" />
            </Card.Section>
            <Group gap={5} style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                <Title size="xs">
                    {title}
                </Title>
                <Text size="xs" c="dimmed">
                    {subtitle}
                </Text>
            </Group>

            <Group justify="space-between" >
                <Text size='sm' fw={700} >
                    {price}
                </Text>
                <Button
                    size="compact-sm" radius="md"
                    onClick={onAddToCart}
                    variant="gradient"
                    gradient={{ from: 'blue', to: 'cyan', deg: 360 }}

                >
                    <FiPlus />
                </Button>
            </Group>


        </Card>
    );
};

export default ItemCard;

