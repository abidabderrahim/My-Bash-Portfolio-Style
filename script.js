const devData = {
  summary: [
    "My name is Abderrahim Abid, a Full-Stack Developer, UI/UX Designer, and QA & Automation Specialist based in Casablanca, Morocco.",
    "Practical experience in web development, user-centered design, and freelance projects for web applications.",
    "Passionate about continuous learning, creating high-performance digital solutions, and working remotely on global projects.",
  ],

  info: {
    name: "Abderrahim Abid",
    title: "Full-Stack Developer | UI/UX Designer | QA & Automation Specialist",
    email: "abidabderrahim.work@gmail.com",
    phone: "+212 632-473292",
    location: "Casablanca, Morocco",
    age: 25,
    linkedin: "https://linkedin.com/in/abidabderrahim",
    github: "https://github.com/abidabderrahim",
  },

  skills: {
    programmingLanguages: ["JavaScript", "Python", "C"],
    frontEnd: ["HTML5", "CSS3"],
    design: ["UI/UX Design", "Figma", "Responsive Design"],
    personalSkills: [
      "Problem Solving",
      "Communication",
      "Self-Learning",
      "Time Management",
      "Attention to Detail",
    ],
    tools: ["Git", "GitHub", "VS Code", "Linux Terminal"],
    spokenLanguages: {
      Arabic: "Native",
      English: "Intermediate",
      French: "Beginner",
    },
  },

  experience: [
    {
      role: "UI/UX Designer",
      company: "ALX Ventures / 2pi Startup",
      period: "2024 - Present",
      description:
        "Worked on user-centered design and smooth product experiences.",
    },
    {
      role: "Freelance Developer & Designer",
      period: "2023 - Present",
      description: "Delivering web solutions remotely for various clients.",
    },
    {
      role: "Various Jobs (Painter, Tailor, Commerce)",
      period: "2020 - 2023",
      description:
        "Developed communication, interpersonal skills, responsibility, and commitment.",
    },
  ],

  education: [
    {
      degree: "High School Diploma in Physics",
      institution: "Lycée Imam Ghazali, Morocco",
      year: 2020,
    },
    {
      degree: "Continuous Learning & Professional Development",
      institution:
        "ALX Professional Foundations, AI Career Essentials, IBM SkillsBuild Courses",
      period: "2023 - Present",
    },
  ],

  certifications: [
    "IBM SkillsBuild: Web Developer Fundamentals",
    "User Experience Design Fundamentals",
    "Exploring Emerging Technologies",
    "Cybersecurity Fundamentals",
  ],

  hobbies: [
    "Reading tech blogs",
    "Exploring new design trends",
    "Coding personal projects",
    "Weight training",
    "Long-distance running",
    "Hiking",
    "Photography",
    "Traveling",
  ],

  projects: [
    {
      name: "Personal Developer Portfolio",
      link: "https://github.com/abidabderrahim",
      image: "images/project6.jpg",
    },
    {
      name: "E-commerce Store",
      link: "https://github.com/abidabderrahim",
      image: "images/project5.png",
    },
    {
      name: "QA Automation Suite",
      link: "https://github.com/abidabderrahim",
      image: "images/project7.jpg",
    },
  ],
};

const highlight = {
  keyword: (text) => `<span class="keyword">${text}</span>`, // for commands or keywords
  type: (text) => `<span class="type">${text}</span>`,       // for variable names
  string: (text) => `<span class="string">"${text}"</span>`, // for strings
  number: (text) => `<span class="number">${text}</span>`,
  comment: (text) => `<span class="comment"># ${text}</span>`, // Bash comment style
};

const content1 = document.querySelector(".content1");

// Profile title
let titleHTML = `<div class="portfolio-title">
<pre>
${highlight.comment("Profile Information")}
${highlight.type("TITLE")}=${highlight.string("My Portfolio")}
</pre></div>`;

// Skills sections
let skillsHTML = `<div class="skills">
<h3>${highlight.comment("Skills")}</h3>

<pre>
${highlight.comment("Programming Languages")}
${devData.skills.programmingLanguages.map(i => `${highlight.type(i).toLowerCase()}=true`).join("\n")}

${highlight.comment("Front-End")}
${devData.skills.frontEnd.map(i => `${highlight.type(i).toLowerCase()}=true`).join("\n")}

${highlight.comment("Design")}
${devData.skills.design.map(i => `${highlight.type(i).toLowerCase()}=true`).join("\n")}

${highlight.comment("Personal Skills")}
${devData.skills.personalSkills.map(i => `${highlight.type(i).toLowerCase()}=true`).join("\n")}

${highlight.comment("Tools")}
${devData.skills.tools.map(i => `${highlight.type(i).toLowerCase()}=true`).join("\n")}

${highlight.comment("Spoken Languages")}
${Object.entries(devData.skills.spokenLanguages).map(([lang, level]) => `${highlight.type(lang).toLowerCase()}=${highlight.string(level)}`).join("\n")}
</pre>
</div>`;

