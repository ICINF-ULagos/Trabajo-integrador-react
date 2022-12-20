import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Text, Box, Button, Flex, Image, Heading } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function Hero({ title, subtitle, image, ctaLink, ctaText, ...rest }) {
    return (
        <Flex
            align="center"
            justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
            direction={{ base: 'column-reverse', md: 'row' }}
            wrap="no-wrap"
            minH="70vh"
            px={8}
            mb={16}
            {...rest}>
            <Stack
                spacing={4}
                w={{ base: '80%', md: '40%' }}
                align={['center', 'center', 'flex-start', 'flex-start']}>
                <Heading
                    as="h1"
                    size="xl"
                    fontWeight="bold"
                    color="primary.800"
                    textAlign={['center', 'center', 'left', 'left']}>
                    {title}
                </Heading>
                <Heading
                    as="h2"
                    size="md"
                    fontWeight="normal"
                    color="primary.800"
                    textAlign={['center', 'center', 'left', 'left']}>
                    {subtitle}
                </Heading>
                <Link to={ctaLink}>
                    <Button colorScheme="primary" borderRadius="8px" py="4" py="4" lineHeight="1" size="md">
                        {ctaText}
                    </Button>
                </Link>
                <Text fontSize="xs" mt={2} textAlign="center" color="primary.800" opacity="0.6">
                    Page made with ReactJS and Chakra-UI
                </Text>
            </Stack>
            <Box w={{ base: '80%', sm: '60%', md: '50%' }} mb={{ base: 12, md: 0 }}>
                <Image src={image} size="100%" rounded="1rem" shadow="2xl" />
            </Box>
        </Flex>
    );
}

Hero.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.string,
    ctaText: PropTypes.string,
    ctaLink: PropTypes.string
};

Hero.defaultProps = {
    title: "APINGweb",
    subtitle: "Ready to use online fake dummy Rest APIs for testing and prototyping",
    image: "https://apingweb.com/img/aping.png",
    ctaText: "APINGweb Website",
    ctaLink: "/Signup",

};

export default Hero;
