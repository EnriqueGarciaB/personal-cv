import React from "react";

import Section from "../../Section";

import cv from "../../../utils/cv.json";
const { work } = cv;

import "./index.css";

const WorkExperience = () => {
  return (
    <Section title="Work experience">
      <ul>
        {work?.map(({ name, startDate, endDate, position, summary, url, highlights }) => {
          const startYear = startDate ? new Date(`${startDate}T00:00:00Z`).getUTCFullYear() : "";
          const endYear = endDate && endDate.trim() !== "" 
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
                  <div className="date-container">
                    {endDate && endDate.trim() !== "" ? (
                      <div className="date-range">
                        <time dateTime={startDate} data-title={startDate}>
                          {startYear}
                        </time>
                        <span className="date-separator"> - </span>
                        <time dateTime={endDate} data-title={endDate}>
                          {endYear}
                        </time>
                      </div>
                    ) : (
                      <div className="currently-container">
                        <time dateTime={startDate} data-title={startDate}>
                          Currently
                        </time>
                      </div>
                    )}
                  </div>
                </header>
                <footer>
                  <p>{summary}</p>
                </footer>
                <footer className="highlights-container">
                  {highlights && highlights.length > 0 && (
                    <ul className="highlights">
                      {highlights.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  )}
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