content1.innerHTML = titleHTML + skillsHTML;

const content2 = document.querySelector(".content2");

// Summary
const summaryHTML = `<div class="summary">
<h3>${highlight.comment("Summary")}</h3>
<pre>
${devData.summary.map(s => `${highlight.comment(s)}`).join("\n")}
</pre>
</div>`;

// Info section using shell variables + links
const infoHTML = `<div class="info">
<h3>${highlight.comment("Info")}</h3>
<pre>
${highlight.type("NAME")}=${highlight.string(devData.info.name)}
${highlight.type("TITLE")}=${highlight.string(devData.info.title)}
${highlight.type("EMAIL")}=<a href="mailto:${devData.info.email}" style="color: var(--text-main-b); text-decoration:none;">${highlight.string(devData.info.email)}</a>
${highlight.type("PHONE")}=<a href="tel:${devData.info.phone}" style="color: var(--text-main-b); text-decoration:none;">${highlight.string(devData.info.phone)}</a>
${highlight.type("LOCATION")}=<a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(devData.info.location)}" target="_blank" style="color: var(--text-main-b); text-decoration:none;">${highlight.string(devData.info.location)}</a>
${highlight.type("AGE")}=${highlight.number(devData.info.age)}
${highlight.type("LINKEDIN")}=<a href="${devData.info.linkedin}" target="_blank" style="color: var(--text-main-b); text-decoration:none;">${highlight.string(devData.info.linkedin)}</a>
${highlight.type("GITHUB")}=<a href="${devData.info.github}" target="_blank" style="color: var(--text-main-b); text-decoration:none;">${highlight.string(devData.info.github)}</a>
</pre></div>`;

// Experience functions
const experienceHTML = `<div class="experience">
<h3>${highlight.comment("Experience")}</h3>
${devData.experience.map((e, i) => `<pre>
${highlight.keyword("function")} experience${i + 1}() {
    ${highlight.type("ROLE")}=${highlight.string(e.role)}
    ${highlight.type("COMPANY")}=${highlight.string(e.company || "")}
    ${highlight.type("PERIOD")}=${highlight.string(e.period)}
    ${highlight.type("DESCRIPTION")}=${highlight.string(e.description)}
}
</pre>`).join("")}
</div>`;

// Education functions
const educationHTML = `<div class="education">
<h3>${highlight.comment("Education")}</h3>
${devData.education.map((e, i) => `<pre>
${highlight.keyword("function")} education${i + 1}() {
    ${highlight.type("DEGREE")}=${highlight.string(e.degree)}
    ${highlight.type("INSTITUTION")}=${highlight.string(e.institution)}
    ${highlight.type("YEAR_OR_PERIOD")}=${highlight.string(e.year || e.period)}
}
</pre>`).join("")}
</div>`;

// Projects
const projectsHTML = `<div class="projects">
<h3>${highlight.comment("Projects")}</h3>
<pre>
${devData.projects.map(p => `${highlight.type(p.name)}=<a href="${p.link}" target="_blank" style="color: var(--text-main-b); text-decoration:none;">${highlight.string(p.name)}</a>`).join("\n")}
</pre>
</div>`;

// Certifications
const certificationsHTML = `<div class="certifications">
<h3>${highlight.comment("Certifications")}</h3>
<pre>
${devData.certifications.map(c => `CERT_${highlight.type(c).toLowerCase().replace(/ /g,"_")}=${highlight.string(c)}`).join("\n")}
</pre></div>`;

// Hobbies
const hobbiesHTML = `<div class="hobbies">
<h3>${highlight.comment("Hobbies")}</h3>
<pre>
${devData.hobbies.map(h => `${highlight.type(h).toLowerCase().replace(/ /g,"_")}=true`).join("\n")}
</pre></div>`;

content2.innerHTML = summaryHTML + infoHTML + experienceHTML + educationHTML + projectsHTML + certificationsHTML + hobbiesHTML;