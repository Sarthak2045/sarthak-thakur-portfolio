import React, { useState, useEffect } from 'react';

// --- Global Styles Component --- //
// All CSS is embedded here.
const GlobalStyles = () => (
  <style>{`
    /* --- Google Font Import --- */
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

    /* --- CSS Variables for Theming --- */
    :root {
      --font-main: 'Poppins', sans-serif;
      
      /* Light Theme */
      --bg-color-light: #f0f2f5;
      --bg-secondary-color-light: #ffffff;
      --text-color-light: #333333;
      --heading-color-light: #1c2a39;
      --primary-color-light: #2c3e50;
      --accent-color-light: #27ae60;
      --secondary-accent-light: #e74c3c;
      --shadow-color-light: rgba(0, 0, 0, 0.07);

      /* Dark Theme */
      --bg-color-dark: #0a0a0a;
      --bg-secondary-color-dark: #1a1a1a;
      --text-color-dark: #cccccc;
      --heading-color-dark: #ffffff;
      --primary-color-dark: #3498db;
      --accent-color-dark: #2ecc71;
      --secondary-accent-dark: #f39c12;
      --shadow-color-dark: rgba(0, 0, 0, 0.5);
    }

    /* --- Base Styles & Theme Application --- */
    body {
      font-family: var(--font-main);
      margin: 0;
      padding: 0;
      transition: background-color 0.4s ease, color 0.4s ease;
      overflow-x: hidden;
    }

    body.light {
      background-color: var(--bg-color-light);
      color: var(--text-color-light);
    }

    body.dark {
      background-color: var(--bg-color-dark);
      color: var(--text-color-dark);
    }

    html {
      scroll-behavior: smooth;
    }

    /* --- Animated Background Container --- */
    .animated-background {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      overflow: hidden;
    }

    /* --- Shooting Star Background Animation --- */
    .star {
      position: absolute;
      border-radius: 50%;
      background: var(--accent-color-dark);
      filter: drop-shadow(0 0 6px var(--accent-color-dark));
      animation: shooting-star-anim 5s linear infinite;
    }
    
    body.light .star {
       background: var(--accent-color-light);
       filter: drop-shadow(0 0 6px var(--accent-color-light));
    }

    @keyframes shooting-star-anim {
      0% {
        opacity: 1;
        transform: translate(0, 0) rotate(225deg);
      }
      100% {
        opacity: 0;
        transform: translate(-100vw, 100vh) rotate(225deg);
      }
    }

    /* Randomize star positions and animations */
    .star:nth-child(1) { top: 10%; left: 80%; width: 2px; height: 2px; animation-delay: 0s; animation-duration: 4.2s; }
    .star:nth-child(2) { top: 40%; left: 90%; width: 1px; height: 1px; animation-delay: 1.5s; animation-duration: 3.5s; }
    .star:nth-child(3) { top: 5%; left: 50%; width: 2px; height: 2px; animation-delay: 2.1s; animation-duration: 5s; }
    .star:nth-child(4) { top: 60%; left: 100%; width: 1px; height: 1px; animation-delay: 3.5s; animation-duration: 3.8s; }
    .star:nth-child(5) { top: 20%; left: 60%; width: 3px; height: 3px; animation-delay: 0.2s; animation-duration: 4.5s; }
    .star:nth-child(6) { top: 80%; left: 70%; width: 1px; height: 1px; animation-delay: 4.2s; animation-duration: 4.7s; }
    .star:nth-child(7) { top: 95%; left: 40%; width: 2px; height: 2px; animation-delay: 1.8s; animation-duration: 3.9s; }
    .star:nth-child(8) { top: 30%; left: 85%; width: 1px; height: 1px; animation-delay: 5.0s; animation-duration: 5.2s; }
    
    /* --- Floating Particles Animation --- */
    .particle {
        position: absolute;
        bottom: -150px;
        border-radius: 50%;
        opacity: 0.5;
        animation: float-up linear infinite;
    }
    body.light .particle {
        background: rgba(44, 62, 80, 0.2);
    }
    body.dark .particle {
        background: rgba(255, 255, 255, 0.1);
    }

    @keyframes float-up {
        0% {
            transform: translateY(0) translateX(0);
            opacity: 0.5;
        }
        100% {
            transform: translateY(-120vh) translateX(50px);
            opacity: 0;
        }
    }
    
    .particle:nth-child(1) { width: 15px; height: 15px; left: 10%; animation-duration: 15s; animation-delay: 1s; }
    .particle:nth-child(2) { width: 25px; height: 25px; left: 20%; animation-duration: 12s; animation-delay: 3s; }
    .particle:nth-child(3) { width: 10px; height: 10px; left: 30%; animation-duration: 20s; animation-delay: 5s; }
    .particle:nth-child(4) { width: 50px; height: 50px; left: 40%; animation-duration: 10s; animation-delay: 0s; }
    .particle:nth-child(5) { width: 35px; height: 35px; left: 50%; animation-duration: 18s; animation-delay: 2s; }
    .particle:nth-child(6) { width: 20px; height: 20px; left: 60%; animation-duration: 14s; animation-delay: 6s; }
    .particle:nth-child(7) { width: 40px; height: 40px; left: 70%; animation-duration: 11s; animation-delay: 4s; }
    .particle:nth-child(8) { width: 12px; height: 12px; left: 80%; animation-duration: 22s; animation-delay: 8s; }
    .particle:nth-child(9) { width: 30px; height: 30px; left: 90%; animation-duration: 16s; animation-delay: 1s; }
    .particle:nth-child(10) { width: 45px; height: 45px; left: 5%; animation-duration: 13s; animation-delay: 7s; }

    /* --- Navbar --- */
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 5%;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      transition: background-color 0.3s ease, box-shadow 0.3s ease;
    }
    
    .navbar.scrolled {
      backdrop-filter: blur(10px);
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }

    body.light .navbar.scrolled {
      background-color: rgba(255, 255, 255, 0.8);
    }
    body.dark .navbar.scrolled {
      background-color: rgba(10, 10, 10, 0.7);
    }

    .nav-logo {
      font-size: 1.8rem;
      font-weight: 700;
    }
    body.light .nav-logo { color: var(--heading-color-light); }
    body.dark .nav-logo { color: var(--heading-color-dark); }

    .nav-links a {
      margin: 0 1rem;
      text-decoration: none;
      cursor: pointer;
      position: relative;
      padding-bottom: 0.3rem;
      font-weight: 400;
      transition: color 0.3s ease;
    }
    body.light .nav-links a { color: var(--text-color-light); }
    body.dark .nav-links a { color: var(--text-color-dark); }

    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      transition: width 0.3s ease;
    }
    body.light .nav-links a::after { background-color: var(--accent-color-light); }
    body.dark .nav-links a::after { background-color: var(--accent-color-dark); }

    .nav-links a:hover::after {
      width: 100%;
    }

    .theme-toggle {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.3s ease, transform 0.3s ease;
    }
    .theme-toggle:hover {
        transform: rotate(15deg);
    }
    body.light .theme-toggle { color: var(--heading-color-light); }
    body.dark .theme-toggle { color: var(--heading-color-dark); }

    body.light .theme-toggle:hover { background-color: #e0e0e0; }
    body.dark .theme-toggle:hover { background-color: #2a2a2a; }

    /* --- Hero Section --- */
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 0 5%;
      position: relative;
    }

    .hero-content {
      max-width: 800px;
    }

    .hero h1 {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
    body.light .hero h1 { color: var(--heading-color-light); }
    body.dark .hero h1 { color: var(--heading-color-dark); }

    .hero p {
      font-size: 1.2rem;
      line-height: 1.7;
      margin-bottom: 2rem;
    }

    .cta-button {
      padding: 0.8rem 2rem;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      border: none;
      color: white;
    }
    body.light .cta-button {
      background-image: linear-gradient(45deg, var(--primary-color-light), var(--accent-color-light));
    }
    body.dark .cta-button {
      background-image: linear-gradient(45deg, var(--primary-color-dark), var(--accent-color-dark));
    }

    .cta-button:hover {
      transform: translateY(-4px) scale(1.02);
      box-shadow: 0 6px 20px rgba(0,0,0,0.2);
    }
    
    /* --- Content Sections --- */
    .content-section {
      max-width: 900px;
      margin: 0 auto;
      padding: 5rem 5%;
      position: relative;
    }

    .content-section h2 {
      font-size: 2.5rem;
      margin-bottom: 2rem;
      text-align: center;
      position: relative;
      padding-bottom: 1rem;
    }
    body.light .content-section h2 { color: var(--heading-color-light); }
    body.dark .content-section h2 { color: var(--heading-color-dark); }

    .content-section h2::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 3px;
    }
    body.light .content-section h2::after { background-color: var(--accent-color-light); }
    body.dark .content-section h2::after { background-color: var(--accent-color-dark); }

    .content-section p, .content-section li {
      line-height: 1.8;
      font-size: 1.1rem;
    }

    /* --- Skills Section --- */
    .skills-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
        margin-top: 3rem;
    }
    .skill-badge {
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: 500;
        transition: transform 0.2s ease;
    }
    .skill-badge:hover {
        transform: scale(1.05);
    }
    body.light .skill-badge {
        background-color: #e9ecef;
        color: var(--primary-color-light);
    }
     body.dark .skill-badge {
        background-color: #30363d;
        color: var(--text-color-dark);
    }


    /* --- Project Grid --- */
    .project-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5rem;
        margin-top: 3rem;
    }

    .project-card {
        padding: 2rem;
        border-radius: 12px;
        transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        border: 1px solid transparent;
    }
    body.light .project-card {
        background-color: var(--bg-secondary-color-light);
        box-shadow: 0 4px 20px var(--shadow-color-light);
    }
    body.dark .project-card {
        background-color: var(--bg-secondary-color-dark);
        border-color: #30363d;
    }

    .project-card:hover {
        transform: translateY(-5px);
    }
    body.light .project-card:hover {
         box-shadow: 0 8px 30px var(--shadow-color-light);
         border-color: var(--accent-color-light);
    }
    
    body.dark .project-card:hover {
        border-color: var(--accent-color-dark);
    }

    .project-card h3 {
        margin-top: 0;
        font-size: 1.5rem;
    }
    body.light .project-card h3 { color: var(--primary-color-light); }
    body.dark .project-card h3 { color: var(--primary-color-dark); }

    .project-tech-stack {
        margin-top: 1rem;
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }
    
    .tech-badge {
        font-size: 0.8rem;
        padding: 0.3rem 0.7rem;
        border-radius: 15px;
    }
    
    body.light .tech-badge {
        background-color: #f2f2f2;
        color: #555;
    }

    body.dark .tech-badge {
        background-color: #2a2a2a;
        color: #bbb;
    }

    /* --- Experience Section --- */
    .experience-entry {
      padding: 1.5rem;
      border-left: 3px solid;
      margin-top: 2rem;
      position: relative;
    }
    body.light .experience-entry { border-color: var(--accent-color-light); }
    body.dark .experience-entry { border-color: var(--accent-color-dark); }
    
    .experience-entry::before {
      content: '';
      position: absolute;
      left: -9px;
      top: 1.5rem;
      width: 15px;
      height: 15px;
      border-radius: 50%;
    }
    body.light .experience-entry::before { background-color: var(--accent-color-light); }
    body.dark .experience-entry::before { background-color: var(--accent-color-dark); }

    .experience-entry h3 { margin: 0; }
    body.light .experience-entry h3 { color: var(--heading-color-light); }
    body.dark .experience-entry h3 { color: var(--heading-color-dark); }
    
    .experience-company { font-style: italic; opacity: 0.9; margin: 0.2rem 0; }
    .experience-date { font-size: 0.9rem; opacity: 0.8; }
    .experience-description { margin-top: 1rem; }


    /* --- Education Section --- */
    .education-entry {
      padding: 1.5rem;
      border-left: 3px solid;
      margin-top: 2rem;
      position: relative;
    }
    body.light .education-entry { border-color: var(--secondary-accent-light); }
    body.dark .education-entry { border-color: var(--secondary-accent-dark); }
    
    .education-entry::before {
      content: '';
      position: absolute;
      left: -9px;
      top: 1.5rem;
      width: 15px;
      height: 15px;
      border-radius: 50%;
    }
    body.light .education-entry::before { background-color: var(--secondary-accent-light); }
    body.dark .education-entry::before { background-color: var(--secondary-accent-dark); }

    .education-entry h3 { margin-top: 0; }
    body.light .education-entry h3 { color: var(--heading-color-light); }
    body.dark .education-entry h3 { color: var(--heading-color-dark); }

    .education-degree { font-style: italic; }
    .education-date { font-size: 0.9rem; opacity: 0.8; }

    /* --- Activities Section --- */
    #activities ul {
        list-style: none;
        padding-left: 0;
    }
    #activities li {
        position: relative;
        padding-left: 2rem;
        margin-bottom: 1rem;
    }
    #activities li::before {
        content: '✓';
        position: absolute;
        left: 0;
        top: 0;
        font-weight: bold;
    }
    body.light #activities li::before { color: var(--accent-color-light); }
    body.dark #activities li::before { color: var(--accent-color-dark); }

    /* --- Footer --- */
    footer {
      text-align: center;
      padding: 4rem 5% 2rem;
    }

    .social-links {
      margin: 2rem 0;
    }
    .social-links a {
      margin: 0 1rem;
      display: inline-block;
      transition: transform 0.3s ease, color 0.3s ease;
    }
    body.light .social-links a { color: var(--heading-color-light); }
    body.dark .social-links a { color: var(--heading-color-dark); }

    .social-links a:hover {
      transform: scale(1.2) translateY(-2px);
    }
    body.light .social-links a:hover { color: var(--primary-color-light); }
    body.dark .social-links a:hover { color: var(--primary-color-dark); }

    .footer-note {
      font-size: 0.9rem;
      opacity: 0.7;
    }

    /* --- Animations --- */
    .fade-in-up {
      opacity: 0;
      transform: translateY(20px);
      animation: fade-in-up-anim 0.8s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
    }

    @keyframes fade-in-up-anim {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* --- Media Queries for Responsiveness --- */
    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }

      .nav-logo {
        font-size: 1.6rem;
      }

      .hero h1 {
        font-size: 2.5rem;
      }

      .hero p {
        font-size: 1rem;
      }
      
      .content-section {
        padding: 4rem 5%;
      }
      
      .content-section h2 {
        font-size: 2rem;
      }

      .project-card {
        padding: 1.5rem;
      }

      .social-links a {
        margin: 0 0.75rem;
      }
    }

    @media (min-width: 768px) {
        .project-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

  `}</style>
);


