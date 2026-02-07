import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Programming",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Tooling",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Tooling",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Software Developer",
        company_name: "Ear Science Institute Australia",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2026 - Present",
        points: [
            "Contributed to the SoundSmiles project (Flutter) supporting iOS/Android development and testing.",
            "Worked on UX, usability testing, research documentation and community consultation.",
            "Collaborated in an interdisciplinary Agile team to deliver culturally safe digital health tools.",
        ],
    },
    {
        title: "Software Developer",
        company_name: "Healthy Connections",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Nov 2024 – Jul 2025",
        points: [
            "Designed telehealth features and patient data workflows, improving usability and speed.",
            "Refactored UI to reduce patient data input time by ~50% and produced production-ready mobile builds.",
            "Iterated quickly from stakeholder testing feedback to deliver robust releases.",
        ],
    },
    {
        title: "Software Developer",
        company_name: "Curtin HIVE",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "Nov 2023 – Feb 2024",
        points: [
            "Built a virtual tour of a rural clinic with Unity, supporting teleportation navigation and 360° assets.",
            "Optimized performance for Meta Quest and ensured stable frame rates during deployment.",
            "Improved user navigation flow and reduced friction during user testing.",
        ],
    },
];

export const socialLinks = [
    // {
    //     name: "Contact",
    //     iconUrl: contact,
    //     link: "/contact",
    // },
    // {
    //     name: "GitHub",
    //     iconUrl: github,
    //     link: "https://github.com/gabnix",
    // },
    {
        name: "LinkedIn",
        iconUrl: linkedin,
        link: "https://www.linkedin.com/in/gabnix/",
    },
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];