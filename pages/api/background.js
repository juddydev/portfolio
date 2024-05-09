const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'University of Madrid',
                degree: 'BS, Computer System Engineering',
                detail: "Bachelor's Degree in Computer System Engineering.",
                year: '2013-2017'
            }
            
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Software Technologies',
                role: 'Full Stack Developer',
                url: 'https://jmm.ltd/',
                desc: 'As a Senior Full Stack Developer, Focused on BackEnd, I use React, Next & JavaScript to build user interfaces for web applications.',
                year: '01/2022 - 02/2023',
                location: 'OptimizeFT • San Diego, California'
            },
            {
                id: 2,
                title: 'Block Chain Technologies',
                role: 'Block Chain Developer',
                url: 'https://www.cryptokitties.co/',
                desc: "I work there as a Block chain developer, there I learned about Block chain and developed 8 projects, also I worked on Firebase",
                year: '07/2020 - 11/2021',
                location: 'Boxfish Studio Aranjuez, Madrid'
            },
            {
                id: 3,
                title: 'Web full stack Technologies, bloch chain stack Technologies',
                role: 'Senior Full Stack Developer As a Freelancer',
                url: 'https://sevengramscaffe.com/',
                desc: 'Developed some Ecommerce sites using HTML/CSS, JavaScript,WordPress, Shopify and Magento.Very Clean and Neat Designing and making a LIVE Website from Figma with React.js, Rust as much as working very efficient and less timeconsuming.',
                year: '05/2018 - 09/2020',
                location: 'Appelink, Madrid'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
