import React, { useState, useEffect, useCallback, memo } from "react";
import routes from "router/routes";
import uuid from "react-uuid";
import { animations } from "theme/theme";

import useData from "./Topics.fetch";
import {
  MainWrapper,
  SectionsWrapper,
  SectionIndicator,
  InnerSectionIndicator,
  TopicIndicator,
  TitleIndicator,
} from "./Topics.style";
import BigTopicItem from "components/BigTopicItem/BigTopicItem";
import SectionSlider from "components/SectionSlider/SectionSlider";
import TopicItem from "components/TopicItem/TopicItem";

const sectionsCount = 13;
const topicsPerSection = 15;

const Topics = () => {
  const { data, loading } = useData();
  const [canAnimate, setCanAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCanAnimate(true);
    }, animations.appRouteTransition * 1000);
  }, []);

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
      {data && <BigTopicItem topicItem={data[0].topics[0]} isContinue={true} />}

      <SectionsWrapper>
        {!loading && canAnimate
          ? data.map((section) => (
              <SectionSlider key={section.title} title={section.title}>
                {section.topics.map((topic) => (
                  <TopicItem
                    key={topic.title}
                    to={`${routes.game}/${topic._id}`}
                    color={section.color}
                    topicItem={topic}
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
