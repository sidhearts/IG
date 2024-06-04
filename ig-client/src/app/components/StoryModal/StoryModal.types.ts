import { StoryData } from "@/app/containers/Feed/Feed.types";

export interface StoryModalProps {
  selectedStoryIndex: number;
  stories: StoryData[];
  onClose: () => void;
}
