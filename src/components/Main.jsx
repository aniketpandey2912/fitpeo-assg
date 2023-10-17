import React from "react";
import { Flex } from "@chakra-ui/react";
import LeftBoard from "./LeftBoard";
import RightBoard from "./RightBoard";

const Main = () => {
  return (
    <Flex border="0px solid black" h="auto" w="100%">
      <Flex
        display={{ base: "none", sm: "none", md: "flex" }}
        border="0px solid yellow"
        bgGradient="linear(to-b, #7928CA, #FF0080)"
        w={{ base: "40%", md: "20%" }}
      >
        <LeftBoard />
      </Flex>
      <Flex
        border="0px solid blue"
        bgGradient="linear(to-b, orange.100, purple.300)"
        minH="100vh"
        w={{ base: "100%", md: "80%" }}
      >
        <RightBoard />
      </Flex>
    </Flex>
  );
};

export default Main;
