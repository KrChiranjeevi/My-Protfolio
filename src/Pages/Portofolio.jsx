import React, { useEffect, useState, useCallback } from "react";

import { supabase } from "../supabase"; 

import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import Certificate from "../components/Certificate";
import { Code, Award, Boxes } from "lucide-react";


const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="
      px-3 py-1.5
      text-slate-300 
      hover:text-white 
      text-sm 
      font-medium 
      transition-all 
      duration-300 
      ease-in-out
      flex 
      items-center 
      gap-2
      bg-white/5 
      hover:bg-white/10
      rounded-md
      border 
      border-white/10
      hover:border-white/20
      backdrop-blur-sm
      group
      relative
      overflow-hidden
    "
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`
          transition-transform 
          duration-300 
          ${isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"}
        `}
      >
        <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
  </button>
);


function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

// techStacks tetap sama
const techStacks = [
  { icon: "html.svg", language: "HTML" },
  { icon: "css.svg", language: "CSS" },
  { icon: "javascript.svg", language: "JavaScript" },
  { icon: "tailwind.svg", language: "Tailwind CSS" },
  { icon: "reactjs.svg", language: "ReactJS" },
  { icon: "vite.svg", language: "Vite" },
  { icon: "nodejs.svg", language: "Node JS" },
  { icon: "bootstrap.svg", language: "Bootstrap" },
  { icon: "firebase.svg", language: "Firebase" },
  { icon: "MUI.svg", language: "Material UI" },
  // { icon: "vercel.svg", language: "Vercel" },
  // { icon: "SweetAlert.svg", language: "SweetAlert2" },
];

const localCertificates = [
  { id: "cert-23", Img: "/Screenshot 2026-03-11 014543.png" },
  { id: "cert-22", Img: "/Screenshot 2026-03-11 014507.png" },
  { id: "cert-21", Img: "/Screenshot 2026-03-11 013820.png" },
  { id: "cert-20", Img: "/1771397745826.jpg" },
  { id: "cert-19", Img: "/1757197554720.jpg" },
  { id: "cert-18", Img: "/1757197554562.jpg" },
  { id: "cert-17", Img: "/1757197554536.jpg" },
  { id: "cert-16", Img: "/1757197554529.jpg" },
  { id: "cert-15", Img: "/1757192559400.jpg" },
  { id: "cert-14", Img: "/1757192558290.jpg" },
  { id: "cert-13", Img: "/1757192558190.jpg" },
  { id: "cert-12", Img: "/1757036412767.jpg" },
  { id: "cert-11", Img: "/1757035682925.jpg" },
  { id: "cert-10", Img: "/1757035682147.jpg" },
  { id: "cert-9", Img: "/1736859230381.jpg" },
  { id: "cert-8", Img: "/1736859229340.jpg" },
  { id: "cert-7", Img: "/1736859229135.jpg" },
  { id: "cert-6", Img: "/1719996574752.jpg" },
  { id: "cert-5", Img: "/1719847468927.jpg" },
  { id: "cert-4", Img: "/1714314453074.jpg" },
  { id: "cert-3", Img: "/1705235194684.jpg" }
];

