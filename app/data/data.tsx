
export interface BlogPost {
  topicKey: string;
  title: string;
  description: string;
  badges: string[];
  link: string;
  slug: string;
  createdAt: string;
  featured: boolean;
  readTime: string;
}

const blogData: BlogPost[] = [
  {
    "topicKey": "My Journey",
    "title": "My Tech Journey: A Self Taught Nigerian Developer's Story",
    "description": "I went from wanting to learn barbing to becoming a full stack developer. Here is how I started, the challenges I faced in Nigeria, and what I learned.",
    "badges": [
      "Personal Story",
      "Self Taught",
      "Web Development",
      "Backend Development",
      "Nigeria",
      "AzCodes blogs"
    ],
    "link": "/posts/my-journey-in-the-tech-space",
    "slug": "my-journey-in-the-tech-space",
    "createdAt": "November, 7, 2026",
    "featured": true,
    "readTime": "10 Mins"
  },
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
    "slug": "teaching-teens-at-tgdi-tech-summer",
    "createdAt": "October, 18, 2026",
    "featured": false,
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
    "slug": "my-first-blog",
    "link": "/posts/my-first-blog",
    "createdAt": "September, 26, 2026",
    "featured": false,
    "readTime": "1 Mins"
  }
];

export default blogData;
