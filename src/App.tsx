import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "./components/ui/app-sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./Todolist";

// import "./App.css";

function App() {
  return (
    <>
      <Router>
        <SidebarProvider>
          <AppSidebar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="todo-list" element={<About />} />
            </Routes>
          </main>
        </SidebarProvider>
      </Router>
    </>
  );
}

export default App;
