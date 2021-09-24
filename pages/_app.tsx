import React, { Fragment } from "react";
import { AppProps } from "next/app";
import { Head } from "@components/common";

const MyApp = (props: AppProps): JSX.Element => {
  const { Component, pageProps } = props;
  return (
    <Fragment>
      <Head />
      <Component {...pageProps} />
    </Fragment>
  );
};

export default MyApp;
