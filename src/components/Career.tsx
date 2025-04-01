"use client";

import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const experience = [
  {
    role: "Front End Engineer",
    company: "菜蟲農食股份公司",
    period: "July 2024 - Present",
  },
  {
    role: "English Teacher",
    company: "康耘補習班",
    period: "Mar 2024 - July 2024",
  },
  {
    role: "Computer Science Student",
    company: "NTUST",
    period: "September 2021 - Present",
  },
];

const Career = () => {
  const bg = useColorModeValue(
    "linear-gradient(to bottom, #e5e7eb 0%, #ebebec 100%)",
    "linear-gradient(to bottom, #0a0a0a 0%, #080808 60%, #050505 100%)"
  );

  const cardBg = useColorModeValue("white", "rgba(255, 255, 255, 0.04)");
  const iconColor = useColorModeValue("#0ea5e9", "#38bdf8"); // cyan-like
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");
  const text = useColorModeValue("gray.800", "whiteAlpha.900");

  return (
    <Box py={[16, 24]} px={[6, 10]} bg={bg} color={text}>
      <VStack spacing={3} textAlign="center" mb={16}>
        <Text
          fontSize="xs"
          textTransform="uppercase"
          color="gray.400"
          letterSpacing="wider"
          fontWeight="medium"
        >
          Career Journey
        </Text>
        <Heading
          fontSize={["3xl", "4xl", "5xl"]}
          bgGradient="linear(to-r, #3b82f6, #06b6d4)"
          bgClip="text"
          fontWeight="extrabold"
          fontFamily="'Space Grotesk', sans-serif"
        >
          Professional Experience
        </Heading>
        <Text maxW="640px" fontSize="md" color="gray.400" px={2}>
          I'm a 4th-year Computer Science student with hands-on experience in
          front-end engineering, teaching, and academic mentoring.
        </Text>
      </VStack>

      <VStack spacing={10} align="stretch" maxW="3xl" mx="auto">
        {experience.map((exp, i) => (
          <MotionBox
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            position="relative"
            _before={{
              content: '""',
              position: "absolute",
              left: "14px",
              top: "0",
              bottom: "0",
              width: "2px",
              bg: "linear-gradient(to bottom, #06b6d4, transparent)",
            }}
          >
            <HStack spacing={4} align="start" pl={10} position="relative">
              <Box
                position="absolute"
                left="0"
                top="6px"
                bg="#0a0a0a"
                p="2"
                rounded="full"
                border="2px solid"
                borderColor={iconColor}
                boxShadow={`0 0 15px ${iconColor}`}
                zIndex={1}
              >
                <Icon as={FaBriefcase} color={iconColor} boxSize={4} />
              </Box>

              <Box
                bg={cardBg}
                p={[4, 6]}
                rounded="xl"
                boxShadow="xl"
                border={`1px solid ${borderColor}`}
                backdropFilter="blur(10px)"
                transition="all 0.3s"
                _hover={{ transform: "translateY(-2px)", boxShadow: "2xl" }}
                w="full"
              >
                <Text fontSize="xl" fontWeight="bold" color={text} mb={1}>
                  {exp.role}
                </Text>
                <Text fontSize="sm" color="gray.400" fontWeight="medium">
                  {exp.company} &nbsp;·&nbsp; {exp.period}
                </Text>
              </Box>
            </HStack>
          </MotionBox>
        ))}
      </VStack>
    </Box>
  );
};

export default Career;
