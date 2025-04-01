"use client";

import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
  Icon,
  List,
  ListItem,
  ListIcon,
  HStack,
  Button,
} from "@chakra-ui/react";
import { FaCertificate, FaEnvelope } from "react-icons/fa";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { World } from "./Globe";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiDocker,
  SiTypescript,
  SiMongodb,
  SiPython,
  SiVercel,
  SiTensorflow,
  SiKeras,
  SiJavascript,
  SiScikitlearn,
  SiPytorch,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import {
  FaGitAlt,
  FaDocker,
  FaPython,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import "../styles/global.css";
import { useColorModeValue } from "@chakra-ui/react";

const MotionBox = motion(Box);
const MotionListItem = motion(ListItem);

const LiveTaiwanClock = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Asia/Taipei",
      });
      setTime(now);
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return <Text fontWeight="semibold">{time}</Text>;
};

type ArcData = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

const globeConfig = {
  pointSize: 4,
  globeColor: "#062056",
  showAtmosphere: true,
  atmosphereColor: "#FFFFFF",
  atmosphereAltitude: 0.1,
  emissive: "#062056",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(255,255,255,0.7)",
  ambientLight: "#38bdf8",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 22.3193, lng: 114.1694 },
  autoRotate: true,
  autoRotateSpeed: 0.5,
};

const certifications = [
  "TOCFL B1",
  "Udemy 2024 Web Development Bootcamp",
  "Udemy Flutter Bootcamp",
  "NTUST EMI Outstanding Improvement Award",
  "TOEIC 880 Listening 465 Reading 415 ",
];

const floatingIcons = [
  { icon: SiReact, color: "#61DAFB" },
  { icon: SiNextdotjs, color: "#ffffff" },
  { icon: SiNodedotjs, color: "#68A063" },
  { icon: SiDocker, color: "#0db7ed" },
  { icon: SiTypescript, color: "#3178C6" },
  { icon: SiJavascript, color: "#f7df1e" },
  { icon: SiMongodb, color: "#47A248" },
  { icon: SiPython, color: "#3776AB" },
  { icon: SiTensorflow, color: "#FF6F00" },
  { icon: SiKeras, color: "#D00000" },
  { icon: SiScikitlearn, color: "#f7931e" },
  { icon: SiPytorch, color: "#ee4c2c" },
  { icon: SiHtml5, color: "#e34c26" },
  { icon: SiCss3, color: "#264de4" },
  { icon: SiVercel, color: "#ffffff" },
  { icon: FaGitAlt, color: "#f97316" },
  { icon: FaDocker, color: "#0ea5e9" },
  { icon: FaReact, color: "#60a5fa" },
  { icon: FaPython, color: "#fde68a" },
  { icon: FaNodeJs, color: "#4ade80" },
];
const generateFloatingIconStyles = () =>
  floatingIcons.map((iconObj, index) => {
    const floatAnim = `float${(index % 3) + 1}`;
    const row = Math.floor(index / 4);
    const col = index % 4;
    const top = `${10 + row * 18}%`;
    const left = `${10 + col * 20}%`;
    const size = `${32 + Math.random() * 12}px`;
    const duration = `${8 + Math.random() * 3}s`;

    return {
      ...iconObj,
      key: `float-icon-${index}`,
      style: {
        position: "absolute" as const,
        top,
        left,
        fontSize: size,
        color: iconObj.color,
        opacity: 0.35,
        animation: `${floatAnim} ${duration} ease-in-out infinite`,
        zIndex: 1,
        filter: "drop-shadow(0 0 6px rgba(255,255,255,0.06))",
      },
    };
  });

const generateArcs = (): ArcData[] => [
  {
    order: 1,
    startLat: 28.6139,
    startLng: 77.209,
    endLat: 3.139,
    endLng: 101.6869,
    arcAlt: 0.2,
    color: "#06b6d4",
  },
  {
    order: 2,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.2,
    color: "#3b82f6",
  },
  {
    order: 3,
    startLat: -33.8688,
    startLng: 151.2093,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.3,
    color: "#6366f1",
  },
];

