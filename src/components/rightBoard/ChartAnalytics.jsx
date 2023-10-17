import { Flex, Select, Text } from "@chakra-ui/react";
import React from "react";
import RechartBarChart from "../charts/BarChart";
import RechartsPieChart from "../charts/PieChart";

const ChartAnalytics = () => {
  return (
    <Flex
      border="1px solid black"
      borderRadius="10px"
      h="50%"
      gap="3%"
      justifyContent="space-between"
    >
      {/* Left */}
      <Flex
        w="70%"
        border="0px solid black"
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

        {/* Bar Chart */}
        <Flex border="0px solid red" h="90%">
          <RechartBarChart />
        </Flex>
      </Flex>

      {/* Right */}
      <Flex
        w="30%"
        border="0px solid black"
        borderRadius="10px"
        // align="center"
        direction="column"
      >
        {/* Ribbon */}
        <Flex alignItems="center">
          <Flex direction="column" gap="0">
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="lg"
              fontWeight="bold"
            >
              Customers
            </Text>
            <Text fontSize="xs">Customers that buy products</Text>
          </Flex>
        </Flex>

        {/* Pie Chart */}
        <Flex border="0px solid red" h="90%">
          <RechartsPieChart />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ChartAnalytics;
