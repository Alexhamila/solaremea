import React from "react";
import ContentSection from "./../components/ContentSection";
import VideoSection from "./../components/VideoSection";

function AboutPage(props) {
  return (
    <>
      <ContentSection
        color="primary"
        size="large"
        title="We help you make money"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam!"
      />
      <VideoSection
        color="white"
        size="medium"
        title="How you can earn"
        subtitle=""
        embedUrl="https://www.youtube.com/embed/z9Ul9ccDOqE"
      />
    </>
  );
}

export default AboutPage;
