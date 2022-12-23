import React from 'react'
import { Draggable } from "react-beautiful-dnd";
import {
    ChevronDownIcon,
    PlusIcon,
    DotsVerticalIcon,
    ChatAlt2Icon,
    PaperClipIcon,
  } from "@heroicons/react/outline";

const CardItem = ({ data, index }) => {
  return (
    <Draggable index={index} draggableId={data.id.toString()}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-white p-4 mb-3 shadow-md border-t border-r border-l border-gray-100 rounded-md flex flex-col space-y-2 space-y-reverse relative hover:cursor-move"
        >
          <label
            className={`bg-gradient-to-r
              px-2 py-1 rounded text-white text-center text-sm
              ${
                data.priority === 0
                  ? "from-blue-600 to-blue-400"
                  : data.priority === 1
                  ? "from-green-600 to-green-400"
                  : "from-red-600 to-red-400"
              }
              `}
          >
            {data.priority === 0
              ? "Low Priority"
              : data.priority === 1
              ? "Medium Priority"
              : "High Priority"}
          </label>
          <div className="pt-2 text-md my-3 text-sm leading-tight">{data.title}</div>
          <div className="flex justify-between">
            <div className="flex space-x-2 items-center">
              <span className="flex text-sm space-x-1 items-center">
                <ChatAlt2Icon className="w-4 h-4 text-gray-500" />
                <span>{data.chat}</span>
              </span>
              <span className="flex text-sm space-x-1 items-center">
                <PaperClipIcon className="w-4 h-4 text-gray-500" />
                <span>{data.attachment}</span>
              </span>
            </div>

            <ul className="flex space-x-3">
              {data.assignees.map((ass, index) => {
                return (
                  <li key={index}>
                    
                  </li>
                );
              })}
              <li>
                <button className="border border-dashed flex items-center w-6 h-6 border-gray-500 justify-center rounded-full">
                  <PlusIcon className="w-4 h-4 text-gray-500" />
                </button>
              </li>
            </ul>
          </div>
        </div>
        
      )}
    </Draggable>
  )
}

export default CardItem