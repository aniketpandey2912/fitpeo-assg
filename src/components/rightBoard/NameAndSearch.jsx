import { Search2Icon } from "@chakra-ui/icons";
import {
  Flex,
  Hide,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { PiHandWavingBold } from "react-icons/pi";
import DashboardDrawer from "../drawer/DashboardDrawer";

const NameAndSearch = () => {
  return (
    <Flex justifyContent="space-between" align="center">
      <Flex
        w={{ base: "100%", md: "50%", lg: "40%" }} // Adjust width for different screen sizes
        align="center"
        gap="10px"
      >
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize={{ base: "lg", md: "xl", lg: "2xl" }} // Adjust font size for different screen sizes
          fontWeight="bold"
        >
          Aniket Pandey
        </Text>
        <Icon as={PiHandWavingBold} boxSize="20px" />
      </Flex>
      <Flex
        w={{ base: "50%", md: "20%", lg: "15%" }} // Adjust width for different screen sizes
        align="center"
      >
        <InputGroup
          w={{ base: "70%", md: "100%" }} // Adjust the width of the input for different screen sizes
          bgColor="whiteAlpha.500"
          size="xs"
        >
          <InputLeftElement pointerEvents="none">
            <Search2Icon color="gray.500" />
          </InputLeftElement>
          <Input type="tel" placeholder="Search" />
        </InputGroup>
      </Flex>
      <Hide above="md">
        <DashboardDrawer />
      </Hide>
    </Flex>
  );
};

export default NameAndSearch;