const HighlightsAndCertifications = () => {
  const [arcs, setArcs] = useState<ArcData[]>([]);

  useEffect(() => {
    setArcs(generateArcs());
    const interval = setInterval(() => setArcs(generateArcs()), 8000);
    return () => clearInterval(interval);
  }, []);

  const memoizedFloatingIcons = useMemo(generateFloatingIconStyles, []);
  const bgColor = useColorModeValue(
    "#e5e7eb",
    "linear-gradient(to bottom, #0a0a11, #0e101a, #111827)"
  );
  return (
    <Box py={24} px={[4, 10]} bg={bgColor}>
      <Box
        position="relative"
        textAlign="center"
        mb={24}
        py={10}
        overflow="hidden"
      >
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          w="400px"
          h="400px"
          bgGradient="radial(rgba(14,165,233,0.25), transparent 60%)"
          borderRadius="full"
          filter="blur(60px)"
          zIndex={0}
          animation="pulseGlow 6s ease-in-out infinite"
        />

        <Heading
          fontFamily="'Sora', sans-serif"
          fontSize={["2xl", "3xl", "4xl"]}
          fontWeight="bold"
          letterSpacing="0.1em"
          color={useColorModeValue("gray.800", "white")}
          textShadow="0 2px 8px rgba(0,0,0,0.2)"
          position="relative"
          zIndex={1}
        >
          WHY{" "}
          <Text
            as="span"
            bgGradient="linear(to-r, #0ea5e9, #6366f1)"
            bgClip="text"
            sx={{
              animation: "shimmer 4s infinite linear",
              backgroundSize: "300% 300%",
            }}
          >
            WORK
          </Text>{" "}
          WITH{" "}
          <Text
            as="span"
            bgGradient="linear(to-r, #0ea5e9, #6366f1)"
            bgClip="text"
            sx={{
              animation: "shimmer 4s infinite linear",
              backgroundSize: "300% 300%",
            }}
          >
            ME
          </Text>
        </Heading>

        {[...Array(14)].map((_, i) => (
          <Box
            key={i}
            position="absolute"
            top={`${Math.random() * 100}%`}
            left={`${Math.random() * 100}%`}
            w="3px"
            h="3px"
            bg="teal.300"
            borderRadius="full"
            opacity={0.4}
            animation={`floatParticle ${3 + Math.random() * 3}s ease-in-out ${
              Math.random() * 2
            }s infinite alternate`}
            zIndex={0}
          />
        ))}
      </Box>

      <Grid
        templateColumns={["1fr", null, "repeat(3, 1fr)"]}
        gap={10}
        maxW="7xl"
        mx="auto"
      >
        <MotionBox
          as={GridItem}
          whileHover={{ scale: 1.08, rotate: 0.5 }}
          whileTap={{ scale: 0.96 }}
          p={[6, 8]}
          borderRadius="2xl"
          bg={useColorModeValue(
            "linear-gradient(135deg, rgba(243, 244, 246, 0.9), rgba(229, 231, 235, 0.85))",
            "linear-gradient(135deg, rgba(12, 18, 33, 0.8), rgba(5, 15, 30, 0.9))"
          )}
          boxShadow={useColorModeValue(
            "0 4px 60px rgba(0, 0, 0, 0.05)",
            "0 0 60px rgba(0, 255, 255, 0.1)"
          )}
          border={useColorModeValue(
            "1px solid rgba(0,0,0,0.06)",
            "1px solid rgba(0,255,255,0.06)"
          )}
          backdropFilter="blur(34px)"
          position="relative"
          overflow="hidden"
          minH="480px"
        >
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom="100px"
            zIndex={3}
            pointerEvents="none"
          >
            {memoizedFloatingIcons.map(({ icon: IconComp, key, style }) => (
              <Box
                key={key}
                style={{
                  ...style,
                  animation: `${style.animation}, horizontalFloat ${
                    6 + Math.random() * 2
                  }s ease-in-out infinite alternate`,
                }}
              >
                <Icon as={IconComp} />
              </Box>
            ))}
          </Box>

          <Box
            position="absolute"
            top={0}
            left={0}
            w="100%"
            h="100%"
            bgGradient="linear(135deg, rgba(0,212,255,0.08) 0%, transparent 70%)"
            zIndex={2}
          />

          <VStack
            align="center"
            spacing={4}
            position="absolute"
            bottom={6}
            left={0}
            right={0}
            zIndex={4}
            px={6}
          >
            <Text
              fontWeight="extrabold"
              fontSize="lg"
              fontFamily="'Space Grotesk', sans-serif"
              letterSpacing="wide"
              bgGradient="linear(to-r, #0ff, #38bdf8)"
              bgClip="text"
              textAlign="center"
              textShadow="0 0 14px rgba(0,255,255,0.25)"
              sx={{
                animation: "shimmer 4s ease-in-out infinite",
                backgroundSize: "300% 300%",
              }}
            >
              Collaboration & Technical Excellence
            </Text>

            <Text
              fontSize="sm"
              lineHeight={1.8}
              fontWeight={600}
              textAlign="center"
              maxW="320px"
            >
              I blend strong communication with modern tech skills to build
              scalable, user-focused systems across frontend, backend, and ML —
              always delivering real impact.
            </Text>
          </VStack>
        </MotionBox>

        <GridItem
          colSpan={1}
          bg={useColorModeValue(
            "linear-gradient(135deg, rgba(243, 244, 246, 0.9), rgba(229, 231, 235, 0.85))",
            "linear-gradient(180deg, rgba(15,23,42,0.9), rgba(2,6,23,0.9))"
          )}
          borderRadius="2xl"
          boxShadow={useColorModeValue(
            `0 10px 30px rgba(0, 0, 0, 0.1)`,
            `0 0 24px rgba(59,130,246,0.3),
     0 0 60px rgba(59,130,246,0.2),
     0 0 120px rgba(59,130,246,0.1)`
          )}
          backdropFilter="blur(24px)"
          overflow="hidden"
          position="relative"
          p={[6, 8, 10]}
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          color={useColorModeValue("gray.900", "white")}
        >
          <Text
            fontSize={["lg", "xl", "2xl"]}
            fontWeight="extrabold"
            fontFamily="'Space Grotesk', sans-serif"
            bgGradient="linear(to-r, #93c5fd, #3b82f6)"
            bgClip="text"
            textAlign="center"
            mb={4}
          >
            I’m very flexible with <br /> time zone communications
          </Text>

          <Box
            width={["320px", "400px", "500px"]}
            height={["320px", "400px", "500px"]}
            borderRadius="full"
            overflow="hidden"
            position="relative"
            aspectRatio={2}
            bg="transparent"
            sx={{
              canvas: {
                width: "100% !important",
                height: "100% !important",
                aspectRatio: "1 !important",
                objectFit: "cover",
              },
            }}
            _hover={{ transform: "scale(1.03)" }}
            transition="transform 0.3s ease"
          >
            <World globeConfig={globeConfig} data={arcs} />
          </Box>

          <Box
            mt={6}
            px={4}
            py={2}
            bg={useColorModeValue(
              "rgba(255, 255, 255, 0.6)",
              "rgba(17,24,39,0.7)"
            )}
            borderRadius="2xl"
            boxShadow={useColorModeValue(
              "0 0 16px rgba(0, 0, 0, 0.08)",
              "0 0 18px rgba(147,197,253,0.3)"
            )}
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={3}
            fontSize="sm"
            fontFamily="monospace"
            color={useColorModeValue("gray.800", "whiteAlpha.800")}
          >
            <Text fontWeight="bold" color={useColorModeValue("black", "white")}>
              🇹🇼 Taiwan
            </Text>
            <LiveTaiwanClock />
            <Text
              fontSize="xs"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Remote
            </Text>
          </Box>
        </GridItem>

        <MotionBox
          as={GridItem}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          p={[8, 10]}
          borderRadius="2xl"
          bg={useColorModeValue(
            "linear-gradient(135deg, rgba(255, 255, 255, 0.85), rgba(243, 244, 246, 0.85))",
            "linear-gradient(135deg, rgba(12, 18, 33, 0.9), rgba(2, 6, 23, 0.8))"
          )}
          boxShadow={useColorModeValue(
            "0 10px 40px rgba(0, 0, 0, 0.08)",
            "0 0 100px rgba(0,255,255,0.08), inset 0 0 24px rgba(255,255,255,0.02)"
          )}
          border={useColorModeValue(
            "1px solid rgba(0, 0, 0, 0.05)",
            "1px solid rgba(255,255,255,0.05)"
          )}
          backdropFilter="blur(26px)"
          color={useColorModeValue("gray.900", "white")}
          position="relative"
          overflow="hidden"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box
            position="absolute"
            inset={0}
            zIndex={0}
            bgGradient="radial(at top left, rgba(0,255,255,0.08), transparent 70%)"
            animation="auroraMove 15s ease-in-out infinite alternate"
          />

          {[...Array(3)].map((_, i) => (
            <Box
              key={i}
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              width={`${380 + i * 70}px`}
              height={`${380 + i * 70}px`}
              borderRadius="full"
              bg="rgba(0,255,255,0.035)"
              filter="blur(48px)"
              opacity={0.08 - i * 0.015}
              animation="pulseGlow 8s ease-in-out infinite"
              zIndex={0}
            />
          ))}

          <Box
            position="absolute"
            top={0}
            left={0}
            w="200%"
            h="200%"
            zIndex={1}
            pointerEvents="none"
            overflow="hidden"
          >
            <Box
              position="absolute"
              top={0}
              left={0}
              width="200%"
              height="200%"
              bg="linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.12) 40%, rgba(255,255,255,0.04) 100%)"
              filter="blur(40px)"
              transform="rotate(25deg)"
              animation="refractionSweep 7s ease-in-out infinite"
            />
          </Box>

          <VStack spacing={6} align="start" zIndex={2} position="relative">
            <HStack spacing={3}>
              <Box
                p={2}
                borderRadius="full"
                bgGradient="linear(to-br, teal.400, cyan.500)"
                boxShadow="0 0 12px rgba(94,234,212,0.4)"
              >
                <Icon as={FaCertificate} color="white" boxSize={4} />
              </Box>
              <Text
                fontWeight="bold"
                fontSize="xl"
                fontFamily="'Space Grotesk', sans-serif"
              >
                Certifications & Awards
              </Text>
            </HStack>

            <List spacing={3} w="full">
              {certifications.map((cert, idx) => (
                <MotionListItem
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  display="flex"
                  alignItems="center"
                  fontSize="sm"
                >
                  <ListIcon as={CheckCircleIcon} color="teal.300" boxSize={4} />
                  <Text fontWeight={700}>{cert}</Text>
                </MotionListItem>
              ))}
            </List>

            <Box
              w="full"
              h="1px"
              bg="linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)"
              my={4}
            />
          </VStack>

          <Box
            pt={6}
            mt={6}
            borderTop="1px solid rgba(255,255,255,0.05)"
            zIndex={2}
          >
            <VStack spacing={4} align="center">
              <Text
                fontWeight="semibold"
                fontSize="md"
                textAlign="center"
                fontFamily="'Space Grotesk', sans-serif"
              >
                Let’s work together on your next project
              </Text>

              <MotionBox
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Button
                  onClick={() =>
                    (window.location.href =
                      "mailto:christopherardell29@gmail.com")
                  }
                  leftIcon={<Icon as={FaEnvelope} />}
                  variant="ghost"
                  px={6}
                  py={5}
                  borderRadius="full"
                  fontSize="sm"
                  fontWeight="medium"
                  bg="rgba(255,255,255,0.03)"
                  border="1px solid rgba(255,255,255,0.08)"
                  _hover={{
                    bg: "rgba(255,255,255,0.07)",
                    boxShadow: "0 0 14px rgba(94,234,212,0.3)",
                  }}
                >
                  christopherardell29@gmail.com
                </Button>
              </MotionBox>
            </VStack>
          </Box>
        </MotionBox>
      </Grid>
    </Box>
  );
};

export default HighlightsAndCertifications;
