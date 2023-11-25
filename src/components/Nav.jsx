import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <>
    <nav>
        <div className="parent">
            <div className="center">
            <Link href={'/'}>Home</Link>
            <Link href={'/xnet'} >x-net</Link>
            <Link href={'/get-data'} >GetData</Link>
            <Link href={'/video'} >video page</Link>
            </div>
            </div>

    </nav>
    </>
  )
}

export default Nav