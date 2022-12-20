import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react'

export default function Logo(props) {
    return (
        <Box {...props} >
            <Image src='../../../public/capybara.png' alt='Capybara Tomando Mate' />
        </Box>
    );
}
