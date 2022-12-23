import React from "react";

const Ticket = ({ tickets }) => {
  console.log(tickets);
  console.log(typeof tickets);
  return (
    <>
      <div className="bg-white p-4 mb-3 shadow-md border-t border-r border-l border-gray-100 rounded-md flex flex-col-reverse space-y-2 space-y-reverse relative hover:cursor-move">
        <div> ticket.title </div>
        <div className="text-gray-400 text-sm">
          ticket.author , ticket.created_at
        </div>
        <div className="text-gray-300 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
              clip-rule="evenodd"
            />
          </svg>
          <span className="text-gray-400 font-semibold">
            ticket.comments_count
          </span>
        </div>
        <div
          // v-if="ticket.level == 'Low Level'"
          className="absolute top-4 right-4 bg-green-100 text-green-700 font-semibold text-sm px-3 rounded-full"
        >
          ticket.level
        </div>
        <div
          // v-if="ticket.level == 'Medium Level'"
          className="absolute top-4 right-4 bg-yellow-100 text-yellow-700 font-semibold text-sm px-3 rounded-full"
        >
          ticket.level
        </div>
        <div
          // v-if="ticket.level == 'High Level'"
          className="absolute top-4 right-4 bg-red-100 text-red-700 font-semibold text-sm px-3 rounded-full"
        >
          ticket.level
        </div>
      </div>
    </>
  );
};

export default Ticket;
