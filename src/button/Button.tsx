import React from "react";

type Props = {
  name: string;
  children?: React.ReactElement;
};

const Button: React.FC<Props> = (props: Props) => {
  return (
    <button data-testid="button" name={props.name}>
      {props.children}
    </button>
  );
};

export default Button;
