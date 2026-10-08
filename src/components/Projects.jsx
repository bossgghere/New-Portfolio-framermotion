import * as React from "react";
import DialogProjects from "./DialogProjects";

import algotrade from "../assets/projects/algotrade.jpg";
import skippr from "../assets/projects/skippr.jpg";
import snaplay from "../assets/projects/snaplay.jpg";
import groupmind from "../assets/projects/groupmind-bot.jpg";
import agentgrid from "../assets/projects/agentgrid-kitchen.jpg";
import web3bank from "../assets/projects/web3-bank.jpg";
import onedaystudio from "../assets/projects/onedaystudio.jpg";
import eleven from "../assets/projects/11ven.jpg";

// embed: true  -> the site is opened live inside the popup
// embed: false -> the site blocks iframes, so the popup shows the preview image instead
const projectList = [
  {
    title: "AlgoTrade",
    imgSrc: algotrade,
    src: "https://holdmycoffee.lol/",
    description:
      "AI strategy tester for Indian markets. Turns plain-English trading ideas into backtested strategies for stocks, indices and options. Python, FastAPI, LangGraph, Gemini, Supabase.",
    github: false,
    embed: true,
  },
  {
    title: "Skippr",
    imgSrc: skippr,
    src: "https://www.helloskippr.com/",
    description:
      "Community concierge app for residential societies, live on the Play Store. Resident login, service requests and an admin dashboard. React Native, Expo, Supabase, PostgreSQL, AWS.",
    github: false,
    embed: true,
  },
  {
    title: "SnapLay",
    imgSrc: snaplay,
    src: "https://play.google.com/store/apps/details?id=com.company.bingebit&hl=en_IN",
    description:
      "OTT streaming app with 10K+ downloads. Razorpay payments, Firebase Auth and AWS for media delivery. Flutter, Node.js.",
    github: false,
    embed: false,
  },
  {
    title: "GroupMind",
    imgSrc: groupmind,
    src: "https://github.com/bossgghere/Whatsapp-Group-Bot",
    description:
      "A free, open-source AI bot for WhatsApp groups. Tag it to answer from chat history, summarise what you missed, set reminders and track tasks. Gemini, Baileys, TypeScript.",
    github: "https://github.com/bossgghere/Whatsapp-Group-Bot",
    embed: false,
  },
  {
    title: "AgentGrid Kitchen",
    imgSrc: agentgrid,
    src: "https://github.com/bossgghere/AgentGrid-Kitchen",
    description:
      "A multi-agent automation system where an orchestrator coordinates specialist agents from a live CLI. TypeScript.",
    github: "https://github.com/bossgghere/AgentGrid-Kitchen",
    embed: false,
  },
  {
    title: "Web3 Bank DApp",
    imgSrc: web3bank,
    src: "https://github.com/bossgghere/personal-dApp-Bank",
    description:
      "A personal banking DApp for sending and receiving ETH. Solidity smart contracts on a local Truffle and Ganache chain, with a Flutter front end.",
    github: "https://github.com/bossgghere/personal-dApp-Bank",
    embed: false,
  },
  {
    title: "One Day Studio",
    imgSrc: onedaystudio,
    src: "https://www.onedaystudio.in/",
    description:
      "My software agency. We build and ship scalable web and mobile products, from idea to production, fast.",
    github: false,
    embed: true,
  },
  {
    title: "11ven",
    imgSrc: eleven,
    src: "https://11ven.store/",
    description:
      "A streetwear clothing brand I founded, from design to e-commerce fulfilment.",
    github: false,
    embed: true,
  },
];

function Projects() {
  return (
    <div id="projects">
      <h1>
        Projects <strong style={{ color: "#006AFF" }}>.</strong>
      </h1>
      <div className="projectsDiv">
        {projectList.map((data) => (
          <DialogProjects key={data.title} {...data} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
