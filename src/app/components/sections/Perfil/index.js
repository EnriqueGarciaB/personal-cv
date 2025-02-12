import React from "react";
import Image from "next/image";

import { basics } from "../../../utils/cv.json";

import Section from "../../Section";

import './index.css'

import mailIcon from "public/icons/mail.svg";
import phoneIcon from "public/icons/phone.svg";
import linkedinIcon from "public/icons/linkedin.svg";
import githubIcon from "public/icons/github.svg";
import worldmapIcon from "public/icons/worldmap.svg";

const { name, label, image, email, phone, location, profiles } = basics;
const { city, region } = location;

const SOCIAL_ICONS = {
  GitHub: githubIcon,
  LinkedIn: linkedinIcon,
};


const printInfo = [
  email,
  phone,
  profiles.find((p) => p.network === "LinkedIn")?.url,
]
  .filter(Boolean)
  .join(" • ");

const Perfil = () => {
  return (
    <Section>
      <div className="container">
        <div className="info">
          <h1>{name}</h1>
          <h2>{label}</h2>
          <span>
            <Image src={worldmapIcon} alt="Map" width={18} height={18} />
            {city}, {region}
          </span>
          <footer className="print">{printInfo}</footer>
          <footer className="no-print">
            {email && (
              <a href={`mailto:${email}`} title={`Send email to ${name}`}>
                <Image src={mailIcon} alt="Mail" width={18} height={18} />
              </a>
            )}
            {phone && (
              <a href={`tel:${phone}`} title={`Call ${name}`}>
                <Image src={phoneIcon} alt="Cellphone" width={18} height={18} />
              </a>
            )}
            {profiles.map(({ network, url }) => {
              const icon = SOCIAL_ICONS[network];
              return (
                icon && (
                  <a
                    key={network}
                    href={url}
                    target="_blank"
                    title={`Visit ${name}'s on ${network}`}
                  >
                    <Image src={icon} alt={network} width={18} height={18} />
                  </a>
                )
              );
            })}
          </footer>
        </div>
        <figure>
          <img src={image} alt={name} />
        </figure>
      </div>
    </Section>
  );
};

export default Perfil;
