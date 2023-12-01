import React from "react";

const FlexContainer = ({ direction, justifyContent, alignItems, children }) => {
  const flexContainerStyle = {
    display: "flex",
    flexDirection: direction || "row",
    justifyContent: justifyContent || "flex-start",
    alignItems: alignItems || "stretch",
  };

  return <div style={flexContainerStyle}>{children}</div>;
};

export default FlexContainer;