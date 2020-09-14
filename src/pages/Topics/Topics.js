import React, { memo } from "react";
import routes from "router/routes";

import useData from "./Topics.fetch";
import { MainWrapper } from "./Topics.style";
import SectionSlider from "components/SectionSlider/SectionSlider";
import TopicItem from "components/TopicItem/TopicItem";

const Topics = () => {
  const { data, loading } = useData();

  return (
    <MainWrapper>
      {data &&
        data.map((section) => (
          <SectionSlider key={section.title} title={section.title}>
            {section.topics &&
              section.topics.map((topic) => (
                <TopicItem
                  key={topic.title}
                  to={routes.game}
                  title={topic.title}
                  img={topic.img}
                  color={section.color}
                  status={topic.progress.status}
                  learningProgress={topic.progress.learningProgress}
                  masteringProgress={topic.progress.masteringProgress}
                />
              ))}
          </SectionSlider>
        ))}
    </MainWrapper>
  );
};

export default memo(Topics);
