import React from "react";
import { Box, Flex, Heading, Link, Text, Divider } from "@chakra-ui/react";
import faq from "/faq.png";

const Faq = () => {
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
        height="100%"
        width="100%"
        alignItems="center"
        gap={8}
      >
        <Heading
          fontStyle="oblique"
          textDecoration="underline"
          fontFamily="Libre Bodoni"
          size="xl"
        >
          FAQs
        </Heading>
        <Heading fontFamily="Libre Bodoni" color="blackAlpha.800" size="lg">
          What should I wear? 👔
        </Heading>
        <Text color="blackAlpha.800">
          Please feel comfortable to wear whatever you want. We value your
          presence more than your attire.
        </Text>

        <Divider orientation="horizontal" borderColor="gray.200" width="50%" />

        <Heading fontFamily="Libre Bodoni" color="blackAlpha.800" size="lg">
          When and where is the wedding? 👰🏻‍♀️
        </Heading>
        <Text color="blackAlpha.800">
          The wedding is on Dec 5th in{" "}
          <Link color={"blue.600"} href="https://g.co/kgs/nsJXzLE">
            Govinda Kalyana Mantapa, Udupi.
          </Link>
        </Text>

        <Divider width="50%" orientation="horizontal" borderColor="gray.200" />

        <Heading fontFamily="Libre Bodoni" color="blackAlpha.800" size="lg">
          What will the weather be like this time of year? 🌤️
        </Heading>
        <Text color="blackAlpha.800" width="60%" lineHeight={2}>
          December marks the beginning of the winter season in Udupi, with the
          temperature ranging between nearly 21.6C to 31C. The weather is
          pleasant, with clear skies and a gentle breeze, making it an ideal
          time for outdoor activities and sightseeing.
        </Text>

        <Divider width="50%" orientation="horizontal" borderColor="gray.200" />

        <Heading fontFamily="Libre Bodoni" color="blackAlpha.800" size="lg">
          When is the reception? 🎤
        </Heading>
        <Text color="blackAlpha.800" width="60%">
          The reception is on Dec 6th in{" "}
          <Link color={"blue.600"} href="https://g.co/kgs/67VrQEp">
            Anantha Padmanabha Temple, Perdur.{" "}
          </Link>
          There is a music concert by{" "}
          <Link
            color={"blue.600"}
            href="https://en.wikipedia.org/wiki/Vidyabhushana"
          >
            Dr Vidya Bhushana
          </Link>{" "}
          on this day at 10:30am.
        </Text>
      </Flex>
    </Box>
  );
};

export default Faq;
