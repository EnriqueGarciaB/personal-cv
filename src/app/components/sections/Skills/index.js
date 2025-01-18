import React from "react";
import Section from "../../Section";

import { skills } from "../../../utils/cv.json";

import "./index.css";

const SkillsSection = () => {
  return (
    <Section title="Habilidades">
      <ul>
        {skills.map(({ name }) => {
          const iconName = name === "Next.js" ? "next" : name.toLowerCase();
          const iconPath = `/icons/${iconName}.svg`;

          return (
            <li className="iconSkill" key={name}>
              <img src={iconPath} alt={name} width={24} height={24} />
              <span>{name}</span>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default SkillsSection;
