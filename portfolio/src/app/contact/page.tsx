import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
			<Navbar selected={2} />
			<div className='flex flex-row w-11/12 m-auto'>
				<div className='flex flex-col w-[150%] gap-10 h-[80vh] justify-between'>
					<div className='text-[7.5vw] mt-[2.5%]'>
						<h1 className='leading-[6.5vw]'>ALI <br/> ELDIN <br/> ELHOSINY</h1>
						<h2 className='subtext text-[3vw] brightness-60'>architect</h2>
					</div>
					<div className='subtext text-[2vw] brightness-30 leading-8'>
						<h3>acme</h3>
						<h3>loughbrough university</h3>
					</div>
				</div>
				<div className='flex max-w-[20%] self-center h-[70vh] align-center'>
					<p className='text-right  text-[1vw] align-center self-center'>
						I am a 23-year-old Architecture graduate from South West London with experience both within
						and beyond the architectural field. My work is driven by an interest in urban design and the
						creation of sustainable, well-considered public spaces. I have contributed to projects at both
						national and international levels and enjoy collaborating across diverse contexts and disciplines.
						As an ambitious architecture student with a passion for innovative and sustainable design, I possess a high level of computer
						and technology competence, as well as proficiency in relevant software. I am skilled in problem-solving and have strong time
						management abilities. I consistently meet deadlines and demonstrate reliability. I am experienced in creating physical and digital
						models, as well as producing compelling visualizations.
					</p>
				</div>
			</div>
		</div>
  )
}

export default page