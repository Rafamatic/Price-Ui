import { Text, Stack, HStack, Icon, StackProps, Box } from '@chakra-ui/react'
import React, { Children, ElementType } from "react";
import { Hassle, Money, Monthly } from '../icons/Icon';


interface FeatureProps extends StackProps {
    icon: ElementType;
}

function Feature(props: FeatureProps) {
    const { icon, children, ...rest } = props;
    return (
        <HStack{...rest} spacing='24px' align='start'>//24=6
            <Icon as={icon} boxSize={['8', '8', '12']} />
            <Text textAlign='left' fontSize='18px' fontWeight='700'>{children}</Text>
        </HStack>
    );
}

export function Features() {
    return (
        <Box maxW='1024px' m='auto' pt='60px' pb='32px'>
            <Stack px='12'
                direction={['column', 'column', 'row']}
                spacing={['6', '6', '5']}>
                <Feature icon={Money}>30 days money back Guarantee</Feature>
                <Feature icon={Hassle}>No setup fees
                    100% hassle-free</Feature>
                <Feature icon={Monthly}>No monthly subscription
                    Pay once and for all</Feature>
            </Stack>
        </Box>
    );
}
