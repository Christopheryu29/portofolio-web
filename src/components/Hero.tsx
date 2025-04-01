"use client";

import {
  Box,
  Heading,
  Text,
  Button,
  HStack,
  IconButton,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FiArrowRight, FiCopy } from "react-icons/fi";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaLine,
  FaWhatsapp,
} from "react-icons/fa";
import { useRef, useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionButton = motion(Button);

const wordVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      type: "spring",
      stiffness: 80,
    },
  }),
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Hero = () => {
  const textColor = useColorModeValue("gray.900", "whiteAlpha.900");
  const subColor = useColorModeValue("gray.600", "gray.400");
  const heroWords = [
    "I",
    "help",
    "visionaries",
    "build",
    "next-gen",
    "experiences",
  ];

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  const toast = useToast();
  const { colorMode } = useColorMode();
  const isLight = colorMode === "light";
  const iconColor = isLight ? "gray.800" : "whiteAlpha.900";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("christopherardell29@gmail.com");
    toast({
      title: "Copied!",
      description: "Email address copied to clipboard.",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  };

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <Box
      minH="100vh"
      bgGradient={useColorModeValue(
        "linear-gradient(to bottom, #f9fafb, #e5e7eb)",
        "linear-gradient(to bottom, #111827, #0e101a, #0a0a11)"
      )}
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      px={[6, 8]}
      overflow="hidden"
    >
      <MotionBox
        position="absolute"
        bottom="-60px"
        left="50%"
        transform="translateX(-50%)"
        w="160%"
        h="300px"
        borderRadius="full"
        filter="blur(60px)"
        zIndex={0}
        animate={{ opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <MotionBox
        position="absolute"
        top="-120px"
        right="-140px"
        w="620px"
        h="620px"
        borderRadius="full"
        bgGradient="radial(ellipse at center, #7F00FF, #000)"
        opacity={0.25}
        filter="blur(160px)"
        zIndex={0}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <MotionBox
        zIndex={2}
        maxW="5xl"
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
        ref={ref}
      >
        <Heading
          fontSize={["2.5rem", "3rem", "4rem"]}
          fontWeight="bold"
          color={textColor}
          mb={4}
          lineHeight="1.3"
          fontFamily="'Space Grotesk', sans-serif"
        >
          {heroWords.map((word, i) => (
            <motion.span
              key={word + i}
              custom={i}
              variants={wordVariants}
              initial="hidden"
              animate={controls}
              style={{ display: "inline-block", marginRight: 8 }}
            >
              {word === "visionaries" ? (
                <Box
                  as="span"
                  bgGradient="linear(to-r, #7928CA, #FF0080)"
                  bgClip="text"
                  fontWeight="extrabold"
                >
                  {word}
                </Box>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </Heading>

        <MotionText
          fontSize={["md", "lg"]}
          mb={6}
          color={subColor}
          fontFamily="'Inter', sans-serif"
          variants={fadeInUp}
        >
          Hello, I'm Christopher Ardell — a Full Stack Developer with a passion
          for design & performance.
        </MotionText>

        {/* Email Button */}
        <MotionButton
          as="a"
          ref="mailto:christopherardell29@gmail.com"
          rightIcon={<FiArrowRight />}
          size="lg"
          bgGradient="linear(to-r, #FF0080, #7928CA)"
          color="white"
          _hover={{
            bgGradient: "linear(to-r, #D63384, #6F42C1)",
            boxShadow: "0 0 20px rgba(255, 0, 128, 0.5)",
          }}
          mb={4}
          px={8}
          fontWeight="bold"
          fontSize="md"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.98 }}
          variants={fadeInUp}
        >
          Let's Connect
        </MotionButton>

        <HStack justify="center" spacing={4} mt={6}>
          <Link href="https://github.com/Christopheryu29" isExternal>
            <IconButton
              icon={<FaGithub />}
              aria-label="GitHub"
              variant="ghost"
              size="lg"
              color={iconColor}
              _hover={{ color: "#333", transform: "scale(1.1)" }}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/余忠信-christopher-ardell-056404229"
            isExternal
          >
            <IconButton
              icon={<FaLinkedin />}
              aria-label="LinkedIn"
              variant="ghost"
              size="lg"
              color={iconColor}
              _hover={{ color: "#0077b5", transform: "scale(1.1)" }}
            />
          </Link>
          <Link
            href="https://www.instagram.com/christopher_ardell23"
            isExternal
          >
            <IconButton
              icon={<FaInstagram />}
              aria-label="Instagram"
              variant="ghost"
              size="lg"
              color={iconColor}
              _hover={{ color: "#E1306C", transform: "scale(1.1)" }}
            />
          </Link>
          <Link href="https://line.me/ti/p/~christopherardell23" isExternal>
            <IconButton
              icon={<FaLine />}
              aria-label="Line"
              variant="ghost"
              size="lg"
              color={iconColor}
              _hover={{ color: "#00c300", transform: "scale(1.1)" }}
            />
          </Link>
          <Link href="https://wa.me/6282161116000" isExternal>
            <IconButton
              icon={<FaWhatsapp />}
              aria-label="WhatsApp"
              variant="ghost"
              size="lg"
              color={iconColor}
              _hover={{ color: "#25D366", transform: "scale(1.1)" }}
            />
          </Link>
        </HStack>

        <HStack
          justify="center"
          spacing={2}
          mt={4}
          color={subColor}
          fontSize="sm"
          as={motion.div}
          variants={fadeInUp}
          cursor="pointer"
          onClick={handleCopyEmail}
          _hover={{ color: isLight ? "gray.700" : "gray.200" }}
        >
          <FiCopy />
          <Text fontFamily="'Fira Code', monospace">
            christopherardell29@gmail.com
          </Text>
        </HStack>
      </MotionBox>
    </Box>
  );
};

export default Hero;
