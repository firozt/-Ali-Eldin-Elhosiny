'use client'
import Image from 'next/image'
import './index.css'
import { useRouter } from 'next/navigation'

const selectedStyle = 'bg-white !text-black'

type Props = {
	selected?: number
}

const Navbar = ({selected=-1}: Props) => {
	const router = useRouter();

  return (
		<div className="w-11/12 flex justify-between m-auto pt-10 mb-5">
			<Image className='cursor-pointer' onClick={() => window.location.reload()} width={60} height={60} src={'/ali-logo.svg'} alt='Ali Eldin Elhosiny logo' />
			<div id='nav-container' className="flex row m-5 gap-10 font-inter ">
				<h1 onClick={selected != 0 ?  () => router.push("dashboard") : ()=>1} className={selected == 0 ? selectedStyle : ''}>Projects</h1>
				<h1 onClick={selected != 0 ?  () => router.push("blogs") : ()=>1} className={selected == 1 ? selectedStyle : ''}>Blog</h1>
				<h1 onClick={selected != 0 ?  () => router.push("contact") : ()=>1} className={selected == 2 ? selectedStyle : ''}>Contact</h1>
				<h1>{selected}</h1>
			</div>
		</div>
  )
}

export default Navbar