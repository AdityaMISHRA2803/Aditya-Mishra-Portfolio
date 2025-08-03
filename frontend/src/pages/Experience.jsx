

function Experience() {
  return (
    <div className="experience-container">
      <h2 className="experience-heading">Experience</h2>

      <div className="experience-card">
        <h3><strong>Full Stack Web Development Intern</strong> @ FutureIntern</h3>
        <p><strong>Duration:</strong> July 2025 – August 2025</p>
        <p>
          Worked on real-time web development projects using React.js and Node.js.
          Gained hands-on experience in building user interfaces, integrating backend services,
          and deploying web apps.
        </p>

        <a href="/offer-letter.png" target="_blank" rel="noopener noreferrer">
          <button className="offer-button">View Offer Letter</button>
        </a>
      </div>

      <h3 className="certificates-heading">Certificates</h3>

      <div className="certificates-container">
        <div className="certificate-card">
          <h4>Machine Learning Fundamentals – Simplilearn</h4>
          <p>Covered basic ML algorithms, supervised/unsupervised learning.</p>
          <a href="/certificates/machine-learning-certificate.png" target="_blank" rel="noopener noreferrer">
            <button className="offer-button">View Certificate</button>
          </a>
        </div>

        <div className="certificate-card">
          <h4>Deloitte Data Analytics Virtual Internship</h4>
          <p>Worked on Excel dashboards, Tableau visualization, and forensic analysis.</p>
          <a href="/certificates/deloitte_certificate.png" target="_blank" rel="noopener noreferrer">
            <button className="offer-button">View Certificate</button>
          </a>
        </div>

        <div className="certificate-card">
          <h4>Cyber security Analyist Job Simulation</h4>
          <p>Worked on identity and access managment fumdamentals.</p>
          <a href="/certificates/cyber-security-certificate.png" target="_blank" rel="noopener noreferrer">
            <button className="offer-button">View Certificate</button>
          </a>
        </div>

        <div className="certificate-card">
          <h4>Hp LIFE - Data Science & Analytics</h4>
          <p>By completing this course i have learned some leading data science and analytics practices
            methodologies and tools.</p>
          <a href="/certificates/hp-certificate.png" target="_blank" rel="noopener noreferrer">
            <button className="offer-button">View Certificate</button>
          </a>
        </div>

        <div className="certificate-card">
          <h4>TCS-ION Career Edge Young-Proffession </h4>
          <p>Communication skills , Presentation skills , Soft skills , Buissness etiquttee , IT foundation skills
            , Overview of Artificial Intelegence.</p>
          <a href="/certificates/tcs-ion-certificate.png" target="_blank" rel="noopener noreferrer">
            <button className="offer-button">View Certificate</button>
          </a>
        </div>

        {/* Add more certificates here if needed */}
      </div>
    </div>
  );
}

export default Experience;
