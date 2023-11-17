import React, { Suspense } from 'react'
import TicketList from './TicketList'
import Loading from '../loading'
import Link from 'next/link'

export default function page() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>Currently Open Tickets</p>
        </div>
        <Link href="/tickets/create" className='ml-auto'>
        <button className="btn-primary">New Ticket</button>
        </Link>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
      
    </main>
  )
}
