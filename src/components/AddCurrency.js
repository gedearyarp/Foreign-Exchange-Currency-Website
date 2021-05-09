import React from 'react';
import {
    Button,
    Box
} from "@chakra-ui/react"
import { FaPlus } from 'react-icons/fa'

const AddCurrency = ({setHandle}) => {
    return(
        <Box minWidth='320px'>
            <Button
            onClick={(e) => setHandle(e)}
            variant="solid"
            size="md"
            width="100%"
            mt={4}
            mb={4}
            leftIcon={<FaPlus />}
            colorScheme="teal"
            >
            Add more currencies
            </Button>
        </Box>
    );
};

export default AddCurrency;