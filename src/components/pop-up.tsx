import { useState, useEffect, useRef } from "react";

type Props = {
  showPopup: boolean;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  todos: { id: number; label: string }[];
  setTodos: React.Dispatch<
    React.SetStateAction<{ id: number; label: string }[]>
  >;
};

// main function
const Popup: React.FC<Props> = ({
  showPopup,
  setShowPopup,
  todos,
  setTodos,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [labelText, setLabelText] = useState(""); // State for input text

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
    <>
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
    </>
  );
};

export default Popup;
