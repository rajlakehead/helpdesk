import React, { Suspense } from 'react'
import TicketList from './TicketList'
import Loading from '../loading'

export default function page() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>Currently Open Tickets</p>
        </div>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
      
    </main>
  )
}
