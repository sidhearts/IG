import { useCallback, useEffect, useState } from "react";

import { CommonConstants } from "@/app/constants/CommonConstants";
import { Avatar } from "@/app/components/Avatar";
import { IconButton } from "@/app/components/IconButton";
import { Loader } from "@/app/components/Loader";

import styles from "./StoryModal.module.css";
import { StoryModalProps } from "./StoryModal.types";

/**
 * StoryModal used to show full page story
 */
export const StoryModal = ({
  stories,
  onClose,
  selectedStoryIndex,
}: StoryModalProps) => {
  const [currentUserIndex, setCurrentUserIndex] = useState(selectedStoryIndex);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Function to handle next story view
   */
  const handleNextStory = useCallback(() => {
    setIsLoading(true);
    const currentStoryCount = stories[currentUserIndex].stories.length;
    if (currentStoryIndex < currentStoryCount - 1) {
      setCurrentStoryIndex((prevIndex) => prevIndex + 1);
    } else if (currentUserIndex < stories.length - 1) {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentUserIndex((prevIndex) => prevIndex + 1);
        setCurrentStoryIndex(0);
        setTransitioning(false);
      }, CommonConstants.STORY_TRANSITION_DURATION);
    } else {
      onClose();
    }
  }, [currentStoryIndex, currentUserIndex, stories, onClose]);

  /**
   * Function to handle previous story view
   */
  const handlePrevStory = () => {
    setIsLoading(true);
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex((prevIndex) => prevIndex - 1);
    } else if (currentUserIndex > 0) {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentUserIndex((prevIndex) => prevIndex - 1);
        setCurrentStoryIndex(stories[currentUserIndex - 1].stories.length - 1);
        setTransitioning(false);
      }, CommonConstants.STORY_TRANSITION_DURATION);
    }
  };

  /**
   * Function to handle click event on story
   * if click is in left half previous story will be displayed (if available)
   * if click is in right half next story will be displayed (if available)
   */
  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX } = event;
    const { width } = event.currentTarget.getBoundingClientRect();
    const isLeftHalf = clientX < width / 2;
    if (isLeftHalf) {
      handlePrevStory();
    } else {
      handleNextStory();
    }
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isLoading) {
      interval = setInterval(
        handleNextStory,
        CommonConstants.STORY_DURATION * 1000
      );
    }

    return () => clearInterval(interval);
  }, [handleNextStory, isLoading]);

  return (
    <div className={styles.modalBackdrop} onClick={handleModalClick}>
      <div
        className={`${styles.modalContent} ${transitioning ? styles.fade : ""}`}
      >
        <div className={styles.storyInfoWrapper}>
          <div className={styles.userInfo}>
            <Avatar
              src={stories[currentUserIndex].user.profileImage}
              name={stories[currentUserIndex].user.name}
              borderType='default'
              size='small'
            />
            <p className={styles.userName}>
              {stories[currentUserIndex].user.name}
            </p>
          </div>
          <div className={styles.storyActionWrapper}>
            <IconButton icon='/icons/kebab.svg' onClick={() => {}} />
            <IconButton icon='/icons/cross.svg' onClick={onClose} />
          </div>
        </div>
        {isLoading && (
          <div className={styles.loaderWrapper}>
            <Loader />
          </div>
        )}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={stories[currentUserIndex].stories[currentStoryIndex].url}
          alt='Story'
          className={styles.modalImg}
          onLoad={handleImageLoad}
          style={{ display: isLoading ? "none" : "block" }}
        />
      </div>
    </div>
  );
};
