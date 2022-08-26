import React, { ReactNode } from "react";

import { Button as ContainerButton } from "./styles";

function Button({ onClick, children, ...props }) {
  return (
    <ContainerButton onClick={onClick} {...props}>
      {children}
    </ContainerButton>
  );
}

export default Button;
