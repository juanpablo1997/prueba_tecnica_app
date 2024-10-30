import React from "react";
import Title from "../../atoms/titles/TitlesCustom";

interface TitleHeadCustomProps {
  title?: string;
  color?: "custom-bg-primary" | "custom-bg-secondary";
}

const TitleHeadCustom: React.FC<TitleHeadCustomProps> = ({
  title,
  color = "custom-bg-secondary",
}) => {
  return (
    <div className={`${color} rounded-top p-2 mb-2 container-fluid`}>
      <Title level={5} color="white" weight="bold" align="left">
        {title}
      </Title>
    </div>
  );
};

export default TitleHeadCustom;
