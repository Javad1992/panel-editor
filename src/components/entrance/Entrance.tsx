import React from "react";

export interface EntranceProps {
  serverResponse: string;
}

const Button = (props: EntranceProps) => {
  return <button>{props.serverResponse}</button>;
};

export default Button;