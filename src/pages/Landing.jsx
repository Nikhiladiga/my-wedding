import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import hero from "/hero.png";
import { Typewriter } from "react-simple-typewriter";

const Landing = () => {
  return (
    <Box
      height="100vh"
      width="100vw"
      backgroundPosition={"center"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
      backgroundImage={hero}
    >
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100%"
        gap={10}
      >
        <Heading fontFamily="Libre Bodoni" color="whiteAlpha.800" size="lg">
          We're getting married! 💍
        </Heading>
        <Box height="7.5rem" display="flex" alignItems="center">
          {" "}
          {/* Add this Box */}
          <Heading
            fontFamily="Libre Bodoni"
            color="whiteAlpha.800"
            size="4xl"
            textAlign="center"
          >
            <Typewriter
              loop
              words={["Meghana & Nikhil"]}
              typeSpeed={100}
              deleteSpeed={100}
            />
          </Heading>
        </Box>
        <Heading fontFamily="Libre Bodoni" color="whiteAlpha.800" size="lg">
          Dec 5, 2024
        </Heading>
      </Flex>
    </Box>
  );
};

export default Landing;
