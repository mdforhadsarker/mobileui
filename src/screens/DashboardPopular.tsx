

import classes from '../styles/DashboardPopular.module.css';
import { FiAlignJustify, FiSearch } from 'react-icons/fi';
import { Box, rem, ScrollArea, SimpleGrid, Text } from '@mantine/core';

//Components
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import ItemCard from '../components/ItemCard';


function DashboardPopular() {

    const itemDetails = {
        image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhASEBISDxAQDw8QEBAVEBAQEBARFhEXGBYRFxYZHSgiGRsnJxUVITIiMSkyLi4uFx81RDMtNygtLisBCgoKDg0OGhAQGi4lICU3Li0tLS0tLS8tLi0tLy0tLisrNy0rLS8tLS0tLS0tKy0tLS4tLS0tLy01LS0tLS0tNv/AABEIAOAA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAwYCB//EAEUQAAICAQICBgUHCQYHAQAAAAECAAMRBCESMQUTQVFhgQYiMnGRIzNCUnKSoUNTYmOCorLBwhQWJHOT0kSDo7Gz4eMV/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwQFBv/EACwRAQACAgAFAQcEAwAAAAAAAAABAgMRBBIhMUFRBRMiIzJxkWGBofAkseH/2gAMAwEAAhEDEQA/APsUREsqREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREj63W10rx3OtacSJxMcDiZgqjzJECREgabpvS2fN6mh9yNrqycgkEYz4H4SfBrRERAREQEREBERAREQEREBERAREQEREBERARNGr1ddS8VrrWucZZguT2KO8+HOc7rOn7rDjTqKa/zti5uYd61nZPAtk96iVvkrSOrTFhvlnVYdFrNZXUvHdYlSZA4nYICScAAnmfCUes9M9MhUKLbs2pUWRAiqz+xlrSoIOQARnnKldP63GzNZaRg2ueKwjuz9EfojA8JC6Z6PRlY2Z6t06q8g4ZVzlLgewoSTnsDE/RnNPEzM9Id8ez4iN2t+HWL6Uab6RtQ9oOnvbH7SKynyMN6U6bsNre7T3jP3lE+c6TSEF047K7EwLFDcSnbaxQ+cK25GPEcwZKOjOMNZa3j1rofd6nCJlPGWjw649kUnrFpdX0j6ZhAerpI/WX2JTX5cJZifAgTkenembLldrC7tWpdG6s00UsvrAojHiLbY4tzudwDibaNCiniA9blxElnx3cRyZq19fG1dI/K2KG+wPWf4hWHvImVuJveXXj9nYcUTP9/v7L7oxVatgQGHX6rmARg6hz/Ob6tGqfMl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',
        title: 'Outcast Orange',
        subtitle: 'Tshirt',
        price: '$24.4',
      };


    return (
        <ScrollArea style={{ overflow: 'hidden' }}>
            <div className={classes.dashboard}>
                <div style={{ width: "375px", height: "736px", borderRadius: "30px", backgroundColor: "white" }}>
                    <SimpleGrid cols={1} style={{ maxHeight: '100%', overflowY: 'auto' }}>
                        <Header
                            menuIcon={<FiAlignJustify style={{ marginRight: rem(25), cursor: 'pointer', fontWeight: 'normal' }} />}
                            searchIcon={<FiSearch style={{ marginRight: rem(25), cursor: 'pointer', fontWeight: 'normal' }} />}
                            profileImage={
                                <img
                                    src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                                    alt="Profile"
                                    style={{
                                        width: rem(30),
                                        height: rem(35),
                                        borderRadius: '20%',
                                        cursor: 'pointer',
                                        objectFit: 'cover',
                                        objectPosition: 'center center',
                                    }}
                                />
                            }
                        />
                        <Box
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                paddingLeft: `${rem(25)}`,
                                paddingRight: `${rem(25)}`,
                                color: 'black',                            
                                minWidth: 375,
                            }}
                        >
                            <Text style={{fontSize: 24, fontWeight: 'bold'}}>Popular</Text>
                            <Pagination />
                        </Box>
                        <ItemCard {...itemDetails} onAddToCart={() => console.log('Added to cart')} />

                        {/* <div style={{ backgroundColor: 'grey', height: 300, borderRadius: 30 }}>2</div>
                        <div style={{ backgroundColor: 'green', height: 300, borderRadius: 30 }}>3</div> */}

                    </SimpleGrid>

                </div>


            </div>
        </ScrollArea>

    );
}

export default DashboardPopular;