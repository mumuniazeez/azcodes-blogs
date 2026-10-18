
export interface BlogPost {
  topicKey: string;
  title: string;
  description: string;
  badges: string[];
  link: string;
  createdAt: string;
  featured: boolean;
  readTime: string;
}

const blogData: BlogPost[] = [
  {
    "topicKey": "Tech Summer for Teens",
    "title": "Teaching Teens to Code: My Experience at TGDI Tech Summer 2026",
    "description": " I volunteered at TGDI Tech Summer 2026, teaching HTML, CSS, Tailwind CSS, and responsible AI to more than 40 teens—and helping them turn their ideas into real projects.",
    "badges": [
      "Volunteering",
      "Tech Summer for Teens",
      "Community Service",
      "Education",
      "AzCodes blogs"
    ],
    "link": "/posts/teaching-teens-at-tgdi-tech-summer",
    "createdAt": "October, 18, 2026",
    "featured": true,
    "readTime": "5 Mins"
  },
  {
    "topicKey": "First blog",
    "title": "My first blog",
    "description": "This is my first blog post",
    "badges": [
      "Blog",
      "AzCodes"
    ],
    "link": "/posts/my-first-blog",
    "createdAt": "September, 26, 2026",
    "featured": false,
    "readTime": "1 Mins"
  }
];

export default blogData;
