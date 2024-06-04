import express, { Request, Response } from "express";
import cors from "cors";

import { StoryData } from "./types";

const app = express();
const port = 8000;

const corsOptions = {
  credentials: true,
  origin: ["http://localhost:3000", "https://ig-r8vq.vercel.app/"],
};

app.use(cors(corsOptions));

const userData: StoryData = {
  id: 0,
  user: {
    name: "Siddharth Raj",
    profileImage: "https://i.pravatar.cc/150?img=12",
  },
  stories: [
    {
      type: "image",
      url: "https://picsum.photos/id/237/200/300",
    },
    {
      type: "image",
      url: "https://picsum.photos/id/13/2500/1667",
    },
  ],
};

const stories: StoryData[] = [
  {
    id: 1,
    user: {
      name: "John Doe",
      profileImage:
        "https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109",
    },
    stories: [
      {
        type: "image",
        url: "https://picsum.photos/seed/picsum/200/300",
      },
    ],
  },
  {
    id: 2,
    user: {
      name: "Jane Smith",
      profileImage:
        "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    },
    stories: [
      {
        type: "image",
        url: "https://picsum.photos/200/300?grayscale",
      },
    ],
  },
  {
    id: 3,
    user: {
      name: "Jane Doe",
      profileImage: "https://i.pravatar.cc/150?img=57",
    },
    stories: [
      {
        type: "image",
        url: "https://picsum.photos/id/12/2500/1667",
      },
    ],
  },
  {
    id: 4,
    user: {
      name: "Alan Smith",
      profileImage: "https://i.pravatar.cc/150?img=66",
    },
    stories: [
      {
        type: "image",
        url: "https://picsum.photos/id/14/2500/1667",
      },
    ],
  },
  {
    id: 5,
    user: {
      name: "Alec Kim",
      profileImage: "https://i.pravatar.cc/150?img=2",
    },
    stories: [
      {
        type: "image",
        url: "https://picsum.photos/id/16/2500/1667",
      },
    ],
  },
  {
    id: 6,
    user: {
      name: "Kace Potts",
      profileImage: "https://i.pravatar.cc/150?img=43",
    },
    stories: [
      {
        type: "image",
        url: "https://picsum.photos/id/13/2500/1667",
      },
    ],
  },
];

app.get("/api/user", (req: Request, res: Response) => {
  res.json(userData);
});

app.get("/api/stories", (req: Request, res: Response) => {
  res.json(stories);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
