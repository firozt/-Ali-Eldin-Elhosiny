import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
			<Navbar selected={2} />
			<div className='flex flex-row w-11/12 m-auto'>
				<div className='flex flex-col w-[150%] gap-10 h-[80vh] justify-between'>
					<div className='text-[7rem]'>
						<h1 className='leading-23'>Ali <br/> Eldin <br/> Elhosiny</h1>
						<h2 className='subtext text-[2rem] brightness-60'>architect</h2>
					</div>
					<div className='subtext text-[2rem] brightness-30 leading-8'>
						<h3>acme</h3>
						<h3>loughbrough university</h3>
					</div>
				</div>
				<div className='w-[50%] self-center h-[60vh] max-w-[200px]'>
					<p className='text-right'>
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