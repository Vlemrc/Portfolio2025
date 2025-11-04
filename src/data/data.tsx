import { ProjectType } from '@/types/ProjectType';


export const data: ProjectType[] = [
    {
        id: 1,
        title: "Les pétales obscurs",
        description: "I made this promotional website for a fictional clothing brand. The goal was to train with GSAP. Bloom in the shadows.",
        image: "/images/lespetalesobscurs.png",
        stack: [
            "Next", "TailwindCSS", "GSAP"
        ],
        link: "https://lespetalesobscurs.vercel.app/",
        year: 2024,
        color: "rgb(242 109 103)",
        bgcolor: "rgb(6 39 24)",
        bordercolor: "rgba(242, 109, 103, 0.15)",
        type: "Personal project",
        slug: "lespetalesobscurs",
        video: "/videos/lespetalesobscurs.mov",
        github: "https://github.com/Vlemrc/LesPetalesObscurs"
    },
    {
        id: 2,
        title: "Neuronote",
        description: "A friend made Neuronote, an AI-powered study assistant to help students prepare for exams more efficiently. I crafted the whole user experience and interface with Figma for his app.",
        image: "/images/neuronote.png",
        stack: [
            "Figma, Next, Motion, Tailwind"
        ],
        year: 2025,
        link: "https://neuronote.app/",
        color: "#E83371",
        bgcolor: "#F4F8FE",
        bordercolor: "#E833711A",
        type: "Neuronote",
        slug: "neuronote"
    },
    {
        id: 5,
        title: "Notes AI",
        description: "I made this Apple Notes clone with AI features for my Master's Degree project. I made a speech to present my project and a little video to introduce this new \"learning mode\". Ahead of Apple Intelligence.",
        image: "/images/applenotes.jpg",
        stack: [
            "Next", "TailwindCSS", "GSAP", "Motion", "PostgreSQL"
        ],
        year: 2025,
        color: "rgb(255 195 0)",
        bgcolor: "rgb(40 40 40)",
        bordercolor: "rgba(255, 195, 0, 0.15)",
        type: "Master's Degree project",
        slug: "notes-ai",
        video: "/videos/NotesV3JET.mp4",
        github: "https://github.com/Vlemrc/applenotes-ai"
    },
    {
        id: 6,
        title: "Quiz BNP",
        description: "A quiz to test your knowledge about your electricity consumptions. 4 days to create this quiz from scratch with Wordpress and ACF.",
        image: "/images/quiz-habitat.jpg",
        stack: [
            "Wordpress", "PHP", "JS"
        ],
        year: 2024,
        link: "https://www.observatoirecetelem-quiz.com/habitat-eu-2024",
        color: "rgb(42 128 84)",
        bgcolor: "rgb(238 238 238)",
        bordercolor: "rgba(42, 128, 84, 0.15)",
        type: "BNP Paribas",
        slug: "quiz-bnp",
        video: "/videos/quizbnp.mov",
    },
    {
        id: 4,
        title: "Bimota",
        description: "Webflow site to promote Bimota motos. My first project with webflow in my previous experience in Altavia Disko.",
        image: "/images/bimota.jpg",
        stack: [
            "Webflow", "JS", "GSAP"
        ],
        year: 2024,
        link: "https://www.bimota.fr",
        color: "rgb(227 6 19)",
        bgcolor: "rgb(238 238 238)",
        bordercolor: "rgba(227, 6, 21, 0.15)",
        type: "Bimota",
        slug: "bimota",
        video: "/videos/bimota.mov",
    },
    {
        id: 3,
        title: "EightyTwo",
        description: "Promotional website for Eighty Two. I aim to create a complete wordpress site to train, with CPTUI to register wines and events. A club for wine enthusiasts.",
        image: "/images/eightytwo.png",
        stack: [
            "Wordpress", "PHP", "JS", "GSAP"
        ],
        year: 2025,
        color: "rgb(255 255 255)",
        bgcolor: "rgb(100 6 35)",
        bordercolor: "rgba(255, 255, 255, 0.15)",
        type: "Personal project",
        slug: "eightytwo",
        github: "https://github.com/Vlemrc/Ei8htytw2",
        video: "/videos/video82.mov",
    },
]