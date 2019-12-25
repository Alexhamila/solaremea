import React from "react";
import HeroSection from "./../components/HeroSection";
import ClientsSection from "./../components/ClientsSection";
import StatsSection from "./../components/StatsSection";
import FeaturesSection from "./../components/FeaturesSection";
import NewsletterSection from "./../components/NewsletterSection";
import { useRouter } from "./../util/router.js";

function IndexPage(props) {
  const router = useRouter();

  return (
    <>
      <HeroSection
        color="white"
        title="Earn from the sun"
        subtitle="This awesome product allows user to earn money, by investing in solar projects all around the world, and to receive monthly payments for the amount they have lended."
        buttonText="Get Started"
        image="https://cdn.dribbble.com/users/1162077/screenshots/3624191/solar-panels.png"
        buttonOnClick={() => {
          router.push("/pricing");
        }}
      />
      <ClientsSection color="light" size="normal" title="" subtitle="" />
      <StatsSection
        color="white"
        size="medium"
        items={[
          {
            title: "Investors",
            stat: "3,456"
          },
          {
            title: "Projects",
            stat: "13"
          },
          {
            title: "Invested",
            stat: "$456k"
          },
          {
            title: "Earned",
            stat: "$1.2M"
          }
        ]}
      />
      <FeaturesSection
        color="white"
        size="medium"
        title="Features"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
      >
        <StatsSection
          color="white"
          size="medium"
          items={[
            {
              title: "Tweets",
              stat: "3,456"
            },
            {
              title: "Following",
              stat: "123"
            },
            {
              title: "Followers",
              stat: "456k"
            },
            {
              title: "Likes",
              stat: "789"
            }
          ]}
        />
      </FeaturesSection>
      <NewsletterSection
        color="white"
        size="medium"
        title="Stay in the know"
        subtitle="Receive our latest articles and feature updates"
        buttonText="Subscribe"
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed!"
      />
    </>
  );
}

export default IndexPage;
