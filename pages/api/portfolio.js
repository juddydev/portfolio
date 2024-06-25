const portfolio = [
    {
        id: 0,
        projectName: "JMM",
        url: "https://jmm.ltd/",
        image: "images/projects/jmm.jpg",
        projectDetail: "JMM Technologies is a start-up turned technology company with extensive years of experience delivering digital solutions. As a fast-growing tech firm, we help diverse businesses and organizations. Our expertise in innovative, state-of-the-art digital services accelerates business growth and enhances customer impact.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: ".net"
            },
            {
                tech: "Ant Design"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 1,
        projectName: "Top10",
        url: "https://www.top10.com/",
        image: "images/projects/p1.jpg",
        projectDetail: "Top10.com is a comparison platform that brings you useful top 10 lists covering a wide variety of products and services that can help you save time and money",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: ".net"
            },
            {
                tech: "Ant Design"
            },
            {
                tech: "JAVA"
            },
        ]
    },
    {
        id: 2,
        projectName: "E-collar",
        url: "https://www.thedogline.com.au/",
        image: "images/projects/p2.jpg",
        projectDetail: "Specialists in E-collars for dogs - Full Guarantees - Find out more about our quality bark collars, dog fences and dog training collars | Buy electric collars from The Dog Line to make training your dog easier. ",
        technologiesUsed: [
            {
                tech: "Laravel"
            },
            {
                tech: ".net"
            },
            {
                tech: "MongoDB"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 3,
        projectName: "PolyTrading",
        url: "https://www.poly-consult.com/",
        image: "images/projects/p3.jpg",
        projectDetail: "Poly Trading Consulting",
        technologiesUsed: [
            {
                tech: "Wordpress"
            },
            {
                tech: ".net"
            },
            {
                tech: "Ant Design"
            },
            {
                tech: "PHP"
            },
        ]
    },
    {
        id: 4,
        projectName: "CryptoKitty",
        url: "https://www.cryptokitties.co/",
        image: "images/projects/p4.jpg",
        projectDetail: "Collect and trade CryptoKitties in one of the world’s first blockchain games. Breed your rarest cats to create the purrfect furry friend. The future is meow!",
        technologiesUsed: [
            {
                tech: "Blockchain"
            },
            {
                tech: "Web3"
            },
            {
                tech: "Solidity"
            },
            // {
            //     tech: "Figma"
            // },
        ]
    },
    {
        id: 5,
        projectName: "Fat Ape Club",
        url: "https://fatapeclub.io/",
        image: "images/projects/p5.jpg",
        projectDetail: "Welcome to the Fat Ape Club, a tribe of 9,999 obese apes that partied too much and didn’t exercise enough.",
        technologiesUsed: [
            {
                tech: "Blockchain"
            },
            {
                tech: "Web3"
            },
            {
                tech: "Solidity"
            },
            // {
            //     tech: "TailwindCSS"
            // },
        ]
    },
    {
        id: 6,
        projectName: "HOSPITALBUDDY",
        url: "https://play.google.com/store/apps/details?id=com.easybuddysolution",
        image: "images/projects/p6.png",
        projectDetail: "HOSPITALBUDDY is an app through which you can book services at your home.",
        technologiesUsed: [
            {
                tech: "Kotlin"
            },
            {
                tech: "Flutter"
            },
            {
                tech: "Ant Design"
            },
            {
                tech: "Swift"
            },
        ]
    },
    {
        id: 7,
        projectName: "Culyte",
        url: "https://culyte.com",
        image: "images/projects/p7.jpg",
        projectDetail: "The company itself is a very successful company. He escaped from pain, and all his things were hindered by the understanding of another age!",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "MySQL"
            },
            {
                tech: "Ant Design"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
