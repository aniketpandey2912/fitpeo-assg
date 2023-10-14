import { Flex, Select, Text } from "@chakra-ui/react";
import React from "react";

const ChartAnalytics = () => {
  return (
    <Flex
      //   border="1px solid black"
      borderRadius="10px"
      h="50%"
      gap="3%"
      justifyContent="space-between"
    >
      {/* Left */}
      <Flex
        w="70%"
        border="1px solid black"
        borderRadius="10px"
        direction="column"
      >
        {/* Ribbon */}
        <Flex
          border="0px solid black"
          w="100%"
          h="10%"
          justifyContent="space-between"
        >
          <Flex gap="10px">
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="lg"
              fontWeight="bold"
            >
              Overview
            </Text>
          </Flex>
          <Flex>
            <Select placeholder="Select option" border="none" size="xs">
              <option value="option1">Monthly</option>
              <option value="option2" selected>
                Quarterly
              </option>
              <option value="option3">Yearly</option>
            </Select>
          </Flex>
        </Flex>

        {/* Chart */}
        <Flex border="1px solid red" h="90%"></Flex>
      </Flex>

      {/* Right */}
      <Flex
        w="30%"
        border="1px solid black"
        borderRadius="10px"
        justifyContent="space-between"
        // align="center"
      >
        <Flex gap="10px">
          <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="lg"
            fontWeight="bold"
          >
            Overview
          </Text>
        </Flex>
        <Flex>
          <Select placeholder="Select option" border="none">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ChartAnalytics;
