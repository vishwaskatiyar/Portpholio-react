import { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setFilteredProjects(data);
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(
        (project) => project.category === selectedCategory
      );
      setFilteredProjects(filtered);
    }
  }, [selectedCategory, projects]);

  return (
    <section>
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>
      <ul className="filter-list">
        {["All", "Web design", "Applications", "Web development"].map(
          (category) => (
            <li key={category} className="filter-item">
              <button
                className={category === selectedCategory ? "active" : ""}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            </li>
          )
        )}
      </ul>
      <section className="projects">
        <ul className="project-list">
          {filteredProjects.map((project) => (
            <li
              key={project.id}
              className="project-item active"
              data-category={project.category}
              data-filter-items
            >
              <a href="#">
                <figure className="project-img">
                  <div className=" project-items-icon-box">
                    <FaRegEye />
                  </div>
                  <img src={project.image} alt={project.title} />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Portfolio;
