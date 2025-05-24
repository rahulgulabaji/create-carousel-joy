
export interface TemplateSlide {
  id: number;
  title: string;
  content: string;
  bgColor: string;
  textColor: string;
  fontSize: string;
  fontWeight: string;
}

export interface Template {
  id: number;
  name: string;
  category: string;
  premium: boolean;
  downloads: number;
  rating: number;
  preview: string;
  description: string;
  slides: TemplateSlide[];
  tags: string[];
}

export const templates: Template[] = [
  {
    id: 1,
    name: "Motivational Quotes",
    category: "quotes",
    premium: false,
    downloads: 1250,
    rating: 4.8,
    preview: "bg-gradient-to-br from-purple-600 to-pink-500",
    description: "Inspire your audience with powerful motivational quotes",
    tags: ["motivation", "inspiration", "quotes"],
    slides: [
      {
        id: 1,
        title: "Dream Big",
        content: "The future belongs to those who believe in the beauty of their dreams.",
        bgColor: "bg-gradient-to-br from-purple-600 to-pink-500",
        textColor: "text-white",
        fontSize: "text-2xl",
        fontWeight: "font-bold"
      },
      {
        id: 2,
        title: "Take Action",
        content: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        bgColor: "bg-gradient-to-br from-blue-600 to-purple-600",
        textColor: "text-white",
        fontSize: "text-2xl",
        fontWeight: "font-bold"
      },
      {
        id: 3,
        title: "Stay Positive",
        content: "Believe you can and you're halfway there. - Theodore Roosevelt",
        bgColor: "bg-gradient-to-br from-green-600 to-blue-600",
        textColor: "text-white",
        fontSize: "text-2xl",
        fontWeight: "font-bold"
      }
    ]
  },
  {
    id: 2,
    name: "Social Media Tips",
    category: "tips",
    premium: true,
    downloads: 890,
    rating: 4.9,
    preview: "bg-gradient-to-br from-blue-600 to-cyan-500",
    description: "Essential tips for growing your social media presence",
    tags: ["social media", "marketing", "tips"],
    slides: [
      {
        id: 1,
        title: "Consistency is Key",
        content: "Post regularly to keep your audience engaged and grow your following.",
        bgColor: "bg-gradient-to-br from-blue-600 to-cyan-500",
        textColor: "text-white",
        fontSize: "text-xl",
        fontWeight: "font-semibold"
      },
      {
        id: 2,
        title: "Know Your Audience",
        content: "Create content that resonates with your target demographic.",
        bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500",
        textColor: "text-white",
        fontSize: "text-xl",
        fontWeight: "font-semibold"
      },
      {
        id: 3,
        title: "Engage Authentically",
        content: "Respond to comments and messages to build genuine connections.",
        bgColor: "bg-gradient-to-br from-teal-500 to-green-500",
        textColor: "text-white",
        fontSize: "text-xl",
        fontWeight: "font-semibold"
      },
      {
        id: 4,
        title: "Use Hashtags Wisely",
        content: "Research and use relevant hashtags to increase discoverability.",
        bgColor: "bg-gradient-to-br from-green-500 to-blue-500",
        textColor: "text-white",
        fontSize: "text-xl",
        fontWeight: "font-semibold"
      }
    ]
  },
  {
    id: 3,
    name: "Product Launch",
    category: "promo",
    premium: true,
    downloads: 654,
    rating: 4.7,
    preview: "bg-gradient-to-br from-orange-600 to-red-500",
    description: "Announce your new product with style and impact",
    tags: ["product", "launch", "announcement"],
    slides: [
      {
        id: 1,
        title: "Something Big is Coming",
        content: "Get ready for our most exciting product launch yet!",
        bgColor: "bg-gradient-to-br from-orange-600 to-red-500",
        textColor: "text-white",
        fontSize: "text-3xl",
        fontWeight: "font-bold"
      },
      {
        id: 2,
        title: "Introducing Innovation",
        content: "Revolutionary features that will change how you work.",
        bgColor: "bg-gradient-to-br from-red-500 to-pink-500",
        textColor: "text-white",
        fontSize: "text-2xl",
        fontWeight: "font-bold"
      },
      {
        id: 3,
        title: "Limited Time Offer",
        content: "Early bird pricing available for the first 100 customers!",
        bgColor: "bg-gradient-to-br from-pink-500 to-purple-500",
        textColor: "text-white",
        fontSize: "text-2xl",
        fontWeight: "font-bold"
      }
    ]
  },
  {
    id: 4,
    name: "Business Strategy",
    category: "business",
    premium: false,
    downloads: 2100,
    rating: 4.6,
    preview: "bg-gradient-to-br from-green-600 to-teal-500",
    description: "Share business insights and strategic thinking",
    tags: ["business", "strategy", "growth"],
    slides: [
      {
        id: 1,
        title: "Know Your Market",
        content: "Understanding your target market is the foundation of success.",
        bgColor: "bg-gradient-to-br from-green-600 to-teal-500",
        textColor: "text-white",
        fontSize: "text-xl",
        fontWeight: "font-semibold"
      },
      {
        id: 2,
        title: "Build Strong Teams",
        content: "Great businesses are built by great people working together.",
        bgColor: "bg-gradient-to-br from-teal-500 to-blue-500",
        textColor: "text-white",
        fontSize: "text-xl",
        fontWeight: "font-semibold"
      },
      {
        id: 3,
        title: "Focus on Value",
        content: "Always prioritize delivering real value to your customers.",
        bgColor: "bg-gradient-to-br from-blue-500 to-indigo-500",
        textColor: "text-white",
        fontSize: "text-xl",
        fontWeight: "font-semibold"
      },
      {
        id: 4,
        title: "Measure & Adapt",
        content: "Use data to guide decisions and pivot when necessary.",
        bgColor: "bg-gradient-to-br from-indigo-500 to-purple-500",
        textColor: "text-white",
        fontSize: "text-xl",
        fontWeight: "font-semibold"
      }
    ]
  },
  {
    id: 5,
    name: "Educational Content",
    category: "education",
    premium: true,
    downloads: 1450,
    rating: 4.8,
    preview: "bg-gradient-to-br from-indigo-600 to-purple-500",
    description: "Create engaging educational content for your audience",
    tags: ["education", "learning", "tutorial"],
    slides: [
      {
        id: 1,
        title: "Learning Objective",
        content: "Today we'll explore the fundamentals of effective communication.",
        bgColor: "bg-gradient-to-br from-indigo-600 to-purple-500",
        textColor: "text-white",
        fontSize: "text-xl",
        fontWeight: "font-semibold"
      },
      {
        id: 2,
        title: "Key Principle #1",
        content: "Listen actively before speaking. Understanding comes first.",
        bgColor: "bg-gradient-to-br from-purple-500 to-pink-500",
        textColor: "text-white",
        fontSize: "text-xl",
        fontWeight: "font-semibold"
      },
      {
        id: 3,
        title: "Key Principle #2",
        content: "Be clear and concise. Avoid jargon and complex language.",
        bgColor: "bg-gradient-to-br from-pink-500 to-red-500",
        textColor: "text-white",
        fontSize: "text-xl",
        fontWeight: "font-semibold"
      },
      {
        id: 4,
        title: "Practice Exercise",
        content: "Try explaining a complex topic in just 30 seconds.",
        bgColor: "bg-gradient-to-br from-red-500 to-orange-500",
        textColor: "text-white",
        fontSize: "text-xl",
        fontWeight: "font-semibold"
      }
    ]
  },
  {
    id: 6,
    name: "Inspirational Story",
    category: "quotes",
    premium: false,
    downloads: 980,
    rating: 4.5,
    preview: "bg-gradient-to-br from-pink-600 to-rose-500",
    description: "Share inspiring stories that motivate and connect",
    tags: ["inspiration", "story", "motivation"],
    slides: [
      {
        id: 1,
        title: "The Journey Begins",
        content: "Every great achievement starts with a single step forward.",
        bgColor: "bg-gradient-to-br from-pink-600 to-rose-500",
        textColor: "text-white",
        fontSize: "text-2xl",
        fontWeight: "font-bold"
      },
      {
        id: 2,
        title: "Overcoming Obstacles",
        content: "Challenges are not roadblocks, they're stepping stones to greatness.",
        bgColor: "bg-gradient-to-br from-rose-500 to-red-500",
        textColor: "text-white",
        fontSize: "text-2xl",
        fontWeight: "font-bold"
      },
      {
        id: 3,
        title: "The Breakthrough",
        content: "Success often comes just after you think you can't go on.",
        bgColor: "bg-gradient-to-br from-red-500 to-orange-500",
        textColor: "text-white",
        fontSize: "text-2xl",
        fontWeight: "font-bold"
      }
    ]
  }
];

export const categories = [
  { id: "all", name: "All Templates", count: templates.length },
  { id: "quotes", name: "Quotes", count: templates.filter(t => t.category === "quotes").length },
  { id: "tips", name: "Tips & Tutorials", count: templates.filter(t => t.category === "tips").length },
  { id: "promo", name: "Promotional", count: templates.filter(t => t.category === "promo").length },
  { id: "education", name: "Educational", count: templates.filter(t => t.category === "education").length },
  { id: "business", name: "Business", count: templates.filter(t => t.category === "business").length }
];
