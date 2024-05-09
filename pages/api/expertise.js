const expertise = [
    {
        id: 0,
        title: 'Block chain Development',
        desc: "As a developer, I'm proficient in Python and Web3 methodologies. As I am a seasoned blockchain developer with extensive experience in the field. Over the course of my career, I have successfully navigated the rapidly evolving landscape of blockchain technology, contributing to the development and deployment of secure, efficient, and scalable blockchain solutions.",
    },
    {
        id: 1,
        title: 'Full Stack Development',
        desc: 'I am a skilled MERN stack developer with extensive experience in building robust web applications using MongoDB, Express.js, React.js, and Node.js. I possess a strong understanding of server-side rendering, API integration, and database management. With my expertise, I can deliver dynamic and efficient web solutions tailored to meet the unique requirements of clients.',
    },
    {
        id: 2,
        title: 'Frontend Development',
        desc: 'I am familiar with React.js, Vue.js, Next.js and Tailwind CSS. I built lots of projects and received good reviews from the clients',
    },
    
    {
        id: 3,
        title: 'Designing (UI/UX)',
        desc: 'I am proficient in using design software such as Figma, Adobe XD, and Adobe Illustrator. Through participating in hackathons and freelance work, I have gained practical experience in UI/UX design and graphic design. Designing is my passion, and it has allowed me to continue to develop my creative skills and grow in the field.',
    },
    {
        id: 4,
        title: 'Github',
        desc: "GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer.",
    }
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
