import { Search2Icon } from "@chakra-ui/icons";
import {
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { PiHandWavingBold } from "react-icons/pi";

const NameAndSearch = () => {
  return (
    <Flex
      // border="1px solid black"
      justifyContent="space-between"
      align="center"
    >
      <Flex align="center" gap="10px">
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="lg"
          fontWeight="bold"
        >
          Aniket Pandey
        </Text>
        <Icon as={PiHandWavingBold} />
      </Flex>
      <Flex>
        <InputGroup bgColor="whiteAlpha.500" size="xs">
          <InputLeftElement pointerEvents="none">
            <Search2Icon color="gray.500" />
          </InputLeftElement>
          <Input type="tel" placeholder="Search" />
        </InputGroup>
      </Flex>
    </Flex>
  );
};

export default NameAndSearch;
