// menu toggle button
let setMenuBtn = function () {
  let menuBtn = document.querySelector("nav .bars");
  menuBtn.onclick = () => menuBtn.closest("nav").classList.toggle("open");
};

// set wavy class name
let setWavyStyles = function () {
  let sections = document.querySelectorAll("body > section:not(.landing)");
  sections.forEach((section) => {
    section.classList.add("wavy");
  });
  let footer = document.querySelector("body > footer");
  footer.classList.add("wavy");
};

// setup scroll button
let setScrollBtn = function () {
  let scrollBtn = document.querySelector(".scroll-btn");
  document.addEventListener("scroll", () => {
    if (window.scrollY > 1000) {
      scrollBtn.classList.add("active");
    } else {
      scrollBtn.classList.remove("active");
    }
  });
  scrollBtn.addEventListener("click", () => window.scroll(0, 0));
};

// loading content

// loading nav links and resume links
let loadLinks = function () {
  fetch("/data/nav.json")
    .then((response) => response.json())
    .then((data) => {
      let linkList = document.querySelector("header ul");
      data.navLinks.forEach(navLink => {
        let li = document.createElement("li");
        let link = document.createElement("a");
        link.setAttribute("href", navLink.href);
        link.textContent = navLink.title;

        li.appendChild(link);
        linkList.appendChild(li);
      });

      // set resume button
      let resumeBtns = document.querySelectorAll(".resume-link");
      resumeBtns.forEach(btn => btn.setAttribute("href", data.resumeUrl));
    });
};

let loadInfo = function() {
  fetch("/data/info.json")
  .then(response => response.json())
  .then(infos => {
    let cards = document.querySelector(".about-me .cards")
    infos.forEach(info => {
      let card  = document.createElement("div");
      card.className = "card";

      let icon = document.createElement("i");
      icon.className = `icon ${info.icon}`;

      let title = document.createElement("h3");
      title.textContent = info.title;

      let desc = document.createElement("p");
      desc.textContent = info.description;

      card.append(icon, title, desc);
      cards.appendChild(card);
    });
  });
}

let addSkill = function (skill) {
  let skillsContent = document.querySelectorAll(".skills .cards")[0];
  let skillElement = document.createElement("div");
  skillElement.className = "card";

  const icon = document.createElement("i");
  icon.className = `icon ${skill.icon}`;

  const title = document.createElement("h3");
  title.className = "title";
  title.textContent = skill.name;

  skillElement.append(icon, title);
  skillsContent.appendChild(skillElement);
};

let loadSkills = function () {
  fetch("/data/skills.json")
    .then((response) => response.json())
    .then((skills) => skills.forEach(addSkill));
};

let addFutureSkill = function (futureSkill) {
  let futureSkillsContent = document.querySelectorAll(".skills .cards")[2];
  let futureSkillElement = document.createElement("div");
  futureSkillElement.className = "card";

  const icon = document.createElement("i");
  icon.className = `icon ${futureSkill.icon}`;

  const title = document.createElement("h3");
  title.className = "title";
  title.textContent = futureSkill.name;

  futureSkillElement.append(icon, title);
  futureSkillsContent.appendChild(futureSkillElement);
};

let loadFutureSkills = function () {
  fetch("/data/future-skills.json")
    .then((response) => response.json())
    .then((skills) => skills.forEach(addFutureSkill));
};

let addExtraSkill = function (futureSkill) {
  let futureSkillsContent = document.querySelectorAll(".skills .cards")[1];
  let futureSkillElement = document.createElement("div");
  futureSkillElement.className = "card";

  const icon = document.createElement("i");
  icon.className = `icon ${futureSkill.icon}`;

  const title = document.createElement("h3");
  title.className = "title";
  title.textContent = futureSkill.name;

  futureSkillElement.append(icon, title);
  futureSkillsContent.appendChild(futureSkillElement);
};

let loadExtraSkills = function () {
  fetch("/data/extra-skills.json")
    .then((response) => response.json())
    .then((skills) => skills.forEach(addExtraSkill));
};

let addProject = function (project) {
  let projectsContent = document.querySelector(".projects .cards");
  let projectElement = document.createElement("div");
  projectElement.className = "card";

  const icon = document.createElement("i");
  icon.className = `icon ${project.icon}`;

  const body = document.createElement("div");
  body.className = "body";

  const title = document.createElement("h3");
  title.className = "title";
  title.textContent = project.title;

  const techStack = document.createElement("span");
  techStack.className = "tech-stack";
  techStack.textContent = project.techStack;

  const status = document.createElement("div");
  status.className = `status ${project.status === "done" ? "done" : "in-prog"}`;

  const statusIcon = document.createElement("i");
  statusIcon.className = project.statusIcon;

  status.appendChild(statusIcon);
  status.appendChild(document.createTextNode(project.status));

  body.append(title, techStack, status);

  if (project.links.github) {
    let link = document.createElement("a");
    link.className = "github-repo";
    link.setAttribute("href", project.links.github);
    link.setAttribute("rel", "noopener");
    link.setAttribute("target", "_blank");
    link.textContent = "GitHub";

    body.appendChild(link);
  }
  if (project.links.live) {
    let link = document.createElement("a");
    link.className = "live-demo";
    link.setAttribute("href", project.links.live);
    link.setAttribute("rel", "noopener");
    link.setAttribute("target", "_blank");
    link.textContent = "Live";

    body.appendChild(link);
  }

  projectElement.append(icon, body);
  projectsContent.appendChild(projectElement);
};

let loadProjects = function () {
  fetch("/data/projects.json")
    .then((response) => response.json())
    .then((projects) => {
      projects.forEach(addProject);
    });
};

let addContacts = function (contacts) {
  // add emails
  let emailsList = document.querySelector(".contact .emails ul");
  contacts.emails.forEach((email) => {
    let li = document.createElement("li");
    let link = document.createElement("a");
    link.setAttribute("href", email);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener");
    link.textContent = email;

    li.appendChild(link);
    emailsList.appendChild(li);
  });

  // add phones
  let phonesList = document.querySelector(".contact .phones ul");
  contacts.phones.forEach((phone) => {
    let li = document.createElement("li");
    let link = document.createElement("a");
    link.setAttribute("href", phone);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener");
    link.textContent = phone;

    li.appendChild(link);
    phonesList.appendChild(li);
  });

  // add social media
  let socialIcons = document.querySelectorAll(".social-icons");
  socialIcons.forEach((instance) => {
    contacts.social.forEach((socialAccount) => {
      let link = document.createElement("a");
      link.setAttribute("href", `${socialAccount.url}`);
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener");

      let icon = document.createElement("i");
      icon.className = socialAccount.icon;

      link.appendChild(icon);
      instance.appendChild(link);
    });
  });
};

let loadContacts = function () {
  fetch("/data/contact.json")
    .then((response) => response.json())
    .then((contacts) => addContacts(contacts));
};

let loadContent = function () {
  loadLinks();
  loadInfo();
  loadSkills();
  loadExtraSkills();
  loadFutureSkills();
  loadProjects();
  loadContacts();
};

loadContent();
setScrollBtn();
setWavyStyles();
setMenuBtn();
