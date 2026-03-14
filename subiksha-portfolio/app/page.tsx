export default function Home() {
  return (
    <main>
      {/* =========================
          SECTION 1: NAVBAR PLACEHOLDER
          We will properly design this later.
          For now it stays simple.
          ========================= */}
      <section className="navbar-section">
        <div className="navbar-brand">
          <span className="brand-mark">SV</span>
          <span className="brand-name">Subiksha Vaidhyanathan</span>
        </div>

        <nav className="navbar-links">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </section>


      {/* =========================
          SECTION 2: HERO SECTION
          This is the first major section of the portfolio.
          It introduces who I am and what kind of work I do.
          ========================= */}
      <section className="hero-section">
        {/* Left side:
            Main intro content */}
        <div className="hero-text">
          <p className="hero-eyebrow">Data Science • Database Engineering • Software Development</p>

          <h1>Subiksha Vaidhyanathan</h1>

          <p className="hero-description">
            I am a Computer Science student interested in data science, database 
            engineering, and software development. My current work focuses on building
            AI- and data-driven solutions, especially in health-related spaces where
            technology can help solve meaningful real-world problems.
          </p>

          {/* Hero buttons:
              These are placeholders for now.
              Later we can connect them to sections, GitHub, and resume. */}
          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View Projects
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>

            <a href="#" className="secondary-button">
              Download Resume
            </a>
          </div>
        </div>

        {/* Right side:
            A small summary card that highlights your focus areas */}
        <div className="hero-card">
          <p className="hero-card-label">Current Focus</p>

          <ul>
            <li>Research student in DASH Lab (Data Science for Health Lab)</li>
            <li>Building AI and data-driven solutions for medical and health problems</li>
            <li>Exploring data science, analytics, and applied machine learning</li>
            <li>Strengthening software development through practical project building</li>
          </ul>
        </div>
      </section>

      {/* =========================
          SECTION 3: FEATURED PROJECTS
          This will later show your strongest projects
          such as Flow Survey, Penny Bread, and Event Management
          ========================= */}
      <section id="projects">
        <h2>Featured Projects</h2>
      </section>

      {/* =========================
          SECTION 4: ABOUT
          This section will introduce who you are
          ========================= */}
      <section id="about" className="about-section">
        {/* Left side:
          Main About content */}
        <div className="about-text">
          <p className="section-tag">About Me</p>

          <h2>Blending data, research, and software to solve meaningful problems</h2>

          <p className="about-description">
            I am a Computer Science student at Wright State University with interests
            in data science, database engineering, and software development. I enjoy
            building applications that are not only technically strong, but also
            practical, clear, and useful for real people.
          </p>

          <p className="about-description">
            My current research work in DASH Lab focuses on data science for health,
            where projects are centered around creating data-driven and AI-supported
            solutions for medical and health-related challenges. Alongside that, I
            continue building software projects that strengthen my frontend,
            application design, and problem-solving skills.
          </p>
        </div>

        {/* Right side:
          Quick highlight cards */}
        <div className="about-highlights">
          <div className="highlight-box">
            <p className="highlight-label">Education</p>
            <h3>B.S. Computer Science</h3>
            <p>Wright State University</p>
          </div>

          <div className="highlight-box">
            <p className="highlight-label">Primary Interests</p>
            <h3>Data Science & Databases</h3>
            <p>With software development as a strong complementary path</p>
          </div>

          <div className="highlight-box">
            <p className="highlight-label">Research</p>
            <h3>DASH Lab</h3>
            <p>Data Science for Health and medically relevant data-driven systems</p>
          </div>

          <div className="highlight-box">
            <p className="highlight-label">Strengths</p>
            <h3>UI + Problem Solving</h3>
            <p>Clean interfaces, structured thinking, and project-based learning</p>
          </div>
        </div>
      </section>


      {/* =========================
          SECTION 5: SKILLS
          This will later list your technical skills
          in a clean grouped format
          ========================= */}
      <section id="skills">
        <h2>Skills</h2>
      </section>

      {/* =========================
          SECTION 6: EXPERIENCE
          This will later show TA work, research work,
          and other professional experience
          ========================= */}
      <section id="experience">
        <h2>Experience</h2>
      </section>

      {/* =========================
          SECTION 7: LEADERSHIP / AWARDS
          This will highlight leadership and achievements
          ========================= */}
      <section>
        <h2>Leadership & Awards</h2>
      </section>

      {/* =========================
          SECTION 8: CONTACT
          This will later contain email, GitHub, LinkedIn,
          and a call to action
          ========================= */}
      <section id="contact">
        <h2>Contact</h2>
      </section>
    </main>
  );
}
