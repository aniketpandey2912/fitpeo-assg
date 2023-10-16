import { Search2Icon } from "@chakra-ui/icons";
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";

const TableAnalytics = () => {
  return (
    <Flex border="1px solid black" h="20%">
      {/* Ribbon */}
      <Flex
        border="1px solid black"
        w="100%"
        h="20%"
        justifyContent="space-between"
      >
        <Flex gap="10px">
          <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="lg"
            fontWeight="bold"
          >
            Product Sell
          </Text>
        </Flex>
        <Flex gap="2%">
          <InputGroup bgColor="whiteAlpha.500" size="xs">
            <InputLeftElement pointerEvents="none">
              <Search2Icon color="gray.500" />
            </InputLeftElement>
            <Input type="tel" placeholder="Search" />
          </InputGroup>
          <Select placeholder="Select option" border="none" size="xs">
            <option value="option1">Last 30 days</option>
            <option value="option2" selected>
              Quarterly
            </option>
            <option value="option3">Yearly</option>
          </Select>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TableAnalytics;
