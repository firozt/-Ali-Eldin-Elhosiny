import Navbar from '@/components/Navbar/Navbar'
import './index.css'
import Carousell from '@/components/Carousell/Carousell'

type Project = {
	title: string
	img_url: string
	type: string
	year: string
	category: string
}

const projects: Project[] = [
	{
		title: 'ONE VICTORIA',
		img_url: '/project1.jpg',
		type: 'Residential Complex',
		year: '2021',
		category: 'Architecture'
	},
	{
		title: 'CLAPHAM',
		img_url: '/project2.jpg',
		type: 'Mixed-Use Development',
		year: '2019',
		category: 'Urban Design'
	},
	{
		title: 'BATTERSEA',
		img_url: '/project3.jpg',
		type: 'Commercial Tower',
		year: '2023',
		category: 'Skyscraper'
	},
	{
		title: 'HOLBORN',
		img_url: '/project4.jpg',
		type: 'Cultural Center',
		year: '2020',
		category: 'Public Infrastructure'
	},
]


type Props = {}
const page = ({}: Props) => {
  return (
    <div className='min-h-screen min-w-screen'>
		<Navbar />
		<Carousell projects={projects} />
		<footer className='absolute bottom-5 ml-5'>
			<p>Part 1 Architecture Graduate</p>
			<p>Available for work</p>
		</footer>
	</div>
  )
}

export default page