import React from "react";
import Section from "../../Section";

import { education } from "../../../utils/cv";

const Education = () => {
  return (
    <Section title="Education">
      <ul style={styles.ul}>
        {education.map(({ institution, startDate, endDate, area }, index) => {
          const startYear = new Date(`${startDate}T00:00:00Z`).getUTCFullYear();
          const endYear =
            endDate != null
              ? new Date(`${endDate}T00:00:00Z`).getUTCFullYear()
              : "Currently";

          const years = `${startYear} - ${endYear}`;

          return (
            <li key={index} style={styles.li}>
              <article>
                <header style={styles.header}>
                  <div>
                    <h3 style={styles.h3}>{institution}</h3>
                  </div>
                  <time style={styles.time}>{years}</time>
                </header>
                <footer>
                  <p>{area}</p>
                </footer>
              </article>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

const styles = {
  ul: {
    display: "flex",
    flexDirection: "column",
    gap: "32px",
  },
  h3: {
    fontWeight: 500,
    color: "#111",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "4px",
  },
  time: {
    color: "#555",
    fontSize: "0.85rem",
    minWidth: "102px",
  },
};

export default Education;
