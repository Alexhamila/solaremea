import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Clients from "./Clients";

function ClientsSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Clients
          items={[
            {
              name: "EDF",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/%C3%89lectricit%C3%A9_de_France_logo.svg/1280px-%C3%89lectricit%C3%A9_de_France_logo.svg.png",
              width: "130px"
            },
            {
              name: "Engie",
              image: "https://cdn.worldvectorlogo.com/logos/engie.svg",
              width: "130px"
            },
            {
              name: "Siemens",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Siemens-logo.svg/1280px-Siemens-logo.svg.png",
              width: "220px"
            },
            {
              name: "Canadian Solar",
              image:
                "https://www.canadiansolar.com/static/images/xlogo.png.pagespeed.ic.oiuvu1yrqM.png",
              width: "250px"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default ClientsSection;
