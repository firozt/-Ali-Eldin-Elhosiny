import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <Navbar selected={1} />
        blogs
    </div>
  )
}

export default page