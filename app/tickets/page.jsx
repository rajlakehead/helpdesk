import React from 'react'
import TicketList from './TicketList'

export default function page() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>Currently Open Tickets</p>
        </div>
      </nav>

      <TicketList />
    </main>
  )
}
