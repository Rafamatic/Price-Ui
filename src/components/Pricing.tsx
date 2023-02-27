
import { Box, Flex, Heading, Text, Button, HStack, Icon, StackProps, Stack } from '@chakra-ui/react'
import React, { Children } from "react";
import { CheckIcon } from '../icons/Icon';

export const ListItem = (props: StackProps) => {
    const { children, ...rest } = props;
    return (
        <HStack as='li' spacing='20px' {...rest} align='flex-start'>
            <Icon as={CheckIcon} w='22px' h='22px' />
            <Text textAlign='left'>{children}</Text>
        </HStack >
    )
}

export function Pricing() {
    return (
        <Box mx='6'>
            <Box maxW='994px' m='auto' mt='-256px' overflow='hidden' boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'
                textAlign='center'>
                <Flex direction={["column", "column", "row"]}>

                    <Box bg='#f0eafb' p='60px' >
                        <Text fontSize='24px' fontWeight='800'>Premium PRO</Text>
                        <Heading as='h3' fontSize={['5xl', '5xl', '6xl']} mt='16px' >$329</Heading>
                        <Text color='171923' fontSize='18px' fontWeight='500' mt='8px'>billed just once</Text>
                        <Button colorScheme='purple' size='lg' mt='24px' w='282px'>Get Started</Button>
                    </Box>

                    <Box bg='white' p='60px' fontSize='18px' >
                        <Text textAlign='left'>Access these features when you get this pricing package for your business.</Text>
                        <Stack as='ul' spacing='20px' pt='24px'>
                            <ListItem>International calling and messaging API</ListItem>
                            <ListItem>Additional phone numbers</ListItem>
                            <ListItem>Automated messages via Zapier</ListItem>
                            <ListItem>24/7 support and consulting</ListItem>
                        </Stack>
                    </Box>

                </Flex>
            </Box>
        </Box>
    )
}
