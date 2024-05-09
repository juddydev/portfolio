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
        title: 'Smart Contract Auditor',
        desc: 'Now I am working as a warden in Code4rena and participate in contests and bug bounties. You can find me in leaderboard page in sherlock and code4rena.',
    },
    
    // {
    //     id: 2,
    //     title: 'Designing (UI/UX)',
    //     desc: 'I am proficient in using design software such as Figma, Adobe XD, and Adobe Illustrator. Through participating in hackathons and freelance work, I have gained practical experience in UI/UX design and graphic design. Designing is my passion, and it has allowed me to continue to develop my creative skills and grow in the field.',
    // },
    // {
    //     id: 3,
    //     title: 'Github',
    //     desc: "GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer.",
    // },
    // {
    //     id: 4,
    //     title: 'Open Source Contributor',
    //     desc: "Open Source is the future. I usually take some time on weekend and contribute into opensource project. It gives me opportunity to learn from best developer's practices and also gives me a chance to help others and contribute into the community for the good.",
    // },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
