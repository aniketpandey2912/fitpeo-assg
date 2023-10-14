import React from "react";
import { Flex } from "@chakra-ui/react";
import LeftBoard from "./LeftBoard";
import RightBoard from "./RightBoard";
// import L2 from "./L2";

const Main = () => {
  return (
    <Flex border="1px solid black" h="100vh">
      <Flex
        border="1px solid red"
        bgGradient="linear(to-b, #7928CA, #FF0080)"
        h="100vh"
        w="20%"
      >
        <LeftBoard />
        {/* <L2 /> */}
      </Flex>
      <Flex border="1px solid blue" bg="red.200" h="100vh" w="80%">
        <RightBoard />
      </Flex>
    </Flex>
  );
};

export default Main;
