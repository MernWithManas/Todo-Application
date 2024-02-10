import React, { useState } from "react";
import { IoListOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import { GiBroom } from "react-icons/gi";
import "./todo.css";

const Todo = () => {
  
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      return addItem();
    }
  };
  const [inputData, setInputData] = useState("");
  const [item, setItem] = useState([]);
  function addItem() {
    setInputData("");
    if (!inputData) {
      alert("Invalid Value !");
    } else {
      setItem([...item, inputData]);
    }
  }
  const deleteItem = (index) => {
    const updatedItem = item.filter((data, id) => {
      return id !== index;
    });
    setItem(updatedItem);
  };
  const clearItems = () => {
    setItem([]);
  };
  return (
    <div className="w-full h-screen bg-gradient-to-tr from-gray-700 to-gray-900">
<div className="grid h-[80vh] place-items-center">
      <div className="grid gap-3 ">
        <div className="flex items-center gap-3">
          <div className="flex justify-center text-6xl text-white">
            <IoListOutline />
          </div>
          <span className="text-4xl text-white">Make Your List..</span>
        </div>

        <div className="flex items-center justify-between w-full px-3 py-2 mt-5 text-white border rounded-sm">
          <input
            onKeyDown={handleKeyPress}
            onChange={(i) => setInputData(i.target.value)}
            value={inputData}
            className="w-full bg-transparent outline-none"
            type="text"
            placeholder="Add Items.."
          />
          <FaPlus
            onClick={addItem}
            title="Add Item"
            className="text-gray-400 hover:text-white"
          />
        </div>

        <div className="mt-5">
          {item.map((element, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-center py-2 my-2 text-gray-400 border rounded-sm "
              >
                <h3 className="w-[80%] text-center">{element}</h3>
                <MdDeleteSweep
                  onClick={() => deleteItem(index)}
                  className="ml-10 mr-5 text-2xl text-gray-400 hover:text-white "
                />
              </div>
            );
          })}
        </div>
        <div className="grid grid-flow-col mt-5 place-items-center ">
          <div className="py-2 my-2 hover:drop-shadow-xl hover:border-red-400 hover:text-white flex items-center justify-center gap-1 text-gray-300 border rounded-2xl w-[50%]">
            <button onClick={clearItems} className="">
              CLEAR ITEMS
            </button>
            <GiBroom className="text-xl" />
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Todo;
