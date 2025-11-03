'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import './index.css'
import { motion } from 'framer-motion'

type Project = {
	title: string
	img_url: string
	type: string
	year: string
	category: string
	subtext: string
}


type Props = {
  projects: Project[]
  selected: number
  setSelectedIndex: (newVal: number) => void
}

const Carousell = ({ projects, selected, setSelectedIndex }: Props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1)
  const baseWidth = 80
  const baseHeight = 300
  const expandedWidth = 1000
  const expandedHeight = 800


  return (
    <div className='mt-15'>
      {/* Hover info */}
      <div style={selected > -1 ? { display: 'none' } : {}} className='min-h-[150px]'>
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
          // <div className='bg-white px-2 w-fit text-black text-center py-1 text-sm m-auto'>
          //   SELECT A PROJECT
          // </div>
					<>
					</>
        )}
      </div>

      {/* Carousel */}
      <div
        className='flex gap-3 m-auto w-fit items-center justify-start'
      >
        {projects.map((item, key) => {
          const isSelected = selected === key
					if (selected >= 0 && Math.abs(selected-key) > 1) return
          return (
            <div
              key={key}
              onMouseEnter={() => setHoveredIndex(key)}
              onMouseLeave={() => setHoveredIndex(-1)}
              onClick={() => {key == selected ? setSelectedIndex(-1) : setSelectedIndex(key)}}
							className={`cursor-pointer flex-shrink transition-all duration-1000 ${ !isSelected ? 'hover:saturate-100 hover:mx-6':'' } ${selected == -1 ? 'hover:scale-120':''} ${isSelected && key == 0 ? 'relative left-5': isSelected && key == projects.length ? 'relative right-5' : '' } `}
              

              style={{
                width: isSelected ? 'min(88vw,1000px)' : selected > -1 ? '400px' : baseWidth,
                height: isSelected ? expandedHeight : baseHeight,
                zIndex: isSelected ? 10 : 1,
              }}
            >
              <Image
                src={item.img_url}
                alt={item.title}
                width={isSelected ? expandedWidth : baseWidth}
								sizes="(max-width: 768px) 80vw, 50vw"
                height={isSelected ? expandedHeight : baseHeight}
                className={`${isSelected 
                  ? 'filter brightness-50 saturate-100 mx-5 w-[90%] h-[80%] relative left-[25px]' 
                  : 'filter brightness-30 saturate-0 w-[100%] h-[100%]'} 
                  m-auto object-cover object-center transition-all duration-300`
                }

              />
							{isSelected && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: .5, delay:1 }}
                  className='h-fit'
                >
									<div className="relative w-full h-full bottom-[85%]">
										{/* Top-left: title and selected */}
										<div className="absolute bottom-120 left-0 flex flex-col gap-2 m-4">
											<div className="text-6xl bg-white w-fit p-3 px-7">{selected+1}</div>
											<div className="text-6xl bg-white w-fit p-3">{item.title}</div>
										</div>

										{/* Bottom-right: description */}
										<p className="absolute bottom-[-60] right-0 w-[400px] m-4  p-4">
                      {item.subtext}
										</p>
									</div>

								</motion.div>
              )} 
            </div>
          )
        })}
      </div>
			{
					selected != -1 &&
					<div className='relative w-fit m-auto'>
						<Image src={'/example-more.png'} alt='alt' width={1000} height={1000} />
					</div>
			}
    </div>
  )
}

export default Carousell
