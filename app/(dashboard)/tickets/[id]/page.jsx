import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { notFound } from "next/navigation";
import React from "react";
import { cookies } from 'next/headers'
import DeleteIcon from "./DeleteIcon";


export const dynamicParams = true;

async function getTicket(id) {
  
  const subpabase = createServerComponentClient({cookies})

  const {data} = await subpabase.from('Tickets')
  .select()
  .eq('id', id)
  .single()

  if (!data) {
    notFound();
  }
  return data;
}

export default async function TicketDetails({ params }) {
  const ticket = await getTicket(params.id);

  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.auth.getSession()

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
        <div className="ml-auto">
          {data.session.user.email === ticket.user_email && (
            <DeleteIcon id={ticket.id} />
          )}
          </div>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created By {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
}
