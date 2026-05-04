const projects = [
  {
    title: "Flow Survey Application",
    date: "Aug 2025 – Present",
    description:
      "Android research application for collecting and analyzing flow-state survey data with Firebase-backed storage and authentication.",
    tags: ["Kotlin", "Android", "Firebase", "Research"],
    link: "https://github.com/subixsh04/Flow-survey-application",
    featured: true,
  },
  {
    title: "Penny Bread",
    date: "2026",
    description:
      "Budget-focused grocery decision tool using structured UI, filtering, SQL data, Flask, and Python-backed processing.",
    tags: ["Angular", "SQL", "Flask", "Python"],
    link: "https://github.com/subixsh04/Penny-Bread",
  },
  {
    title: "Master Chef",
    date: "Spring 2025",
    description:
      "Recipe and pantry management app with Firebase storage, authentication, timers, and dynamic shopping-list features.",
    tags: ["Angular", "Firebase", "TypeScript", "Bootstrap"],
    link: "https://github.com/subixsh04",
  },
  {
    title: "Crime Prediction System",
    date: "Spring 2024",
    description:
      "Machine learning project analyzing crime datasets with visualizations and model comparison between regression and neural networks.",
    tags: ["Python", "Pandas", "NumPy", "ML"],
    link: "https://github.com/subixsh04/Data-Detectives",
  },
];

const skills = [
  ["</>", "Java • Python • C++", "Programming Languages"],
  ["▣", "JavaScript • TypeScript • Kotlin", "Development"],
  ["◈", "Angular • Bootstrap • Tailwind", "Frontend"],
  ["◎", "MySQL • MongoDB • Firebase", "Databases"],
  ["◆", "Pandas • NumPy • scikit-learn", "Data / ML"],
  ["▥", "Matplotlib • Seaborn", "Visualization"],
  ["⌘", "GitHub • VS Code • DBeaver", "Tools"],
  ["✦", "Communication • Leadership", "Professional Skills"],
];

export default function Home() {
  return (
    <main>
      <nav className="top-nav">
        <a href="#home" className="brand">
          Subiksha Vaidhyanathan <span>| Data Science & Software</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-inner">
          <div className="profile-orb">
            <img src="/profile.png" alt="Subiksha Vaidhyanathan" />
          </div>

          <h1>
            Subiksha <span>Vaidhyanathan</span>
          </h1>

          <p className="hero-subtitle">
            Computer Science student building data-driven, health-focused, and
            software-powered solutions.
          </p>

          <div className="hero-actions">
            <a href="https://github.com/subixsh04" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/subiksha04/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="/Subiksha_Resume.pdf" target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>

          <a href="#about" className="scroll-cue">↓</a>
        </div>
      </section>

      <section id="about" className="light-section">
        <h2>
          About <span>Me</span>
        </h2>

        <div className="about-card">
          <p>
            I am a <strong>Computer Science student at Wright State University</strong>{" "}
            interested in <strong>data science, database engineering, and software
            development</strong>. I enjoy building applications that are practical,
            clear, and useful for real people.
          </p>

          <p>
            My current research work in <strong>DASH Lab</strong> focuses on data
            science for health, where projects center around creating AI-supported
            and data-driven solutions for medical and health-related challenges.
          </p>

          <p>
            I am especially interested in work that combines data, software,
            research, and human-centered problem solving.
          </p>
        </div>

        <div className="about-highlights">
          <article>
            <div className="icon-box">✦</div>
            <h3>Health Data Research</h3>
            <p>Working in DASH Lab on data science solutions for health-related problems.</p>
          </article>

          <article>
            <div className="icon-box">◎</div>
            <h3>Data & Databases</h3>
            <p>Focused on analytics, ML fundamentals, MySQL, MongoDB, and Firebase.</p>
          </article>

          <article>
            <div className="icon-box">⌘</div>
            <h3>Software Builder</h3>
            <p>Building frontend, Android, and full-stack applications through projects.</p>
          </article>
        </div>
      </section>

      <section id="skills" className="light-section">
        <h2>
          My <span>Skills</span>
        </h2>

        <div className="skills-grid">
          {skills.map(([icon, title, category]) => (
            <article className="skill-card" key={title}>
              <div className="skill-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{category}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="light-section">
        <h2>
          Work <span>Experience</span>
        </h2>

        <div className="timeline">
          <article className="timeline-card">
            <div className="timeline-dot" />
            <div>
              <h3>Research Student</h3>
              <p className="place">DASH Lab — Data Science for Health Lab</p>
              <p className="date">Aug 2025 – Present</p>
              <ul>
                <li>Contributing to health-focused data science and applied computing research.</li>
                <li>Building Android and Firebase-supported tools for research data collection.</li>
                <li>Improving data persistence, authentication, and visualization workflows.</li>
              </ul>
            </div>
          </article>

          <article className="timeline-card">
            <div className="timeline-dot" />
            <div>
              <h3>Undergraduate Teaching Assistant</h3>
              <p className="place">Wright State University</p>
              <p className="date">Aug 2023 – Present</p>
              <ul>
                <li>Mentor students in Java programming, debugging, and problem solving.</li>
                <li>Support lab assignments, demos, and project-based learning.</li>
                <li>Provide feedback to improve code quality and technical understanding.</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section id="projects" className="light-section">
        <h2>
          Featured <span>Projects</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className={project.featured ? "project-card featured" : "project-card"} key={project.title}>
              <div className="project-date">▣ {project.date}</div>
              {project.featured && <span className="featured-pill">Featured</span>}

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <a href={project.link} target="_blank" rel="noreferrer" className="details-link">
                View Details ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="education" className="light-section">
        <h2>
          My <span>Education</span>
        </h2>

        <div className="education-timeline">
          <article className="education-card">
            <div className="icon-box">🎓</div>
            <div>
              <h3>Master of Science in Data Science</h3>
              <p>Wright State University</p>
              <span>Expected December 2027</span>
            </div>
          </article>

          <article className="education-card">
            <div className="icon-box">🏅</div>
            <div>
              <h3>Bachelor of Science in Computer Science</h3>
              <p>Wright State University</p>
              <span>Expected December 2026</span>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>
          Let’s <span>Connect</span>
        </h2>

        <p className="contact-intro">
          I am open to internships, research opportunities, data science roles,
          database-focused work, and software development collaborations.
        </p>

        <div className="contact-grid">
          <a href="mailto:subikshasvaidhyanathan@gmail.com">
            <span>✉</span>
            <div>
              <p>Email</p>
              <strong>subikshasvaidhyanathan@gmail.com</strong>
            </div>
          </a>

          <a href="https://github.com/subixsh04" target="_blank" rel="noreferrer">
            <span>⌘</span>
            <div>
              <p>GitHub</p>
              <strong>github.com/subixsh04</strong>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/subiksha04/" target="_blank" rel="noreferrer">
            <span>in</span>
            <div>
              <p>LinkedIn</p>
              <strong>linkedin.com/in/subiksha04</strong>
            </div>
          </a>
        </div>

        <a href="mailto:subikshasvaidhyanathan@gmail.com" className="contact-button">
          Get In Touch
        </a>
      </section>

      <footer>
        <p>© 2026 Subiksha Vaidhyanathan. All rights reserved.</p>
        <p>Built with Next.js and soft luxury UI design.</p>
      </footer>
    </main>
  );
}