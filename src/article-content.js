const articles = [
    {
        name: "Cybersecurity Hacker Threats",
        title: "Cybersecurity Threats: What You Need to Know",
        content: [
            "Phishing: Phishing is one of the most prevalent threats on the internet today. It involves attackers impersonating trusted entities to steal sensitive data such as usernames, passwords, and credit card information. Phishing attacks typically occur through email, social media, or fake websites designed to look legitimate.",
            "Ransomware: Ransomware is malicious software that locks you out of your own files and demands payment (usually in cryptocurrency) to restore access. This type of attack often targets both individuals and organizations, and the consequences can be devastating, especially when critical data is held hostage.",
            "DDoS Attacks: Distributed Denial of Service (DDoS) attacks overwhelm a website or server by flooding it with massive amounts of internet traffic. These attacks are often used to disrupt online services or as a smokescreen for other types of cybercrimes.",
            "Man-in-the-Middle (MitM) Attacks: MitM attacks involve attackers intercepting communications between two parties. The goal is to steal or manipulate the data being transferred without either party knowing. Common examples include intercepting login credentials or injecting malicious content into websites you visit."
        ]
    },

    {
        name: "Malware Protection",
        title: "Understanding Malware: Types and Protection",
        content: [
            "Viruses: A computer virus attaches itself to a legitimate program or file. When that program is executed, the virus spreads to other files or programs, often corrupting them. It can result in system crashes or loss of data.",
            "Trojans: Unlike viruses, Trojans do not replicate themselves. Instead, they disguise themselves as useful software or files. Once installed, they create backdoors for hackers to gain control over your computer and steal data or spy on you.",
            "Worms: Worms are self-replicating malware that spread across networks without needing to attach themselves to programs. They can spread rapidly, clogging up networks and consuming resources.",
            "Spyware: Spyware is designed to monitor and gather information about your online activities without your consent. This information can then be used for targeted ads, identity theft, or other malicious purposes."
        ]
    },

    {
        name: "Identity Theft Awareness",
        title: "The Growing Threat of Identity Theft in the Digital Age",
        content: [
            "Data Breaches: A data breach occurs when sensitive personal information (e.g., social security numbers, bank details) is exposed to unauthorized parties. High-profile breaches at companies like Target, Equifax, and Yahoo have affected millions of people. These incidents provide criminals with valuable data they can use to steal your identity.",
            "Social Media Exploitation: Cybercriminals are increasingly using social media platforms to gather personal information that can be used for identity theft. They mine public profiles for details like birthdays, addresses, and even the names of family members, which can be used to guess passwords or security questions.",
            "Credit Card Fraud: Identity thieves often use stolen credit card information to make unauthorized purchases. This can occur through online shopping platforms, point-of-sale systems, or even via data breaches. Once your financial details are compromised, criminals may rack up substantial charges.",
            "Synthetic Identity Theft: In synthetic identity theft, fraudsters create entirely fake identities by combining real and fake information (such as a real name and a fake Social Security number). This makes it difficult to detect since the stolen identity doesn’t exist in public records.",
        ]
    },

    {
        name: "Dark Web Unveiled",
        title: "Understanding the Dark Web: What Lies Beneath the Surface",
        content: [
            "The Dark Web vs. The Deep Web: Many people mistakenly conflate the dark web with the deep web. While the deep web consists of non-indexed content (such as private databases or password-protected accounts), the dark web is a hidden part of the internet where illegal activities, such as the sale of stolen data, drugs, and weapons, take place.",
            "Illegal Marketplaces: On the dark web, there are several marketplaces where illicit goods and services are bought and sold. These include illegal drugs, counterfeit documents, and hacking tools. Transactions are typically done with cryptocurrencies, making them hard to trace.",
            "Data Breaches and Hacking Tools: Cybercriminals frequently use the dark web to exchange stolen data from data breaches. Sensitive information, such as login credentials, bank details, and health records, are sold to other criminals who can exploit them for fraud or further hacking activities.",
            "Hiring Hackers: The dark web is also a hub for hiring \"hackers-for-hire.\" People can anonymously hire cybercriminals to carry out attacks like DDoS, data theft, or even blackmail campaigns. This underworld economy thrives on the anonymity offered by the dark web.",
        ]
    },

    {
        name: "Online Scam Prevention",
        title: "Protecting Yourself Against Online Scams",
        content: [
            "Fake E-commerce Sites: Scammers often create fraudulent websites that mimic legitimate online stores. These sites lure users with heavily discounted products, but once the user enters their payment information, they either never receive the product or the transaction is used for identity theft.",
            "Investment Scams: With the rise of cryptocurrency and stock trading apps, investment scams have become more sophisticated. Fraudsters promise high returns on \"guaranteed\" investments or ask you to invest in fake trading platforms, only to disappear once the money is transferred.",
            "Lottery and Prize Scams: In this scam, you are notified via email or text that you’ve won a lottery or prize but must pay taxes or fees upfront to collect your winnings. These scams rely on urgency and emotional manipulation to trick you into making hasty decisions.",
            "Tech Support Scams: Scammers often impersonate tech support agents from well-known companies like Microsoft or Apple. They claim that your computer has a virus or security issue, convincing you to grant remote access or pay for unnecessary software."
        ]
    }
]

export default articles;