const localProjects = [
  { 
    id: "proj-10", 
    Title: "InvestAgent AI", 
    Description: "An intelligent, full-stack web application built on Next.js 14 App Router and LangChain.js that performs automated AI investment research.", 
    Img: "/project_investagent.png", 
    Link: "https://invest-agent-ai.vercel.app/",
    Github: "https://github.com/KrChiranjeevi/InvestAgent-AI",
    Features: [
      "Automated AI investment analysis and research generation.",
      "Built with Next.js 14 App Router for optimal performance.",
      "Integrates LangChain.js for advanced language model workflows.",
      "Interactive UI for querying and displaying financial data.",
      "Full-stack implementation with seamless API integration."
    ],
    TechStack: ["Next.js", "React", "LangChain", "Tailwind CSS", "TypeScript"]
  },
  { 
    id: "proj-9", 
    Title: "Internship-TaxPal", 
    Description: "A comprehensive financial management and tax estimation tool designed to simplify accounting for freelancers and small businesses.", 
    Img: "/project_taxpal.png", 
    Link: "https://intership-tax-pal-zgld.vercel.app/",
    Github: "https://github.com/KrChiranjeevi/Intership-TaxPal",
    Features: [
      "Real-time expense tracking and categorization with dynamic visual charts.",
      "Automated tax estimation algorithms based on current financial data.",
      "Premium glassmorphism dashboard with smooth GSAP animations and transitions.",
      "Functional transaction history with filtering and search capabilities.",
      "Responsive side-panel navigation and budget management tools."
    ],
    TechStack: ["TypeScript", "ReactJS", "GSAP", "Chart.js", "Tailwind CSS", "Framer Motion"]
  },
  { 
    id: "proj-8", 
    Title: "E-Commerce-Store", 
    Description: "A modern, high-performance shopping platform featuring a sleek UI, dynamic product filtering, and a seamless checkout experience.", 
    Img: "/project_ecommerce.png", 
    Link: "https://e-commerce-iota-lilac-17.vercel.app/",
    Github: "https://github.com/KrChiranjeevi/e-commerce",
    Features: [
      "Dynamic product catalog with advanced filtering and search capabilities by category and price.",
      "Responsive shopping cart system with real-time state management using Redux.",
      "Interactive product previews with glassmorphism effects and hover animations.",
      "Persistent user sessions with secure login and profile management.",
      "Optimized performance using Vite and lazy-loading for heavy assets."
    ],
    TechStack: ["JavaScript", "ReactJS", "Redux", "Tailwind CSS", "Vite", "Axios"]
  },
  { 
    id: "proj-7", 
    Title: "Weather-Insight", 
    Description: "A real-time weather forecasting application providing detailed meteorological data with a beautiful, intuitive interface.", 
    Img: "/project_weather.png", 
    Link: "https://github.com/KrChiranjeevi/Weather-Information",
    Github: "https://github.com/KrChiranjeevi/Weather-Information",
    Features: [
      "Live weather updates using OpenWeatherMap API integration for global city search.",
      "Detailed 5-day forecast with humidity, wind speed, and UV index tracking.",
      "Dynamic background changes and thematic icons based on current weather conditions.",
      "Location-based weather detection for instant local forecasting.",
      "Sleek and minimalist glassmorphism interface for superior readability."
    ],
    TechStack: ["JavaScript", "ReactJS", "API Integration", "Tailwind CSS", "Lucide React"]
  },
  { 
    id: "proj-6", 
    Title: "Soil-Pollution-website", 
    Description: "Environmental website front page designed to highlight soil pollution and conservation using HTML and CSS.", 
    Img: "/project_soil_pollution_1773175628332.png", 
    Link: "https://github.com/KrChiranjeevi/Soil-Pollution-website-Front-Page",
    Features: [
      "Presents a visually engaging, responsive front page layout focused on environmental themes.",
      "Highlights key facts and figures regarding soil pollution to educate visitors.",
      "Utilizes semantic HTML structure and custom CSS styling for cross-browser compatibility."
    ],
    TechStack: ["HTML", "CSS", "Responsive Design"]
  },
  { 
    id: "proj-5", 
    Title: "Chiranjeevi-Portfolio", 
    Description: "A sleek, premium dark-mode developer portfolio tailored to showcase my skills and projects.", 
    Img: "/project_portfolio_1773175644346.png", 
    Link: "https://github.com/KrChiranjeevi/Chiranjeevi-Portfolio",
    Features: [
      "Features a premium modern aesthetic utilizing dark themes, Lottie animations, and glassmorphism.",
      "Showcases projects and certifications with interactive tabs, smooth scrolling, and hover effects.",
      "Integrates a dynamic Contact Form connected directly to an email inbox via Formspree."
    ],
    TechStack: ["ReactJS", "Vite", "Tailwind CSS", "Framer Motion", "Lottie-React"]
  },
  { 
    id: "proj-4", 
    Title: "JAVA-Dice-Game-Simulation", 
    Description: "A modular Dice Game Simulation demonstrating clean Object-Oriented Programming (OOP) design and modular logic.", 
    Img: "/project_dice_game_1773175661178.png", 
    Link: "https://github.com/KrChiranjeevi/JAVA-Dice-Game-Simulation-",
    Features: [
      "Constructed using multi-class architecture including Dice, Player, Game-Engine, Executor, and UI.",
      "Demonstrates clean OOP principles and modular game logic.",
      "Implements a Random Number Generator (RNG) for simulating real-world dice rolls.",
      "Provides a Command Line Interface (CLI) and robust structure for game interaction."
    ],
    TechStack: ["Java", "OOP", "RNG", "Multi-Class Architecture"]
  },
  { 
    id: "proj-3", 
    Title: "Spotify-Clone", 
    Description: "Developed a Spotify-style music streaming web application using HTML, CSS, and JavaScript to replicate core UI and playback features.", 
    Img: "/project_spotify_1773175680762.png", 
    Link: "https://github.com/KrChiranjeevi/Spotify",
    Features: [
      "Replicates the core user interface of Spotify with a sleek, dark-themed responsive design.",
      "Includes functional audio playback controls for playing, pausing, and skipping tracks.",
      "Displays dynamic song information, progress bars, and volume controls.",
      "Showcases complex DOM manipulation and audio state management."
    ],
    TechStack: ["HTML", "CSS", "JavaScript", "Audio API"]
  },
  { 
    id: "proj-2", 
    Title: "AI-Medicine-Reminder", 
    Description: "An AI-powered web-based medication reminder that allows users to set medicine reminders with smart voice-alerts.", 
    Img: "/project_medicine_1773175697857.png", 
    Link: "https://github.com/KrChiranjeevi/AI-Medicine-Reminder",
    Features: [
      "Allows users to easily set and manage daily medicine reminders.",
      "Features smart voice-alerts to proactively notify users when it's time to take medication.",
      "Provides an intuitive, user-friendly interface for adding prescriptions and schedules.",
      "Built completely with front-end technologies focusing on accessibility and audio notifications."
    ],
    TechStack: ["HTML", "CSS", "JavaScript", "Web Speech API"]
  },
  { 
    id: "proj-1", 
    Title: "AI-Interview-Practice-Assistant", 
    Description: "Created an interactive AI-powered interview preparation chatbot that simulates technical interviews across programming, DSA, algorithms, and system design topics.", 
    Img: "/project_interview_1773175716358.png", 
    Link: "https://github.com/KrChiranjeevi/AI-Interview-Practice-Assistant",
    Features: [
      "Simulates technical interviews covering programming, DSA, algorithms, and system design.",
      "Integrates Gemini API with a Flask backend to deliver context-aware technical responses.",
      "Improves the relevance and clarity of interview answers with AI assistance.",
      "Provides a clean layout with Tailwind CSS simulating a real-world coding assessment portal."
    ],
    TechStack: ["HTML", "JavaScript", "Tailwind CSS", "Python", "Flask", "Gemini API", "Priority Queue"]
  },
];

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [projects, setProjects] = useState(localProjects);
  const [certificates, setCertificates] = useState(localCertificates);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);


  const fetchData = useCallback(async () => {
    try {
      if (!supabase) {
        // Supabase not configured, use local data only
        setProjects(localProjects);
        setCertificates(localCertificates);
        localStorage.setItem("projects", JSON.stringify(localProjects));
        localStorage.setItem("certificates", JSON.stringify(localCertificates));
        window.dispatchEvent(new Event("portfolioDataUpdated"));
        return;
      }

      // Mengambil data dari Supabase secara paralel
      const [projectsResponse, certificatesResponse] = await Promise.all([
        supabase.from("projects").select("*").order('id', { ascending: true }),
        supabase.from("certificates").select("*").order('id', { ascending: true }), 
      ]);

      const projectData = projectsResponse.data || [];
      const supabaseCertificates = certificatesResponse.data || [];

      const allProjects = [...localProjects, ...projectData];
      const allCertificates = [...localCertificates, ...supabaseCertificates];

      setProjects(allProjects);
      setCertificates(allCertificates);

      // Store in localStorage
      localStorage.setItem("projects", JSON.stringify(allProjects));
      localStorage.setItem("certificates", JSON.stringify(allCertificates));
      window.dispatchEvent(new Event("portfolioDataUpdated"));
    } catch (error) {
      setProjects(localProjects);
      localStorage.setItem("projects", JSON.stringify(localProjects));
      window.dispatchEvent(new Event("portfolioDataUpdated"));
    }
  }, []);



  useEffect(() => {
    // Coba ambil dari localStorage dulu untuk laod lebih cepat
    const cachedProjects = localStorage.getItem('projects');
    const cachedCertificates = localStorage.getItem('certificates');

    if (cachedProjects) {
        setProjects(JSON.parse(cachedProjects));
        // We do NOT load cachedCertificates because we just added new local images
        // that aren't in the user's cache, causing a blank screen mismatch.
        // setCertificates(JSON.parse(cachedCertificates));
    }
    
    fetchData(); // Tetap panggil fetchData untuk sinkronisasi data terbaru
  }, [fetchData]);

  useEffect(() => {
    const handleTabChange = (event) => {
      const tabIndex = event.detail.tab;
      setValue(tabIndex);
    };
    window.addEventListener('changePortfolioTab', handleTabChange);
    return () => window.removeEventListener('changePortfolioTab', handleTabChange);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleShowMore = useCallback((type) => {
    if (type === 'projects') {
      setShowAllProjects(prev => !prev);
    } else {
      setShowAllCertificates(prev => !prev);
    }
  }, []);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, initialItems);
  const displayedCertificates = showAllCertificates ? certificates : certificates.slice(0, initialItems);

  // Sisa dari komponen (return statement) tidak ada perubahan
  return (
    <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden" id="Portofolio">
      {/* Header section - unchanged */}
      <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          <span style={{
            color: '#6366f1',
            backgroundImage: 'linear-gradient(45deg, #6366f1 10%, #a855f7 93%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Portfolio Showcase
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through projects, certifications, and technical expertise. 
          Each section represents a milestone in my continuous learning path.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        {/* AppBar and Tabs section - unchanged */}
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(180deg, rgba(139, 92, 246, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)",
              backdropFilter: "blur(10px)",
              zIndex: 0,
            },
          }}
          className="md:px-4"
        >
          {/* Tabs remain unchanged */}
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            sx={{
              minHeight: "70px",
              "& .MuiTab-root": {
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: "600",
                color: "#94a3b8",
                textTransform: "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                padding: "20px 0",
                zIndex: 1,
                margin: "8px",
                borderRadius: "12px",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  transform: "translateY(-2px)",
                  "& .lucide": {
                    transform: "scale(1.1) rotate(5deg)",
                  },
                },
                "&.Mui-selected": {
                  color: "#fff",
                  background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                  boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
                  "& .lucide": {
                    color: "#a78bfa",
                  },
                },
              },
              "& .MuiTabs-indicator": {
                height: 0,
              },
              "& .MuiTabs-flexContainer": {
                gap: "8px",
              },
            }}
          >
            <Tab
              icon={<Code className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Projects"
              {...a11yProps(0)}
            />
            <Tab
              icon={<Award className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Certificates"
              {...a11yProps(1)}
            />
            <Tab
              icon={<Boxes className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Tech Stack"
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={setValue}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
                {displayedProjects.map((project, index) => (
                  <div
                    key={project.id || index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <CardProject
                      Img={project.Img}
                      Title={project.Title}
                      Description={project.Description}
                      Link={project.Link}
                      id={project.id}
                    />
                  </div>
                ))}
              </div>
            </div>
            {projects.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton
                  onClick={() => toggleShowMore('projects')}
                  isShowingMore={showAllProjects}
                />
              </div>
            )}
          </TabPanel>

          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-4">
                {displayedCertificates.map((certificate, index) => (
                  <div
                    key={certificate.id || index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <Certificate ImgSertif={certificate.Img} />
                  </div>
                ))}
              </div>
            </div>
            {certificates.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton
                  onClick={() => toggleShowMore('certificates')}
                  isShowingMore={showAllCertificates}
                />
              </div>
            )}
          </TabPanel>

          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden pb-[5%]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5">
                {techStacks.map((stack, index) => (
                  <div
                    key={index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <TechStackIcon TechStackIcon={stack.icon} Language={stack.language} />
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}