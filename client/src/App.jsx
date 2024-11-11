import { Route, Routes, useLocation } from "react-router-dom";
import TasksPage from "./pages/TasksPage";
import TasksForm from "./pages/TasksForm";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/NavBar";
import AddButtom from "./components/AddButtom";
import "./App.css";


function App() {
  const location = useLocation();

  const showCommonComponents = location.pathname === "/" || location.pathname === '/new';

  return (
   <>
     {showCommonComponents && <Navbar />}
     <Routes>
      <Route path="/" element={<TasksPage />} />
      <Route path="/new" element={<TasksForm />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    {showCommonComponents && <AddButtom />}
   </>
  );
}

export default App;