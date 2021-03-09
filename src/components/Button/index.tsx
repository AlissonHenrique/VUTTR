import React from "react";

import { Container } from "./styles";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  colorType: string;
}
function Button({ children, colorType, ...rest }: Props) {
  return (
    <Container {...rest} className={colorType}>
      {children}
    </Container>
  );
}

export default Button;
