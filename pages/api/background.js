const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'University of Belgrade',
                degree: 'BS, Computer System Engineering',
                detail: "Bachelor's Degree in Computer System Engineering.",
                year: '2012-2016'
            }
            
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Blockchain Technologies',
                role: 'Blockchain Developer',
                url: '',
                desc: 'I work there as a Block chain developer, there I learned about Block chain and developed 8 projects, also I worked on Firebase.',
                year: '09/2022 - 02/2023',
                location: 'Belgrade, Serbia'
            },
            {
                id: 2,
                title: 'Web2 & Web3 Technologies',
                role: 'Frontend and Blockchain Developer',
                url: '',
                desc: "Skills: Front-End Development · React.js · TypeScript · GraphQL · Ethereum · Smart Contracts · Node.js · Solidity",
                year: '04/2021 - 06/2022',
                location: 'Belgrade, Serbia'
            },
            {
                id: 3,
                title: 'Software Technologies',
                role: 'Full Stack Developer',
                url: '',
                desc: 'As a Senior Full Stack Developer, Focused on BackEnd, I use React, Next & JavaScript to build user interfaces for web applications.',
                year: '04/2017 - 12/2020',
                location: 'Belgrade, Serbia'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
