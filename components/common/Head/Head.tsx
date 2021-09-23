import React from "react";
import NextHead from "next/head";

const Head = (): JSX.Element => {
  return (
    <NextHead>
      <title>App title</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </NextHead>
  );
};

export default Head;
