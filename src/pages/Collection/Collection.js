import React, { memo } from "react";
import useData from "./Collection.data";

import { MainWrapper, TopicsWrapper } from "./Collection.style";
import CollectionTopicToggle from "components/CollectionTopicToggle/CollectionTopicToggle";
import CollectionWordItem from "components/CollectionWordItem/CollectionWordItem";

const Collection = () => {
  const { data, loading } = useData();

  console.log("Collection");
  return (
    <MainWrapper>
      <TopicsWrapper>
        {data &&
          data.map((topic) => (
            <CollectionTopicToggle title={topic.title} key={topic._id}>
              {topic.words.map((word) => (
                <CollectionWordItem key={word._id} wordItem={word} />
              ))}
            </CollectionTopicToggle>
          ))}
      </TopicsWrapper>
    </MainWrapper>
  );
};

export default memo(Collection);
