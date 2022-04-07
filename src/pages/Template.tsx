import React from "react";
import { useParams } from "react-router-dom";

const Template = () => {
  const { params } = useParams();
  return <h1>{`${params?.[0].toUpperCase()}${params?.substring(1)}`}</h1>;
};

export default Template;
