import React, { useState, useEffect, useCallback, memo } from "react";
import routes from "router/routes";
import uuid from "react-uuid";
import { animations } from "theme/theme";

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
      <LastTopicWrapper color={"#e67e22"}>
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
