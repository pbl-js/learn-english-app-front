import React from "react";
import { Link } from "react-router-dom";
import routes from "router/routes";

import useData from "./Topics.fetch";
import { MainWrapper } from "./Topics.style";
import SectionSlider from "components/SectionSlider/SectionSlider";
import TopicItem from "components/TopicItem/TopicItem";

const fakeData = [
  {
    title: "Jedzenie i picie",
    color: "orange",
    topics: [
      {
        title: "Jedzenie",
      },
      {
        title: "Jedzenie (Ciąg dalszy)",
      },
      {
        title: "Napoje",
      },
      {
        title: "Owoce",
      },
      {
        title: "Warzywa",
      },
    ],
  },
  {
    title: "Jedzenie i picie",
    color: "red",
    topics: [
      {
        title: "Jedzenie",
      },
      {
        title: "Jedzenie (Ciąg dalszy)",
      },
      {
        title: "Napoje",
      },
      {
        title: "Owoce",
      },
      {
        title: "Warzywa",
      },
    ],
  },
  {
    title: "Jedzenie i picie",
    color: "purple",
    topics: [
      {
        title: "Jedzenie",
      },
      {
        title: "Jedzenie (Ciąg dalszy)",
      },
      {
        title: "Napoje",
      },
      {
        title: "Owoce",
      },
      {
        title: "Warzywa",
      },
    ],
  },
];

const Topics = () => {
  const { data, loading } = useData();

  console.log(data);

  return (
    <>
      <MainWrapper>
        {fakeData.map((section) => (
          <SectionSlider title={section.title}>
            {section.topics.map((topic) => (
              <TopicItem
                to={routes.game}
                title={topic.title}
                color={section.color}
              />
            ))}
          </SectionSlider>
        ))}
      </MainWrapper>
    </>
  );
};

export default Topics;
