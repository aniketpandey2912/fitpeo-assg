import React from "react";
import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Icon,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, SettingsIcon } from "@chakra-ui/icons";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { items, user } from "../LeftBoard";

function DashboardDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const renderItems = (items) => {
    return items.map((item) => (
      <Flex
        key={item.id}
        align="center"
        bgColor={item.isActive ? "whiteAlpha.500" : "none"}
        cursor="pointer"
        p="2%"
        borderRadius="10px"
        fontSize="14px"
        justifyContent="space-between"
      >
        <Flex align="center" gap="10px">
          <Icon as={item.icon} />
          <Text>{item.text}</Text>
        </Flex>
        <Flex>{item.hasArrow && <Icon as={MdKeyboardArrowRight} />}</Flex>
      </Flex>
    ));
  };

  return (
    <>
      <Button
        bgGradient="linear(to-b, #7928CA, #FF0080)"
        color="white"
        onClick={onOpen}
      >
        <HamburgerIcon boxSize="20px" />
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent
          bgGradient="linear(to-b, #7928CA, #FF0080)"
          color="white"
        >
          <DrawerHeader borderBottomWidth="1px">
            <Flex alignItems="center">
              <Icon as={SettingsIcon} boxSize="1.5em" ml="5%" />
              <Box w="80%">
                <Heading size="md" ml="5%">
                  Dashboard
                </Heading>
              </Box>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <Flex direction="column" h="80%" p="5%">
              {renderItems(items)}
            </Flex>

            {/* Container - User */}
            <Flex p="5%">
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
                    src={user.avatar}
                  />
                </Box>
                <Box w="60%" ml="5%" fontSize="14px">
                  <Text fontWeight="500" color="">
                    {user?.firstName ?? "NA"}
                  </Text>
                  <Text fontStyle="italic">{user?.role ?? "NA"}</Text>
                </Box>
                <Icon as={MdKeyboardArrowDown} w="20%" />
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DashboardDrawer;
