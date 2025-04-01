import {
  Box,
  Heading,
  Text,
  Icon,
  HStack,
  Wrap,
  WrapItem,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaRobot,
  FaTools,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiKeras,
  SiScikitlearn,
  SiTensorflow,
  SiVercel,
  SiRender,
  SiClerk,
  SiFlutter,
} from "react-icons/si";

const MotionWrapItem = motion(WrapItem);

const skillColors: Record<string, string> = {
  React: "#61DAFB",
  "Next.js": "#000000",
  TypeScript: "#3178C6",
  Flutter: "#02569B",
  "Tailwind CSS": "#38BDF8",
  "Node.js": "#3C873A",
  "Express.js": "#999999",
  MongoDB: "#47A248",
  Firebase: "#FFA000",
  "Firebase Auth": "#FFCA28",
  Python: "#3776AB",
  TensorFlow: "#FF6F00",
  "scikit-learn": "#F7931E",
  Keras: "#D00000",
  "Privacy ML": "#F06292",
  Git: "#F1502F",
  Docker: "#0db7ed",
  Vercel: "#000000",
  Render: "#3FA9F5",
  Clerk: "#8B5CF6",
};

const categories = [
  {
    icon: FaLaptopCode,
    title: "Development Skills",
    subtitle:
      "As a MERN stack developer specializing in frontend development with a strong understanding of backend architecture, I build dynamic, scalable web applications. My focus is on creating seamless user experiences with high performance and efficiency, leveraging modern technologies to deliver robust, full-stack solutions.",
    skills: [
      { label: "React", icon: FaReact },
      { label: "Next.js", icon: SiNextdotjs },
      { label: "TypeScript", icon: SiTypescript },
      { label: "Flutter", icon: SiFlutter },
      { label: "Tailwind CSS", icon: SiTailwindcss },
      { label: "Node.js", icon: FaNodeJs },
      { label: "Express.js", icon: SiExpress },
      { label: "MongoDB", icon: SiMongodb },
      { label: "Firebase", icon: SiFirebase },
    ],
  },
  {
    icon: FaRobot,
    title: "Machine Learning",
    subtitle: "Libraries & model tools",
    skills: [
      { label: "Python", icon: FaPython },
      { label: "TensorFlow", icon: SiTensorflow },
      { label: "scikit-learn", icon: SiScikitlearn },
      { label: "Keras", icon: SiKeras },
      { label: "Privacy ML", icon: FaRobot },
    ],
  },
  {
    icon: FaTools,
    title: "Dev Tools & Platforms",
    subtitle: "Deployment, versioning & team tools",
    skills: [
      { label: "Git", icon: FaGitAlt },
      { label: "Docker", icon: FaDocker },
      { label: "Firebase Auth", icon: SiFirebase },
      { label: "Vercel", icon: SiVercel },
      { label: "Render", icon: SiRender },
      { label: "Clerk", icon: SiClerk },
    ],
  },
];

const Skills = () => {
  const bgCard = useColorModeValue("whiteAlpha.800", "rgba(255,255,255,0.03)");
  const border = useColorModeValue("gray.200", "whiteAlpha.100");
  const bg = useColorModeValue(
    "#e5e7eb",
    "linear-gradient(to bottom, #111827 0%, #10131d 40%, #0d111a 65%, #090b10 85%, #050505 95%, #050505 100%)"
  );

  return (
    <Box px={[4, 6, 10]} py={[12, 20]} bg={bg} mx="auto">
      {categories.map((cat, idx) => (
        <SimpleGrid
          key={idx}
          columns={[1, 1, 2]}
          spacing={10}
          alignItems="start"
          mb={24}
          maxW="5xl"
          mx="auto"
        >
          <Box order={[0, 0, idx % 2 === 0 ? 0 : 1]}>
            <Heading
              fontSize={["2xl", "3xl"]}
              fontWeight="bold"
              mb={2}
              borderBottom="1px solid"
              borderColor={border}
              display="inline-block"
            >
              {cat.title}
            </Heading>
            <Text fontSize="sm" mt={4}>
              {cat.subtitle}
            </Text>
          </Box>

          <Wrap
            spacing={4}
            justify={"flex-start"}
            order={[0, 0, idx % 2 === 0 ? 1 : 0]}
            maxW={["full", "full", "480px"]}
          >
            {cat.skills.map((skill, i) => (
              <MotionWrapItem
                key={i}
                whileHover={{ scale: 1.08, y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <HStack
                  px={4}
                  py={2}
                  borderRadius="lg"
                  border="1px solid"
                  borderColor={border}
                  bg={bgCard}
                  spacing={2}
                >
                  {skill.icon && (
                    <Icon
                      as={skill.icon}
                      color={skillColors[skill.label] || "whiteAlpha.900"}
                      boxSize={5}
                    />
                  )}
                  <Text fontSize="sm">{skill.label}</Text>
                </HStack>
              </MotionWrapItem>
            ))}
          </Wrap>
        </SimpleGrid>
      ))}
    </Box>
  );
};

export default Skills;
