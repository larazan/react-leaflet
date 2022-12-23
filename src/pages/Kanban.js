import React, { useEffect, useState } from "react";
import KanbanBoardControls from "../components/KanbanBoardControls";
import ProjectTitle from "../components/ProjectTitle";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import {
  ChevronDownIcon,
  PlusIcon,
  DotsVerticalIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";

import Ticket from "../components/Ticket";
import CardItem from "../components/CardItem";
import BoardData from "../assets/data/board-data.json"

function createGuidId() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}



const lanes = [
  {
    name: "To Do",
    tickets: [
      {
        title:
          "We don't have a brig. Meh. Calculon is gonna kill us and it's all everybody else's fault!",
        author: "Philip J. Fry",
        created_at: "16 hours ago",
        level: "Medium Level",
        comments_count: 12,
      },
      {
        title:
          "This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel.",
        author: "Turanga Leela",
        created_at: "16 hours ago",
        level: "High Level",
        comments_count: 1,
      },
      {
        title:
          "Stop it, stop it. It's fine. I will 'destroy' you! I can explain. It's very valuable. ",
        author: "Bender Bending Rodriguez",
        created_at: "16 hours ago",
        level: "Low Level",
        comments_count: 12,
      },
      {
        title:
          "Hey, whatcha watching? Hey! I'm a porno-dealing monster, what do I care what you think? It must be wonderful.",
        author: "Professor Farnsworth",
        created_at: "16 hours ago",
        level: "Medium Level",
        comments_count: 0,
      },
      {
        title:
          "A superpowers drug you can just rub onto your skin? You'd think it would be something you'd have to freebase.",
        author: "Amy Wong",
        created_at: "16 hours ago",
        level: "High Level",
        comments_count: 56,
      },
      {
        title:
          "Robot 1-X, save my friends! And Zoidberg! Perhaps, but perhaps your civilization is merely the sewer of an even greater society above you!",
        author: "Hermes Conrad",
        created_at: "16 hours ago",
        level: "Medium Level",
        comments_count: 10,
      },
      {
        title:
          "You are the last hope of the universe. Stop! Don't shoot fire stick in space canoe!",
        author: "Dr. John A. Zoidberg",
        created_at: "16 hours ago",
        level: "Low Level",
        comments_count: 3,
      },
    ],
  },
  {
    name: "In Progress",
    tickets: [
      {
        title:
          "You are the last hope of the universe. Stop! Don't shoot fire stick in space canoe!",
        author: "Dr. John A. Zoidberg",
        created_at: "16 hours ago",
        level: "Low Level",
        comments_count: 12,
      },
      {
        title:
          "A superpowers drug you can just rub onto your skin? You'd think it would be something you'd have to freebase.",
        author: "Amy Wong",
        created_at: "16 hours ago",
        level: "High Level",
        comments_count: 2,
      },
      {
        title:
          "This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel.",
        author: "Turanga Leela",
        created_at: "16 hours ago",
        level: "High Level",
        comments_count: 12,
      },
    ],
  },
  {
    name: "Done",
    tickets: [
      {
        title:
          "Stop it, stop it. It's fine. I will 'destroy' you! I can explain. It's very valuable. ",
        author: "Bender Bending Rodriguez",
        created_at: "16 hours ago",
        level: "Low Level",
        comments_count: 12,
      },
      {
        title:
          "Hey, whatcha watching? Hey! I'm a porno-dealing monster, what do I care what you think? It must be wonderful.",
        author: "Professor Farnsworth",
        created_at: "16 hours ago",
        level: "Medium Level",
        comments_count: 0,
      },
      {
        title:
          "We don't have a brig. Meh. Calculon is gonna kill us and it's all everybody else's fault!",
        author: "Philip J. Fry",
        created_at: "16 hours ago",
        level: "Medium Level",
        comments_count: 12,
      },
      {
        title:
          "This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel.",
        author: "Turanga Leela",
        created_at: "16 hours ago",
        level: "High Level",
        comments_count: 1,
      },
    ],
  },
];

