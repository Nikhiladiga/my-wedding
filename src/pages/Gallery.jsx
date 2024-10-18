import React, { useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import { Box, VStack, Heading } from "@chakra-ui/react";

import Lightbox from "yet-another-react-lightbox";
import {
  Counter,
  Fullscreen,
  Slideshow,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import engagementImages from "../data/engagementImages.json";
import nikhilChildhoodImages from "../data/nikhilChildhoodImages.json";
import nikhilFamilyImages from "../data/nikhilFamilyImages.json";
import nikhilImages from "../data/nikhilImages.json";
import meghanaChildhoodImages from "../data/meghanaChildhoodImages.json";
import meghanaFamilyImages from "../data/meghanaFamilyImages.json";
import meghanaImages from "../data/meghanaImages.json";

const photos = {
  nikhilChildhoodImages,
  nikhilFamilyImages,
  nikhilImages,
  engagementImages,
  meghanaChildhoodImages,
  meghanaFamilyImages,
  meghanaImages,
};

const sections = [
  { id: "nikhilChildhoodImages", title: "Nikhil Childhood" },
  { id: "meghanaChildhoodImages", title: "Meghana Childhood" },
  { id: "nikhilFamilyImages", title: "Nikhil Family" },
  { id: "meghanaFamilyImages", title: "Meghana Family" },
  { id: "nikhilImages", title: "Nikhil" },
  { id: "meghanaImages", title: "Meghana" },
  { id: "engagementImages", title: "Engagement" },
];

const Gallery = () => {
  const [index, setIndex] = useState(-1);
  const [_, setCurrentSection] = useState(null);

  const allPhotos = sections.flatMap((section) => photos[section.id]);

  const handleClick = (sectionId, photoIndex) => {
    const sectionStartIndex = sections
      .slice(
        0,
        sections.findIndex((s) => s.id === sectionId)
      )
      .reduce((sum, section) => sum + photos[section.id].length, 0);
    setIndex(sectionStartIndex + photoIndex);
    setCurrentSection(sectionId);
  };

  return (
    <VStack
      spacing={10}
      width="90%"
      margin="auto"
      marginTop="10"
      backgroundColor="#FEF4F2"
    >
      {sections.map((section) => (
        <Box key={section.id} width="100%">
          <Heading as="h2" size="lg" mb={4}>
            {section.title}
          </Heading>
          <RowsPhotoAlbum
            onClick={({ index }) => handleClick(section.id, index)}
            targetRowHeight={150}
            photos={photos[section.id]}
          />
        </Box>
      ))}
      <Lightbox
        plugins={[Counter, Fullscreen, Slideshow, Thumbnails, Zoom]}
        index={index}
        slides={allPhotos}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </VStack>
  );
};

export default Gallery;
