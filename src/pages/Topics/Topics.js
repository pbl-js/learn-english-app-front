import React, { useEffect, useCallback, memo } from "react";
import routes from "router/routes";
import uuid from "react-uuid";

import useData from "./Topics.fetch";
import {
  MainWrapper,
  LastTopicWrapper,
  SectionsWrapper,
  SectionIndicator,
  InnerSectionIndicator,
  TopicIndicator,
  TitleIndicator,
} from "./Topics.style";
import SectionSlider from "components/SectionSlider/SectionSlider";
import TopicItem from "components/TopicItem/TopicItem";
import ProgressStatus from "components/ProgressStatus/ProgressStatus";

import { ReactComponent as Play } from "assets/play.svg";

const sectionsCount = 13;
const topicsPerSection = 15;

const Topics = () => {
  const { data, loading } = useData();

  // const data = null;

  const genIndicatorsData = useCallback(() => {
    let indicatorData = [];
    for (let index = 0; index <= sectionsCount - 1; index++) {
      let topics = [];
      for (
        let innerIndex = 0;
        innerIndex <= topicsPerSection - 1;
        innerIndex++
      ) {
        topics.push(uuid());
      }
      indicatorData.push({ id: uuid(), topics });
    }
    return indicatorData;
  }, []);

  const indicatorsData = genIndicatorsData();

  return (
    <MainWrapper>
      <LastTopicWrapper>
        <h1>Jedzenie i picie</h1>
        <h2>Warzywa Ciąg dalszy</h2>
        <div>
          <ProgressStatus progress={{ value: 20, total: 100 }} mastering={1} />
        </div>
        <button>
          Kontynuuj <Play />
        </button>
      </LastTopicWrapper>

      <SectionsWrapper>
        {!loading
          ? data.map((section) => (
              <SectionSlider key={section.title} title={section.title}>
                {section.topics.map((topic) => (
                  <TopicItem
                    key={topic.title}
                    to={`${routes.game}/${topic._id}`}
                    title={topic.title}
                    img={topic.img}
                    color={section.color}
                    status={topic.progress.status}
                    learningProgress={topic.progress.learningProgress}
                    masteringProgress={topic.progress.masteringProgress}
                  />
                ))}
              </SectionSlider>
            ))
          : indicatorsData.map((section) => (
              <SectionIndicator key={section.id}>
                <TitleIndicator />

                <InnerSectionIndicator>
                  {section.topics.map((topic) => (
                    <TopicIndicator key={topic} />
                  ))}
                </InnerSectionIndicator>
              </SectionIndicator>
            ))}
      </SectionsWrapper>
    </MainWrapper>
  );
};

export default memo(Topics);
