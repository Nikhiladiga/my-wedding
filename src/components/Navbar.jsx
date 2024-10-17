import { Box, Button, Flex, Image } from "@chakra-ui/react";
import React from "react";
import logo from "/logo.svg";
import { Link } from "react-router-dom";
import { AddToCalendarButton } from "add-to-calendar-button-react";

const Navbar = () => {
  return (
    <Box
      backgroundColor="transparent"
      top={0}
      left={0}
      right={0}
      position="fixed"
    >
      <Flex
        marginTop={4}
        flexDirection="row"
        width="100vw"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex gap={4} marginLeft={4}>
          <Link style={{ color: "white" }} to="/about">
            About Us
          </Link>
          <Link style={{ color: "white" }} to="/gallery">
            Gallery
          </Link>
          <Link style={{ color: "white" }} to="/faq">
            FAQs
          </Link>
        </Flex>
        <Link to="/">
          <Image src={logo} />
        </Link>
        <Box marginRight={4}>
          <AddToCalendarButton
            size="4"
            name="Meghana & Nikhil wedding 💍"
            options={["Apple", "Google"]}
            location="Govinda Kalyana Mantapa, 8PHV+WM2, Brahmagiri, Udupi, Karnataka 576101, India"
            startDate="2024-12-05"
            startTime="10:30"
            endTime="15:30"
            buttonsList
            hideTextLabelButton
            buttonStyle="round"
          ></AddToCalendarButton>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
