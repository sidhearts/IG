interface User {
  name: string;
  profileImage: string;
}

interface Story {
  type: "image" | "video";
  url: string;
}

export interface StoryData {
  id: number;
  user: User;
  stories: Story[];
}
