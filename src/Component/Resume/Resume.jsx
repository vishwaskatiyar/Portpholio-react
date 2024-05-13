import { FaBookReader } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { useState } from "react";
import TimeLineItem from "./TimeLineItem";
import SkillItem from "./SkillItem";

const educationData = [
  {
    title: "Bharati Vidyapeeth Deemed University Pune",
    date: "2018 - 2022",
    description: "B.Tech in Information Technology and Engineering",
    cgpa: "CGPA -  9.2",
  },
  {
    title: "Christ the king College",
    date: "2015-2016",
    description: "Class:12",
    cgpa: "per: 70%",
  },
  {
    title: "Christ the king College",
    date: "2013-2014",
    description: "Class:10",
    cgpa: "per: 75%",
  },
];

const experienceData = [
  {
    title: "Geekster: Full-Stack Developer Internship / TA",
    date: "Sep 2023 - Present",
    description:
      "Actively participating in an immersive training program focused on full-stack web development, encompassing HTML5, CSS3, JavaScript, React, and Node.js.\n\nCollaborating with mentors and peers to tackle real-world projects, honing problem-solving skills, and fostering teamwork.\n\nActively engage in assisting fellow trainees in resolving programming doubts, fostering a supportive learning environment.\n\nImplementing best practices in code review, version control, and project management using Git/GitHub, ensuring codebase integrity and collaboration efficiency.",
  },
  {
    title: "Graduate Engineer Trainee: KPIT Technology",
    date: "Aug 2022 - Jul 2023",
    description:
      "Completed a training program in Java programming, gaining hands-on experience in developing robust and scalable applications.\n\nApplied object-oriented design principles to architect and implement software solutions, focusing on modularity, reusability, and maintainability.\n\nCollaborated with cross-functional teams to analyse requirements, design technical solutions, and deliver high-quality software products within project timelines.\n\nParticipated in code reviews and quality assurance activities, ensuring adherence to coding standards, best practices, and industry regulations.",
  },
];

const skillData = [
  { title: "Html", value: 90 },
  { title: "Css", value: 80 },
  { title: "Java", value: 60 },
  { title: "JavaScript", value: 70 },
  { title: "React", value: 75 },
  { title: "Tailwind", value: 80 },
  { title: "Sql", value: 50 },
  { title: "Git/GitHub", value: 80 },
  { title: "Figma(UI/UX)", value: 50 },
  { title: "Node.js", value: 40 },
  { title: "TypeScript", value: 50 },
];

function Resume() {
  const [resumeUrl, setResumeUrl] = useState("");

  const handleDownloadResume = () => {
    const resumeFilePath = "resume.pdf";
    setResumeUrl(resumeFilePath);
  };

  const renderTimelineItems = (items) =>
    items.map((item, index) => (
      <TimeLineItem
        key={index}
        title={item.title}
        date={item.date}
        description={item.description}
        cgpa={item.cgpa}
      />
    ));
  const renderSkillItems = () =>
    skillData.map((skill, index) => (
      <SkillItem key={index} title={skill.title} value={skill.value} />
    ));

  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      <div className="download-button h3">
        <button onClick={handleDownloadResume}>Download Resume</button>
        {resumeUrl && (
          <a
            className="h5"
            href={resumeUrl}
            download="resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex items-center ">
              {" "}
              Download
              <FaDownload />
            </span>
          </a>
        )}
      </div>
      <br />
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">{renderTimelineItems(educationData)}</ol>
      </div>
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Professional Experience</h3>
        </div>
        <ol className="timeline-list">{renderTimelineItems(experienceData)}</ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My Skills</h3>
        <ul className="skills-list content-card">{renderSkillItems()}</ul>
      </div>
    </section>
  );
}

export default Resume;
