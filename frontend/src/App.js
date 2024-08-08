import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import UserApp from "./UserApp";
import AdminApp from "./AdminApp";

function App(){
  return (
    <Router>
      <Routes>
      <Route path="/*" element={<UserApp />} />
      <Route path="/user/*" element={<UserApp />} />
      <Route path="/admin/*" element={<AdminApp />} />
        </Routes>
    </Router>
  );
}

export default App;