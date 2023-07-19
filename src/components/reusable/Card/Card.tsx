import { memo } from "react";
import "./Card.css"

type CardProps = {
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = (props: CardProps) => {
  return <div className="card">
    {props.children}
  </div>;
};

export default memo(Card);