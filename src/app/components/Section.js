import React from "react";

const Section = ({ title, children }) => {
  return (
    <section style={styles.section}>
      {title && <h2 style={styles.h2}>{title}</h2>}
      {children}
    </section>
  );
};

const styles = {
  section: {
    maxWidth: "700px",
    margin: "0 auto 48px",
  },
  h2: {
    marginBottom: "8px",
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: "1.5rem",
    color: "black",
  },
  "@media (maxWidth: 700px)": {
    section: {
      marginBottom: "38px",
    },
  },
};

export default Section;
