import React, { useState } from 'react'
import { projects } from '../../constants'

const Work = () => {
  const [selectedProject, setSelectedProject]=useState(null);

  const handleOpenModal=(project)=>{
    setSelectedProject(project)
  };

  const handleCloseModal=()=>{
    setSelectedProject(null)
  };
  return (
    <section
      id='work'
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section title */}
      <div className='text-center'>
        <h2 className='text-white text-center text-4xl font-bold '> PROJECTS</h2>
        <div className='w-32 h-1 mx-auto mt-4 bg-purple-500'></div>
        <p className='text-center text-gray-400 mt-4 text-lg font-semibold'>A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies</p>
      </div>

      {/* Projects Grid */}
      <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pt-10'>
        {projects.map((project) =>
        (
          <div
            key={project.id}
            onClick={()=>handleOpenModal(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div>
              <img src={project.image} className='w-full h-48 object-cover rounded-xl'/>
              </div>
              
              
          <div className='p-6'>
            <h3 className='text-white font-semibold pt-6 text-2xl'>
              {project.title}
            </h3>
            <p className='text-lg text-gray-500 pt-6'>
              {project.description}
            </p>

            <div className='mb-4'>
              {project.tags.map((tag,index)=>(
                <span
                key={index}
                className='inline-block text-purple-500 bg-[#251f38] text-xs font-semibold rounded-full px-2 py-2 mr-2 mb-2 '
                >
                  {tag}

                </span>
              ))}

             <div className="flex gap-4 mt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
                  >
                    View GitHub
                  </a>
                )}
                </div>


              </div>
            </div>
          </div>
          
        
        ))}

      </div>


    </section>
  )
}

export default Work
