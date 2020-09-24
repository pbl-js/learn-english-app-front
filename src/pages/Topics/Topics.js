import React, { memo } from "react";
import routes from "router/routes";

import useData from "./Topics.fetch";
import { MainWrapper, LastTopicWrapper, SectionsWrapper } from "./Topics.style";
import SectionSlider from "components/SectionSlider/SectionSlider";
import TopicItem from "components/TopicItem/TopicItem";
import ProgressStatus from "components/ProgressStatus/ProgressStatus";

import { ReactComponent as Play } from "assets/play.svg";

const Topics = () => {
  const { data, loading } = useData();

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
        {data &&
          data.map((section) => (
            <SectionSlider key={section.title} title={section.title}>
              {section.topics &&
                section.topics.map((topic) => (
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
          ))}
      </SectionsWrapper>
    </MainWrapper>
  );
};

export default memo(Topics);
