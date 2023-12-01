import React from "react";
import FlexContainer from "../explorer/flexContainer";
import Imagesection from "./image";

export default function PostSection() {
  return (
    <div className="postItem">
      <FlexContainer
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
      
          <div id="imgContainer">
           <Imagesection />
           <Imagesection />
           <Imagesection />
           <Imagesection />
           <Imagesection />
           <Imagesection />
          </div>
         
          
      </FlexContainer>
    </div>
  );
}