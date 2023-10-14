import React from "react";
import { Flex, Text, Icon, Heading, Box, Avatar } from "@chakra-ui/react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import {
  AddIcon,
  CalendarIcon,
  CopyIcon,
  EmailIcon,
  QuestionOutlineIcon,
  SettingsIcon,
  UnlockIcon,
} from "@chakra-ui/icons";

const items = [
  {
    id: 1,
    text: "Dashboard",
    icon: UnlockIcon,
    hasArrow: false,
    isActive: true,
  },
  {
    id: 2,
    text: "Product",
    icon: CalendarIcon,
    hasArrow: true,
    isActive: false,
  },
  {
    id: 3,
    text: "Customers",
    icon: EmailIcon,
    hasArrow: true,
    isActive: false,
  },
  {
    id: 4,
    text: "Income",
    icon: CopyIcon,
    hasArrow: true,
    isActive: false,
  },
  {
    id: 5,
    text: "Promote",
    icon: AddIcon,
    hasArrow: true,
    isActive: false,
  },
  {
    id: 6,
    text: "Help",
    icon: QuestionOutlineIcon,
    hasArrow: true,
    isActive: false,
  },
];

const user = {
  avatar: "https://avatars.githubusercontent.com/u/107461782?v=4",
  firstName: "Aniket",
  lastName: "Pandey",
  role: "Project Manager",
};

const LeftBoard = () => {
  return (
    // Container
    <Flex w="100%" direction="column" color="white">
      {/* Container - Menus */}
      <Flex
        direction="column"
        w="100%"
        h="80%"
        gap="5%"
        paddingInline="5%"
        mt="10%"
      >
        <Flex alignItems="center" w="auto">
          <Icon as={SettingsIcon} boxSize="1.5em" ml="5%" />
          <Box w="80%">
            <Heading size="md" ml="5%">
              Dashboard
            </Heading>
          </Box>
        </Flex>
        {items.map((item) => (
          <Flex
            key={item.id}
            align="center"
            bgColor={item.isActive ? "whiteAlpha.500" : "none"}
            cursor="pointer"
            p="2%"
            borderRadius="10px"
            fontSize="14px"
          >
            <Icon as={item.icon} w="20%" />
            <Text w="60%">{item.text}</Text>
            {item.hasArrow && <Icon as={MdKeyboardArrowRight} w="20%" />}
          </Flex>
        ))}
      </Flex>

      {/* Container - User */}
      <Flex w="100%" paddingInline="5%">
        <Flex
          w="100%"
          align="center"
          bgColor="whiteAlpha.500"
          cursor="pointer"
          p="2%"
          borderRadius="10px"
        >
          <Box>
            <Avatar
              name={`${user?.firstName ?? ""} ${user?.lastName ?? ""}`}
              src="https://bit.ly/dan-abramov"
            />
          </Box>
          <Box w="60%" ml="5%" fontSize="14px">
            <Text fontWeight="500" color="">{`${
              user?.firstName ?? "NA"
            }`}</Text>
            <Text fontStyle="italic">{`${user?.role ?? "NA"}`}</Text>
          </Box>
          <Icon as={MdKeyboardArrowDown} w="20%" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LeftBoard;
