import { GRIDS } from "../constants";
import { useRef } from "react";
import html2pdf from "html2pdf.js";

export default function Resume({ setCurrentGrid }) {
  const resumeRef = useRef(null);

  const handleDownload = () => {
    const element = resumeRef.current;
    const opt = {
      margin: 1,
      filename: "Abhimanyu-Resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    };
    
    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="flex flex-col items-center w-screen min-h-screen bg-gradient-to-br from-[#A7C957] to-[#BC4749] py-16 px-4">
      {/* Main Header */}
      <div className="w-full max-w-6xl mx-auto mb-12 text-center">
        <h1 className="text-6xl font-bold text-[#F2E8CF] mb-8">About</h1>
        
        {/* Navigation Buttons */}
        <div className="flex justify-center gap-8 mb-10">
          <button
            onClick={() => setCurrentGrid(GRIDS[0])}
            className="border-2 border-neutral-900 bg-[#F2E8CF] px-8 py-4 hover:bg-[#E5D8B1] transition-all duration-200 shadow-lg rounded-md"
          >
            <span className="text-2xl font-bold text-[#386641]">
              Home
            </span>
          </button>
          
          <button
            onClick={handleDownload}
            className="border-2 border-neutral-900 bg-[#F2E8CF] px-8 py-4 hover:bg-[#E5D8B1] transition-all duration-200 shadow-lg rounded-md"
          >
            <span className="text-2xl font-bold text-[#386641]">
              Download Resume
            </span>
          </button>
        </div>
      </div>

      {/* Resume Content */}
      <div 
        ref={resumeRef}
        className="bg-[#F2E8CF] p-10 max-w-4xl mx-auto shadow-xl border-2 border-neutral-900 font-serif rounded-lg mb-16"
      >
        <div className="text-center mb-8 border-b-2 border-[#386641] pb-4">
          <h1 className="text-5xl font-bold text-[#386641] font-handwriting mb-3">Abhimanyu</h1>
          <div className="flex flex-wrap justify-center gap-4 text-[#BC4749] text-lg">
  <a href="mailto:abhimanyuahuja12@gmail.com" className="hover:underline">abhimanyuahuja12@gmail.com</a>
  <span>•</span>
  <span>(+91)8527950240</span>
  <span>•</span>
  <a href="https://github.com/AbhimanyuAhuja12" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
  <span>•</span>
  <a href="https://www.linkedin.com/in/abhimanyu-ahuja12/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
</div>
        </div>

        {/* Objective Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#386641] font-handwriting border-b border-[#A7C957] mb-4 pb-1">OBJECTIVE</h2>
          <p className="ml-2 text-lg leading-relaxed">
            Proficient Software Engineer with a strong foundation in Full-Stack Development, specializing in MERN stack, 
            with extensive expertise in API development and database management. Passionate about developing scalable, 
            user-centric applications, leveraging strong problem-solving skills, and following Agile methodologies 
            to ensure efficient and high-quality development.
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#386641] font-handwriting border-b border-[#A7C957] mb-4 pb-1">EDUCATION</h2>
          <div className="ml-2">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <h3 className="font-bold text-xl">B.Tech in Information Technology (8.2 GPA)</h3>
              <span className="font-medium">2021-2025</span>
            </div>
            <p className="italic text-lg mb-2">Bharati Vidyapeeth's College of Engineering</p>
            <p className="mt-2"><span className="font-bold">Minor Degree:</span> Artificial Intelligence & Machine Learning</p>
            <p className="mt-2"><span className="font-bold">Relevant Coursework:</span> Data Structures and Algorithms • Object-Oriented Programming (OOPS) • Databases (SQL) • Operating Systems • Computer Networks</p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#386641] font-handwriting border-b border-[#A7C957] mb-4 pb-1">SKILLS</h2>
          <div className="ml-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-2">Languages</h3>
              <p>Java, C#, Python, JavaScript, HTML, CSS, SQL</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Core Technologies</h3>
              <p>React, Node.Js, Express, Redux, Machine Learning, NLP, Sequelize, Firebase, Flask</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Tools and Libraries</h3>
              <p>GitHub, MySQL, Webpack, Postman, IntelliJ Idea, Matplotlib</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Soft Skills</h3>
              <p>Teamwork, Leadership, Adaptability, Communication, Time Management</p>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#386641] font-handwriting border-b border-[#A7C957] mb-4 pb-1">PROJECTS</h2>
          <div className="ml-2">
            <div className="mb-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <a href="https://github.com/AbhimanyuAhuja12/Flight-Bookng-Service"> <h3 className="font-bold text-xl">Airline Booking System</h3></a>
                <span className="font-medium">Jan 2025</span>
              </div>
              <p className="italic text-lg">Node.js, Express, MySQL, Sequelize, node-cron, axios</p>
              <ul className="list-disc ml-5 mt-3 space-y-2">
                <li>Developed a scalable Airline Booking system using microservices architecture with an MVC design pattern, handling 150,000+ daily flight searches and 5,000 bookings per day.</li>
                <li>Applied row-level locking in MySQL to manage concurrent seat reservations across 1,00,000+ users, ensuring zero race conditions.</li>
                <li>Ensured transactional consistency (ACID compliant) for 500,000+ quarterly bookings, designing idempotent APIs to prevent duplicate reservations.</li>
                <li>Set up a cron job to auto-cancel unpaid bookings every 30 minutes, reclaiming thousands of stale reservations daily.</li>
              </ul>
              <a href="https://github.com/AbhimanyuAhuja12/Flight_Search_And_CRUD_Service"><p className="mt-3 text-[#386641] font-medium underline cursor-pointer">(Code)</p></a>
            </div>
            
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <a href="https://cinemaquest-theta.vercel.app/"><h3 className="font-bold text-xl">CinemaQuest</h3></a>
                <span className="font-medium">June 2024</span>
              </div>
              <p className="italic text-lg">React, TailwindCSS, Firebase, TMDB API, Gemini API, Redux</p>
              <ul className="list-disc ml-5 mt-3 space-y-2">
                <li>Developed a dynamic web application for personalized movie discovery, integrating secure Firebase Authentication and a GPT-powered search bar using the Gemini API for context-aware recommendations.</li>
                <li>Optimized data retrieval and management with custom hooks and Redux, ensuring seamless integration with the TMDB API for real-time movie updates.</li>
                <li>Improved accessibility with multilanguage support (English, Hindi, Spanish) and an intuitive chat-like search interface, focusing on user engagement and satisfaction.</li>
              </ul>
              <a href="https://github.com/AbhimanyuAhuja12/CinemaQuest"><p className="mt-3 text-[#386641] font-medium underline cursor-pointer">(Code)</p></a>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#386641] font-handwriting border-b border-[#A7C957] mb-4 pb-1">ACHIEVEMENTS</h2>
          <ul className="list-disc ml-7 mt-3 space-y-3">
            <li>Secured 1st Runner-Up out of 100+ teams by developing an end-to-end Speech-to-Speech Recognition system using advanced AI and ML algorithm</li>
            <li>Solved 250+ DSA problems across platforms like LeetCode and others, strengthening problem-solving skills and algorithms proficiency</li>
          </ul>
        </div>
      </div>
    </div>
  );
}