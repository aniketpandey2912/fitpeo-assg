import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
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
    <SimpleGrid
      columns={{ base: 2, sm: 4 }}
      spacingX="10"
      spacingY="5"
      border="0px solid black"
      h="20%"
      justifyContent="space-between"
      fontSize={{ base: "12px", md: "md" }}
    >
      {numberAnalytics?.map((el) => (
        <Flex
          key={el.id}
          border="0px solid red"
          w="100%"
          alignItems="center"
          justifyContent="center"
          gap="10px"
          bg="whiteAlpha.400"
          borderRadius="10px"
          p="1%"
        >
          <Box>
            <Image
              src={el.img}
              alt={el.heading}
              h={{ base: "50px", md: "100px" }}
            />
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
    </SimpleGrid>
  );
};

export default NumberAnalytics;
