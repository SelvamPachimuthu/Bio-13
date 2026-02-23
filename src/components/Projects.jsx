import './Projects.css'

const Projects = () => {
  const projects = [
              {
            id: 1,
            title: 'Pharmacovigilance Case Data Analysis',
            description: 'Analyzed adverse event case data using Python and Jupyter Notebook to identify safety trends and reporting patterns.',
            technologies: ['Python', 'Pandas', 'NumPy', 'Jupyter Notebook', 'Matplotlib'],
            link: '#',
            image: '💊'
          },
          {
            id: 2,
            title: 'Adverse Event Signal Detection (ML)',
            description: 'Built a machine learning model to identify potential safety signals from drug safety datasets.',
            technologies: ['Python', 'Scikit-learn', 'Pandas', 'Jupyter Notebook'],
            link: '#',
            image: '🧠'
          },
          {
            id: 3,
            title: 'Drug Safety Dashboard',
            description: 'Interactive dashboard to visualize pharmacovigilance data including case counts, seriousness, and trends.',
            technologies: ['Python', 'Streamlit', 'Plotly', 'Pandas'],
            link: '#',
            image: '📊'
          },
          {
            id: 4,
            title: 'CRUD Application for Safety Case Management',
            description: 'Streamlit-based application to create, read, update, and delete pharmacovigilance case records.',
            technologies: ['Python', 'Streamlit', 'SQLite'],
            link: '#',
            image: '🗂️'
          },
          {
            id: 5,
            title: 'Literature Screening Automation',
            description: 'Python project to assist pharmacovigilance literature screening and extract key safety information.',
            technologies: ['Python', 'NLP', 'Pandas', 'Jupyter Notebook'],
            link: '#',
            image: '📚'
          },
          {
            id: 6,
            title: 'Clinical Trial Data Exploration',
            description: 'Exploratory data analysis of clinical trial datasets to identify trends and patient outcomes.',
            technologies: ['Python', 'Pandas', 'Seaborn', 'Jupyter Notebook'],
            link: '#',
            image: '🔬'
          }
  ]

  return (
    <div className="projects">
      <div className="projects-container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">{project.image}</div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link">View Project →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
