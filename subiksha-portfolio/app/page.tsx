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
          This will later show my projects
          such as Flow Survey, Penny Bread, and Event Management
          ========================= */}
      <section id="projects" className="projects-section">
        <div className="projects-header">
          <p className="section-tag">Featured Projects</p>
          <h2>Projects </h2>
          <p className="projects-intro">
            These projects highlight different parts of my experience, including
            research-focused development, frontend application building, full-stack
            design, and practical tools built around real user needs.
          </p>
        </div>
        <div className="projects-grid">
          <article className="project-card featured-project">
            <p className="project-label">Research + Mobile + Data analysis</p>
            <h3>Flow Survey Application</h3>
            <p className="project-description">
              Building an Android-based research application that helps us determine our flow state better 
              where the application is connected to Firebase to store data,
              helping improve data collection, authentication behavior, persistence,
              and usability and the kotlin anroid application is used an user-interface mode to collect data.
            </p>
            <div className="project-chip-group">
              <span className="project-chip">Kotlin</span>
              <span className="project-chip">Android application</span>
              <span className="project-chip">Firebase</span>
            </div>
          </article>
          <article className="project-card">
            <p className="project-label">Frontend + Database</p>
            <h3>Penny Bread</h3>
            <p className="project-description">
              Built an application focused on helping users make smarter,
              budget-conscious grocery decisions through structured UI, filtering,
              and useful data presentation.
            </p>
            <div className="project-chip-group">
              <span className="project-chip">AngularJS</span>
              <span className="project-chip">SQL Database</span>
              <span className="project-chip">Flask</span>
              <span className="project-chip">Python</span>
            </div>
          </article>
          <article className="project-card">
            <p className="project-label">Full-Stack App</p>
            <h3>Master Chef</h3>
            <p className="project-description">
              Developed a recipe and pantry-oriented application that features
              ingredient tracking, meal planning support, and stores the recipe data and
              real time cooking management for a smoother cooking workflow.
            </p>
            <div className="project-chip-group">
              <span className="project-chip">Firebase</span>
              <span className="project-chip">AngularJS</span>
              <span className="project-chip">Typescript</span>
              <span className="project-chip">Bootstrap</span>
            </div>
          </article>
        </div>
      </section>

      {/* =========================
          SECTION 4: ABOUT
          This section will introduce who I am
          ========================= */}
      <section id="about" className="about-section">
        {/* Left side:
          Main About content */}
        <div className="about-text">
          <p className="section-tag">About Me</p>

          <h2>My Aspirations</h2>

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
          This will list my technical skills
          ========================= */}
      <section id="skills" className="skills-section">
        <div className="skills-header">
          <p className="section-tag">Skills</p>
          <h2>Technical skills</h2>
          <p className="skills-intro">
            My work combines software development, data-focused problem solving,
            research applications, and interface design. These are the main tools
            and technologies I am currently building with and continuing to grow in.
          </p>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <p className="skill-card-label">Languages</p>
            <div className="skill-chip-group">
              <span className="skill-chip">Java</span>
              <span className="skill-chip">Python</span>
              <span className="skill-chip">C++</span>
              <span className="skill-chip">JavaScript</span>
              <span className="skill-chip">TypeScript</span>
              <span className="skill-chip">Kotlin</span>
            </div>
          </div>

          <div className="skill-card">
            <p className="skill-card-label">Frontend</p>
            <div className="skill-chip-group">
              <span className="skill-chip">Angular</span>
              <span className="skill-chip">Bootstrap</span>
              <span className="skill-chip">Tailwind</span>
              <span className="skill-chip">HTML/CSS</span>
            </div>
          </div>

          <div className="skill-card">
            <p className="skill-card-label">Database / Backend</p>
            <div className="skill-chip-group">
              <span className="skill-chip">MySQL</span>
              <span className="skill-chip">MongoDB</span>
              <span className="skill-chip">Firebase</span>
            </div>
          </div>

          <div className="skill-card">
            <p className="skill-card-label">Data / ML</p>
            <div className="skill-chip-group">
              <span className="skill-chip">Pandas</span>
              <span className="skill-chip">NumPy</span>
              <span className="skill-chip">Matplotlib</span>
              <span className="skill-chip">Seaborn</span>
              <span className="skill-chip">scikit-learn</span>
            </div>
          </div>
        </div>
      </section>


      {/* =========================
          SECTION 6: EXPERIENCE
          This will later my TA work, research work,
          and other professional experience
          ========================= */}
      <section id="experience" className="experience-section">
        <div className="experience-header">
          <p className="section-tag">Experience</p>
          <h2>Work Experience</h2>
          <p className="experience-intro">
            My experience so far combines teaching support, research-oriented work,
            and hands-on technical problem solving. These roles have helped me grow
            not only in coding, but also in communication, structured thinking, and
            building systems that are useful in real settings.
          </p>
        </div>
        <div className="experience-list">
          <article className="experience-card">
            <div className="experience-top">
              <div>
                <p className="experience-place">DASH Lab — Data Science for Health Lab</p>
                <h3>Research Student </h3>
              </div>  
              <span className="experience-type">Current</span>
            </div>
            <p className="experience-description">
              Contributing to research-focused technical work centered on data science
              for health. The lab’s projects involve building data-driven and
              AI-supported solutions that help address medical and health-related
              problems through applied computing and analysis.
            </p>
            <div className="experience-tags">
              <span>Data analysis</span>
              <span>Software Application</span>
              <span>AI / Data Science</span>
              <span>Machine learning</span>
            </div>
          </article>
          <article className="experience-card">
            <div className="experience-top">
              <div>
                <p className="experience-place">Wright State University </p>
                <h3>Undergraduate Teaching Assistant</h3>
              </div>
              <span className="experience-type">Current</span>
            </div>
            <p className="experience-description">
              Supported students in understanding programming concepts, debugging, and
              coursework-related problem solving. This role strengthened my ability to
              explain technical ideas clearly, guide others through logic step by
              step, and communicate effectively in academic settings.
            </p>
            <div className="experience-tags">
              <span>Teaching</span>
              <span>Debugging</span>
              <span>Programming Support</span>
              <span>Technical Communication and documentation</span>
            </div>
          </article>
        </div>
      </section>

      {/* =========================
          SECTION 7: LEADERSHIP / AWARDS
          This will highlight leadership and achievements
          ========================= */}
      <section id="leadership" className="leadership-section">
        <div className="leadership-header">
          <p className="section-tag">Community Engagement</p>
          <h2>Leadership & Awards</h2>
          <p className="leadership-intro">
            Alongside technical and academic work, I have also taken on leadership
            roles that strengthened my communication, collaboration, and
            people-centered problem solving. These experiences helped me grow in ways
            that support both team environments and long-term professional development.
          </p>
        </div>
        <div className="leadership-grid">
          <article className="leadership-card">
            <p className="leadership-label">Leadership Role</p>
            <h3>Vice President of Community Council</h3>
            <p className="leadership-description">
              Helped support community engagement, planning, and coordination through
              leadership responsibilities centered around communication, organization,
              and collaborative decision making.
            </p>
          </article>
          <article className="leadership-card">
            <p className="leadership-label">Leadership Role</p>
            <h3>Vice President of Recruitment</h3>
            <p className="leadership-description">
              Contributed to outreach, recruitment efforts, and organizational growth
              while developing stronger skills in planning, representation, and
              relationship building.
            </p>
          </article>
          <article className="leadership-card">
            <p className="leadership-label">Recognition</p>
            <h3>NRHH Bronze Pin Award</h3>
            <p className="leadership-description">
              Received recognition that reflects meaningful contribution, service,
              and involvement through leadership and community-based work.
            </p>
          </article>
        </div>
      </section>

      {/* =========================
          SECTION 8: CONTACT
          This will later contain email, GitHub, LinkedIn,
          ========================= */}
      <section id="contact" className="contact-section">
        <div className="contact-left">
          <p className="section-tag">Contact</p>
          <h2>Contact Information</h2>
          <p className="contact-intro">
            I am currently interested in opportunities related to data science,
            database engineering, research-driven development, and software projects
            that solve practical problems. Feel free to reach out for internships,
            collaborations, or technical conversations.
          </p>
        </div>
        <div className="contact-right">
          <div className="contact-card">
            <p className="contact-label">Email</p>
            <a href="mailto:subikshasvaidhyanathan@gmail.com" className="contact-link"> subikshasvaidhyanathan@gmail.com </a>
          </div>
          <div className="contact-card">
            <p className="contact-label">GitHub</p>
            <a href="https://github.com/subixsh04" target="_blank" rel="noreferrer" className="contact-link"> github.com/subixsh04 </a>
          </div>
          <div className="contact-card">
            <p className="contact-label">LinkedIn</p>
            <a href="https://www.linkedin.com/in/subiksha04/" className="contact-link"> LinkedIn/subixsh04 </a>
          </div>
        </div>
      </section>
    </main>
  );
}
