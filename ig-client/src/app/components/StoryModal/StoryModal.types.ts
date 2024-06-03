import { StoryData } from "@/app/containers/Feed/Feed.types";

export interface StoryModalProps {
  stories: StoryData[];
  onClose: () => void;
}
