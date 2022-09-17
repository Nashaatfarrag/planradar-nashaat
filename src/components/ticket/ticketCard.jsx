import React from "react";

import "./styles/ticketCard.css";

function TicketCard({ ticket }) {
  return (
    <div className="ticket-card">
      <div
        className={
          "ticket-status " + (ticket.status === "open" ? " open" : "closed")
        }
      >
        {ticket.status}
      </div>
      <h3 className="ticket-title">#{ticket.id}</h3>
      <div className="ticket-details">
        <h4 className="ticket-subject">{ticket.subject}</h4>
        <p className="ticket-description">{ticket.description}</p>
      </div>
    </div>
  );
}

export default TicketCard;
