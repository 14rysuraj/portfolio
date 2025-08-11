import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaGraduationCap, FaCode, FaBrain } from "react-icons/fa";
import gsapIcon from "./assets/gsap.svg";
import springBoot from "./assets/springBoot.svg";
import pandas from "./assets/Pandas.svg";
import matplotlib from "./assets/Matplotlib.svg";
import scikitLearn from "./assets/scikit-learn.svg";
import numpy from "./assets/NumPy.svg";
import java from "./assets/Java.svg";
import javaScript from "./assets/JavaScript.svg";
import linux from "./assets/Linux.svg";
import python from "./assets/Python.svg";
import typeScript from "./assets/TypeScript.svg";
import git from "./assets/Git.svg";
import ecommercePng from "./assets/ecom.png"
import wayTogether from "./assets/wayTogether.png";
import flyEasy from "./assets/flyEasy.png";
import cropSay from "./assets/cropSay.png";


gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      desc: "A full-stack websites featuring authentication, product listings, category filters, payment gateway integration, GSAP-powered UI animations, realTime chatting.",
      tech: ["React", "Node.js", "Express", "MongoDB", "GSAP","WebSocket"],
          link: "",
      image: ecommercePng,
    },
    {
      title: "Group Tracking App",
      desc: " A mobile app featuring Real-time location sharing between riders who joined the trip and group chat, live updates of location using Socket.IO and also share memories with each other.",
      tech: ["React-native", "Node.js", "Socket.IO", "Zustand", "MongoDB","Expo","Goole Maps API"],
        link: "",
      image: wayTogether,
      },
    
      {
      title: "Airline Reservation System",
      desc: "A fligt booking websites featuring Real-time seat booking and flight availability , flight scheduling and JWT-based authentication for users.",
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT","WebSocket"],
          link: "#",
      image: flyEasy,
    },
    {
    
  title: "CropSay",
  desc: "An agricultural e-commerce platform where users can browse products, apply filters, set price ranges,real-time chat with admin  and purchase items, with a focus on simplicity and accessibility for farmers and buyers also featuring recommendation with the similar products.",
  tech: ["MongoDB", "Express", "React", "Node.js","WebSocket", "GSAP"],
        link: "",
  image:cropSay
},
    
    
  ];

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const projectItemsRef = useRef([]);
  const skillCardsRef = useRef([]);
  const aboutCardsRef = useRef([]);

  projectItemsRef.current = [];
  skillCardsRef.current = [];
  aboutCardsRef.current = [];

  const addProjectItemRef = (el) => {
    if (el && !projectItemsRef.current.includes(el)) {
      projectItemsRef.current.push(el);
    }
  };

  const addSkillCardRef = (el) => {
    if (el && !skillCardsRef.current.includes(el)) {
      skillCardsRef.current.push(el);
    }
  };

  const addAboutCardRef = (el) => {
    if (el && !aboutCardsRef.current.includes(el)) {
      aboutCardsRef.current.push(el);
    }
  };

  const lightningRef = useRef(null);
  useEffect(() => {
    let mounted = true;
    function randomPulse() {
      if (!mounted) return;
      const el = lightningRef.current;
      if (!el) return;
      el.classList.remove("flash");
      void el.offsetWidth;
      if (Math.random() < 0.25) {
        el.classList.add("flash");
      }
      const t = 2000 + Math.random() * 4000;
      setTimeout(randomPulse, t);
    }
    randomPulse();
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    // Hero animation
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 2, ease: "power3.out" }
    );

    // Skills cards animation
    if (skillCardsRef.current.length > 0) {
      gsap.fromTo(
        skillCardsRef.current,
        { 
          opacity: 0, 
          y: 60,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // About cards animation
    if (aboutCardsRef.current.length > 0) {
      gsap.fromTo(
        aboutCardsRef.current,
        { 
          opacity: 0, 
          y: 50,
          x: -30
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

   
    if (projectItemsRef.current.length > 0) {
      gsap.fromTo(
        projectItemsRef.current,
        { 
          opacity: 0, 
          y: 50,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2, 
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse", 
          },
        }
      );
    }

    gsap.fromTo(
      contactRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen relative text-gray-200 ">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ backgroundColor: "#071029" }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 40px)",
            transform: "translateZ(0)",
            mixBlendMode: "overlay",
            opacity: 0.9,
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0))",
            animation: "gridMove 20s linear infinite",
            opacity: 0.6,
          }}
        />

        {/* Lightning flash overlay */}
        <div
          ref={lightningRef}
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            mixBlendMode: "screen",
          }}
          className="lightning-overlay"
        >
          <svg width="100%" height="100%" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lg" x1="0" x2="1">
                <stop offset="0%" stopColor="#7ee7ff" stopOpacity="0.0" />
                <stop offset="50%" stopColor="#e4f9ff" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#7ee7ff" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <g
              id="lightnings"
              stroke="url(#lg)"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <polyline points="5,20 45,80 80,40 120,120" opacity="0.0" />
              <polyline points="200,10 240,70 280,20 320,90" opacity="0.0" />
              <polyline points="400,30 440,100 480,50 520,140" opacity="0.0" />
            </g>
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 1000px 1000px; }
        }
        .lightning-overlay svg g polyline {
          stroke-opacity: 0;
          filter: drop-shadow(0 0 8px rgba(126,231,255,0.9));
        }
        .lightning-overlay.flash svg g polyline {
          animation: flashLine 0.6s ease-in-out forwards;
        }
        @keyframes flashLine {
          0% { stroke-opacity: 0; transform: translateY(-6px); }
          30% { stroke-opacity: 0.95; transform: translateY(0); }
          100% { stroke-opacity: 0; transform: translateY(6px); }
        }
      `}</style>

      <header className="max-w-7xl mx-auto px-6 py-8 fixed top-0 left-0 right-0 z-50 bg-transparent">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-extrabold text-white">
            
          </div>
          <div className="space-x-4 text-sm text-slate-300">
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
            <a href="#skills" className="hover:underline">
              Skills
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6 pb-20 ">
        {/* HERO */}
        <section
          ref={heroRef}
          className="py-44  grid grid-cols-1 gap-8 items-center bg-transparent rounded-2xl md:p-8 md:h-[90vh]"
        >
          <div className="flex flex-col items-center">
            <h1 className="text-xl md:text-5xl font-bold leading-tight text-white ">
              Hi, I'm Suraj Chaudhary
            </h1>

            <div className="flex flex-col justify-center">
              <p
                className="
    mt-4
    md:text-2xl
    md:w-full
    md:text-center
    bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600
    text-transparent
    bg-clip-text
    font-semibold
  "
              >
                I build responsive, real‑time, and interactive web applications.
              </p>
            </div>

            <div className="mt-6 text-sm text-slate-400">
              Building reliable, intuitive, and future-ready software with a
              passion for innovation.
            </div>

            <div className=" flex items-center mt-7 gap-5">
              <a
                href="https://github.com/14rysuraj"
                className="border border-slate-600 p-1 rounded-md transition-shadow duration-300 hover:shadow-[0_0_10px_2px_rgba(126,231,255,0.7)]"
              >
                <FaGithub className="text-3xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/suraj-chaudhary-a933232a5/"
                className="border border-slate-600 p-1 rounded-md transition-shadow duration-300 hover:shadow-[0_0_10px_2px_rgba(0,119,255,0.7)]"
              >
                <RiLinkedinFill className="text-3xl" />
              </a>
              <a
                href="https://www.instagram.com/001_suraj_chaudhary/"
                className="border border-slate-600 p-1 rounded-md transition-shadow duration-300 hover:shadow-[0_0_10px_2px_rgba(255,0,128,0.7)]"
              >
                <FaInstagram className="text-3xl" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href="https://drive.google.com/file/d/1BVMSKJtipqkILSYNak9ctRg5SDBy7Rqy/view?usp=sharing" className=" border border-slate-700 text-slate-200 px-8 py-3 rounded-md hover:bg-slate-800 flex items-center ">
                <IoDocumentTextOutline className="text-xl mr-3" />

                <p> Resume</p>
              </a>
              <a
                href="#projects"
                className=" bg-blue-600 text-white px-8 py-3 rounded-md shadow-sm hover:bg-blue-700 flex items-center"
              >
                <MdOutlineRemoveRedEye className="text-xl mr-3" />
                <p>Projects</p>
              </a>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section
          id="skills"
          ref={skillsRef}
          className=" bg-transparent rounded-2xl p-6 md:py-36 md:h-[90vh] "
        >
          <h2 className="text-xl font-semibold text-white">Skills</h2>

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

                       {/* Languages */}
                        <div 
                          ref={(el) => addSkillCardRef(el)}
                          className="p-3 border border-slate-700 rounded-lg bg-slate-800/40 flex flex-col"
                          style={{ opacity: 0, transform: 'translateY(60px) scale(0.9)' }}
                        >
              <h2 className="font-semibold text-white my-4  bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600
    text-transparent text-xl
    bg-clip-text ">Languages & tools</h2>
              <div className="flex gap-5 flex-wrap ">
                <div className="text-sm text-slate-300 flex flex-col ">
                                  <img
                                      src={ javaScript}
                    alt="React"
                    className="inline-block w-16 h-16 mr-1  border border-slate-600 p-2 rounded-lg transition-shadow duration-300 hover:shadow-[0_0_10px_2px_rgba(126,231,255,0.7)]"
                  />
                  <p className=" text-sm mt-2 text text-center">JavaScript</p>
                </div>

                <div className="text-sm text-slate-300 flex flex-col ">
                  <img
                    src={python}

                    alt="React"
                    className="inline-block w-16 h-16 mr-1  border border-slate-600 p-2 rounded-lg transition-shadow duration-300 hover:shadow-[0_0_10px_2px_rgba(126,231,255,0.7)]"
                  />
                  <p className="mt-2 text-sm text text-center">Python </p>
                  
                </div>

                <div className="text-sm text-slate-300  flex flex-col ">
                  <img
                    src={java}
                    alt="React"
                    className="inline-block w-16 h-16 mr-1 border border-slate-600 p-2 rounded-lg transition-shadow duration-300 hover:shadow-[0_0_10px_2px_rgba(126,231,255,0.7)]"
                  />
                  <p className="mt-2 text-sm text text-center">Java</p>
                              </div>
                              

                               <div className="text-sm text-slate-300  flex flex-col ">
                  <img
                    src={git}
                    alt="React"
                    className="inline-block w-16 h-16 mr-1 border border-slate-600 p-2 rounded-lg transition-shadow duration-300 hover:shadow-[0_0_10px_2px_rgba(126,231,255,0.7)]"
                  />
                  <p className="mt-2 text-sm text text-center">git</p>
                </div>

                                             <div className="text-sm text-slate-300  flex flex-col ">
                  <img
                    src={linux}
                    alt="React"
                    className="inline-block w-16 h-16 mr-1 border border-slate-600 p-2 rounded-lg transition-shadow duration-300 hover:shadow-[0_0_10px_2px_rgba(126,231,255,0.7)]"
                  />
                  <p className="mt-2 text-sm text text-center"> Linux</p>
                </div>

                          </div>
                      </div>
    

{/* FRONTEND */}

            <div 
              ref={(el) => addSkillCardRef(el)}
              className="p-3 border border-slate-700 rounded-lg bg-slate-800/40 flex flex-col"
              style={{ opacity: 0, transform: 'translateY(60px) scale(0.9)' }}
            >
              <h2 className="font-semibold text-white my-4  bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600
    text-transparent text-xl
    bg-clip-text ">Frontend</h2>

              <div className="flex gap-5 flex-wrap ">
                <div className="text-sm text-slate-300 flex flex-col ">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="React"
                    className="inline-block w-16 h-16 mr-1  border border-slate-600 p-2 rounded-lg transition-shadow duration-300 hover:shadow-[0_0_10px_2px_rgba(126,231,255,0.7)]"
                  />
                  <p className=" text-sm mt-2 text text-center">React</p>
                </div>

                <div className="text-sm text-slate-300 flex flex-col ">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                    alt="React"
                    className="inline-block w-16 h-16 mr-1  border border-slate-600 p-2 rounded-lg transition-shadow duration-300 hover:shadow-[0_0_10px_2px_rgba(126,231,255,0.7)]"
                  />
                  <p className="mt-2 text-sm text text-center">Tailwind CSS</p>
                
                </div>

                <div className="text-sm text-slate-300  flex flex-col ">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                    alt="React"
                    className="inline-block w-16 h-16 mr-1  border border-slate-600 p-2 rounded-lg transition-shadow duration-300 hover:shadow-[0_0_10px_2px_rgba(126,231,255,0.7)]"
                  />
                  <p className="mt-2 text-sm text text-center">Redux</p>
                </div>

                <div className="text-sm text-slate-300  flex flex-col ">
                  <img
                    src="https://avatars.githubusercontent.com/u/160464953?s=200&v=4"
                    alt="React"
                    className="inline-block w-16 h-16 mr-1  border border-slate-600  rounded-lg transition-shadow duration-300 hover:shadow-[0_0_10px_2px_rgba(126,231,255,0.7)] "
                  />
                  <p className="mt-2 text-sm text text-center">Redux</p>
                </div>

                <div className="text-sm text-slate-300  flex flex-col ">
                  <img
                    src={gsapIcon}
                    alt="React"
                    className="inline-block w-16 h-16 mr-1  border border-slate-600 p-2 rounded-lg transition-shadow duration-300 hover:shadow-[0_0_10px_2px_rgba(126,231,255,0.7)] "
                  />
                  <p className="mt-2 text-sm text text-center"> GSAP</p>
                              </div>

                          </div>
                      </div>


{/* BACKEND*/}

             <div 
               ref={(el) => addSkillCardRef(el)}
               className="p-3 border border-slate-700 rounded-lg bg-slate-800/40 flex flex-col"
               style={{ opacity: 0, transform: 'translateY(60px) scale(0.9)' }}
             >
               <h2 className="font-semibold text-white my-4  bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600
    text-transparent text-xl
    bg-clip-text ">Backend</h2>

              <div className="flex gap-5 flex-wrap ">
                <div className="text-sm text-slate-300 flex flex-col ">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    alt="React"
                    className="inline-block w-16 h-16 mr-1  border border-slate-600 p-2 rounded-lg transition-shadow duration-300 hover:shadow-[0_0_10px_2px_rgba(126,231,255,0.7)]"
                  />
                  <p className=" text-sm mt-2 text text-center">Node js</p>
                </div>

                <div className="text-sm text-slate-300 flex flex-col ">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"

                    alt="React"
                    className="inline-block w-16 h-16 mr-1  border border-slate-600 p-2 rounded-lg transition-shadow duration-300 hover:shadow-[0_0_10px_2px_rgba(126,231,255,0.7)]"
                  />
                  <p className="mt-2 text-sm text text-center">Express js </p>
                  
                </div>

                <div className="text-sm text-slate-300  flex flex-col ">
                  <img
                    src="https://www.svgrepo.com/show/354553/websocket.svg"
                    alt="React"
                    className="inline-block w-16 h-16 mr-1 bg-white  border border-slate-600 p-2 rounded-lg transition-shadow duration-300 hover:shadow-[0_0_10px_2px_rgba(126,231,255,0.7)]"
                  />
                  <p className="mt-2 text-sm text text-center">WebSocket</p>
                </div>

                <div className="text-sm text-slate-300  flex flex-col ">
                                  <img
                                      src={springBoot}
                    alt="React"
                    className="inline-block w-16 h-16 mr-1  border border-slate-600 p-2 rounded-lg transition-shadow duration-300 hover:shadow-[0_0_10px_2px_rgba(126,231,255,0.7)] "
                  />
                  <p className="mt-2 text-sm text text-center">Spring Boot</p>
                </div>

                          </div>
                      </div>
                      
                      {/* DATABASES */}
                      
                      <div 
                        ref={(el) => addSkillCardRef(el)}
                        className="p-3 border border-slate-700 rounded-lg bg-slate-800/40 flex flex-col"
                        style={{ opacity: 0, transform: 'translateY(60px) scale(0.9)' }}
                      >
               <h2 className="font-semibold text-white my-4  bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600
    text-transparent text-xl
    bg-clip-text ">Database</h2>

              <div className="flex gap-5 flex-wrap ">
                <div className="text-sm text-slate-300 flex flex-col ">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                    alt="React"
                    className="inline-block w-16 h-16 mr-1  border border-slate-600 p-2 rounded-lg transition-shadow duration-300 hover:shadow-[0_0_10px_2px_rgba(126,231,255,0.7)]"
                  />
                  <p className=" text-sm mt-2 text text-center">MongoDB</p>
                </div>

                <div className="text-sm text-slate-300 flex flex-col ">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"

                    alt="React"
                    className="inline-block w-16 h-16 mr-1  border border-slate-600 p-2 rounded-lg transition-shadow duration-300 hover:shadow-[0_0_10px_2px_rgba(126,231,255,0.7)]"
                  />
                  <p className="mt-2 text-sm text text-center">MySQL </p>
                  
                </div>

                <div className="text-sm text-slate-300  flex flex-col ">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"
                    alt="React"
                    className="inline-block w-16 h-16 mr-1 border border-slate-600 p-2 rounded-lg transition-shadow duration-300 hover:shadow-[0_0_10px_2px_rgba(126,231,255,0.7)]"
                  />
                  <p className="mt-2 text-sm text text-center">SQLite</p>
                </div>

                          </div>
                      </div>

                      {/* AI/ML */}

                        <div 
                          ref={(el) => addSkillCardRef(el)}
                          className="p-3 border border-slate-700 rounded-lg bg-slate-800/40 flex flex-col"
                          style={{ opacity: 0, transform: 'translateY(60px) scale(0.9)' }}
                        >
                <h2 className="font-semibold text-white my-4  bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600
    text-transparent text-xl
    bg-clip-text ">AI/ML</h2>

              <div className="flex gap-5 flex-wrap ">
                <div className="text-sm text-slate-300 flex flex-col ">
                                  <img
                                      src={ pandas}
                    alt="React"
                    className="inline-block w-16 h-16 mr-1  border border-slate-600 p-2 rounded-lg transition-shadow duration-300 hover:shadow-[0_0_10px_2px_rgba(126,231,255,0.7)]"
                  />
                  <p className=" text-sm mt-2 text text-center">Pandas</p>
                </div>

                <div className="text-sm text-slate-300 flex flex-col ">
                  <img
                    src={matplotlib}

                    alt="React"
                    className="inline-block w-16 h-16 mr-1  border border-slate-600 p-2 rounded-lg transition-shadow duration-300 hover:shadow-[0_0_10px_2px_rgba(126,231,255,0.7)]"
                  />
                  <p className="mt-2 text-sm text text-center">Matplotlib </p>
                  
                </div>

                <div className="text-sm text-slate-300  flex flex-col ">
                  <img
                    src={scikitLearn}
                    alt="React"
                    className="inline-block w-16 h-16 mr-1 border border-slate-600 p-2 rounded-lg transition-shadow duration-300 hover:shadow-[0_0_10px_2px_rgba(126,231,255,0.7)]"
                  />
                  <p className="mt-2 text-sm text text-center">Scikit-learn</p>
                              </div>
                              

                               <div className="text-sm text-slate-300  flex flex-col ">
                  <img
                    src={numpy}
                    alt="React"
                    className="inline-block w-16 h-16 mr-1 border border-slate-600 p-2 rounded-lg transition-shadow duration-300 hover:shadow-[0_0_10px_2px_rgba(126,231,255,0.7)]"
                  />
                  <p className="mt-2 text-sm text text-center">Numpy</p>
                </div>

                          </div>
                      </div>
          
                  </div>

              </section>
              


                     <section
          id="about"
          ref={aboutRef}
          className="py-16 bg-transparent rounded-2xl"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">About Me</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Personal Info */}
              <div 
                ref={(el) => addAboutCardRef(el)}
                className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700"
                style={{ opacity: 0, transform: 'translateY(50px) translateX(-30px)' }}
              >
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <FaCode className="mr-3 text-cyan-400" />
                  Developer & Problem Solver
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  I'm a passionate full-stack developer with a strong foundation in modern web technologies. 
                  I enjoy creating seamless user experiences and robust backend systems that solve real-world problems.
                </p>
                <p className="text-slate-300 leading-relaxed mb-4">
                  My journey in software development started with curiosity about how things work behind the scenes, 
                  and has evolved into building complex applications with real-time features, AI integration, 
                  and scalable architectures.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                  or learning about emerging trends in AI and machine learning.
                              </p>


                                <h3 className="text-xl font-semibold text-white mb-4 flex items-center mt-3">
                  <FaCode className="mr-3 text-cyan-400" />
                  Certificates
                              </h3>
                <ul className="list-disc list-inside text-slate-300">
                  <li>UI/UX with React  - Kathford int college</li>
                  <li>Data science with python - Tech Axis</li>
               
                </ul>
                              

              </div>

              {/* Right Column - Education & Experience */}
              <div className="space-y-6">
                {/* Education */}
                <div 
                  ref={(el) => addAboutCardRef(el)}
                  className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700"
                  style={{ opacity: 0, transform: 'translateY(50px) translateX(-30px)' }}
                >
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <FaGraduationCap className="mr-3 text-blue-400" />
                    Education
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="border-l-2 border-cyan-400 pl-4">
                      <h4 className="font-semibold text-white">Bachelor of Computer Application</h4>
                      <p className="text-slate-300 text-sm">Tribhuvan University</p>
                      <p className="text-slate-400 text-xs">2021 - 2025</p>
                      <p className="text-slate-300 text-sm mt-2">
                       running
                      </p>
                    </div>
                    
                    <div className="border-l-2 border-purple-400 pl-4">
                      <h4 className="font-semibold text-white">Higher Secondary (+2)</h4>
                      <p className="text-slate-300 text-sm">Bluebird College</p>
                      <p className="text-slate-400 text-xs">2018 - 2020</p>
                      <p className="text-slate-300 text-sm mt-2">
                        Mathematics, Computer Science, commerce  with distinction.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Interests */}
                <div 
                  ref={(el) => addAboutCardRef(el)}
                  className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700"
                  style={{ opacity: 0, transform: 'translateY(50px) translateX(-30px)' }}
                >
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <FaBrain className="mr-3 text-purple-400" />
                    Key Interests
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-sm">
                      <div className="flex items-center mb-1">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                        <span className="text-slate-200">Full-Stack Development</span>
                      </div>
                    </div>
                    
                    <div className="text-sm">
                      <div className="flex items-center mb-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        <span className="text-slate-200">Real-time Applications</span>
                      </div>
                    </div>
                    
                    <div className="text-sm">
                      <div className="flex items-center mb-1">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                        <span className="text-slate-200">AI & Machine Learning</span>
                      </div>
                    </div>
                    
                    <div className="text-sm">
                      <div className="flex items-center mb-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                        <span className="text-slate-200">UI/UX Animation</span>
                      </div>
                    </div>
                    
                    <div className="text-sm">
                      <div className="flex items-center mb-1">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                        <span className="text-slate-200">Mobile Development</span>
                      </div>
                    </div>
                    
                    <div className="text-sm">
                      <div className="flex items-center mb-1">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>
                        <span className="text-slate-200">Cloud Technologies</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
      <section id="projects" ref={projectsRef} className="py-16">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-white mb-6">Projects</h2>

    <div className="mt-4 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
      {projects.map((p, index) => (
        <article
          key={p.title}
          ref={(el) => addProjectItemRef(el)}
          className="bg-slate-800/40 p-5 rounded-2xl shadow-sm border border-slate-700 flex flex-col transition-shadow duration-300 hover:shadow-[0_0_10px_2px_rgba(126,231,255,0.7)]"
          style={{ opacity: 0, transform: 'translateY(50px) scale(0.9)' }}
        >
          {/* Image */}
          <div className="w-full aspect-video overflow-hidden rounded-lg mb-4">
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col flex-grow">
            <h3 className="text-lg font-semibold text-white">{p.title}</h3>
            <p className="text-sm text-slate-300 mt-1 flex-grow">{p.desc}</p>

            {/* Tech stack */}
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 bg-slate-700/60 rounded-md text-blue-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* View Button */}
            <div className="mt-4">
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm inline-block border px-3 py-1 rounded-lg text-slate-200 border-slate-600 hover:bg-slate-700/40"
              >
                View
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

        {/* CONTACT */}
        <section
          id="contact"
          ref={contactRef}
          className="mt-10 bg-transparent rounded-2xl p-6"
        >
          <h2 className="text-xl font-semibold text-white">Contact</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-slate-300">Email</p>
              <a
                href="mailto:surajo14ry@gmail.com"
                className="block font-medium text-white"
              >
                surajo14ry@gmail.com
              </a>

              <p className="mt-3 text-sm text-slate-300">Phone</p>
              <div className="font-medium text-white">9808191548</div>

              <p className="mt-3 text-sm text-slate-300">Location</p>
              <div className="font-medium text-white">Kalanki, Kathmandu</div>

              <div className="mt-4 flex space-x-3">
                <a
                  className="text-sm px-3 py-1 border rounded-lg text-white"
                 href="https://github.com/14rysuraj"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="text-sm px-3 py-1 border rounded-lg text-white"
                 href="https://www.linkedin.com/in/suraj-chaudhary-a933232a5/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thanks! I will get back to you soon.");
                }}
                className="space-y-3"
              >
                <input
                  className="w-full border border-slate-700 rounded-lg px-3 py-2 bg-slate-800 text-white"
                  placeholder="Your name"
                  required
                />
                <input
                  className="w-full border border-slate-700 rounded-lg px-3 py-2 bg-slate-800 text-white"
                  placeholder="Email"
                  type="email"
                  required
                />
                <textarea
                  className="w-full border border-slate-700 rounded-lg px-3 py-2 bg-slate-800 text-white h-28"
                  placeholder="Message"
                  required
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        <footer className="mt-12 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Suraj Chaudhary — Built with React & GSAP
        </footer>
      </main>
    </div>
  );
}