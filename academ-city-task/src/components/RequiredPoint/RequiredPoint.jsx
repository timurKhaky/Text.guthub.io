import React, { memo } from "react";

const Point = () => {
  return <span style={{ color: "red" }}>{` ${"*"} `}</span>;
};

export const RequiredPoint = memo(Point);