const Kanban = () => {
  const [ready, setReady] = useState(false);
  const [boardData, setBoardData] = useState(BoardData);
  const [showForm, setShowForm] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState(0);

  useEffect(() => {
    // if (process.browser) {
      setReady(true);
    // }
  }, []);

  const onDragEnd = (re) => {
    if (!re.destination) return;
    let newBoardData = boardData;
    var dragItem =
      newBoardData[parseInt(re.source.droppableId)].items[re.source.index];
    newBoardData[parseInt(re.source.droppableId)].items.splice(
      re.source.index,
      1
    );
    newBoardData[parseInt(re.destination.droppableId)].items.splice(
      re.destination.index,
      0,
      dragItem
    );
    setBoardData(newBoardData);
  };

  const onTextAreaKeyPress = (e) => {
    if(e.keyCode === 13) //Enter
    {
      const val = e.target.value;
      if(val.length === 0) {
        setShowForm(false);
      }
      else {
        const boardId = e.target.attributes['data-id'].value;
        const item = {
          id: createGuidId(),
          title: val,
          priority: 0,
          chat:0,
          attachment: 0,
          assignees: []
        }
        let newBoardData = boardData;
        newBoardData[boardId].items.push(item);
        setBoardData(newBoardData);
        setShowForm(false);
        e.target.value = '';
      }
    }
  }
  return (
    <>
      <main className="p-2">
        <div className="p-4 bg-white border min-h-screen">
          <ProjectTitle />
          <KanbanBoardControls />

          {/* <div className="grid grid-cols-3 gap-3">
            {lanes.map((lane, idx) => (
              <div className="border border-gray-300 rounded-md bg-gray-50">
                <div className="bg-white border-b border-gray-300 p-3 rounded-t-md flex items-center justify-between">
                  <div className="text-lg font-semibold">{lane.name} </div>

                  <div className="flex items-center space-x-4">
                    <button className="hidden text-blue-500 hover:text-blue-700 font-semibold">
                      Clear all
                    </button>

                    <span className=" block py-1 px-3 bg-gray-200 rounded-xl text-sm font-semibold">
                      {lane.tickets.length}
                    </span>
                  </div>
                </div>

                <div className="p-2 h-full2">
                  {lane.tickets.map((ticket, id) => (
                    <div
                      className="bg-white p-4 mb-3 shadow-md border-t border-r border-l border-gray-100 rounded-md flex flex-col-reverse space-y-2 space-y-reverse relative hover:cursor-move"
                      key={id}
                    >
                      <div className="text-sm leading-tight">
                        {" "}
                        {ticket.title}{" "}
                      </div>
                      <div className="text-gray-400 text-sm leading-tight">
                        {ticket.author} , {ticket.created_at}
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
                        <span className="text-gray-400 font-semibold text-sm">
                          {ticket.comments_count}
                        </span>
                      </div>
                      <div
                        className={`absolute top-4 right-4 ${
                          ticket.level === "Low Level"
                            ? "bg-green-100 text-green-700"
                            : ticket.level === "Medium Level"
                            ? "bg-yellow-100 text-yellow-700"
                            : ticket.level === "High Level"
                            ? "bg-red-100 text-red-700"
                            : ""
                        }  font-semibold text-sm px-3 rounded-full`}
                      >
                        {ticket.level}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-b-md flex items-center w-full">
                  {showForm && selectedBoard === bIndex ? (
                    <div className="p-3">
                      <textarea
                        className="border-gray-300 rounded focus:ring-purple-400 w-full"
                        rows={3}
                        placeholder="Task info"
                        data-id={bIndex}
                        onKeyDown={(e) => onTextAreaKeyPress(e)}
                      />
                    </div>
                  ) : (
                    <button 
                    className="flex justify-center items-center my-3 space-x-2 text-lg w-full"
                    onClick={() => {
                      setSelectedBoard(bIndex);
                      setShowForm(true);
                    }}
                    >
                    <span className="text-[15px]">Add task</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="w-5 h-5 text-gray-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </button>
                  )}
                  
                </div>
              </div>
            ))}
          </div> */}

          {ready && (
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="grid grid-cols-3 gap-3 my-5">
              {boardData.map((board, bIndex) => {
                return (
                  <div key={board.name}>
                    <Droppable droppableId={bIndex.toString()}>
                      {(provided, snapshot) => (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                        >
                          <div
                            className={`border border-gray-300 rounded-md bg-gray-50 shadow-md
                            flex flex-col relative overflow-hidden
                            ${snapshot.isDraggingOver && "bg-green-100"}`}
                          >
                            {/* <span
                              className="w-full h-1 bg-gradient-to-r from-pink-700 to-red-200
                          absolute inset-x-0 top-0"
                            ></span> */}
                            <div className=" bg-white border-b border-gray-300 p-3 rounded-t-md flex items-center justify-between">
                              <span className="text-lg font-semibold">
                                {board.name}
                              </span>
                              <div className="flex items-center space-x-2">
                              <span className=" block py-1 px-3 bg-gray-200 rounded-xl text-sm font-semibold">
                      {board.items.length}
                    </span>
                    <DotsVerticalIcon className="w-5 h-5 text-gray-500 cursor-pointer" />
                              </div>
                              
                            </div>

                            <div className="overflow-y-auto overflow-x-hidden h-auto p-2"
                            style={{maxHeight:'calc(100vh - 290px)'}}>
                              {board.items.length > 0 &&
                                board.items.map((item, iIndex) => {
                                  return (
                                    <CardItem
                                      key={item.id}
                                      data={item}
                                      index={iIndex}
                                      className="m-3"
                                    />
                                  );
                                })}
                              {provided.placeholder}
                            </div>
                            
                            {
                              showForm && selectedBoard === bIndex ? (
                                <div className="p-3">
                                  <textarea className="p-2 bg-white border border-gray-300 rounded focus:ring-purple-400 w-full" 
                                  rows={3} placeholder="Task info" 
                                  data-id={bIndex}
                                  onKeyDown={(e) => onTextAreaKeyPress(e)}
                                  />
                                  <div className="w-full">
                                    <button className="w-full p-1 bg-red-500 hover:bg-red-600 text-white rounded">Cancel</button>
                                  </div>
                                </div>
                              ): (
                                <button
                                  className="flex justify-center items-center mb-2 space-x-2 font-semibold"
                                  onClick={() => {setSelectedBoard(bIndex); setShowForm(true);}}
                                >
                                  <span>Add task</span>
                                  <PlusCircleIcon className="w-5 h-5 text-gray-500" />
                                </button>
                              )
                            }
                          </div>
                        </div>
                      )}
                    </Droppable>
                  </div>
                );
              })}
            </div>
          </DragDropContext>
        )}
        </div>
      </main>
    </>
  );
};

export default Kanban;
