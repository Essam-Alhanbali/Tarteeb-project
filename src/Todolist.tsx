import { useState } from "react";
import { Button } from "./components/ui/button";
import { Checkbox } from "./components/ui/checkbox";
import Popup from "./components/pop-up";

function Todolist() {
  const [todos, setTodos] = useState<{ id: number; label: string }[]>([]);
  const [showPopup, setShowPopup] = useState(false);

  return (
    // the add todo popup
    <div>
      <Popup
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        todos={todos}
        setTodos={setTodos}
      />
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
    </div>
  );
}

export default Todolist;
