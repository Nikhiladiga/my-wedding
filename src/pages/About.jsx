import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  Container,
  useBreakpointValue,
  Button,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import faq from "/faq.png";
import nikhil from "/nikhil.jpeg";
import meghana from "/meghana.jpg";

const About = () => {
  const direction = useBreakpointValue({ base: "column", md: "row" });
  const navigate = useNavigate();

  return (
    <Box
      minHeight="100vh"
      width="100%"
      backgroundImage={faq}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      py={12}
    >
      <Container maxW="container.xl">
        <VStack spacing={12} align="stretch">
          <Button
            leftIcon={<ArrowBackIcon />}
            onClick={() => navigate("/")}
            alignSelf="flex-start"
            bg="white"
            color="gray.700"
            _hover={{ bg: "pink.100" }}
            boxShadow="md"
          >
            Back to Home
          </Button>

          <Heading
            fontFamily="Roboto"
            size="2xl"
            textAlign="center"
            color="gray.800"
            pb={2}
            borderBottom="2px solid"
            borderColor="pink.200"
          >
            About Us
          </Heading>

          <Flex
            direction={direction}
            justify="center"
            align="center"
            wrap="wrap"
            gap={8}
          >
            <ProfileCard
              image={nikhil}
              name="Nikhil"
              description="Kind hearted & friendly neighborhood techie. Fueled by badminton, automobiles and a good tune. Loves nothing more than staying inside and watching movies."
            />
            <ProfileCard
              image={meghana}
              name="Meghana"
              description="A multi-talented individual who loves movies, TV series, singing, dancing, and painting. Huge bucket list with lot of travelling and shopping. Secretly loves anime."
            />
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
};

const ProfileCard = ({ image, name, description }) => (
  <Box
    bg="white"
    borderRadius="lg"
    boxShadow="xl"
    p={6}
    maxW="sm"
    textAlign="center"
    transition="transform 0.3s"
    _hover={{ transform: "scale(1.05)" }}
  >
    <VStack spacing={4}>
      <Image
        src={image}
        alt={name}
        borderRadius="full"
        boxSize="200px"
        objectFit="cover"
        border="4px solid"
        borderColor="pink.200"
      />
      <Heading as="h3" size="lg" fontFamily="Roboto" color="gray.700">
        {name}
      </Heading>
      <Text fontSize="md" color="gray.600">
        {description}
      </Text>
    </VStack>
  </Box>
);

export default About;
