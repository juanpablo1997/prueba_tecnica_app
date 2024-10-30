import React from "react";
import clsx from "clsx";
import "bootstrap/dist/css/bootstrap.min.css";

interface TitleProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  color?: "white" | "custom-text-primary" | "custom-text-secondary";
  weight?: "normal" | "bold";
  align?: "left" | "center" | "right";
  className?: string;
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({
  level = 1,
  color = "white",
  weight = "normal",
  align = "left",
  className = "",
  children,
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const weightClass = weight === "bold" ? "fw-bold" : "fw-normal";
  const alignmentClass = `text-${align}`;
  const colorClass = color === "white" ? "text-white" : color;

  return (
    <Tag className={clsx(weightClass, alignmentClass, colorClass, className)}>
      {children}
    </Tag>
  );
};

export default Title;
