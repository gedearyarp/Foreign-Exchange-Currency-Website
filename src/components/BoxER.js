// ER = Exchange Rates

import React from 'react';
import {
    Box,
    IconButton,
    Flex,
    Text,
    Divider
  } from "@chakra-ui/react"
import { FaMinus } from 'react-icons/fa'
import Flag from 'react-flagpack'
import NumberFormat from 'react-number-format'

const BoxER = ({data, index, setValue}) => {
    return(
        <Box boxShadow="xl" backgroundColor="white" borderRadius="lg" marginBottom={4}>
            <Flex justifyContent="flex-start" alignItems="center" p={2}>
                <Box flex={5} p={3}>
                    <Flex justifyContent="flex-start" alignItems="center" mb={2}>
                        <Box paddingTop={2} marginRight={2}>
                            <Flag code={data.flagER} hasDropShadow />
                        </Box>
                        <Box flex={1}>
                            <Text fontSize="18px">
                               {data.codeER}
                            </Text>
                        </Box>
                        <Box maxWidth="240px">
                            <Text fontSize="18px">
                                <NumberFormat value={data.countER} displayType={'text'} thousandSeparator={true} />    
                            </Text>
                        </Box>
                    </Flex>
                    <Divider borderColor="blackAlpha.500" />
                    <Text fontStyle="italic" fontWeight="bold" mt={2} mb="-3px">
                        {data.codeER} - {data.nameER}
                    </Text>
                    <Text>1 USD = {data.codeER} <NumberFormat value={data.excER} displayType={'text'} thousandSeparator={true} /></Text>
                </Box>
                <IconButton
                    onClick={(e) => setValue(index)}
                    aria-label="Delete"
                    icon={<FaMinus />}
                    size="md"
                    height={100}
                    width={100}
                    flex={1}
                />
            </Flex>
        </Box>
    );
};

export default BoxER;