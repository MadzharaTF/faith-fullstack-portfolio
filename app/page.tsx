'use client';

const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  Backend: ["Node.js", "REST APIs", "Java", "Spring Boot", "Server Actions"],
  "Data & Cloud": ["Firebase", "Firestore", "SQL", "PostgreSQL", "MongoDB"],
  "Testing & Quality": ["Unit Testing", "Firebase Emulator", "Jest / Vitest", "ESLint", "Git Hygiene"],
  Tools: ["Git", "GitHub", "pnpm", "VS Code", "Zoho Projects", "Zoho CRM"],
};

const projects = [
  {
    title: "Smart Services Booking System",
    description:
      "A full-stack booking platform with a React frontend and Node/Express backend, featuring REST APIs, database integration and service-booking workflows.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "REST API"],
    github: "https://github.com/MadzharaTF",
    live: "#",
  },
  {
    title: "Banking System",
    description:
      "A web banking application with state management, backend APIs, database integration and monitoring through Prometheus and Grafana.",
    tech: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/MadzharaTF",
    live: "#",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav container">
        <a className="brand" href="#home">FM.</a>
        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero container">
        <div>
          <p className="eyebrow">FULL-STACK SOFTWARE DEVELOPER</p>
          <h1>Hi, I’m <span>Faith.</span><br />I build useful digital products.</h1>
          <p className="heroText">
            I create responsive web applications with modern frontend and backend technologies,
            with experience across React, Next.js, TypeScript, Firebase, APIs, databases, testing and software delivery.
          </p>
          <div className="actions">
            <a className="btn primary" href="#projects">View My Projects</a>
            <a className="btn" href="https://github.com/MadzharaTF" target="_blank">GitHub</a>
            <a className="btn" href="/Faith_Madzhara_CV.pdf">Download CV</a>
          </div>
        </div>
        <div className="codeCard" aria-label="developer profile summary">
          <div className="dots"><i></i><i></i><i></i></div>
          <pre>{`const developer = {
  name: "Faith Madzhara",
  role: "Full-Stack Developer",
  location: "Johannesburg, SA",
  strengths: [
    "React & Next.js",
    "APIs & Backend",
    "Firebase & Databases",
    "Testing & Delivery"
  ],
  availableFor: "Opportunities"
};`}</pre>
        </div>
      </section>

      <section id="about" className="section container twoCol">
        <div>
          <p className="eyebrow">ABOUT ME</p>
          <h2>Developer focused on building reliable, user-friendly software.</h2>
        </div>
        <div className="bodyText">
          <p>
            I’m a software developer with hands-on experience working across frontend, backend,
            authentication, databases, testing and deployment-focused development. I enjoy turning
            requirements into clean, maintainable features that solve real user problems.
          </p>
          <p>
            My current experience includes full-stack application development, Firebase and Firestore,
            authorization, report workflows, code-quality improvements, GitHub collaboration and project coordination.
          </p>
        </div>
      </section>

      <section id="skills" className="section container">
        <p className="eyebrow">TECHNICAL SKILLS</p>
        <h2>Tools I use to build and ship software.</h2>
        <div className="skillGrid">
          {Object.entries(skills).map(([group, items]) => (
            <article className="card" key={group}>
              <h3>{group}</h3>
              <div className="tags">
                {items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section container">
        <p className="eyebrow">EXPERIENCE</p>
        <div className="timelineCard">
          <div className="roleHead">
            <div>
              <h2>Software Developer Intern</h2>
              <p>Centrax Digital · May 2026 – Present</p>
            </div>
            <span>Johannesburg / Remote</span>
          </div>
          <ul>
            <li>Develop and maintain frontend features for the TPT App Development project using Next.js, React and TypeScript.</li>
            <li>Build responsive, reusable interfaces and integrate frontend functionality with backend services and REST APIs.</li>
            <li>Work with Firebase Authentication, Firestore, Storage, security rules and permission-aware application flows.</li>
            <li>Work with Zoho CRM, Zoho Projects and Zoho Creator to support business processes, application configuration and project workflows.</li>
            <li>Configure, test and validate Zoho workflows, checking automation logic and expected system behaviour.</li>
            <li>Create and test Zoho Blueprints to define process stages, transitions and workflow requirements.</li>
            <li>Test Zoho configurations and business processes, identify issues and verify that workflows and Blueprints operate as intended.</li>
            <li>Debug frontend, backend and integration issues using tests, logs, reproducible steps and validation checks.</li>
            <li>Write and maintain technical documentation, implementation notes, project updates and development handover information.</li>
            <li>Use Git and GitHub for branching, pull requests, code reviews and collaborative development workflows.</li>
            <li>Contribute to planning, task tracking, risk identification and communication of blockers and dependencies.</li>
          </ul>
        </div>
        <div className="timelineCard">
          <div className="roleHead">
            <div>
              <h2>Full Stack Developer Intern</h2>
              <p>CAPACITI · Nov 2025 – Present</p>
            </div>
            <span>Braamfontein</span>
          </div>
          <ul>
            <li>Develop web applications using React, JavaScript, HTML5 and CSS3 with a focus on usable frontend experiences.</li>
            <li>Build and integrate frontend interfaces with Node.js backends, REST APIs and application databases.</li>
            <li>Debug frontend, backend and integration issues and improve application reliability through testing and verification.</li>
            <li>Develop practical projects including a banking system, salon booking system, AI portfolio and chatbot.</li>
          </ul>
        </div>
        <div className="timelineCard">
          <div className="roleHead">
            <div>
              <h2>Technical Support Agent</h2>
              <p>Startek · Dec 2024 – Jul 2025</p>
            </div>
            <span>Sunninghill, Sandton</span>
          </div>
          <ul>
            <li>Troubleshot technical and network issues and configured routers to resolve user problems.</li>
            <li>Provided first-line user support and communicated technical information clearly to non-technical users.</li>
            <li>Escalated issues where appropriate and developed strong evidence-based troubleshooting and customer support skills.</li>
          </ul>
        </div>
      </section>

      <section id="projects" className="section container">
        <p className="eyebrow">FEATURED PROJECTS</p>
        <h2>Selected work.</h2>
        <div className="projectsGrid">
          {projects.map((project) => (
            <article className="projectCard" key={project.title}>
              <div className="projectIndex">0{projects.indexOf(project) + 1}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tech.map((item) => <span key={item}>{item}</span>)}
              </div>
              <div className="projectLinks">
                <a href={project.github} target="_blank">GitHub ↗</a>
                <a href={project.live}>Live Demo ↗</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section container contact">
        <p className="eyebrow">CONTACT</p>
        <h2>Interested in working together?</h2>
        <p>I'm open to software developer, junior full-stack and frontend opportunities.</p>
        <div className="actions">
          <a className="btn primary" href="mailto:liedziey@icloud.com">Email Me</a>
          <a className="btn" href="https://www.linkedin.com/in/YOUR-LINKEDIN" target="_blank">LinkedIn</a>
          <a className="btn" href="https://github.com/MadzharaTF" target="_blank">GitHub</a>
        </div>
      </section>

      <footer className="container footer">
        <span>© 2026 Faith Madzhara</span>
        <span>Built with Next.js + TypeScript</span>
      </footer>
    </main>
  );
}
