import React, { memo } from "react";
import useData from "./Collection.data";

import { MainWrapper, TopicsWrapper } from "./Collection.style";
import CollectionTopicToggle from "components/CollectionTopicToggle/CollectionTopicToggle";
import CollectionWordItem from "components/CollectionWordItem/CollectionWordItem";

const Collection = () => {
  const { data, loading } = useData();

  console.log(data);
  return (
    <MainWrapper>
      <h1>Collection</h1>
      <h1>Collection</h1>

      <TopicsWrapper>
        {data &&
          data.map((topic) => (
            <CollectionTopicToggle title={topic.title} key={topic._id}>
              {topic.words.map((word) => (
                <CollectionWordItem
                  key={word._id}
                  img={word.img}
                  title={{ eng: word.eng, pl: word.pl }}
                  progress={word.progress}
                />
              ))}
            </CollectionTopicToggle>
          ))}
      </TopicsWrapper>
    </MainWrapper>
  );
};

export default memo(Collection);
