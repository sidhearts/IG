"use client";

import { useEffect, useState } from "react";

import { StoryModal } from "@/app/components/StoryModal";
import { Avatar } from "@/app/components/Avatar";
import { ApiUrls } from "@/app/constants/CommonConstants";

import styles from "./Feed.module.css";
import { StoryData } from "./Feed.types";

export const Feed = () => {
  const [userData, setUserData] = useState<StoryData | null>(null);
  const [othersData, setOthersData] = useState<StoryData[]>([]);
  const [selectedUserIndex, setSelectedUserIndex] = useState<number | null>(
    null
  );
  const [selectedStories, setSelectedStories] = useState<StoryData[]>([]);

  useEffect(() => {
    // fetching current user detail
    fetch(ApiUrls.userDetail)
      .then((response) => response.json())
      .then((data) => setUserData(data));

    // fetching other user's stories
    fetch(ApiUrls.otherUserStories)
      .then((response) => response.json())
      .then((data) => setOthersData(data));
  }, []);

  const handleStoryClick = (user: StoryData, story: StoryData[]) => {
    setSelectedStories(story);
    setSelectedUserIndex(story.indexOf(user));
  };

  const handleCloseModal = () => {
    setSelectedUserIndex(null);
  };

  return (
    <div className={styles.stories}>
      {userData && (
        <div
          role='button'
          className={styles.story}
          onClick={() => handleStoryClick(userData, [userData])}
        >
          <Avatar
            src={userData.user.profileImage}
            name={userData.user.name}
            borderType='gradient'
          />
        </div>
      )}
      {othersData.length &&
        othersData.map((data) => (
          <div
            role='button'
            className={styles.story}
            key={data.id}
            onClick={() => handleStoryClick(data, othersData)}
          >
            <Avatar
              src={data.user.profileImage}
              name={data.user.name}
              borderType='gradient'
            />
          </div>
        ))}
      {selectedUserIndex !== null && (
        <StoryModal
          stories={selectedStories}
          selectedStoryIndex={selectedUserIndex}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};
