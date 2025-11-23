"use client"

import { useState, useEffect } from "react"
import { Sun, Moon, Github, Linkedin, Mail, Menu, X,MapPin,Link, Download,FileText } from "lucide-react"
import Image from "next/image";

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = savedTheme === "dark"
    setIsDark(prefersDark)
    if (prefersDark) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-8">
        {/* Header */}

<header className="mb-8">
      <div className="flex items-start gap-3">
<div
  className="relative w-16 h-16 rounded-lg border-2 border-primary overflow-hidden transition-transform duration-300"
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  onTouchStart={() => setIsHovered(true)}
  onTouchEnd={() => setIsHovered(false)}
>
  <img
    src={isHovered ? "/hover-removebg.png" : "/cat_pic-removebg.png"}
    alt="Profile"
    className="w-full h-full object-cover transition-all duration-300"
  />
</div>

        <div className="flex-1 flex flex-col gap-1">
          <h1 className="text-3xl font-bold text-foreground">Yocor, Angelo T.</h1>
          <p className="text-muted-foreground">Software Engineer | Tech Enthusiast</p>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="https://linkedin.com/in/angelo-yocor-0885aa254"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary text-primary-foreground hover:opacity-80 transition-opacity"
          >
            <Linkedin size={16} />
          </a>

          <a
            href="mailto:yocorangelo13@gmail.com"
            className="p-2 rounded-full bg-primary text-primary-foreground hover:opacity-80 transition-opacity"
          >
            <Mail size={16} />
          </a>

          <a
            href="https://github.com/ycrangelo"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary text-primary-foreground hover:opacity-80 transition-opacity"
          >
            <Github size={16} />
          </a>
          <a
            href="https://drive.google.com/file/d/1QZmAQcsf_5eSzBv1tqEC-Ff2xjweUUx5/view?usp=sharing"
            className="p-2 rounded-full bg-primary text-primary-foreground hover:opacity-80 transition-opacity flex items-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText size={16} />
          </a>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-primary text-primary-foreground hover:opacity-80 transition-opacity"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-full bg-primary text-primary-foreground hover:opacity-80 transition-opacity"
            aria-label="Menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          {/* Dropdown */}
          {menuOpen && (
            <div className="absolute top-20 right-6 flex flex-col gap-2 bg-background p-3 rounded-xl shadow-lg border border-border z-50">
              <a
                href="https://linkedin.com/in/angelo-yocor-0885aa254"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary text-primary-foreground hover:opacity-80 transition-opacity flex items-center justify-center"
              >
                <Linkedin size={16} />
              </a>

              <a
                href="mailto:yocorangelo13@gmail.com"
                className="p-2 rounded-full bg-primary text-primary-foreground hover:opacity-80 transition-opacity flex items-center justify-center"
              >
                <Mail size={16} />
              </a>

              <a
                href="https://github.com/ycrangelo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary text-primary-foreground hover:opacity-80 transition-opacity flex items-center justify-center"
              >
                <Github size={16} />
              </a>
            <a
            href="https://drive.google.com/file/d/1QZmAQcsf_5eSzBv1tqEC-Ff2xjweUUx5/view?usp=sharing"
            className="p-2 rounded-full bg-primary text-primary-foreground hover:opacity-80 transition-opacity flex items-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText size={16} />
          </a>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-primary text-primary-foreground hover:opacity-80 transition-opacity flex items-center justify-center"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </div>
          )}
        </div>
      </div>
    </header>

<section className="mb-9">
  <div className="overflow-x-auto">
    <div 
      className="flex items-center justify-center"
      style={{ minHeight: '100px' }}
    >
      <img 
        src="https://ghchart.rshah.org/ycrangelo" 
        alt="ycrangelo's GitHub chart" 
        className="w-full h-auto transparent-chart"
      />
    </div>
  </div>
