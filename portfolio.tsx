"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Github,
  Facebook,
  Instagram,
  Guitar,
  Code,
  Zap,
  MapPin,
  Calendar,
  Target,
  ArrowDown,
  ExternalLink,
  Sparkles,
  Terminal,
  Trophy,
  BookOpen,
  Rocket,
  Heart,
  Eye,
  Coffee,
  Folder,
  Star,
  GitFork,
} from "lucide-react"
import { useState, useEffect } from "react"

// Easy to edit project interface
interface Project {
  id: number
  name: string
  description: string
  mainLanguage: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  status: "completed" | "in-progress" | "planned"
  stars?: number
  forks?: number
}

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [typedText, setTypedText] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentTime, setCurrentTime] = useState(new Date())

  const words = ["Developer", "Creator", "Student", "Dreamer", "Coder", "Builder", "Innovator"]
  const currentWord = words[currentWordIndex]

  // Skills data with progress
  const skills = [
    { name: "JavaScript", level: 85, category: "Frontend" },
    { name: "React", level: 80, category: "Frontend" },
    { name: "HTML/CSS", level: 90, category: "Frontend" },
    { name: "Node.js", level: 70, category: "Backend" },
    { name: "Python", level: 75, category: "Backend" },
    { name: "Git", level: 85, category: "Tools" },
  ]

  // ========================================
  // 🎯 EASY TO EDIT PROJECTS SECTION
  // ========================================
  // Just modify the projects below to customize your portfolio!

  const projects: Project[] = [
    {
      id: 1,
      name: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features smooth animations, dark theme, and mobile-first design.",
      mainLanguage: "TypeScript",
      techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
      githubUrl: "https://github.com/yuriamparado/portfolio",
      liveUrl: "https://yuri-portfolio.vercel.app",
      status: "completed",
      stars: 12,
      forks: 3,
    },
    {
      id: 2,
      name: "Music Player App",
      description:
        "A web-based music player with playlist management, audio visualization, and modern UI. Supports multiple audio formats and has a beautiful interface.",
      mainLanguage: "JavaScript",
      techStack: ["React", "Web Audio API", "CSS3", "JavaScript", "Local Storage"],
      githubUrl: "https://github.com/yuriamparado/music-player",
      liveUrl: "https://music-player-demo.vercel.app",
      status: "completed",
      stars: 8,
      forks: 2,
    },
    {
      id: 3,
      name: "Task Manager",
      description:
        "A productivity application with real-time collaboration features, drag-and-drop interface, and team management capabilities.",
      mainLanguage: "Vue",
      techStack: ["Vue.js", "Firebase", "Vuetify", "PWA", "Real-time DB"],
      githubUrl: "https://github.com/yuriamparado/task-manager",
      status: "in-progress",
      stars: 5,
      forks: 1,
    },
  ]

  // ========================================
  // END OF EASY EDIT SECTION
  // ========================================

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      setScrollY(scrolled)
      setScrollProgress((scrolled / maxScroll) * 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  // Typewriter effect
  useEffect(() => {
    let timeout: NodeJS.Timeout
    if (typedText.length < currentWord.length) {
      timeout = setTimeout(() => {
        setTypedText(currentWord.slice(0, typedText.length + 1))
      }, 150)
    } else {
      timeout = setTimeout(() => {
        setTypedText("")
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
      }, 2000)
    }
    return () => clearTimeout(timeout)
  }, [typedText, currentWord, currentWordIndex, words])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      JavaScript: "bg-yellow-400",
      TypeScript: "bg-blue-400",
      Python: "bg-green-400",
      Java: "bg-orange-400",
      React: "bg-cyan-400",
      Vue: "bg-green-500",
      HTML: "bg-orange-500",
      CSS: "bg-blue-500",
      PHP: "bg-purple-400",
      "C++": "bg-blue-600",
      "C#": "bg-purple-600",
      Go: "bg-cyan-600",
      Rust: "bg-orange-600",
      default: "bg-gray-400",
    }
    return colors[language] || colors.default
  }

  const getStatusInfo = (status: Project["status"]) => {
    switch (status) {
      case "completed":
        return { label: "Completed", color: "bg-green-400", textColor: "text-green-400" }
      case "in-progress":
        return { label: "In Progress", color: "bg-yellow-400", textColor: "text-yellow-400" }
      case "planned":
        return { label: "Planned", color: "bg-gray-400", textColor: "text-gray-400" }
      default:
        return { label: "Unknown", color: "bg-gray-400", textColor: "text-gray-400" }
    }
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-900 z-50">
        <div
          className="h-full bg-gradient-to-r from-white via-gray-300 to-white transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* System Status Bar */}
      <div className="fixed top-1 right-4 z-50 font-mono text-xs text-gray-500 flex items-center gap-4">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span>ONLINE</span>
        </div>
        <div>{currentTime.toLocaleTimeString()}</div>
        <div className="flex items-center gap-1">
          <Coffee className="w-3 h-3" />
          <span>CODING</span>
        </div>
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
            animation: "grid-move 20s linear infinite",
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          scrollY > 50 ? "bg-black/90 backdrop-blur-xl border-b border-gray-800" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-white font-mono text-xl font-bold group cursor-pointer">
              <span className="inline-block transition-transform duration-300 group-hover:scale-110">{"<YE />"}</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Projects", "Goals", "Contact"].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-400 hover:text-white transition-all duration-300 relative group font-mono text-sm uppercase tracking-wider"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10">
                    {`0${index + 1}.`} {item}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-500" />
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2 hover:bg-gray-800 rounded-lg transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 top-3" : "top-1"
                  }`}
                />
                <span
                  className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 top-3 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 top-3" : "top-5"
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/95 backdrop-blur-xl border border-gray-800 rounded-lg mt-2 p-6 animate-in slide-in-from-top duration-300">
              {["Home", "About", "Skills", "Projects", "Goals", "Contact"].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-gray-400 hover:text-white py-3 transition-colors duration-300 font-mono border-b border-gray-800 last:border-b-0"
                >
                  <span className="text-gray-600">{`0${index + 1}.`}</span> {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <div className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-20">
          <div className="container mx-auto px-4 text-center">
            <div className="animate-in fade-in slide-in-from-bottom duration-1000">
              {/* Terminal-style intro */}
              <div className="font-mono text-sm text-gray-400 mb-8 animate-in slide-in-from-left duration-1000 delay-300">
                <span className="text-green-400">yuri@portfolio:~$</span> whoami
              </div>

              <div className="relative mb-12">
                <div className="w-48 h-48 border-2 border-gray-700 rounded-full mx-auto mb-8 flex items-center justify-center relative overflow-hidden group bg-gradient-to-br from-gray-900 to-black">
                  <div className="absolute inset-0 border-2 border-white rounded-full animate-spin-slow opacity-20" />
                  <span className="text-white text-6xl font-mono font-bold relative z-10 group-hover:scale-110 transition-transform duration-500">
                    YE
                  </span>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-pulse" />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-white rounded-full animate-bounce delay-1000" />
                </div>
              </div>

              <h1 className="text-7xl md:text-8xl font-bold mb-6 animate-in slide-in-from-left duration-1000 delay-500">
                <span className="font-mono">YURI</span>
                <br />
                <span className="text-4xl md:text-5xl text-gray-400 font-light">AMPARADO EGIPTO</span>
              </h1>

              <div className="text-2xl md:text-3xl font-mono mb-12 h-12 flex items-center justify-center">
                <span className="text-gray-400">I am a </span>
                <span className="text-white ml-2 min-w-[200px] text-left">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-in slide-in-from-right duration-1000 delay-700">
                <Badge className="text-lg px-6 py-3 bg-white text-black font-mono hover:bg-gray-200 transition-colors duration-300 cursor-default">
                  <Calendar className="w-4 h-4 mr-2" />
                  AGE: 16
                </Badge>
                <Badge className="text-lg px-6 py-3 bg-transparent border-2 border-white text-white font-mono hover:bg-white hover:text-black transition-all duration-300 cursor-default">
                  <Target className="w-4 h-4 mr-2" />
                  FUTURE: SOFTWARE ENGINEER
                </Badge>
                <Badge className="text-lg px-6 py-3 bg-gray-800 text-white font-mono hover:bg-gray-700 transition-colors duration-300 cursor-default">
                  <MapPin className="w-4 h-4 mr-2" />
                  STATUS: STUDENT
                </Badge>
              </div>

              <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-in fade-in duration-1000 delay-900 font-mono">
                {"> Building digital experiences with passion and precision"}
              </p>

              {/* Only Explore Button - Centered */}
              <div className="flex justify-center mb-12">
                <Button
                  onClick={() => scrollToSection("about")}
                  className="bg-white text-black hover:bg-gray-200 font-mono uppercase tracking-wider px-8 py-3 transition-all duration-300 hover:scale-105 group"
                >
                  <Eye className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Explore
                </Button>
              </div>

              <button
                onClick={() => scrollToSection("about")}
                className="animate-bounce text-white hover:text-gray-400 transition-colors duration-300 group"
              >
                <ArrowDown className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 border-t border-gray-800">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <div className="font-mono text-sm text-gray-400 mb-4">
                <span className="text-green-400">yuri@portfolio:~$</span> cat about.txt
              </div>
              <h2 className="text-5xl font-bold mb-4 font-mono">ABOUT_ME</h2>
              <div className="w-32 h-0.5 bg-white mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Card className="border-2 border-gray-800 bg-black hover:border-gray-600 transition-all duration-500 hover:scale-105 group">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Terminal className="w-6 h-6 mr-3 text-green-400" />
                    <h3 className="text-2xl font-mono font-bold">PROFILE.EXE</h3>
                  </div>
                  <div className="space-y-4 font-mono text-sm">
                    <div className="flex">
                      <span className="text-gray-400 w-20">Name:</span>
                      <span className="text-white">Yuri Amparado Egipto</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-400 w-20">Age:</span>
                      <span className="text-white">16 years</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-400 w-20">Role:</span>
                      <span className="text-white">Student Developer</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-400 w-20">Goal:</span>
                      <span className="text-white">Software Engineer</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-400 w-20">Status:</span>
                      <span className="text-green-400 animate-pulse">● Online</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-400 w-20">Projects:</span>
                      <span className="text-white">{projects.length} active</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                {[
                  {
                    icon: Rocket,
                    title: "MISSION",
                    description: "Building innovative solutions that impact lives positively",
                    detail: "Focused on creating meaningful digital experiences",
                  },
                  {
                    icon: BookOpen,
                    title: "LEARNING",
                    description: "Constantly expanding knowledge in modern technologies",
                    detail: "Currently mastering React, Node.js, and Python",
                  },
                  {
                    icon: Heart,
                    title: "PASSION",
                    description: "Driven by curiosity and love for problem-solving",
                    detail: "Every challenge is an opportunity to grow",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className="border-l-2 border-gray-800 pl-6 hover:border-white transition-colors duration-300 group cursor-pointer"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-center mb-2">
                      <item.icon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-white transition-colors duration-300" />
                      <h4 className="text-lg font-mono font-bold group-hover:text-white transition-colors duration-300">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-gray-400 font-mono text-sm group-hover:text-gray-300 transition-colors duration-300 mb-2">
                      {item.description}
                    </p>
                    <p className="text-gray-500 font-mono text-xs group-hover:text-gray-400 transition-colors duration-300">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 border-t border-gray-800">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <div className="font-mono text-sm text-gray-400 mb-4">
                <span className="text-green-400">yuri@portfolio:~$</span> ls -la skills/
              </div>
              <h2 className="text-5xl font-bold mb-4 font-mono">MY_SKILLS</h2>
              <div className="w-32 h-0.5 bg-white mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Technical Skills */}
              <Card className="border-2 border-gray-800 bg-black hover:border-gray-600 transition-all duration-500">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Code className="w-6 h-6 mr-3 text-green-400" />
                    <h3 className="text-2xl font-mono font-bold">TECHNICAL_SKILLS</h3>
                  </div>
                  <div className="space-y-6">
                    {skills.map((skill, index) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-mono text-sm text-white">{skill.name}</span>
                          <span className="font-mono text-xs text-gray-400">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2 bg-gray-800">
                          <div
                            className="h-full bg-white transition-all duration-1000 ease-out"
                            style={{
                              width: `${skill.level}%`,
                              animationDelay: `${index * 200}ms`,
                            }}
                          />
                        </Progress>
                        <span className="font-mono text-xs text-gray-500">{skill.category}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Hobbies */}
              <div className="space-y-6">
                {[
                  {
                    icon: Guitar,
                    title: "GUITAR",
                    description: "Creating melodies and expressing emotions through music",
                    details: ["Acoustic Guitar", "Music Theory", "Composition"],
                    stats: "3+ years experience",
                  },
                  {
                    icon: Zap,
                    title: "BASKETBALL",
                    description: "Staying active and building teamwork skills",
                    details: ["Team Player", "Strategy", "Discipline"],
                    stats: "School team member",
                  },
                ].map((hobby, index) => (
                  <Card
                    key={hobby.title}
                    className="border-2 border-gray-800 bg-black hover:border-gray-600 transition-all duration-500 hover:scale-105 group"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <hobby.icon className="w-6 h-6 mr-3 text-gray-400 group-hover:text-white transition-colors duration-300" />
                        <h4 className="text-xl font-mono font-bold group-hover:text-white transition-colors duration-300">
                          {hobby.title}
                        </h4>
                      </div>
                      <p className="text-gray-400 font-mono text-sm mb-4 group-hover:text-gray-300 transition-colors duration-300">
                        {hobby.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {hobby.details.map((detail) => (
                          <span
                            key={detail}
                            className="text-xs font-mono text-gray-500 border border-gray-800 rounded px-2 py-1 group-hover:border-gray-600 group-hover:text-gray-400 transition-all duration-300"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs font-mono text-gray-600 group-hover:text-gray-500 transition-colors duration-300">
                        {hobby.stats}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 border-t border-gray-800">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <div className="font-mono text-sm text-gray-400 mb-4">
                <span className="text-green-400">yuri@portfolio:~$</span> ls -la projects/
              </div>
              <h2 className="text-5xl font-bold mb-4 font-mono">MY_PROJECTS</h2>
              <div className="w-32 h-0.5 bg-white mx-auto mb-6" />
              <p className="text-gray-400 font-mono text-sm">// Easy to customize in the code</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => {
                const statusInfo = getStatusInfo(project.status)
                return (
                  <Card
                    key={project.id}
                    className="border-2 border-gray-800 bg-black hover:border-gray-600 transition-all duration-500 hover:scale-105 hover:-translate-y-2 group"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <CardContent className="p-6">
                      {/* Header with status */}
                      <div className="flex items-center justify-between mb-4">
                        <Folder className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors duration-300" />
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded-full ${statusInfo.color} animate-pulse`} />
                          <span className={`text-xs font-mono ${statusInfo.textColor}`}>{statusInfo.label}</span>
                        </div>
                      </div>

                      {/* Project name */}
                      <h3 className="text-xl font-mono font-bold mb-3 group-hover:text-white transition-colors duration-300">
                        {project.name.toUpperCase()}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 font-mono text-sm mb-4 group-hover:text-gray-300 transition-colors duration-300 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Main language indicator */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className={`w-3 h-3 rounded-full ${getLanguageColor(project.mainLanguage)}`} />
                        <span className="text-xs font-mono text-gray-500">{project.mainLanguage}</span>
                      </div>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono text-gray-500 border border-gray-800 rounded px-2 py-1 group-hover:border-gray-600 group-hover:text-gray-400 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="text-xs font-mono text-gray-600">+{project.techStack.length - 4} more</span>
                        )}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4 text-xs font-mono text-gray-500">
                          {project.stars !== undefined && (
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3" />
                              <span>{project.stars}</span>
                            </div>
                          )}
                          {project.forks !== undefined && (
                            <div className="flex items-center gap-1">
                              <GitFork className="w-3 h-3" />
                              <span>{project.forks}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex gap-2">
                        {project.githubUrl && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-gray-800 text-gray-400 hover:border-white hover:text-white font-mono text-xs flex-1"
                            asChild
                          >
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-3 h-3 mr-1" />
                              Code
                            </a>
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button
                            size="sm"
                            className="bg-white text-black hover:bg-gray-200 font-mono text-xs flex-1"
                            asChild
                          >
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-3 h-3 mr-1" />
                              Live
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
        {/* Goals Section */}
        <section id="goals" className="py-20 border-t border-gray-800">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
              <div className="font-mono text-sm text-gray-400 mb-4">
                <span className="text-green-400">yuri@portfolio:~$</span> cat roadmap.md
              </div>
              <h2 className="text-5xl font-bold mb-4 font-mono">ROADMAP_2024</h2>
              <div className="w-32 h-0.5 bg-white mx-auto" />
            </div>

            <Card className="border-2 border-gray-800 bg-black overflow-hidden relative group hover:border-gray-600 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <CardContent className="p-12 text-center relative z-10">
                <Target className="w-16 h-16 mx-auto mb-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
                <h3 className="text-3xl font-mono font-bold mb-6">MISSION_STATEMENT</h3>
                <p className="text-xl leading-relaxed mb-8 font-mono text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {
                    "> To become a skilled Software Engineer who creates innovative solutions that make a positive impact on people's lives."
                  }
                </p>

                <div className="grid md:grid-cols-3 gap-6 text-center">
                  {[
                    { year: "2024", label: "START", icon: Sparkles, desc: "Begin journey" },
                    { year: "2028", label: "GRADUATE", icon: Trophy, desc: "Complete studies" },
                    { year: "∞", label: "IMPACT", icon: Rocket, desc: "Change the world" },
                  ].map((milestone, index) => (
                    <div
                      key={milestone.year}
                      className="border border-gray-800 rounded-lg p-6 hover:border-white transition-all duration-300 group/item cursor-pointer"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <milestone.icon className="w-8 h-8 mx-auto mb-3 text-gray-400 group-hover/item:text-white transition-colors duration-300" />
                      <div className="text-2xl font-mono font-bold text-white mb-2">{milestone.year}</div>
                      <div className="text-sm font-mono text-gray-400 group-hover/item:text-gray-300 transition-colors duration-300 mb-1">
                        {milestone.label}
                      </div>
                      <div className="text-xs font-mono text-gray-600 group-hover/item:text-gray-500 transition-colors duration-300">
                        {milestone.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section - Social Links Only */}
        <section id="contact" className="py-20 border-t border-gray-800">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
              <div className="font-mono text-sm text-gray-400 mb-4">
                <span className="text-green-400">yuri@portfolio:~$</span> ./connect.sh
              </div>
              <h2 className="text-5xl font-bold mb-4 font-mono">CONNECT_WITH_ME</h2>
              <div className="w-32 h-0.5 bg-white mx-auto mb-6" />
              <p className="text-gray-400 text-lg font-mono">{"// Find me on these platforms"}</p>
            </div>

            <div className="flex justify-center gap-6 flex-wrap mb-12">
              {[
                {
                  icon: Github,
                  label: "GITHUB",
                  href: "https://github.com/yuriamparado",
                  description: "View my code",
                  stats: `${projects.length} repositories`,
                },
                {
                  icon: Facebook,
                  label: "FACEBOOK",
                  href: "https://facebook.com/yuriamparado",
                  description: "Connect socially",
                  stats: "Personal updates",
                },
                {
                  icon: Instagram,
                  label: "INSTAGRAM",
                  href: "https://instagram.com/yuriamparado",
                  description: "See my journey",
                  stats: "Behind the scenes",
                },
              ].map((social, index) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="lg"
                  className={`flex flex-col items-center gap-2 border-2 border-gray-800 bg-black text-white hover:border-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 font-mono p-6 h-auto group animate-in slide-in-from-bottom duration-1000`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-bold">{social.label}</span>
                    <span className="text-xs text-gray-400 group-hover:text-gray-600">{social.description}</span>
                    <span className="text-xs text-gray-600 group-hover:text-gray-700">{social.stats}</span>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-gray-800">
          <div className="container mx-auto px-4 text-center">
            <div className="font-mono text-sm text-gray-400 mb-4">
              <span className="text-green-400">yuri@portfolio:~$</span> echo "Thank you for visiting!"
            </div>
            <p className="text-gray-400 mb-2 font-mono">© 2024 YURI_AMPARADO_EGIPTO</p>
            <p className="text-gray-600 text-sm font-mono">{"// Building the future, one line of code at a time"}</p>
            <div className="mt-4 flex justify-center items-center gap-4 text-xs font-mono text-gray-600">
              <span>Made with ❤️ and lots of ☕</span>
              <span>•</span>
              <span>Fully customizable</span>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
      `}</style>
    </div>
  )
}
