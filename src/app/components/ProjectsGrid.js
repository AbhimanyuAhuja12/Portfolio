import { useEffect, useState } from "react"
import { useTrail, animated, easings } from "@react-spring/web"
import { GRIDS } from "../constants"

export default function ProjectsGrid({ setCurrentGrid, animatedStyles }) {
  const [nameIdx, setNameIdx] = useState(0)
  const name = "Projects".split("")

  const [subheadingIdx, setSubheadingIdx] = useState(0)
  const subheading =
    "Here are a few personal projects I've worked on over the years".split("")

  // Define your projects data
  const projects = [
    {
      title: "Project 1",
      description: "A responsive web application built with React and Node.js",
      imageUrl: "/api/placeholder/300/200",
      link: "https://project1.example.com"
    },
    {
      title: "Project 2",
      description: "Data visualization dashboard using D3.js and React",
      imageUrl: "/api/placeholder/300/200",
      link: "https://project2.example.com"
    },
    {
      title: "Project 3",
      description: "Mobile app developed with React Native for tracking fitness goals",
      imageUrl: "/api/placeholder/300/200",
      link: "https://project3.example.com"
    },
    {
      title: "Project 4",
      description: "E-commerce platform with payment integration and user authentication",
      imageUrl: "/api/placeholder/300/200",
      link: "https://project4.example.com"
    },
    {
      title: "Project 5",
      description: "AI-powered chatbot built with TensorFlow and integrated with a web interface",
      imageUrl: "/api/placeholder/300/200",
      link: "https://project5.example.com"
    },
    {
      title: "Project 6",
      description: "Portfolio website with interactive animations and 3D elements",
      imageUrl: "/api/placeholder/300/200",
      link: "https://project6.example.com"
    }
  ]

  useEffect(() => {
    const id = setInterval(() => {
      if (nameIdx < name.length) {
        setNameIdx(nameIdx + 1)
      }
      if (subheadingIdx < subheading.length) {
        setSubheadingIdx(subheadingIdx + 1)
      }
    }, 100)

    return () => {
      clearInterval(id)
    }
  })

  const trails = useTrail(7, {
    from: { scale: 0 },
    to: { scale: 1 },
    leave: { scale: 1 },
    config: {
      easing: easings.easeInBack,
      delay: 300,
    },
  })

  // ProjectCard component for consistent styling
  const ProjectCard = ({ project, className }) => (
    <div className={`flex flex-col h-full ${className}`}>
      <div className="relative flex-shrink-0 h-32 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col flex-grow p-4">
        <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
        <p className="mb-4 text-sm">{project.description}</p>
        <a 
          href={project.link}
          target="_blank"
          rel="noopener noreferrer" 
          className="mt-auto px-3 py-1 text-center bg-neutral-900 text-white text-sm rounded hover:bg-neutral-700 transition-colors"
        >
          View Project
        </a>
      </div>
    </div>
  )

  return (
    <animated.div className='grid grid-cols-1 lg:grid-cols-9 lg:grid-rows-9 w-screen lg:h-screen p-5 gap-5 bg-stone-200'>
      <animated.div
        style={animatedStyles}
        className='row-start-4 lg:row-span-3 lg:col-span-5'
      >
        <animated.div
          style={trails[1]}
          className='w-full h-full bg-[#A7C957] border border-black overflow-hidden'
        >
          <ProjectCard project={projects[0]} className="text-neutral-900" />
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className='lg:row-span-3 lg:col-span-4'
      >
        <animated.div
          style={trails[3]}
          className='w-full h-full relative bg-[#BC4749] border border-black overflow-hidden'
        >
          <ProjectCard project={projects[1]} className="text-white" />
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className='lg:col-span-3 lg:row-span-6'
      >
        <animated.div
          style={trails[2]}
          className='w-full h-full relative bg-[#6A994E] border border-neutral-900 overflow-hidden'
        >
          <ProjectCard project={projects[2]} className="text-white" />
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        onClick={() => setCurrentGrid(GRIDS[0])}
        className='row-start-1 lg:col-span-3 lg:row-span-3'
      >
        <animated.div
          style={trails[0]}
          className='w-full h-full p-10 bg-[#386641] border border-black flex flex-col items-center justify-center gap-3'
        >
          <div className='border border-neutral-900 bg-[#F2E8CF] w-fit px-5 py-3'>
            <span className='text-5xl font-bold text-[#BC4749]' id='home'>
              {name.slice(0, nameIdx).join("")}
              <span className='inline-block mx-2 w-6 h-1 bg-[#2A9D8F] animate-pulse'></span>
            </span>
          </div>
          <div className='border text-center border-neutral-900 bg-[#F2E8CF] w-fit px-5 py-2'>
            <span className='lg:text-md text-[#BC4749]'>
              {subheading.slice(0, subheadingIdx).join("")}
              <span className='inline-block w-3 h-0.5 mx-1 bg-[#2A9D8F] animate-pulse'></span>
            </span>
          </div>
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className='lg:row-span-3 lg:col-span-3'
      >
        <animated.div
          style={trails[4]}
          className='w-full h-full relative bg-[#6A994E] border border-neutral-900 overflow-hidden'
        >
          <ProjectCard project={projects[3]} className="text-white" />
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className='lg:row-span-3 lg:col-span-4'
      >
        <animated.div
          style={trails[5]}
          className='w-full h-full relative bg-[#BC4749] border border-neutral-900 overflow-hidden'
        >
          <ProjectCard project={projects[4]} className="text-white" />
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className='lg:row-span-3 lg:col-span-2'
      >
        <animated.div
          style={trails[4]}
          className='w-full h-full relative bg-[#A7C957] border border-black overflow-hidden'
        >
          <ProjectCard project={projects[5]} className="text-neutral-900" />
        </animated.div>
      </animated.div>
    </animated.div>
  )
}