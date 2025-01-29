import { ReactNode } from "react";
import CardButton from "./CardButton";
import CardContent from "./CardContent";
import CardTitle from "./CardTitle";

const Card = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

Card.Title = CardTitle;
Card.Content = CardContent;
Card.Button = CardButton;

export default Card;