</section>

        {/* About */}
        {/* <section className="mb-8">
          <h2 className="text-xl font-bold text-primary mb-2">About</h2>
          <p className="text-foreground leading-relaxed mb-2">
            I'm a passionate developer with 5+ years of experience building web applications. I specialize in React,
            Node.js, and modern web technologies. I love solving complex problems and creating elegant solutions.
          </p>
          <p className="text-foreground leading-relaxed">
            When I'm not coding, you can find me hiking in the mountains, reading technical books, or contributing to
            open source projects.
          </p>
        </section> */}
        {/* educ */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-primary mb-2">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-base font-semibold text-foreground mb-1">Bachelor of Science in Computer Science</h3>
              <p className="text-muted-foreground mb-1">Pamantasan ng Cabuyao 2021 - 2025</p>
              <p className="text-foreground leading-relaxed">
                • Awarded 3rd Place at Software Exposition 2025
              </p>
            </div>
          </div>
        </section>

        {/* Experience */}
<section className="mb-8">
  <h2 className="text-xl font-bold text-primary mb-2">Experience</h2>
  <div className="space-y-6">


        {/* Non-Dental Technician */}
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h3 className="text-base font-semibold text-foreground mb-1">
          Non-Dental Technician
        </h3>
        <p className="text-muted-foreground mb-1">
         Empress Dental Laboratories, Inc.  
        </p>
        <p className="text-foreground leading-relaxed">
          • Operated and optimized CAD/CAM and CNC milling systems for precise digital-to-physical production.
        </p>
        <p className="text-foreground leading-relaxed">
          • Managed end-to-end digital workflows, including file preparation, nesting, toolpath validation, and quality compliance.
        </p>
        <p className="text-foreground leading-relaxed">
          •Ensured system efficiency through monitoring, troubleshooting, and proper material and data handling
        </p>
      </div>
      <p className="text-sm text-muted-foreground mt-2 sm:mt-0 sm:text-right whitespace-nowrap">
        October – Present
      </p>
    </div>

    {/* Web Developer Intern */}
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h3 className="text-base font-semibold text-foreground mb-1">
          Web Developer Intern
        </h3>
        <p className="text-muted-foreground mb-1">
          Texwipe Asia Advanced Molding Company, Inc.
        </p>
        <p className="text-foreground leading-relaxed">
          • Developed web modules using PHP, MySQL, Flask, HTML, CSS, AJAX, and jQuery,
          integrating backend services with databases.
        </p>
        <p className="text-foreground leading-relaxed">
          • Collaborated with cross-functional teams for testing and feature improvements,
          and assisted in creating 3D warehouse, office, and machine models using Unity.
        </p>
      </div>
      <p className="text-sm text-muted-foreground mt-2 sm:mt-0 sm:text-right whitespace-nowrap">
        February – April 2025
      </p>
    </div>

    {/* Computer Science Student */}
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h3 className="text-base font-semibold text-foreground mb-1">
          Computer Science Student
        </h3>
        <p className="text-muted-foreground mb-1">Pamantasan ng Cabuyao</p>
        <p className="text-foreground leading-relaxed">
          • Contributed to the development of an AI-powered first aid chatbot thesis through AI knowledge management,
          testing, and diagram creation.
        </p>
        <p className="text-foreground leading-relaxed">
          • Awarded 3rd Place at Software Exposition 2025
        </p>
      </div>
      <p className="text-sm text-muted-foreground mt-2 sm:mt-0 sm:text-right whitespace-nowrap">
        2024 – 2025
      </p>
    </div>

  </div>
</section>



        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-primary mb-2">Projects</h2>
          <div className="space-y-4">
            <div>
              <a
                href="https://github.com/ycrangelo/lifeline-angel.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold text-foreground hover:text-primary transition-colors inline-flex cursor-pointer items-center"
              >
                Lifeline-Angel — First Aid Chatbot 
                <Link size={16} className=" ml-2 text-primary opacity-80 hover:opacity-100 transition-opacity" />
              </a>
              <p className="text-muted-foreground mb-1">TypeScript, Python, Next.js, FastAPI, TensorFlow, Pandas, Numpy, NLTK,
AWS, DigitalOcean, Tailwind, Shadcn</p>
              <p className="text-foreground leading-relaxed">
                • Developed AI-powered chatbot with CNN for wound classification and FNN for decisionmaking; provided real-time first aid guidance.
              </p>
              <p className="text-foreground leading-relaxed">
                • Contributed to creating diagrams, testing the app, and managing AI knowledge.
              </p>
              <p className="text-foreground leading-relaxed">
                • Awarded 3rd Place at Software Exposition 2025 (Pamantasan ng Cabuyao)
              </p>
            </div>
            <div>
              <a
                href="https://github.com/ycrangelo/GovChain.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold text-foreground hover:text-primary transition-colors inline-flex cursor-pointer items-center"
              >
                GovChain
                <Link size={16} className=" ml-2 text-primary opacity-80 hover:opacity-100 transition-opacity" />
              </a>
              <p className="text-muted-foreground mb-1">Next.js, Tailwind CSS, Node.js, MongoDB, Ethers.js, Solidity, Hardhat,
OpenZeppelin, Infura, IPFS, JWT</p>
              <p className="text-foreground leading-relaxed">
                 • A decentralized Web3 platform enabling transparent government
                projects through ERC-721 NFTs and ERC-20 governance tokens.
              </p>
              <p className="text-foreground leading-relaxed">
                 • Implemented wallet integration (MetaMask), decentralized storage (IPFS), and an onchain voting mechanism for project approvals, ensuring secure and immutable decisions.
              </p>
            </div>
            <div>
              <a
                href="https://github.com/ycrangelo/Feelify.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold text-foreground hover:text-primary transition-colors inline-flex cursor-pointer items-center"
              >
                Feelify
                <Link size={16} className=" ml-2 text-primary opacity-80 hover:opacity-100 transition-opacity" />
              </a>
              <p className="text-muted-foreground mb-1">Node.js, Express.js, React Native (Expo), Google Gemini API, Spotify Web API, mongoDB</p>
              <p className="text-foreground leading-relaxed">
• Built a mobile app that generates personalized Spotify playlists based on the user’s detected emotion, using Google Gemini AI for sentiment analysis and the Spotify Web API for music recommendations.              </p>
            </div>
            <div>
              <a
                href="https://github.com/ycrangelo/IAM-Style-Access-Control-System.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold text-foreground hover:text-primary transition-colors inline-flex cursor-pointer items-center"
              >
                IAM Access Control Prototype
                <Link size={16} className=" ml-2 text-primary opacity-80 hover:opacity-100 transition-opacity" />
              </a>
              <p className="text-muted-foreground mb-1">Node.js, Express.js, SQLite, JWT, React, Tailwind</p>
              <p className="text-foreground leading-relaxed">
                • Designed and developed a Fullstack Identity and Access Management (IAM) system with user, group, role, and permission management for fine-grained access control.
              </p>
            </div>
            <div>
              <a
                href="https://github.com/ycrangelo/EIS.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold text-foreground hover:text-primary transition-colors inline-flex cursor-pointer items-center"
              >
                Employee Information System
                <Link size={16} className=" ml-2 text-primary opacity-80 hover:opacity-100 transition-opacity" />
              </a>
              <p className="text-muted-foreground mb-1"> Next.js, MongoDB, Prisma, NextUI</p>
              <p className="text-foreground leading-relaxed">
                • Built an admin dashboard to manage employees and departments, assign roles, and batch upload via CSV.
              </p>
            </div>
            <div>
              <a
                href="https://github.com/ycrangelo/juntos-final-na-talaga-react-native-frontend.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold text-foreground hover:text-primary transition-colors inline-flex cursor-pointer items-center"
              >
                Juntos — Social Media App
                <Link size={16} className=" ml-2 text-primary opacity-80 hover:opacity-100 transition-opacity" />
              </a>
              <p className="text-muted-foreground mb-1"> React Native Expo, Express.js, Node.js, MongoDB, AWS S3</p>
              <p className="text-foreground leading-relaxed">
                • Created a mobile social media app allowing users to upload images, text, comment, save, and like posts
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-primary mb-2">Skills</h2>
          <div className="space-y-3">
            <div>
              <h3 className="text-base font-semibold text-foreground mb-1">Languages: </h3>
              <p className="text-foreground leading-relaxed">JavaScript, Java, SQL TypeScript, Solidity</p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground mb-1">Frameworks & Libraries: </h3>
              <p className="text-foreground leading-relaxed">Hardhat, React.js, Next.js, Express.js, Springboot, Tailwind, Node.js, HeroUI</p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground mb-1">Databases, Tools & Platforms: </h3>
              <p className="text-foreground leading-relaxed">Git, GitHub, AWS, Pinata, Vercel, PostgreSQL, MongoDB, Prisma</p>
            </div>
          </div>
        </section>

      </div>
<footer className="mt-8 p-4 text-center">
  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm flex-wrap">
    {/* Location */}
    <div className="flex items-center gap-1">
      <MapPin size={14} className="text-muted-foreground"/>
      <span className="text-muted-foreground">Cabuyao, Laguna</span>
    </div>

    {/* Divider */}
    <span className="hidden sm:inline text-muted-foreground">|</span>

    {/* Copyright */}
    <p className="text-muted-foreground">© 2025 Yocor Angelo. All rights reserved.</p>
  </div>
</footer>
    </main>
  )
}
