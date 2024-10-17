import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import faq from "/faq.png";
import nikhil from "/nikhil.jpeg";
import meghana from "/meghana.jpg";

const About = () => {
  return (
    <Box
      height="100vh"
      width="100vw"
      backgroundPosition={"center"}
      backgroundRepeat={"no-repeat"}
      backgroundSize="cover"
      backgroundImage={faq}
    >
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100%"
      >
        <Heading
          fontStyle="oblique"
          textDecoration="underline"
          fontFamily="Libre Bodoni"
          size="xl"
          marginTop={10}
        >
          About us
        </Heading>
        <Flex
          justifyContent="center"
          alignItems="center"
          width="100%"
          height="100%"
          gap={10}
        >
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-end"
            width="50%"
            gap={5}
          >
            <Image
              width="300px"
              height="300px"
              objectFit="cover"
              src={nikhil}
              borderRadius="50%"
              mr={4}
            />
            <Text width="50%">
              Nikhil. Kind hearted & friendly neighborhood techie. Fueled by
              badminton, automobiles and a good tune. Loves nothing more than
              staying inside and watching movies. Ready to trade in his keyboard
              for a wedding ring!
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="center"
            width="50%"
            gap={5}
          >
            <Image
              width="300px"
              height="300px"
              objectFit="cover"
              borderRadius="50%"
              src={meghana}
              ml={4}
            />
            <Text width="50%">
              Meghana, a multi-talented individual who loves movies, TV series,
              singing, dancing, and painting. Huge bucket list with lot of
              travelling and shopping. Secretly loves anime.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default About;
