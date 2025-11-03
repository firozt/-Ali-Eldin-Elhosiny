'use client'
import Image from 'next/image'
import React, { useState, useRef, useEffect } from 'react'
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
  const expandedWidth = 850
  const expandedHeight = 450

  const containerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const prevSelected = useRef<number>(-1);

useEffect(() => {
  if (selected === -1 || !containerRef.current || !itemRefs.current[selected]) return;

  const delay = prevSelected.current === -1 ? 700 : 300; // wait longer if nothing was selected before
  const timer = setTimeout(() => {
    const container = containerRef.current!;
    const selectedItem = itemRefs.current[selected]!;

    const itemLeft = selectedItem.offsetLeft;
    const itemWidth = selectedItem.offsetWidth;
    const containerWidth = container.offsetWidth;

    const scrollLeft = itemLeft - containerWidth / 2 + itemWidth / 2;

    container.scrollTo({
      left: scrollLeft,
      behavior: 'smooth',
    });
  }, delay);

  prevSelected.current = selected; // update previous value

  return () => clearTimeout(timer);
}, [selected]);

  return (
    <div className='w-full h-fit'>
      {/* Hover info */}
      <div style={selected > -1 ? { display: 'none' } : {}} className='min-h-[150px] w-screen'>
        {hoveredIndex > -1 && (
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
        )}
      </div>

      {/* Carousel */}
      <div
        ref={containerRef}
        className='flex gap-3 w-screen overflow-x-scroll 
        no-scrollbar items-center justify-center align-center
        scroll-smooth select-none !min-h-[550px]'
        onWheel={(e) => e.preventDefault()}
        onTouchMove={(e) => e.preventDefault()}
      >
        {projects.map((item, key) => {
          const isSelected = selected === key
          const isFirst = key === 0
          const isLast = key === projects.length - 1

          return (
            <div
              key={key}
              ref={(el) => (itemRefs.current[key] = el)}
              onMouseEnter={() => setHoveredIndex(key)}
              onMouseLeave={() => setHoveredIndex(-1)}
              onClick={() => {
                key === selected ? setSelectedIndex(-1) : setSelectedIndex(key)
              }}
              className={`
                saturate-0 cursor-pointer flex-shrink-0 transition-all duration-500
                ${!isSelected ? 'hover:saturate-100' : 'saturate-80'}
                ${selected == -1 ? 'hover:scale-120 hover:mx-3 !hover:saturate-100' : ''}
                ${(selected != -1 && isFirst) ? 'ml-[200px]' : ''}
                ${(selected != -1 && isLast) ? 'mr-[200px]' : ''}
              `}
              style={{
                width: isSelected ? expandedWidth : selected > -1 ? 500 : baseWidth,
                height: selected != -1 ? expandedHeight : baseHeight,
                zIndex: isSelected ? 10 : 1,
              }}
            >
              <Image
                src={item.img_url}
                alt={item.title}
                width={isSelected ? expandedWidth : baseWidth}
                height={isSelected ? expandedHeight : baseHeight}
                sizes="(max-width: 768px) 80vw, 50vw"
                className={`${isSelected
                  ? 'filter brightness-50 saturate-100 mx-5 w-[90%] h-[100%] relative left-[25px]'
                  : 'filter brightness-30 w-[100%] h-[100%]'}
                  m-auto object-cover object-center transition-all duration-300`
                }
              />
              {isSelected && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: .5, delay: 0.8 }}
                  className='h-fit'
                >
                  <div className="relative w-full h-full bottom-[85%]">
                    <div className="absolute bottom-80 left-0 flex flex-col gap-2 m-4">
                      <div className="text-4xl bg-white w-fit p-3 px-7">{selected + 1}</div>
                      <div className="text-4xl bg-white w-fit p-3">{item.title}</div>
                    </div>
                    <p className="absolute bottom-[-60] right-0 w-[400px] m-4 p-4">
                      {item.subtext}
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Carousell
