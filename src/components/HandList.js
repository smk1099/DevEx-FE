import { Box } from "@mui/material";
import HandItem from "./HandItem";
import React from "react";

const HandList = ({ handList }) => {
  return (
    <Box>
      <Box ml={2}>
        {handList.map((item, index) => (
          <HandItem key={index} obj={item} />
        ))}
      </Box>
    </Box>
  );
};

export default HandList;
