import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import UserApp from "./UserApp";
import AdminApp from "./AdminApp";
import ProductManagement from './components/admin/ProductManagement';

function App(){
  return (
    <Router>
      <Routes>
      <Route path="/*" element={<UserApp />} />
      <Route path="/user/*" element={<UserApp />} />
      <Route path="/admin/*" element={<AdminApp />} />
      <Route path="/admin/products" element={<ProductManagement />} />
        </Routes>
    </Router>
  );
}

export default App;