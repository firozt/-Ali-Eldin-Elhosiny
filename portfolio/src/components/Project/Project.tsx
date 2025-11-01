import Navbar from '@/components/Navbar/Navbar'
import Image from 'next/image'
import React from 'react'

type Project = {
  title: string
  img_url: string
  type: string
  year: string
  category: string
}


type Props = {
	project: Project
}

const Project = ({project}: Props) => {
  return (
    <div>
			<Image
				src={project.img_url}
				alt={project.img_url}
				width={1000}
				height={800}
				className='filter saturate-0 m-auto brightness-20 mt-10 mb-10'
			/>
		</div>
  )
}

export default Project