import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import hero from "/hero.png";

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
        <Heading fontFamily="Libre Bodoni" color="whiteAlpha.800" size="4xl">
          Meghana & Nikhil
        </Heading>
        <Heading fontFamily="Libre Bodoni" color="whiteAlpha.800" size="lg">
          Dec 5, 2024
        </Heading>
      </Flex>
    </Box>
  );
};

export default Landing;
