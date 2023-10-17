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
import TableDetails from "../table/Table";

const TableAnalytics = () => {
  return (
    <Flex
      // overflowY="auto" // Add a vertical scrollbar when content overflows
      direction="column"
      border="0px solid black"
      bg="whiteAlpha.400"
      borderRadius="10px"
      p="1%"
    >
      {/* Ribbon */}
      <Flex justifyContent="space-between" alignItems="center" mb="1%">
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="lg"
          fontWeight="semibold"
        >
          Product Sell
        </Text>
        <Flex alignItems="center">
          {/* Search */}
          <InputGroup size="xs" w={{ base: "60%", md: "100%" }}>
            <InputLeftElement pointerEvents="none">
              <Search2Icon color="gray.500" />
            </InputLeftElement>
            <Input type="tel" placeholder="Search" />
          </InputGroup>

          {/* Select */}
          <Select
            placeholder="Select option"
            border="none"
            size="xs"
            ml={{ base: "0", md: "2%" }}
          >
            <option value="option1" selected>
              Last 30 days
            </option>
            <option value="option2">Quarterly</option>
            <option value="option3">Yearly</option>
          </Select>
        </Flex>
      </Flex>

      {/* Table */}
      <TableDetails />
    </Flex>
  );
};

export default TableAnalytics;
