'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import './index.css'

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
  const baseWidth = 80
  const baseHeight = 300
  const expandedWidth = 1000
  const expandedHeight = 800


  return (
    <div className='mt-18'>
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
        className='flex gap-1 m-auto w-fit items-center justify-start'
      >
        {projects.map((item, key) => {
          const isSelected = selected === key
					// if (selected >= 0 && Math.abs(selected-key) > 1) return
          return (
            <div
              key={key}
              onMouseEnter={() => setHoveredIndex(key)}
              onMouseLeave={() => setHoveredIndex(-1)}
              onClick={() => setSelectedIndex(key)}
							className={`cursor-pointer flex-shrink transition-all duration-1000 saturate-0 ${ !isSelected ? 'hover:scale-150 hover:mx-3':''}`}

              style={{
                width: isSelected ? '85%' : baseWidth,
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
                className={`${isSelected ? 'brightness-20':'brightness-100'} w-[80%] h-[80%] m-auto object-cover object-center transition-all duration-100 saturate-0 ${
                  !isSelected ? 'saturate-0' : ''
                }`}
              />
							{isSelected && (
								<>
									<div className="relative w-full h-full bottom-[85%]">
										{/* Top-left: title and selected */}
										<div className="absolute top-0 left-0 flex flex-col gap-2 m-4">
											<div className="text-6xl bg-white w-fit p-3">{selected+1}</div>
											<div className="text-6xl bg-white w-fit p-3">{item.title}</div>
										</div>

										{/* Bottom-right: description */}
										<p className="absolute bottom-0 right-0 w-[400px] m-4  p-4 rounded shadow-lg">
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut autem placeat aut
											error dignissimos. Mollitia, illo, inventore nesciunt fugit quidem
											necessitatibus neque voluptatum, itaque quisquam porro ad iusto magnam soluta!
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut autem placeat aut
											error dignissimos. Mollitia, illo, inventore nesciunt fugit quidem
											necessitatibus neque voluptatum, itaque quisquam porro ad iusto magnam soluta!
										</p>
									</div>

								</>
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
