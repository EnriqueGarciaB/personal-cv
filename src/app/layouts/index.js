import React from "react";

import { basics } from "../utils/cv.json";

const Layout = ({ title, children }) => {
  const { image, summary } = basics;

  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <title>{title}</title>
        <meta name="description" content={summary} />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preload" as="image" href={image} />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={summary} />
        <meta property="og:image" content={image} />

        {/* Twitter Card Meta Tags */}       
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={summary} />
        <meta name="twitter:image" content={image} />
      </head>
      <body>
        {children}
        <style jsx global>{`
          html {
            font-family: Menlo, Monaco, Lucida Console, "Courier New", Courier,
              monospace;
            background: #fff;
            letter-spacing: -0.025rem;
          }

          body,
          figure {
            margin: 0;
            padding: 0;
          }

          a {
            text-decoration: none;
          }

          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }

          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }

          h1,
          h2,
          h3,
          h4 {
            margin: 0;
            font-family: system-ui, -apple-system, BlinkMacSystemFont,
              "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
              "Helvetica Neue", sans-serif;
          }

          p {
            color: #666;
            font-size: 0.9rem;
            line-height: 1.5;
            margin: 0;
            text-wrap: pretty;
          }

          .print {
            display: none !important;
          }

          @media print {
            .no-print {
              display: none !important;
            }

            .print {
              display: block !important;
            }

            article {
              break-inside: avoid;
            }
          }
        `}</style>
      </body>
    </html>
  );
};

export default Layout;
