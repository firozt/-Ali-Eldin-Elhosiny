'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import './index.css'
import Project from '../Project/Project'

type ProjectType = {
  title: string
  img_url: string
  type: string
  year: string
  category: string
}

type Props = {
  projects: ProjectType[]
}

const Carousell = ({ projects }: Props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1)
  const [selected, setSelectedIndex] = useState<number>(-1)

  return (
    <div className='mt-18'>
      <div style={selected > -1 ? {display:'none'} : {}} className='min-h-[150px]'>
        {hoveredIndex > -1 ? (
          <div className='flex justify-between m-auto w-5/6'>
            <div className='flex flex-col gap-2'>
              <div className='bg-white px-2 w-fit text-black text-center py-1 text-sm'>
                PROJECT: {projects[hoveredIndex].title}
              </div>
              <div className='bg-white px-2 w-fit text-black text-center py-1 text-sm'>
                TYPE: {projects[hoveredIndex].type}
              </div>
            </div>
            <div className='flex flex-col gap-2 items-end'>
              <div className='bg-white px-2 w-fit text-black text-center py-1 text-sm'>
                YEAR: {projects[hoveredIndex].year}
              </div>
              <div className='bg-white px-2 w-fit text-black text-center py-1 text-sm'>
                CATEGORY: {projects[hoveredIndex].category}
              </div>
            </div>
          </div>
        ) : (
          <div className='bg-white px-2 w-fit text-black text-center py-1 text-sm m-auto'>
            SELECT A PROJECT
          </div>
        )}
      </div>

      <div className='flex gap-3 m-auto w-5/6 items-center justify-center'>
        {projects.map((item, key) =>
          selected !== key ? (
            <div
              key={key}
              onMouseEnter={() => setHoveredIndex(key)} // Update hovered index
              onMouseLeave={() => setHoveredIndex(-1)}   // Reset on leave
              onClick={() => setSelectedIndex(key)}
              className='w-[80px] h-[300px] overflow-hidden filter saturate-0 transition-all duration-300 hover:saturate-100 hover:scale-120 hover:mx-2 cursor-pointer'
            >
              <Image
                src={item.img_url}
                alt={item.title}
                width={100}
                height={400}
                className='w-full h-full object-cover object-center'
              />
            </div>
          ) : (
            <Project project={projects[selected]} key={key} /> 
          )
        )}
      </div>
    </div>
  )
}

export default Carousell
