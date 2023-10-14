import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const numberAnalytics = [
  {
    id: 1,
    img: "https://cdn0.iconfinder.com/data/icons/strategy-icons-rounded/110/Analytics-512.png",
    heading: "Earning",
    amount: "198k",
    profit: "37.8%",
    loss: null,
    currency: "$",
  },
  {
    id: 2,
    img: "https://cdn0.iconfinder.com/data/icons/strategy-icons-rounded/110/Analytics-512.png",
    heading: "Orders",
    amount: "198k",
    profit: null,
    loss: "2%",
    currency: "$",
  },
  {
    id: 3,
    img: "https://cdn0.iconfinder.com/data/icons/strategy-icons-rounded/110/Analytics-512.png",
    heading: "Balance",
    amount: "2.4k",
    profit: null,
    loss: "2%",
    currency: "$",
  },
  {
    id: 4,
    img: "https://cdn0.iconfinder.com/data/icons/strategy-icons-rounded/110/Analytics-512.png",
    heading: "Sales",
    amount: "198k",
    profit: "11%",
    loss: null,
    currency: "$",
  },
];

const NumberAnalytics = () => {
  return (
    <Flex border="1px solid black" h="20%" justifyContent="space-between">
      {numberAnalytics?.map((el) => (
        <Flex
          key={el.id}
          //   border="1px solid red"
          w="23%"
          alignItems="center"
          justifyContent="center"
          gap="10px"
          bgColor="white"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          borderRadius="10px"
        >
          <Box>
            <Image src={el.img} alt={el.heading} h="100px" />
          </Box>
          <Box>
            <Text>{el.heading}</Text>
            <Text>
              {el.currency}
              {el.amount}
            </Text>
            <Text>
              {el.profit ? <ArrowUpIcon /> : <ArrowDownIcon />}
              {el.profit ? el.profit : el.loss}
            </Text>
          </Box>
        </Flex>
      ))}
    </Flex>
  );
};

export default NumberAnalytics;
