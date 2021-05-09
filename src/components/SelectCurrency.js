import React from 'react';
import {
    Flex,
    IconButton,
    Select,
    Box
  } from "@chakra-ui/react"
import { FaChevronDown, FaPlus } from 'react-icons/fa'

const SelectCurrency = ({curOption, setValue, value, setHandle}) => {
    return(
      <Box borderRadius="lg">
        <Flex alignItems="center">
          <Select icon={<FaChevronDown />} 
                  value={value} 
                  onChange={e => setValue(e.target.value)} 
                  variant="outline" size="md" mr={1} 
                  placeholder="Select currencies"
                  bgColor="white">
            {curOption && curOption.map((row) => (
              <option value={row}>{row}</option>
            ))}
          </Select>
          <IconButton
            onClick={() => setHandle(value)}
            aria-label="icon"
            icon={<FaPlus/>}
            size="md"
            colorScheme="teal"
          />  
        </Flex>
      </Box>
    );
};

export default SelectCurrency;