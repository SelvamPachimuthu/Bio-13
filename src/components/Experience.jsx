import './Experience.css'

const Experience = () => {
  const experiences = [
  {
    id: 1,
    title: 'Associate Pharmacovigilance Specialist',
    company: 'Clarivate',
    period: 'Oct 2024 – Present',
    description: 'Drug safety triager using Dialogue ML, literature monitoring and data validation, monitoring RSI, CCDS, CCSI or local label to confirm correct drug indication; applied Python and ML techniques for automation and data validation'
  },
  {
    id: 2,
    title: 'Senior Pharmacovigilance Specialist',
    company: 'Oviya MedSafe',
    period: 'Oct 2023 – Oct 2024',
    description: 'ICSR processing from clinical trial reports, literatures, spontaneous reports; regulatory website screening; leveraged data engineering and machine learning workflows to streamline pharmacovigilance operations'
  },
  {
    id: 3,
    title: 'Pharmacovigilance Associate',
    company: 'Oviya MedSafe',
    period: 'Apr 2021 – Jul 2023',
    description: 'Literature monitoring, ICSR processing and quality checking for clinical trial cases, literature cases, and spontaneous reports; integrated Python-based data science methods for case trend analysis and deep learning models for literature classification'
  }
];

  return (
    <div className="experience">
      <div className="experience-container">
        <h2>Experience</h2>
        <div className="experience-list">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-item">
              <div className="exp-header">
                <h3>{exp.title}</h3>
                <span className="exp-period">{exp.period}</span>
              </div>
              <p className="exp-company">{exp.company}</p>
              <p className="exp-description">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
