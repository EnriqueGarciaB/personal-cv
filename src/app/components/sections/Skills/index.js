import React from "react";
import Section from "../../Section";

import { skills } from "../../../utils/cv.json";

import "./index.css";

const SkillsSection = () => {
  return (
    <Section title="Skills">
      <ul>
        {skills.map(({ name }) => {
          const iconName =
            name === "Next Js"
              ? "next"
              : name === "React Native"
              ? "reactnative"
              : name === "Node Js"
              ? "node"
              : name === "React Js"
              ? "react"
              : name.toLowerCase();
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
