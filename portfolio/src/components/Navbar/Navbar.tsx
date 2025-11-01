import Image from 'next/image'
import './index.css'

const Navbar = () => {
  return (
		<div className="w-10/12 flex justify-between m-auto pt-10 mb-5">
			<Image width={80} height={80} src={'/ali-logo.svg'} alt='Ali Eldin Elhosiny logo' />
			<div id='nav-container' className="flex row m-5 gap-10">
				<h1>Profile</h1>
				<h1>Blog</h1>
				<h1>Projects</h1>
				<h1>Contact</h1>
			</div>
		</div>
  )
}

export default Navbar