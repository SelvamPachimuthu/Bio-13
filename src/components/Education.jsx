import './Education.css'

const Education = () => {
  const education = [
             {
           id: 1,
           degree: 'Higher Secondary Certificate (HSC) - Bio Maths',
           institution: 'Higher Secondary School',
           year: '2015 - 2016',
           details: 'Focused on Biology, Mathematics, Physics, and Chemistry'
         },
         {
           id: 2,
           degree: 'B.Tech in Industrial Biotechnology',
           institution: 'Government College of Technology',
           year: '2016 - 2020',
           details: 'Studied biotechnology, bioprocess engineering, and life science technologies'
         }
  ]

  return (
    <div className="education">
      <div className="education-container">
        <h2>Education</h2>
        <div className="education-list">
          {education.map((edu) => (
            <div key={edu.id} className="education-item">
              <div className="edu-header">
                <h3>{edu.degree}</h3>
                <span className="edu-year">{edu.year}</span>
              </div>
              <p className="edu-institution">{edu.institution}</p>
              <p className="edu-details">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Education
