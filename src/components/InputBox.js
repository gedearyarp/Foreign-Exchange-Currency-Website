import React from 'react';
import {
    Text,
    Heading,
    Flex,
    Box
  } from "@chakra-ui/react"
import Flag from 'react-flagpack'

const InputBox = ({inputAmount, setValue}) => {
    return(
      <Box
      backgroundColor="white"
      minWidth={320}
      boxShadow="none"
      pt={3}
      pb={3}
      pl={5}
      pr={5}>
          <Heading size="md" fontStyle="italic" mb={3} textAlign="left">
              USD - United States Dollar
          </Heading>
          <Flex justifyContent="flex-start" alignItems="center">
              <Box>
                  <Box paddingTop={2} marginRight={2}>
                      <Flag code="US" hasDropShadow />
                  </Box>
              </Box>
              <Box flex={1}>
                  <Text fontWeight="bold">USD</Text>
              </Box>
              <Box>
                <div className="chakraButton">
                  <input  value={inputAmount} 
                          className="input" 
                          onChange={e => setValue(e.target.value)} 
                          type="Number"  />
                </div>
              </Box>
          </Flex>
      </Box>
    );
};

export default InputBox;