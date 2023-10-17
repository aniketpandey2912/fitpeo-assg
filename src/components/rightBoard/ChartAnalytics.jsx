import { Box, Flex, Select, Text, VStack } from "@chakra-ui/react";
import React from "react";
import RechartBarChart from "../charts/BarChart";
import RechartsPieChart from "../charts/PieChart";

const ChartAnalytics = () => {
  return (
    <Box
      overflowY={{ base: "auto", lg: "visible" }} // Add a vertical scrollbar when content overflows
    >
      <Flex
        direction={{ base: "column", sm: "column", lg: "row" }}
        border="0px solid black"
        // borderRadius="10px"
        h={{ base: "90vh", sm: "90vh", lg: "50vh" }}
        gap="2%"
        justifyContent="space-between"
      >
        {/* Left */}
        <VStack
          spacing="2%"
          flex={{ base: 1, sm: "0.6", md: 0.7 }}
          bg="whiteAlpha.400"
          borderRadius="10px"
          p="1%"
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
                fontWeight="semibold"
              >
                Overview
              </Text>
            </Flex>
            <Flex>
              <Select placeholder="Select option" size="xs">
                <option value="option1">Monthly</option>
                <option value="option2" selected>
                  Quarterly
                </option>
                <option value="option3">Yearly</option>
              </Select>
            </Flex>
          </Flex>

          {/* Bar Chart */}
          <Flex w="100%" h="100%">
            <RechartBarChart />
          </Flex>
        </VStack>

        {/* Right */}
        <Flex
          direction={{ base: "column", md: "column", lg: "column" }}
          flex={{ base: 1, sm: 1, lg: 0.3 }}
          bg="whiteAlpha.400"
          borderRadius="10px"
          p="1%"
        >
          {/* Ribbon */}
          <Flex alignItems="center">
            <Flex direction="column" gap="0">
              <Text
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontSize="lg"
                fontWeight="semibold"
              >
                Customers
              </Text>
              <Text fontSize="xs">Customers that buy products</Text>
            </Flex>
          </Flex>

          {/* Pie Chart */}
          {/* <Flex w="100%" h="100%"> */}
          <RechartsPieChart />
          {/* </Flex> */}
        </Flex>
      </Flex>
    </Box>
  );
};

export default ChartAnalytics;
