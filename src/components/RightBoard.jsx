import React from "react";
import { Flex } from "@chakra-ui/react";
import NameAndSearch from "./rightBoard/NameAndSearch";
import NumberAnalytics from "./rightBoard/NumberAnalytics";
import ChartAnalytics from "./rightBoard/ChartAnalytics";
import TableAnalytics from "./rightBoard/TableAnalytics";

const RightBoard = () => {
  return (
    <Flex
      border="1px solid blue"
      w="100%"
      h="100%"
      gap="2%"
      direction="column"
      p="1%"
      overflowY="auto"
    >
      <NameAndSearch />
      <NumberAnalytics />
      <ChartAnalytics />
      <TableAnalytics />
    </Flex>
  );
};

export default RightBoard;
