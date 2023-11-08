import Link from 'next/link'
import React from 'react'

export default function notFound() {
  return (
    <main className="text-center">
        <h2 className="text-3xl">There was a Problem.</h2>
        <p>We could not find the page you are looking for</p>
        <p>Go back to all <Link href="/tickets">Tickets</Link></p>
    </main>
  )
}
