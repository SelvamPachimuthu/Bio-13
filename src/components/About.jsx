import './About.css'

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
           <p>
          I am a Pharmacovigilance Specialist with experience in drug safety, case processing, literature screening,
          and safety data analysis. I have worked with pharmacovigilance databases and regulatory processes to help
          ensure patient safety and compliance within the life sciences industry.
          </p>
          <p>
          Alongside my pharmacovigilance experience, I am building my career in data analytics and data science.
          I enjoy working with data, discovering insights, and using technology to solve real-world healthcare
          problems. My goal is to combine drug safety knowledge with data science to create smarter and more
          impactful healthcare solutions.
          </p>
          </div>
          {/*
          <div className="about-image">
            <div className="image-placeholder">
              <img src="/profile.jpg" alt="Selvam Pachimuthu" />
            </div>
          </div>
          */}
        </div>
      </div>
    </div>
  )
}

export default About
