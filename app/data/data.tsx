
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
    "readTime": "2 Mins"
  }
];

export default blogData;
