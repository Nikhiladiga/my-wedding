import React, { useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "react-photo-album/rows.css";
import "yet-another-react-lightbox/styles.css";
import { Box } from "@chakra-ui/react";
import { slides } from "../constants";

const Gallery = () => {
  const [index, setIndex] = useState(-1);

  return (
    <Box width="90%" margin="auto" marginTop="10" backgroundColor="#FEF4F2">
      <RowsPhotoAlbum
        onClick={({ index: current }) => setIndex(current)}
        targetRowHeight={150}
        photos={slides}
      />
      <Lightbox
        index={index}
        slides={slides}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </Box>
  );
};

export default Gallery;
