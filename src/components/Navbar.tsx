"use client";

import {
  Box,
  Flex,
  HStack,
  Button,
  IconButton,
  useColorModeValue,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import ColorModeSwitcher from "./ColorModeSwitcher";

const navItems = [
  "About",
  "Skills",
  "Projects",
  "Certifications",
  "Career",
  "Contact",
];

const MotionBox = motion(Box);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const bg = useColorModeValue(
    "rgba(255, 255, 255, 0.6)",
    "rgba(17, 24, 39, 0.6)"
  );
  const color = useColorModeValue("gray.800", "whiteAlpha.900");
  const hoverBg = useColorModeValue("whiteAlpha.800", "whiteAlpha.100");
  const shadow = useColorModeValue(
    "0 4px 20px rgba(0,0,0,0.05)",
    "0 4px 20px rgba(0,0,0,0.3)"
  );

  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      onClose();
    }
  };

  return (
    <MotionBox
      px={[4, 8]}
      py={3}
      position="sticky"
      top={0}
      zIndex="banner"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      backdropFilter="blur(18px) saturate(180%)"
      bg={bg}
      color={color}
      boxShadow={shadow}
      borderBottom="1px solid rgba(255,255,255,0.08)"
    >
      <Flex align="center" justify="space-between">
        {/* Logo / Name */}
        <Box
          fontSize="xl"
          fontWeight="bold"
          fontFamily="'Space Grotesk', sans-serif"
          letterSpacing="wider"
          textShadow="0 1px 1px rgba(0,0,0,0.08)"
        >
          Christopher Ardell
        </Box>

        {/* Desktop Navigation */}
        <HStack spacing={3} display={{ base: "none", md: "flex" }}>
          {navItems.map((item) => (
            <Button
              key={item}
              size="sm"
              fontWeight="medium"
              px={5}
              rounded="full"
              color={item === "Contact" ? "white" : color}
              bgGradient={
                item === "Contact"
                  ? "linear(to-r, #0ea5e9, #6366f1)"
                  : "transparent"
              }
              variant={item === "Contact" ? "solid" : "ghost"}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow:
                  item === "Contact"
                    ? "0 0 14px rgba(99,102,241,0.5)"
                    : "0 0 8px rgba(255,255,255,0.08)",
              }}
              transition="all 0.3s ease"
              onClick={() => handleScrollToSection(item)}
            >
              {item}
            </Button>
          ))}
          <ColorModeSwitcher />
        </HStack>

        {/* Mobile Icon */}
        <IconButton
          aria-label="Open Menu"
          icon={<HamburgerIcon />}
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          variant="ghost"
          size="md"
        />
      </Flex>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent
          bg={bg}
          color={color}
          backdropFilter="blur(24px)"
          borderLeft="1px solid rgba(255,255,255,0.05)"
        >
          <DrawerCloseButton mt={2} />
          <DrawerHeader fontWeight="bold" fontSize="lg">
            Menu
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="stretch" mt={4}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  variant={"ghost"}
                  size="lg"
                  fontWeight="medium"
                  rounded="full"
                  px={6}
                  justifyContent="flex-start"
                  _hover={{
                    bg: item === "Contact" ? "teal.500" : hoverBg,
                    boxShadow:
                      item === "Contact"
                        ? "0 0 10px rgba(56, 178, 172, 0.5)"
                        : "0 0 6px rgba(255,255,255,0.08)",
                  }}
                  onClick={() => handleScrollToSection(item)}
                >
                  {item}
                </Button>
              ))}
              <Box pt={6}>
                <ColorModeSwitcher />
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </MotionBox>
  );
};

export default Navbar;
