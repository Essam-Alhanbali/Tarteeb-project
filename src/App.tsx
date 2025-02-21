import { SidebarProvider } from "./components/ui/sidebar";
import { AppSidebar } from "./components/ui/app-sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Todolist from "./Todolist";

// import "./App.css";

function App() {
  return (
    <>
      <Router>
        <SidebarProvider>
          <AppSidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="todo-list" element={<Todolist />} />
          </Routes>
        </SidebarProvider>
      </Router>
    </>
  );
}

export default App;
