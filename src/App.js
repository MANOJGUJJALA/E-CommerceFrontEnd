
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AdminPannel from "./Admin/AdminPannel"
import CustomerRoutes from "./Routers/CustomerRoutes"

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRoutes />} />
        <Route path="/admin/*" element={<AdminPannel />} />
        
      </Routes>
      
    </div>
  );
}

export default App;
