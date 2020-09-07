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
        img: "https://image.flaticon.com/icons/svg/706/706133.svg",
        status: "normal",
        learningProgress: {
          value: 0,
          total: 100,
        },
        masteringProgress: {
          value: 0,
          total: 100,
        },
      },
      {
        title: "Jedzenie (Ciąg dalszy)",
        img: "https://image.flaticon.com/icons/svg/706/706133.svg",
        status: "locked",
        learningProgress: {
          value: 10,
          total: 100,
        },
        masteringProgress: {
          value: 0,
          total: 100,
        },
      },
      {
        title: "Napoje",
        img: "https://image.flaticon.com/icons/svg/706/706133.svg",
        status: "learning",
        learningProgress: {
          value: 20,
          total: 100,
        },
        masteringProgress: {
          value: 0,
          total: 100,
        },
      },
      {
        title: "Owoce",
        img: "https://image.flaticon.com/icons/svg/706/706133.svg",
        status: "mastering",
        learningProgress: {
          value: 100,
          total: 100,
        },
        masteringProgress: {
          value: 90,
          total: 100,
        },
      },
      {
        title: "Warzywa",
        img: "https://image.flaticon.com/icons/svg/706/706133.svg",
        status: "complete",
        learningProgress: {
          value: 0,
          total: 100,
        },
        masteringProgress: {
          value: 0,
          total: 100,
        },
      },
    ],
  },
  {
    title: "Jedzenie i picie",
    color: "red",
    topics: [
      {
        title: "Jedzenie",
        img: "https://image.flaticon.com/icons/svg/706/706133.svg",
        status: "normal",
        learningProgress: {
          value: 0,
          total: 100,
        },
        masteringProgress: {
          value: 0,
          total: 100,
        },
      },
      {
        title: "Jedzenie (Ciąg dalszy)",
        img: "https://image.flaticon.com/icons/svg/706/706133.svg",
        status: "locked",
        learningProgress: {
          value: 10,
          total: 100,
        },
        masteringProgress: {
          value: 0,
          total: 100,
        },
      },
      {
        title: "Napoje",
        img: "https://image.flaticon.com/icons/svg/706/706133.svg",
        status: "learning",
        learningProgress: {
          value: 20,
          total: 100,
        },
        masteringProgress: {
          value: 0,
          total: 100,
        },
      },
      {
        title: "Owoce",
        img: "https://image.flaticon.com/icons/svg/706/706133.svg",
        status: "mastering",
        learningProgress: {
          value: 100,
          total: 100,
        },
        masteringProgress: {
          value: 90,
          total: 100,
        },
      },
      {
        title: "Warzywa",
        img: "https://image.flaticon.com/icons/svg/706/706133.svg",
        status: "complete",
        learningProgress: {
          value: 0,
          total: 100,
        },
        masteringProgress: {
          value: 0,
          total: 100,
        },
      },
    ],
  },
  {
    title: "Jedzenie i picie",
    color: "cherry",
    topics: [
      {
        title: "Jedzenie",
        img: "https://image.flaticon.com/icons/svg/706/706133.svg",
        status: "normal",
        learningProgress: {
          value: 0,
          total: 100,
        },
        masteringProgress: {
          value: 0,
          total: 100,
        },
      },
      {
        title: "Jedzenie (Ciąg dalszy)",
        img: "https://image.flaticon.com/icons/svg/706/706133.svg",
        status: "locked",
        learningProgress: {
          value: 10,
          total: 100,
        },
        masteringProgress: {
          value: 0,
          total: 100,
        },
      },
      {
        title: "Napoje",
        img: "https://image.flaticon.com/icons/svg/706/706133.svg",
        status: "learning",
        learningProgress: {
          value: 20,
          total: 100,
        },
        masteringProgress: {
          value: 0,
          total: 100,
        },
      },
      {
        title: "Owoce",
        img: "https://image.flaticon.com/icons/svg/706/706133.svg",
        status: "mastering",
        learningProgress: {
          value: 100,
          total: 100,
        },
        masteringProgress: {
          value: 90,
          total: 100,
        },
      },
      {
        title: "Warzywa",
        img: "https://image.flaticon.com/icons/svg/706/706133.svg",
        status: "complete",
        learningProgress: {
          value: 0,
          total: 100,
        },
        masteringProgress: {
          value: 0,
          total: 100,
        },
      },
    ],
  },
  {
    title: "Jedzenie i picie",
    color: "purple1",
    topics: [
      {
        title: "Jedzenie",
        img: "https://image.flaticon.com/icons/svg/706/706133.svg",
        status: "normal",
        learningProgress: {
          value: 0,
          total: 100,
        },
        masteringProgress: {
          value: 0,
          total: 100,
        },
      },
      {
        title: "Jedzenie (Ciąg dalszy)",
        img: "https://image.flaticon.com/icons/svg/706/706133.svg",
        status: "locked",
        learningProgress: {
          value: 10,
          total: 100,
        },
        masteringProgress: {
          value: 0,
          total: 100,
        },
      },
      {
        title: "Napoje",
        img: "https://image.flaticon.com/icons/svg/706/706133.svg",
        status: "learning",
        learningProgress: {
          value: 20,
          total: 100,
        },
        masteringProgress: {
          value: 0,
          total: 100,
        },
      },
      {
        title: "Owoce",
        img: "https://image.flaticon.com/icons/svg/706/706133.svg",
        status: "mastering",
        learningProgress: {
          value: 100,
          total: 100,
        },
        masteringProgress: {
          value: 90,
          total: 100,
        },
      },
      {
        title: "Warzywa",
        img: "https://image.flaticon.com/icons/svg/706/706133.svg",
        status: "complete",
        learningProgress: {
          value: 0,
          total: 100,
        },
        masteringProgress: {
          value: 0,
          total: 100,
        },
      },
    ],
  },
  {
    title: "Jedzenie i picie",
    color: "purple2",
    topics: [
      {
        title: "Jedzenie",
        img: "https://image.flaticon.com/icons/svg/706/706133.svg",
        status: "normal",
        learningProgress: {
          value: 0,
          total: 100,
        },
        masteringProgress: {
          value: 0,
          total: 100,
        },
      },
      {
        title: "Jedzenie (Ciąg dalszy)",
        img: "https://image.flaticon.com/icons/svg/706/706133.svg",
        status: "locked",
        learningProgress: {
          value: 10,
          total: 100,
        },
        masteringProgress: {
          value: 0,
          total: 100,
        },
      },
      {
        title: "Napoje",
        img: "https://image.flaticon.com/icons/svg/706/706133.svg",
        status: "learning",
        learningProgress: {
          value: 20,
          total: 100,
        },
        masteringProgress: {
          value: 0,
          total: 100,
        },
      },
      {
        title: "Owoce",
        img: "https://image.flaticon.com/icons/svg/706/706133.svg",
        status: "mastering",
        learningProgress: {
          value: 100,
          total: 100,
        },
        masteringProgress: {
          value: 90,
          total: 100,
        },
      },
      {
        title: "Warzywa",
        img: "https://image.flaticon.com/icons/svg/706/706133.svg",
        status: "complete",
        learningProgress: {
          value: 0,
          total: 100,
        },
        masteringProgress: {
          value: 0,
          total: 100,
        },
      },
    ],
  },
  {
    title: "Jedzenie i picie",
    color: "orange",
    topics: [
      {
        title: "Jedzenie",
        img: "https://image.flaticon.com/icons/svg/706/706133.svg",
        status: "normal",
        learningProgress: {
          value: 0,
          total: 100,
        },
        masteringProgress: {
          value: 0,
          total: 100,
        },
      },
      {
        title: "Jedzenie (Ciąg dalszy)",
        img: "https://image.flaticon.com/icons/svg/706/706133.svg",
        status: "locked",
        learningProgress: {
          value: 10,
          total: 100,
        },
        masteringProgress: {
          value: 0,
          total: 100,
        },
      },
      {
        title: "Napoje",
        img: "https://image.flaticon.com/icons/svg/706/706133.svg",
        status: "learning",
        learningProgress: {
          value: 20,
          total: 100,
        },
        masteringProgress: {
          value: 0,
          total: 100,
        },
      },
      {
        title: "Owoce",
        img: "https://image.flaticon.com/icons/svg/706/706133.svg",
        status: "mastering",
        learningProgress: {
          value: 100,
          total: 100,
        },
        masteringProgress: {
          value: 90,
          total: 100,
        },
      },
      {
        title: "Warzywa",
        img: "https://image.flaticon.com/icons/svg/706/706133.svg",
        status: "complete",
        learningProgress: {
          value: 0,
          total: 100,
        },
        masteringProgress: {
          value: 0,
          total: 100,
        },
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
          <SectionSlider key={section.title} title={section.title}>
            {section.topics.map((topic) => (
              <TopicItem
                key={topic.title}
                to={routes.game}
                title={topic.title}
                img={topic.img}
                color={section.color}
                status={topic.status}
                learningProgress={topic.learningProgress}
                masteringProgress={topic.masteringProgress}
              />
            ))}
          </SectionSlider>
        ))}
      </MainWrapper>
    </>
  );
};

export default Topics;
