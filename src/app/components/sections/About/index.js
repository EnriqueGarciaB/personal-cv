import React from "react";
import Section from "../../Section";

import { basics } from "../../../utils/cv";

const AboutMe = () => {
  const { summary } = basics;

  return (
    <Section title="About me">
      <p>{summary}</p>
    </Section>
  );
};

export default AboutMe;
