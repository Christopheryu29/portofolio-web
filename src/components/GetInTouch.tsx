"use client";

import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useDisclosure,
  useToast,
  VStack,
  Text,
  Heading,
  HStack,
  Flex,
  useColorModeValue,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaInstagram,
  FaLine,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const GetInTouch = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { name, email, message } = formData;
    const mailtoLink = `mailto:christopherardell29@gmail.com?subject=Message from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
    window.location.href = mailtoLink;
    toast({
      title: "Redirecting to your email client...",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
    onClose();
  };

  const bgImage = useColorModeValue("/getintouchwhite.png", "/getintouch.png");
  const textColor = useColorModeValue("gray.800", "white");
  const subTextColor = useColorModeValue("gray.600", "whiteAlpha.800");
  const quoteColor = useColorModeValue("gray.500", "whiteAlpha.600");
  const iconColor = useColorModeValue("gray.800", "whiteAlpha.900");

  return (
    <Flex
      direction="column"
      minH="100vh"
      bgImage={bgImage}
      bgSize="cover"
      bgPosition="top center"
      bgRepeat="no-repeat"
    >
      {/* Spacer for CA logo */}
      <Box height={["320px", "400px", "460px"]} />

      {/* Content Section */}
      <Box
        px={4}
        mt="auto"
        textAlign="center"
        display="flex"
        flexDirection="column"
        alignItems="center"
        maxW="container.md"
        mx="auto"
        color={textColor}
      >
        <MotionHeading
          fontSize={["2xl", "3xl", "4xl"]}
          fontWeight="normal"
          letterSpacing="wide"
          mb={2}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          FROM CONCEPT TO{" "}
          <Text as="span" fontWeight="bold">
            CREATION
          </Text>
        </MotionHeading>

        <MotionHeading
          fontSize={["2xl", "3xl", "4xl"]}
          fontWeight="normal"
          letterSpacing="wide"
          mb={6}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          LET&apos;S MAKE IT{" "}
          <Text as="span" fontWeight="extrabold">
            HAPPEN!
          </Text>
        </MotionHeading>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Button
            onClick={onOpen}
            size="lg"
            px={8}
            py={6}
            bg="blackAlpha.300"
            color={textColor}
            _hover={{ bg: "blackAlpha.500", transform: "scale(1.05)" }}
            transition="all 0.3s ease-in-out"
            rounded="full"
            backdropFilter="blur(6px)"
            boxShadow="lg"
            fontWeight="semibold"
            fontSize="md"
          >
            Get In Touch →
          </Button>
        </motion.div>

        <MotionText
          mt={10}
          fontSize="lg"
          fontWeight="semibold"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          Open to full-time roles & freelance collaborations.
        </MotionText>

        <MotionText
          mt={5}
          fontSize="md"
          color={subTextColor}
          maxW="720px"
          px={4}
          lineHeight="1.8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
        >
          I’m a final-year Computer Science student and full-stack engineer,
          passionate about building scalable, user-centric applications. I
          specialize in React, TypeScript, Flutter, Node.js, and MongoDB, and
          bring hands-on experience deploying intelligent solutions with machine
          learning. I focus on writing clean, efficient code and love working on
          meaningful products that prioritize performance and user experience.
        </MotionText>

        <MotionText
          fontSize="sm"
          color={quoteColor}
          mt={3}
          maxW="lg"
          fontStyle="italic"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.4 }}
        >
          Let’s build something impactful — together.
        </MotionText>

        {/* Modal */}
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay bg="blackAlpha.800" />
          <ModalContent
            bg="rgba(23, 25, 35, 0.85)"
            backdropFilter="blur(12px)"
            border="1px solid rgba(255,255,255,0.1)"
            color="white"
            rounded="xl"
          >
            <ModalHeader fontSize="xl" fontWeight="bold">
              Contact Me
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack spacing={4}>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    bg="gray.800"
                    _placeholder={{ color: "gray.400" }}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    bg="gray.800"
                    _placeholder={{ color: "gray.400" }}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    name="message"
                    placeholder="Your message..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    bg="gray.800"
                    _placeholder={{ color: "gray.400" }}
                  />
                </FormControl>
              </VStack>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
                Send
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* Social Icons */}
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
      </Box>

      {/* Footer pushed to bottom */}
      <Box mt="auto" textAlign="center" py={6}>
        <Text
          fontSize="sm"
          color={quoteColor}
          fontWeight="medium"
          _hover={{ textDecoration: "underline", color: textColor }}
          transition="color 0.3s ease"
        >
          Designed & crafted by Christopher Ardell
        </Text>
      </Box>
    </Flex>
  );
};

export default GetInTouch;
