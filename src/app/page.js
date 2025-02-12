"use client";

import Layout from "./layouts/index";

import Perfil from "./components/sections/Perfil/index";
import About from "./components/sections/About/index";
import Education from "./components/sections/Education/index";
import Experience from "./components/sections/Experience/index";
import Skills from "./components/sections/Skills/index";

import { basics } from "./utils/cv.json";
const { name, label } = basics;
export default function Home() {
  return (
    <Layout title={`Portfolio of ${name} - ${label}`}>
      <main>
        <Perfil />
        <About />
        <Experience />
        <Education />
        <Skills />
      </main>
      <style jsx>{`
        main {
          padding: 4rem;
          margin: auto;
          width: 100%;
        }

        @media (max-width: 700px) {
          main {
            padding: 2rem;
          }
        }
      `}</style>
    </Layout>
  );
}
