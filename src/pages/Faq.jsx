import React from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  Container,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import faq from "/faq.png";

const Faq = () => {
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
      <Container
        maxW="container.md"
        bg="whiteAlpha.800"
        borderRadius="lg"
        p={8}
        boxShadow="xl"
      >
        <Button
          leftIcon={<ArrowBackIcon />}
          onClick={() => navigate("/")}
          mb={6}
          bg="pink.100"
          _hover={{ bg: "pink.200" }}
          variant="solid"
        >
          Back to Home
        </Button>

        <VStack spacing={8} align="stretch">
          <Heading
            as="h1"
            size="2xl"
            textAlign="center"
            fontFamily="Libre Bodoni"
            color="gray.800"
            pb={4}
            borderBottom="2px solid"
            borderColor="pink.200"
          >
            FAQs
          </Heading>
          <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontWeight="bold"
                    color="gray.700"
                  >
                    What should I wear? 👔
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Please feel comfortable to wear whatever you want. We value your
                presence more than your attire.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontWeight="bold"
                    color="gray.700"
                  >
                    When and where is the wedding? 👰🏻‍♀️
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                The wedding is on Dec 5th in Govinda Kalyana Mantapa, Udupi.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontWeight="bold"
                    color="gray.700"
                  >
                    What will the weather be like this time of year? 🌤️
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                December marks the beginning of the winter season in Udupi, with
                the temperature ranging between nearly 21.6C to 31C. The weather
                is pleasant, with clear skies and a gentle breeze, making it an
                ideal time for outdoor activities and sightseeing.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontWeight="bold"
                    color="gray.700"
                  >
                    When is the reception? 🎤
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                The reception is on Dec 6th in Anantha Padmanabha Temple,
                Perdur. There is a music concert by Dr Vidya Bhushana on this
                day at 10:30am.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontWeight="bold"
                    color="gray.700"
                  >
                    Is there any transportation arranged on the wedding day? 🚎
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Yes. We have arranged a bus from Perdur to the wedding venue
                that leaves at sharp 8:00 am.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          ;
        </VStack>
      </Container>
    </Box>
  );
};

export default Faq;