// --- Icon Components --- //
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
);
const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
);
const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);
const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
);
const GmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);


// --- Main App Component --- //
function App() {
  const [theme, setTheme] = useState('dark');

  const skills = [
    'Python', 'JavaScript', 'C', 'SQL', 'MongoDB', 'MySQL',
    'HTML', 'CSS', 'React.js', 'Node.js', 'Express.js',
    'NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'LLMs',
    'Git', 'GitHub', 'VS Code', 'Streamlit', 'Ollama'
  ];

  useEffect(() => {
    document.body.className = theme;
    
    const handleScroll = () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <GlobalStyles />
      <div className="animated-background">
        {[...Array(8)].map((_, i) => (
          <div key={`star-${i}`} className="star"></div>
        ))}
        {[...Array(10)].map((_, i) => (
            <div key={`particle-${i}`} className="particle"></div>
        ))}
      </div>

      <header className="navbar">
        <div className="nav-logo">ST.</div>
        <nav className="nav-links">
          <a onClick={() => scrollToSection('about')}>About</a>
          <a onClick={() => scrollToSection('skills')}>Skills</a>
          <a onClick={() => scrollToSection('experience')}>Experience</a>
          <a onClick={() => scrollToSection('projects')}>Projects</a>
          <a onClick={() => scrollToSection('education')}>Education</a>
          <a onClick={() => scrollToSection('contact')}>Contact</a>
        </nav>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="fade-in-up" style={{ animationDelay: '0.2s' }}>Hi, I'm Sarthak Thakur</h1>
            <p className="fade-in-up" style={{ animationDelay: '0.4s' }}>
              A dedicated and enthusiastic undergrad student with a strong interest in Artificial Intelligence and Web Development, based in Pune.
            </p>
            <button
              className="cta-button fade-in-up"
              style={{ animationDelay: '0.6s' }}
              onClick={() => scrollToSection('projects')}
            >
              View My Projects
            </button>
          </div>
        </section>

        <section id="about" className="content-section">
          <h2>About Me</h2>
          <p>
            I'm an undergraduate student passionate about the intersection of AI and Web Development. I have hands-on experience in building AI-based applications, including object detection and digit recognition models. I am always looking for opportunities to apply my skills to solve real-world problems and create innovative solutions.
          </p>
        </section>

        <section id="skills" className="content-section">
            <h2>Technical Skills</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-badge">{skill}</div>
                ))}
            </div>
        </section>
        
        <section id="experience" className="content-section">
            <h2>Experience</h2>
            <div className="experience-entry">
                <h3>Google Student Ambassador</h3>
                <p className="experience-company">Google India</p>
                <p className="experience-date">September 2025 - Present</p>
                <div className="experience-description">
                    <p>Promoting Google's AI and Gemini initiatives among students through interactive sessions. Encouraging student participation in Google learning programs and organizing workshops to enhance digital awareness and innovation on campus.</p>
                </div>
            </div>
        </section>

        <section id="projects" className="content-section">
            <h2>Projects</h2>
            <div className="project-grid">
                <div className="project-card">
                    <h3>Object Detection App</h3>
                    <p>An AI-based application capable of detecting and labeling multiple objects in uploaded images using the YOLOv8 model, with an interactive Streamlit interface.</p>
                    <div className="project-tech-stack">
                        {['Python', 'YOLOv8', 'OpenCV', 'Streamlit'].map(tech => <span key={tech} className="tech-badge">{tech}</span>)}
                    </div>
                </div>
                <div className="project-card">
                    <h3>AI Chatbot using LLaMA 3.2</h3>
                    <p>An AI-powered chatbot leveraging the LLaMA 3.2 model for natural conversations, featuring a modern React.js frontend and a Node.js backend.</p>
                    <div className="project-tech-stack">
                        {['React.js', 'Node.js', 'Python', 'LLaMA 3.2'].map(tech => <span key={tech} className="tech-badge">{tech}</span>)}
                    </div>
                </div>
                 <div className="project-card">
                    <h3>Interactive React Portfolio</h3>
                    <p>This very portfolio website. A dynamic, fully responsive single-page application built with React, featuring custom CSS animations, a dark/light mode toggle, and smooth scrolling.</p>
                    <div className="project-tech-stack">
                        {['React.js', 'JavaScript', 'CSS'].map(tech => <span key={tech} className="tech-badge">{tech}</span>)}
                    </div>
                </div>
            </div>
        </section>
        
        <section id="education" className="content-section">
          <h2>Education</h2>
          <div className="education-entry">
            <h3>MIT WORLD PEACE UNIVERSITY, PUNE</h3>
            <p className="education-degree">Bachelor's Degree in Computer Applications</p>
            <p className="education-date">Aug 2023 - Aug 2026</p>
            <p>Current CGPA: 8.4</p>
          </div>
        </section>

        <section id="activities" className="content-section">
          <h2>Extracurricular Activities</h2>
           <ul>
               <li>Participated in National Level Hackathons.</li>
               <li>Co-Founder and Vice President of an AI based club in college.</li>
               <li>Organized AI based workshops and events.</li>
               <li>Certified in various technical domains including web development, machine learning, and AI.</li>
           </ul>
        </section>

      </main>

      <footer id="contact">
        <h2>Get In Touch</h2>
        <p>I'm always open to new opportunities and collaborations. Feel free to connect!</p>
        <div className="social-links">
            <a href="https://github.com/Sarthak2045" target="_blank" rel="noopener noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sarthak-thakur/" target="_blank" rel="noopener noreferrer"><LinkedInIcon/></a>
            <a href="https://x.com/Sarthakt20" target="_blank" rel="noopener noreferrer"><TwitterIcon/></a>
            <a href="mailto:sarthakthakur2045@gmail.com"><GmailIcon/></a>
        </div>
        <p className="footer-note">Crafted with care by Sarthak Thakur</p>
      </footer>
    </>
  );
}

export default App;
