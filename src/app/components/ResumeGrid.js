import { GRIDS } from "../constants"

export default function Resume({ setCurrentGrid }) {
    return (
      <div className="flex flex-col items-center justify-center w-screen h-screen p-5 bg-gradient-to-br from-[#A7C957] to-[#BC4749]">
        {/* Clickable Title - Go Back */}
        <button
          onClick={() => setCurrentGrid(GRIDS[0])}
          className="mb-5 border border-neutral-900 bg-[#F2E8CF] px-5 py-3 hover:bg-[#E5D8B1] transition-all duration-200"
        >
          <span className="text-5xl font-bold text-[#386641] cursor-pointer">
            Resume
            <span className="inline-block mx-2 w-6 h-1 bg-[#2A9D8F] animate-pulse"></span>
          </span>
        </button>
  
        {/* Resume Image */}
        <div className="flex items-center justify-center w-full h-full">
          <img
            src="/Abhimanyu-resume-1.png"
            alt="Resume"
            className="max-w-[90%] max-h-[90vh] object-contain border border-black shadow-xl"
          />
        </div>
      </div>
    );
  }
  