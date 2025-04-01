// Projects Component — Improved visual with better typography and image block UI
"use client";

import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Image,
  SimpleGrid,
  useColorModeValue,
  Link,
  Tooltip,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiArrowRight, FiGithub } from "react-icons/fi";
import {
  SiReact,
  SiTypescript,
  SiChakraui,
  SiTensorflow,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiFirebase,
  SiMui,
  SiTailwindcss,
  SiNextdotjs,
  SiZod,
  SiReactquery,
  SiFramer,
} from "react-icons/si";
import { TbBrandVercel } from "react-icons/tb";

const MotionBox = motion(Box);

const techIcons: { [key: string]: React.ReactElement } = {
  React: <SiReact />,
  TypeScript: <SiTypescript />,
  "Next.js": <SiNextdotjs />,
  "Chakra UI": <SiChakraui />,
  "Tailwind CSS": <SiTailwindcss />,
  "TensorFlow.js": <SiTensorflow />,
  MongoDB: <SiMongodb />,
  Express: <SiExpress />,
  "Node.js": <SiNodedotjs />,
  "Firebase Auth": <SiFirebase />,
  "Material UI": <SiMui />,
  Vercel: <TbBrandVercel />,
  "Framer Motion": <SiFramer />,
  Zod: <SiZod />,
  "React Query": <SiReactquery />,
  Convex: (
    <Box
      as="span"
      bg="whiteAlpha.900"
      color="#000"
      fontWeight="bold"
      fontSize="10px"
      px="2"
      py="1"
      borderRadius="sm"
      lineHeight="1"
    >
      CVX
    </Box>
  ),
};
const projects = [
  {
    title: "JIFT",
    subtitle: "AI Family Finance Tracker",
    github: "https://github.com/Christopheryu29/smart-productivity",
    description:
      "JIFT is a full-stack AI finance app empowering families to track expenses, budget smartly, and stay financially healthy.",
    highlights: [
      "AI-powered financial predictions and insights using TensorFlow.js.",
      "Smart budgeting logic with visual breakdowns and savings goals.",
      "Interactive dashboard with weekly, monthly, and yearly analytics.",
      "Role-based access: household members and owner permissions.",
      "Built with Convex for real-time sync and Firestore-like queries.",
      "Mobile-responsive and optimized for dark/light mode switching.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Next.js",
      "Chakra UI",
      "Tailwind CSS",
      "TensorFlow.js",
      "Convex",
      "Vercel",
      "Framer Motion",
      "Zod",
      "React Query",
    ],
    image: "/jiftt.png",
    accentColor: "#059669",
    link: "https://jiftt.vercel.app/",
  },
  {
    title: "PhotoboothCS",
    subtitle: "Interactive Web Photobooth",
    github: "https://github.com/Christopheryu29/photobox-web",
    description:
      "PhotoboothCS lets users take photos, apply stylish frames, and download the results—used by over 24k users in 2 weeks.",
    highlights: [
      "Supports live camera access with instant photo capture.",
      "Selectable modern frames and animated templates.",
      "Template flow: welcome → choose layout → snap → download.",
      "Real-time camera preview and retake option.",
      "Smooth animations using Framer Motion.",
      "Highly responsive UI built for mobile-first experience.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Material UI",
      "Framer Motion",
      "Vite",
      "HTML5 Camera API",
      "Tailwind CSS",
    ],
    image: "/photobooth.png",
    accentColor: "#db2777",
    link: "https://photoboothcs.vercel.app/",
  },
  {
    title: "Ardell Real Estate",
    subtitle: "Full-Stack Property Listing App",
    github: "https://github.com/Christopheryu29/mern-realEstate-web",
    description:
      "Ardell is a role-based MERN app for real estate listing, filtering, and property management with Firebase Auth integration.",
    highlights: [
      "Full CRUD support for listings, with smart filters and sorting.",
      "Separate dashboards for buyers, sellers, and agents.",
      "Responsive map view with dynamic property pins.",
      "JWT-based role control and secure route guards.",
      "Firebase Authentication with email/password login.",
      "Modern UI with custom components and user-friendly flows.",
    ],
    tech: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Firebase Auth",
      "React Router",
      "Styled Components",
      "Cloudinary",
      "Framer Motion",
      "Chakra UI",
    ],
    image: "/about.png",
    accentColor: "#2563eb",
    link: "https://github.com/Christopheryu29/mern-realEstate-web",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Projects = () => {
  const text = useColorModeValue("gray.800", "whiteAlpha.900");
  const bg = useColorModeValue(
    "    #e5e7eb",
    "radial-gradient(circle at 30% 30%, #050505 0%, #08090c 45%, #060607 70%, #0a0a0a 100%)"
  );
  const headingColor = useColorModeValue("gray.900", "white");
  const subtitleColor = useColorModeValue("gray.600", "gray.400");
  const bodyTextColor = useColorModeValue("gray.700", "gray.300");
  const techTextColor = useColorModeValue("gray.800", "whiteAlpha.900");
  const githubColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Box position="relative" py={[16, 24]} px={[4, 10]} bg={bg} color={text}>
      <Box
        position="absolute"
        top={0}
        left={0}
        w="full"
        h="full"
        bgImage="radial-gradient(#1f2937 1px, transparent 1px)"
        backgroundSize="20px 20px"
        opacity={0.04}
        zIndex={0}
      />

      <VStack
        spacing={2}
        mb={36}
        textAlign="center"
        zIndex={1}
        position="relative"
      >
        <Text
          fontSize="sm"
          fontWeight="medium"
          color={subtitleColor}
          fontFamily="'Inter', sans-serif"
          textTransform="uppercase"
          letterSpacing="wide"
        >
          Featured Case Studies
        </Text>

        <Heading
          fontSize={["3xl", "4xl", "5xl"]}
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontWeight="bold"
          color={headingColor}
        >
          Curated{" "}
          <Text
            as="span"
            bgGradient="linear(to-r, #6366f1, #ec4899)"
            bgClip="text"
            fontStyle="italic"
            fontWeight="extrabold"
            filter="drop-shadow(0 0 10px rgba(236, 72, 153, 0.6))"
          >
            work
          </Text>
        </Heading>
      </VStack>

      <VStack
        spacing={24}
        align="stretch"
        maxW="7xl"
        mx="auto"
        position="relative"
        zIndex={1}
      >
        {projects.map((project, index) => (
          <MotionBox
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            variants={fadeUp}
          >
            <SimpleGrid columns={[1, null, 2]} spacing={12} alignItems="center">
              {/* Left Side */}
              <Box
                position="relative"
                borderRadius="2xl"
                boxShadow={`0 8px 30px ${project.accentColor}44`}
                transition="all 0.4s ease"
                _hover={{
                  boxShadow: `0 12px 50px ${project.accentColor}66`,
                  transform: "scale(1.015)",
                }}
                _after={{
                  content: '""',
                  position: "absolute",
                  inset: 0,

                  borderColor: `${project.accentColor}33`,
                  borderRadius: "2xl",
                  pointerEvents: "none",
                  zIndex: 1,
                }}
              >
                <VStack
                  spacing={10}
                  align="center"
                  justify="center"
                  textAlign="center"
                >
                  {/* Image Preview Card */}
                  <Box
                    borderRadius="xl"
                    overflow="hidden"
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                    maxW="6xl"
                    mx="auto"
                    w="full"
                    transition="0.3s ease"
                    _hover={{ transform: "scale(1.01)" }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      objectFit="cover"
                      w="full"
                      h="auto"
                    />
                  </Box>
                </VStack>

                {/* Soft outer glow */}
                <Box
                  position="absolute"
                  top={-4}
                  left={-4}
                  right={-4}
                  bottom={-4}
                  borderRadius="2xl"
                  background={`radial-gradient(circle, ${project.accentColor}55, transparent 80%)`}
                  filter="blur(48px)"
                  opacity={0.7}
                  zIndex={-1}
                />
              </Box>

              {/* Right Side */}
              <VStack
                align="start"
                spacing={6}
                fontFamily="'Inter', sans-serif"
                w="full"
              >
                {/* Title and Subtitle */}
                <HStack
                  spacing={3}
                  align="center"
                  flexWrap="wrap"
                  fontFamily="'Plus Jakarta Sans', sans-serif"
                >
                  <Text
                    fontSize={["2xl", "3xl"]}
                    fontWeight="extrabold"
                    bgColor={project.accentColor}
                    bgClip="text"
                  >
                    {project.title}
                  </Text>

                  <Text
                    as="span"
                    color={subtitleColor}
                    fontSize={["md", "lg"]}
                    fontWeight="medium"
                  >
                    — {project.subtitle}
                  </Text>

                  {project.github && (
                    <Tooltip label="View on GitHub" hasArrow>
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        color={githubColor}
                        _hover={{
                          color: project.accentColor,
                          transform: "scale(1.15)",
                        }}
                        transition="all 0.2s ease"
                        fontSize="xl"
                        display="flex"
                        alignItems="center"
                      >
                        <FiGithub />
                      </Link>
                    </Tooltip>
                  )}
                </HStack>

                {/* Short Rich Description */}
                <Text
                  fontSize={["md", "lg"]}
                  fontWeight="medium"
                  lineHeight="1.9"
                  letterSpacing="wide"
                  color={bodyTextColor}
                  px={[2, 4]}
                  fontFamily="'Plus Jakarta Sans', sans-serif"
                >
                  {project.title === "PhotoboothCS" && (
                    <>
                      <Text as="span" fontWeight="bold" color={headingColor}>
                        {project.title}
                      </Text>{" "}
                      lets users take photos,{" "}
                      <Text
                        as="span"
                        fontWeight="semibold"
                        color={project.accentColor}
                      >
                        apply stylish frames
                      </Text>
                      , and download the results —{" "}
                      <Text
                        as="span"
                        fontWeight="bold"
                        color={project.accentColor}
                      >
                        used by over 24k users
                      </Text>{" "}
                      in 2 weeks.
                    </>
                  )}
                  {project.title === "JIFT" && (
                    <>
                      <Text as="span" fontWeight="bold" color={headingColor}>
                        {project.title}
                      </Text>{" "}
                      is a powerful{" "}
                      <Text
                        as="span"
                        fontWeight="semibold"
                        color={project.accentColor}
                      >
                        full-stack AI finance platform
                      </Text>{" "}
                      helping families{" "}
                      <Text
                        as="span"
                        fontWeight="semibold"
                        color={project.accentColor}
                      >
                        budget smartly and stay financially healthy
                      </Text>
                      .
                    </>
                  )}
                  {project.title === "Ardell Real Estate" && (
                    <>
                      <Text as="span" fontWeight="bold" color={headingColor}>
                        {project.title}
                      </Text>{" "}
                      is a{" "}
                      <Text
                        as="span"
                        fontWeight="semibold"
                        color={project.accentColor}
                      >
                        MERN-based role-aware platform
                      </Text>{" "}
                      for managing{" "}
                      <Text
                        as="span"
                        fontWeight="semibold"
                        color={project.accentColor}
                      >
                        real estate listings
                      </Text>{" "}
                      and authentication with{" "}
                      <Text
                        as="span"
                        fontWeight="bold"
                        color={project.accentColor}
                      >
                        Firebase Auth
                      </Text>
                      .
                    </>
                  )}
                </Text>

                {/* Highlights List */}
                <VStack align="start" spacing={3} pt={2}>
                  {project.highlights.map((point, i) => (
                    <HStack key={i} spacing={3} align="start">
                      <Box
                        w="10px"
                        h="10px"
                        bg={project.accentColor}
                        borderRadius="full"
                        boxShadow={`0 0 6px ${project.accentColor}`}
                        mt="1.5"
                      />
                      <Text fontSize="sm" color={bodyTextColor}>
                        {point}
                      </Text>
                    </HStack>
                  ))}
                </VStack>

                <HStack wrap="wrap" spacing={3} pt={2}>
                  {project.tech.map((tech, i) => (
                    <Tooltip key={i} label={tech} hasArrow>
                      <Badge
                        bg="whiteAlpha.200"
                        color={techTextColor}
                        fontSize="xs"
                        px={2.5}
                        py={1}
                        borderRadius="lg"
                        display="flex"
                        alignItems="center"
                        gap={2}
                        cursor="default"
                      >
                        {techIcons[tech] && <Box>{techIcons[tech]}</Box>}
                        {tech}
                      </Badge>
                    </Tooltip>
                  ))}
                </HStack>

                <HStack pt={2}>
                  <Text
                    as="a"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    display="inline-flex"
                    alignItems="center"
                    fontWeight="semibold"
                    color={project.accentColor}
                    fontSize="sm"
                    _hover={{ textDecoration: "underline" }}
                  >
                    View Project <FiArrowRight style={{ marginLeft: "6px" }} />
                  </Text>
                </HStack>
              </VStack>
            </SimpleGrid>
          </MotionBox>
        ))}
      </VStack>
    </Box>
  );
};

export default Projects;
