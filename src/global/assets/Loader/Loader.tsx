import loader from "./loader.svg";

import React from "react";
import styled from "styled-components";

export function Loader() {
  return (
    <div>
      <img src={loader} alt="loader"></img>
    </div>
  );
}

const LoaderDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
`;
