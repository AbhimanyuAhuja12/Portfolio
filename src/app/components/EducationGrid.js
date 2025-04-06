import { useEffect, useState } from "react";
import { useTrail, animated, easings } from "@react-spring/web";
import { GRIDS } from "../constants";

export default function EducationGrid({ setCurrentGrid, animatedStyles }) {
  const [nameIdx, setNameIdx] = useState(0);
  const name = "Education Journey".split("");
  const [subheadingIdx, setSubheadingIdx] = useState(0);
  const subheading = "My academic path and learning experiences".split("");

  // Typewriter effect animation
  useEffect(() => {
    const id = setInterval(() => {
      if (nameIdx < name.length) {
        setNameIdx(nameIdx + 1);
      }
      if (subheadingIdx < subheading.length) {
        setSubheadingIdx(subheadingIdx + 1);
      }
    }, 100);
    return () => {
      clearInterval(id);
    };
  });

  // Spring animations for grid elements
  const trails = useTrail(6, {
    from: { scale: 0 },
    to: { scale: 1 },
    leave: { scale: 1 },
    config: {
      easing: easings.easeInBack,
      delay: 300,
    },
  });

  return (
    <animated.div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-6 min-h-screen w-screen p-5 gap-5 bg-stone-200">
      {/* Header area with title */}
      <animated.div
        style={animatedStyles}
        onClick={() => setCurrentGrid(GRIDS[0])}
        className="lg:col-span-3 lg:row-span-2"
      >
        <animated.div
          style={trails[0]}
          className="w-full h-full p-4 bg-[#386641] border border-black flex flex-col items-center justify-center gap-2"
        >
          <div className="border border-neutral-900 bg-[#F2E8CF] w-fit px-4 py-2">
            <span className="text-3xl font-bold text-[#BC4749]" id="home">
              {name.slice(0, nameIdx).join("")}
              <span className="inline-block mx-2 w-4 h-1 bg-[#2A9D8F] animate-pulse"></span>
            </span>
          </div>
          <div className="border text-center border-neutral-900 bg-[#F2E8CF] w-fit px-4 py-1">
            <span className="text-sm text-[#BC4749]">
              {subheading.slice(0, subheadingIdx).join("")}
              <span className="inline-block w-2 h-0.5 mx-1 bg-[#2A9D8F] animate-pulse"></span>
            </span>
          </div>
        </animated.div>
      </animated.div>

      {/* Box 1: Class 10th details */}
      <animated.div
        style={animatedStyles}
        className="lg:col-span-3 lg:row-span-2"
      >
        <animated.div
          style={trails[2]}
          className="w-full h-full bg-[#BC4749] border border-black flex items-center justify-center"
        >
          <div className="transform rotate-6 p-4 bg-white border-2 border-[#386641] shadow-lg">
            <h3 className="text-lg font-bold text-[#386641] mb-1">
              Lovely Public Sr. Sec. School
            </h3>
            <p className="text-md text-[#BC4749] font-semibold">
              Class 10th • 79.6%
            </p>
            <p className="text-xs text-[#6A994E]">New Delhi • 2019</p>
          </div>
        </animated.div>
      </animated.div>

      {/* Box 2: Class 12th details */}
      <animated.div
        style={animatedStyles}
        className="lg:col-span-3 lg:row-span-2"
      >
        <animated.div
          style={trails[1]}
          className="w-full h-full bg-[#A7C957] border border-black flex items-center justify-center"
        >
          <div className="transform -rotate-6 p-4 bg-white border-2 border-[#BC4749] shadow-lg">
            <h3 className="text-lg font-bold text-[#386641] mb-1">
              Lovely Public Sr. Sec. School
            </h3>
            <p className="text-md text-[#BC4749] font-semibold">
              Class 12th • 79.8%
            </p>
            <p className="text-xs text-[#6A994E]">New Delhi • 2021</p>
          </div>
        </animated.div>
      </animated.div>

      {/* Box3 */}

      <animated.div
        style={animatedStyles}
        onClick={() => setCurrentGrid(GRIDS[0])}
        className="lg:col-span-3 lg:row-span-2 relative overflow-hidden rounded-xl shadow-lg bg-gradient-to-br from-[#98d5f4] to-[#98d5f4] border border-black flex flex-col items-center justify-center p-4"
      >
        <div className="text-white text-center z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto animate-pulse text-[#F2E8CF]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 14l9-5-9-5-9 5 9 5z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            />
          </svg>
          <p className="text-xl mt-4 font-bold tracking-widest text-[#264653]">
            &ldquo;Learning never exhausts the mind.&rdquo;
          </p>
        </div>

        {/* Optional: Decorative Glow Blob */}
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white opacity-10 rounded-full blur-3xl animate-spin-slow"></div>
      </animated.div>

      {/* Main education content area - College details */}
      <animated.div
        style={animatedStyles}
        className="lg:col-span-6 lg:row-span-4"
      >
        <animated.div
          style={trails[4]}
          className="w-full h-full p-5 bg-[#F2E8CF] border border-black overflow-hidden"
        >
          <div className="space-y-3 text-[#333333] h-full overflow-auto">
            <div>
            <h2 className="text-2xl font-bold text-[#386641] mb-1 underline decoration-wavy decoration-[#BC4749] underline-offset-4">
  Bharati Vidyapeeth&apos;s College of Engineering
</h2>

              <p className="text-lg font-semibold text-[#6A994E]">
                B.Tech in Information Technology (8.34 GPA) • 2021-2025
              </p>
              <p className="mt-1 text-sm tracking-wide leading-relaxed">
                Currently pursuing my bachelor&apos;s degree with a focus on building
                strong technical foundations. Additionally completing a Minor
                Degree in Artificial Intelligence & Machine Learning to
                complement my IT skills.
              </p>
              <p className="mt-1 text-sm tracking-wide leading-relaxed">
                My coursework includes: Data Structures and Algorithms •
                Object-Oriented Programming (OOPS) • Databases (SQL) • Operating
                Systems • Computer Networks
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#386641] mb-1 underline decoration-wavy decoration-[#BC4749] underline-offset-4">
                Technical Skills
              </h2>
              <ul className="list-disc pl-5 text-xs space-y-1 tracking-wide leading-relaxed">
                <li>
                  Data structures implementation and algorithm optimization
                </li>
                <li>Object-oriented design patterns and principles</li>
                <li>Database design and SQL query optimization</li>
                <li>Operating system fundamentals and network protocols</li>
                <li>Machine learning fundamentals and AI applications</li>
              </ul>
            </div>
          </div>
        </animated.div>
      </animated.div>

      {/* Summer Training */}
      <animated.div
        style={animatedStyles}
        className="lg:col-span-6 lg:row-span-4"
      >
        <animated.div
          style={trails[5]}
          className="w-full h-full bg-[#2A9D8F] border border-black p-5 overflow-hidden"
        >
          <div className="bg-white border-2 border-[#BC4749] p-4 shadow-lg h-full overflow-auto">
            <div>
              <h3 className="text-xl font-bold text-[#386641] mb-1 underline decoration-wavy decoration-[#BC4749] underline-offset-4">
                Summer Trainee
              </h3>
              <p className="text-md text-[#BC4749] font-semibold">
                Bharati Vidyapeeth&apos;s College of Engineering
              </p>
              <p className="text-sm text-[#6A994E] mb-2">
                New Delhi • Jul 2023 - Aug 2023
              </p>
              <ul className="list-disc pl-5 text-xs text-[#333333] space-y-2">
                <li>
                  Took the lead in implementing machine learning and deep
                  learning techniques, reducing data processing time by 25% and
                  enhancing accuracy
                </li>
                <li>
                  Designed and developed regression and classification models
                  using Python libraries (NumPy, Pandas, TensorFlow)
                </li>
                <li>
                  Led development and deployment of a robust model achieving 93%
                  prediction accuracy
                </li>
              </ul>
            </div>
            <br />
            <div>
              <h2 className="text-xl font-bold text-[#386641] mb-1 ">
                Technical Skills
              </h2>
              <ul className="list-disc pl-5 text-xs text-[#333333] space-y-2">
                <li>
                  Machine Learning: Regression, Classification, Clustering,
                  Model Evaluation
                </li>
                <li>
                  Deep Learning: CNNs, RNNs, Transformers, Attention Mechanisms
                </li>
                <li>
                  Libraries & Tools: TensorFlow, PyTorch, Scikit-learn, Hugging
                  Face, OpenCV
                </li>
                <li>
                  Data Preprocessing: Feature Engineering, Dimensionality
                  Reduction, Data Augmentation
                </li>
                <li>
                  End-to-End ML Pipelines: Data collection, training, deployment
                  (Flask, FastAPI)
                </li>
                <li>
                  Algorithm Development: Optimization techniques and performance
                  tuning
                </li>
              </ul>
            </div>
          </div>
        </animated.div>
      </animated.div>
    </animated.div>
  );
}
