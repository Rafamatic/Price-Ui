import React from "react";
import { Box, Heading, Text } from '@chakra-ui/react'

export function Header() {
    return (
        <Box as='section' pb='112px'>
            <Box textAlign={['left', 'left', 'center']} color='#F7FAFC' bgColor='#6B46C1' pt='90px' pb='198px' px='32px'>
                <Heading fontWeight='800' fontSize={["3xl", "3xl", "5xl"]} m='0px'>
                    Simple pricing for your business
                </Heading>
                <Text fontWeight='500' fontSize={["lg", "lg", "2xl"]} >
                    Plans that are carefully crafted to suit your business.
                </Text>
            </Box>
        </Box>
    )
}
