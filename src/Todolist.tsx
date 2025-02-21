import { useState, useEffect, useRef } from "react";
import { Button } from "./components/ui/button";
import { Checkbox } from "./components/ui/checkbox";

function Todolist() {
  const [todos, setTodos] = useState<{ id: number; label: string }[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [labelText, setLabelText] = useState(""); // State for input text
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (showPopup && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showPopup]);

  const addTodo = () => {
    if (labelText.trim() !== "") {
      setTodos([...todos, { id: todos.length, label: labelText }]);
      setShowPopup(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addTodo();
    }
  };

  return (
    // the add todo popup
    <div>
      {showPopup && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 bg-white shadow-lg rounded-lg p-4 border">
          {/* Popup Content */}
          <h2 className="text-lg font-semibold border-b pb-2">Add Todo</h2>

          <div className="mt-4">
            <input
              ref={inputRef}
              type="text"
              placeholder="What are you planing Todo?"
              className="w-full p-2 border border-gray-200 rounded-md bg-white"
              onChange={(e) => setLabelText(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>

          <div className="mt-4 flex justify-between">
            {/* Close button */}
            <button
              onClick={() => setShowPopup(false)}
              className="text-gray-700 hover:text-black bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={addTodo}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Save
            </button>
          </div>
        </div>
      )}
      <div className="flex gap-1 m-3 items-center">
        <Button
          className="bg-gray-100 hover:bg-gray-100/90 text-gray-700 p-3 text-xl hover:text-black"
          onClick={() => setShowPopup(true)}
        >
          +
        </Button>
        <span>Add Todo</span>
      </div>

      <div className="m-3 flex flex-col space-y-2">
        {todos.map((todo) => (
          <div key={todo.id} className="flex items-center space-x-2">
            <Checkbox />
            <label
              htmlFor={`checkbox-${todo.id}`}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {todo.label}
            </label>
          </div>
        ))}
      </div>

      {/* <div className="m-3 flex flex-col ">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            doing the dishes
          </label>
        </div>
      </div> */}
    </div>
  );
}

export default Todolist;
