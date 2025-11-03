'use client'
import Navbar from '@/components/Navbar/Navbar'
import './index.css'
import Carousell from '@/components/Carousell/Carousell'
import { useState } from 'react'

type Project = {
  title: string
  img_url: string
  type: string
  year: string
  category: string
  subtext: string
	extra_img?: string
}

const projects: Project[] = [
  {
    title: 'ONE VICTORIA',
    img_url: '/project1.jpg',
    type: 'Residential Complex',
    year: '2021',
    category: 'Architecture',
    subtext: 'ONE VICTORIA is a modern residential complex designed to harmonize with the surrounding cityscape while providing a comfortable living environment. The project emphasizes sustainable materials, open green spaces, and thoughtfully designed communal areas to foster a sense of community. Residents benefit from an innovative blend of functionality and aesthetics, making it a standout example of contemporary urban living.'
  },
  {
    title: 'CLAPHAM',
    img_url: '/project2.jpg',
    type: 'Mixed-Use Development',
    year: '2019',
    category: 'Urban Design',
    subtext: 'CLAPHAM is a vibrant mixed-use development that integrates retail, office, and residential spaces in a cohesive urban environment. The design prioritizes pedestrian-friendly streets, public spaces, and seamless connectivity between functions. By combining modern architecture with community-focused planning, the project creates a dynamic hub that enriches both daily life and the city’s cultural fabric.'
  },
  {
    title: 'BATTERSEA',
    img_url: '/project3.jpg',
    type: 'Commercial Tower',
    year: '2023',
    category: 'Skyscraper',
    subtext: 'BATTERSEA is a striking commercial skyscraper that redefines the skyline with its bold design and advanced engineering. The tower incorporates energy-efficient technologies, cutting-edge materials, and flexible office spaces to meet the needs of modern businesses. Its sleek form and thoughtful detailing reflect a balance between functionality, sustainability, and architectural elegance.'
  },
  {
    title: 'HOLBORN',
    img_url: '/project4.jpg',
    type: 'Cultural Center',
    year: '2020',
    category: 'Public Infrastructure',
    subtext: 'HOLBORN is a cultural center designed as an inclusive space for exhibitions, performances, and community engagement. The architecture emphasizes openness, accessibility, and versatility, ensuring that the venue can host a wide variety of events. Through its design, HOLBORN fosters creativity, social interaction, and a deep connection between the public and the arts.'
  }
]

const Page = () => {

	const [selected, setSelectedIndex] = useState<number>(-1)
  
	return (

    <div className='min-h-screen min-w-screen'>
		<Navbar selected={0}/>
    <div className='flex justify-center align-center overflow-hidden mt-15 py-8'>
        <Carousell projects={projects} selected={selected} setSelectedIndex={(val: number) => setSelectedIndex(val)}/>
    </div>
		{/* <footer className={`${selected > -1 ? 'm-5 mt-10' : 'absolute bottom-0 m-5 '} `}> */}
    <footer className=' mt-10 flex  w-11/12 m-auto my-10'>
      <div>
        <p>Part 1 Architecture Graduate</p>
        <p>Available for work</p>
      </div>
		</footer>
	</div>
  )
}

export default Page