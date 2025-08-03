import "../Styles/Projects.css";


function Projects() {
  return (
    <div className="projects-container">
      <h2 className="projects-heading">My Projects</h2>

      <div className="project-card">
        <h3>YapYap-Chat | Real-time Messaging Platform</h3>
        <p>
          Built a bi-directional real-time chat app using React.js, Node.js, Express.js, MongoDB, and Socket.IO. Enabled secure messaging with JWT authentication and bcrypt hashing. Features include online status, chat persistence, and a mobile-first UI. Optimized to handle 500+ users with latency under 300ms.
        </p>
        <a
          href="https://github.com/AdityaMISHRA2803/YapYap-Chat"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </div>

      <div className="project-card">
        <h3>DocMeet | Smart Medical Appointment & Diet Tracker</h3>
        <p>
          A smart appointment and health tracking system built with the MERN stack, Tailwind CSS, and EJS. Features include appointment booking, medication & diet management, secure JWT auth for users/admins, and automated reminders via scheduled MongoDB timestamps.
        </p>
        <a
          href="https://github.com/AdityaMISHRA2803/DocMeet"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </div>

      <div className="project-card">
        <h3>Sorting Algorithm Visualizer</h3>
        <p>
          An interactive tool built with JavaScript and p5.js to visually demonstrate sorting algorithms in real-time. Enhanced algorithm understanding for students by 50% through engaging and optimized animations.
        </p>
        <a
          href="https://github.com/AdityaMISHRA2803/Sorting-Visualizer"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}

export default Projects;
