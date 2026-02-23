import './Skills.css'
import {
  SiPython,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiJupyter,
  SiStreamlit,
  SiPostgresql,
  SiGit,
  SiGithub
} from "react-icons/si"

import { FaChartBar, FaDatabase, FaBrain } from "react-icons/fa"

const Skills = () => {

  const skills = {
    dataScience: [
      { name: "Python", icon: <SiPython /> },
      { name: "Pandas", icon: <SiPandas /> },
      { name: "NumPy", icon: <SiNumpy /> },
      { name: "Scikit-Learn", icon: <SiScikitlearn /> },
      { name: "Machine Learning", icon: <FaBrain /> },
      { name: "Jupyter Notebook", icon: <SiJupyter /> }
    ],
    analytics: [
      { name: "Data Analysis", icon: <FaChartBar /> },
      { name: "Data Visualization", icon: "📊" },
      { name: "SQL", icon: <FaDatabase /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Exploratory Data Analysis", icon: "📈" }
    ],
    tools: [
      { name: "Streamlit", icon: <SiStreamlit /> },
      { name: "Power BI", icon: <FaChartBar /> },
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "VS Code", icon: "💻" }
    ]
  }

  return (
    <div className="skills">
      <div className="skills-container">
        <h2>Skills</h2>

        <div className="skills-grid">

          <div className="skill-category">
            <h3>Data Science</h3>
            <div className="skill-list">
              {skills.dataScience.map((skill) => (
                <span key={skill.name} className="skill-badge">
                  {skill.icon}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3>Data Analytics</h3>
            <div className="skill-list">
              {skills.analytics.map((skill) => (
                <span key={skill.name} className="skill-badge">
                  {skill.icon}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3>Tools & Technologies</h3>
            <div className="skill-list">
              {skills.tools.map((skill) => (
                <span key={skill.name} className="skill-badge">
                  {skill.icon}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Skills