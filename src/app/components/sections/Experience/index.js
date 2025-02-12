import React from "react";

import Section from "../../Section";

import { work } from "../../../utils/cv.json";

import "./index.css";

const WorkExperience = () => {
  return (
    <Section title="Work experience">
      <ul>
        {work?.map(({ name, startDate, endDate, position, summary, url }) => {
          const startYear = new Date(`${startDate}T00:00:00Z`).getUTCFullYear();
          const endYear = endDate
            ? new Date(`${endDate}T00:00:00Z`).getUTCFullYear()
            : "Currently";

          return (
            <li key={name}>
              <article>
                <header>
                  <div>
                    <h3>
                      <a
                        href={url}
                        title={`Ver ${name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {name}
                      </a>
                    </h3>
                    <h4>{position}</h4>
                  </div>
                  <div>
                    <time dateTime={startDate} data-title={startDate}>
                      {startYear}
                    </time>
                    {" - "}
                    <time dateTime={endDate || ""} data-title={endDate}>
                      {endYear}
                    </time>
                  </div>
                </header>
                <footer>
                  <p>{summary}</p>
                </footer>
              </article>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default WorkExperience;
