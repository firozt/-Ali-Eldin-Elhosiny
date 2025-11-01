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
		img_url: '/project-placeholder2.png',
		type: 'Residential Complex',
		year: '2021',
		category: 'Architecture'
	},
	{
		title: 'CLAPHAM',
		img_url: '/project-placeholder2.png',
		type: 'Mixed-Use Development',
		year: '2019',
		category: 'Urban Design'
	},
	{
		title: 'BATTERSEA',
		img_url: '/project-placeholder2.png',
		type: 'Commercial Tower',
		year: '2023',
		category: 'Skyscraper'
	},
	{
		title: 'HOLBORN',
		img_url: '/project-placeholder2.png',
		type: 'Cultural Center',
		year: '2020',
		category: 'Public Infrastructure'
	},
	{
		title: 'SHOREDITCH LOFTS',
		img_url: '/project-placeholder2.png',
		type: 'Loft Conversion',
		year: '2022',
		category: 'Interior Design'
	},
	{
		title: 'CAMDEN MARKET HUB',
		img_url: '/project-placeholder2.png',
		type: 'Retail & Leisure Space',
		year: '2018',
		category: 'Commercial'
	},
	{
		title: 'KING’S CROSS PAVILION',
		img_url: '/project-placeholder2.png',
		type: 'Community Pavilion',
		year: '2024',
		category: 'Sustainable Design'
	},
	{
		title: 'RIVERSIDE GALLERY',
		img_url: '/project-placeholder2.png',
		type: 'Art Exhibition Space',
		year: '2022',
		category: 'Cultural'
	}
]


type Props = {}
const page = ({}: Props) => {
  return (
    <div className='min-h-screen min-w-screen'>
			<Navbar />
			<Carousell projects={projects} />
		</div>
  )
}

export default page