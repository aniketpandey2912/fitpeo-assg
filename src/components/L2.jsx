import React from "react";
import { Flex, Text, Icon, Heading, Box } from "@chakra-ui/react";
import { GrSettingsOption } from "react-icons/gr";
import { MdKeyboardArrowRight } from "react-icons/md";

const items = [
  {
    id: 1,
    text: "Dashboard",
    icon: GrSettingsOption,
    hasArrow: true,
    isActive: true,
  },
  {
    id: 2,
    text: "Product",
    icon: GrSettingsOption,
    hasArrow: true,
    isActive: false,
  },
  {
    id: 3,
    text: "Customers",
    icon: GrSettingsOption,
    hasArrow: true,
    isActive: false,
  },
  {
    id: 4,
    text: "Income",
    icon: GrSettingsOption,
    hasArrow: true,
    isActive: false,
  },
  {
    id: 5,
    text: "Promote",
    icon: GrSettingsOption,
    hasArrow: true,
    isActive: false,
  },
  {
    id: 6,
    text: "Help",
    icon: GrSettingsOption,
    hasArrow: true,
    isActive: false,
  },
];

const L2 = () => {
  return (
    <Flex direction="column" w="100%" gap="5%" color="white">
      <Flex alignItems="center" w="auto">
        <Icon as={GrSettingsOption} boxSize="1.5em" ml="5%" />
        <Box w="80%">
          <Heading size="md" ml="5%">
            DASHBOARD
          </Heading>
        </Box>
      </Flex>
      {items.map((item) => (
        <Flex
          align="center"
          bgColor={item.isActive ? "whiteAlpha.500" : "none"}
          cursor="pointer"
          key={item.id}
        >
          <Icon as={item.icon} w="20%" />
          <Text fontSize="14px" w="60%">
            {item.text}
          </Text>
          {item.isActive && item.hasArrow && (
            <Icon as={MdKeyboardArrowRight} w="20%" />
          )}
        </Flex>
      ))}
    </Flex>
  );
};

export default L2;
