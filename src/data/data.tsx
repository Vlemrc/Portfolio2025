import { ProjectType } from '@/types/ProjectType';


export const data: ProjectType[] = [
    {
        id: 1,
        title: "Les pétales obscurs",
        description: "Promotional website for a fictional clothing brand. Bloom in the shadows",
        image: "/images/lespetalesobscurs.png",
        stack: [
            "Next", "TailwindCSS", "GSAP"
        ],
        year: 2024,
        link: "https://lespetalesobscurs.vercel.app/",
        color: "rgb(242 109 103)",
        bgcolor: "#062718",
        type: "Personal project",
    },
    {
        id: 2,
        title: "Quiz BNP",
        description: "A quiz to test your knowledge about your electricity consumptions.",
        image: "/images/quiz-habitat.jpg",
        stack: [
            "Wordpress", "PHP", "JS"
        ],
        year: 2024,
        link: "https://www.observatoirecetelem-quiz.com/habitat-eu-2024",
        color: "#2A8054",
        bgcolor: "rgb(238 238 238)",
        type: "BNP Paribas",
    },
    {
        id: 3,
        title: "EightyTwo",
        description: "Promotional website for Eighty Two. A club for wine enthusiasts.",
        image: "/images/eightytwo.png",
        stack: [
            "Wordpress", "PHP", "JS", "GSAP"
        ],
        year: 2025,
        link: "#",
        color: "#ffffff",
        bgcolor: "rgb(100 6 35)",
        type: "Eighty Two Club",
    },
    {
        id: 4,
        title: "Bimota",
        description: "Webflow site to promote Bimota motos",
        image: "/images/bimota.jpg",
        stack: [
            "Webflow", "JS", "GSAP"
        ],
        year: 2024,
        link: "https//www.bimota.fr",
        color: "#E30613",
        bgcolor: "rgb(238 238 238)",
        type: "Bimota",
    },
    {
        id: 5,
        title: "Notes AI",
        description: "Apple Notes clone with AI features. Ahead of Apple Intelligence",
        image: "/images/applenotes.jpg",
        stack: [
            "Next", "TailwindCSS", "GSAP", "Motion", "PostgreSQL"
        ],
        year: 2025,
        link: "#",
        color: "#ffc300",
        bgcolor: "rgb(150 150 150)",
        type: "Degree project",
    }
]