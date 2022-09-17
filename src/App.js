import { useState, useEffect } from "react";

import TicketCard from "./components/ticket/ticketCard";
import Pagination from "./components/shared/pagination";
import "./App.css";

import data from "./data/testData.json";

function App() {
  const pageItems = 5;
  const totalPages = Math.ceil(data.tickets.length / pageItems);

  const [tickets, setTickets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    let start = (currentPage - 1) * pageItems;
    let end = start + pageItems;
    setTickets(data.tickets.slice(start, end));
  }, [currentPage]);

  return (
    <div className="box">
      <header className="row header">
        <h2>PlanRadar Assessment header</h2>
      </header>
      <h4>There are {data.tickets.length} tickets in total</h4>
      <div className="row content">
        <div className="tickets-container">
          {tickets.map((ticket) => {
            return <TicketCard key={ticket.id} ticket={ticket} />;
          })}
        </div>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>

      <footer className="row footer">
        <h4>Mohamed Nashaat</h4>
      </footer>
    </div>
  );
}

export default App;
