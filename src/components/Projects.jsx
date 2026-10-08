import * as React from "react";
import DialogProjects from "./DialogProjects";
import Reveal from "./Reveal";

import algotrade from "../assets/projects/algotrade.jpg";
import skippr from "../assets/projects/skippr.jpg";
import snaplay from "../assets/projects/snaplay.jpg";
import groupmind from "../assets/projects/groupmind-bot.jpg";
import agentgrid from "../assets/projects/agentgrid-kitchen.jpg";
import web3bank from "../assets/projects/web3-bank.jpg";
import onedaystudio from "../assets/projects/onedaystudio.jpg";
import eleven from "../assets/projects/11ven.jpg";

// Clicking a card opens a small popup with the description, tags and links.
// The first link becomes the main (blue) button.
const projectList = [
  {
    title: "AlgoTrade",
    imgSrc: algotrade,
    description:
      "An algorithmic trading research platform. Turns plain-English trading ideas into backtested strategies for Indian stocks, indices and options, with AI strategy generation, secure code execution and statistical validation.",
    tags: ["Python", "FastAPI", "LangGraph", "Gemini", "Supabase"],
    links: [{ label: "Live demo", href: "https://holdmycoffee.lol/" }],
  },
  {
    title: "Skippr",
    imgSrc: skippr,
    description:
      "A community concierge app for residential societies, live on the Play Store. OTP login, service requests, task workflows and an admin dashboard.",
    tags: ["React Native", "Expo", "Supabase", "PostgreSQL", "AWS"],
    links: [{ label: "Visit site", href: "https://www.helloskippr.com/" }],
  },
  {
    title: "SnapLay",
    imgSrc: snaplay,
    description:
      "An OTT streaming app with 10K+ downloads on the Play Store. Razorpay payments, Firebase Auth, ads and AWS media delivery, which made playback 30% faster.",
    tags: ["Flutter", "Node.js", "Razorpay", "Firebase", "AWS"],
    links: [{ label: "Play Store", href: "https://play.google.com/store/apps/details?id=com.company.bingebit&hl=en_IN" }],
  },
  {
    title: "GroupMind",
    imgSrc: groupmind,
    description:
      "A free, open-source AI bot for WhatsApp groups. Tag it to answer from chat history, summarise what you missed, set reminders, track tasks and read PDFs and photos.",
    tags: ["TypeScript", "Gemini", "Baileys"],
    links: [
      { label: "GitHub", href: "https://github.com/bossgghere/Whatsapp-Group-Bot" },
      { label: "LinkedIn post", href: "https://lnkd.in/p/egiMtckC" },
    ],
  },
  {
    title: "AgentGrid Kitchen",
    imgSrc: agentgrid,
    description:
      "A multi-agent automation system. An orchestrator plans the work and coordinates specialist agents from a live command-line interface.",
    tags: ["TypeScript", "Multi-agent", "CLI"],
    links: [{ label: "GitHub", href: "https://github.com/bossgghere/AgentGrid-Kitchen" }],
  },
  {
    title: "Web3 Bank DApp",
    imgSrc: web3bank,
    description:
      "A personal banking DApp for sending and receiving ETH. Solidity smart contracts on a local Truffle and Ganache chain, with a Flutter front end.",
    tags: ["Solidity", "Truffle", "Ganache", "Flutter"],
    links: [
      { label: "GitHub", href: "https://github.com/bossgghere/personal-dApp-Bank" },
      { label: "LinkedIn post", href: "https://lnkd.in/p/eiCb356X" },
    ],
  },
  {
    title: "One Day Studio",
    imgSrc: onedaystudio,
    description:
      "My software agency. We build and ship scalable web and mobile products, from idea to production, fast.",
    tags: ["Agency", "Web", "Mobile", "AI"],
    links: [
      { label: "Visit site", href: "https://www.onedaystudio.in/" },
      { label: "LinkedIn post", href: "https://lnkd.in/p/dhPTnF8S" },
    ],
  },
  {
    title: "11ven",
    imgSrc: eleven,
    description:
      "A streetwear clothing brand I founded, handling everything from design to e-commerce fulfilment.",
    tags: ["Streetwear", "E-commerce"],
    links: [{ label: "Visit store", href: "https://11ven.store/" }],
  },
];

function Projects() {
  return (
    <div id="projects">
      <Reveal>
        <h1>
          Projects <strong style={{ color: "#006AFF" }}>.</strong>
        </h1>
      </Reveal>
      <div className="projectsDiv">
        {projectList.map((data, i) => (
          <DialogProjects key={data.title} {...data} revealDelay={(i % 2) * 120} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
