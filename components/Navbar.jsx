import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="d-flex justify-content-between  mt-5 p-3 mb-2 bg-dark text-white border">
        <Link href={'/'} className="font-weight-bold text-secondary text-decoration-none"><h4 className='align-self-center'>PostPJ</h4></Link>
        <Link href={'/addTopic'} className="btn btn-light">Add Topic</Link>
    </nav>
  )
}
